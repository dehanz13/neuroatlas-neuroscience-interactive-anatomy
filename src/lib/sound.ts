/**
 * A tiny ambient soundscape built with the Web Audio API so the project needs
 * no audio assets. Two detuned sine pads plus a slow, filtered noise "breath"
 * give the same calm bed the reference site plays behind its experience.
 */
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let running = false;

function build() {
  if (ctx) return;
  ctx = new AudioContext();
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const pad = (freq: number, detune: number, gain: number) => {
    const osc = ctx!.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = detune;
    const g = ctx!.createGain();
    g.gain.value = gain;
    const lfo = ctx!.createOscillator();
    lfo.frequency.value = 0.07 + Math.random() * 0.05;
    const lfoGain = ctx!.createGain();
    lfoGain.gain.value = gain * 0.6;
    lfo.connect(lfoGain).connect(g.gain);
    osc.connect(g).connect(master!);
    osc.start();
    lfo.start();
  };

  pad(110, 0, 0.06);
  pad(164.81, 6, 0.045);
  pad(220, -5, 0.035);
  pad(329.63, 3, 0.02);

  // Breath: filtered noise that swells slowly.
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 420;
  const ng = ctx.createGain();
  ng.gain.value = 0.015;
  const nlfo = ctx.createOscillator();
  nlfo.frequency.value = 0.12;
  const nlfoGain = ctx.createGain();
  nlfoGain.gain.value = 0.012;
  nlfo.connect(nlfoGain).connect(ng.gain);
  noise.connect(filter).connect(ng).connect(master);
  noise.start();
  nlfo.start();
}

export function setSound(on: boolean) {
  if (typeof window === "undefined") return;
  if (on) {
    build();
    if (ctx!.state === "suspended") ctx!.resume();
    master!.gain.cancelScheduledValues(ctx!.currentTime);
    master!.gain.linearRampToValueAtTime(1, ctx!.currentTime + 1.5);
    running = true;
  } else if (ctx && master) {
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
    running = false;
  }
}

/** A short "blip" for hotspot clicks, only when sound is on. */
export function blip(freq = 880) {
  if (!running || !ctx || !master) return;
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
  osc.connect(g).connect(master);
  osc.start();
  osc.stop(ctx.currentTime + 0.4);
}
