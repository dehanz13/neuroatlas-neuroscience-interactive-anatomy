"use client";

export default function SoundToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`sound fixed bottom-5 left-5 z-[41] hidden cursor-pointer select-none md:block ${on ? "on" : "off"}`}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
    >
      <div className="relative mb-[2px] flex h-5 w-12 items-center justify-center rounded-full" style={{ background: "var(--brand-glow)" }}>
        {[0, 0.5, 1, 1.5].map((d, i) => (
          <span key={`l${i}`} className="dot l" style={{ animationDelay: `${d}s`, transform: on ? undefined : `translateX(${-4 * (i + 1)}px)` }} />
        ))}
        <span className="dot center" />
        {[0, 0.5, 1, 1.5].map((d, i) => (
          <span key={`r${i}`} className="dot r" style={{ animationDelay: `${d}s`, transform: on ? undefined : `translateX(${4 * (i + 1)}px)` }} />
        ))}
      </div>
      <div className="flex h-5 w-[72px] items-center justify-center rounded-full" style={{ background: "var(--brand-glow)" }}>
        <p className="t-mono-12 text-white">{on ? "Sound on" : "Sound off"}</p>
      </div>
    </button>
  );
}
