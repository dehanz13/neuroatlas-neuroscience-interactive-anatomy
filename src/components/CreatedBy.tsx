export default function CreatedBy() {
  return (
    <a
      href="https://github.com"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[17px] right-[34px] z-[60] hidden items-center gap-2 opacity-90 transition-opacity hover:opacity-100 lg:flex"
    >
      <p className="t-mono-13 text-white">built with</p>
      <span className="text-[15px] font-bold tracking-tight text-white">GSAP</span>
      <span className="text-[13px] font-normal italic text-white/80">+ React</span>
    </a>
  );
}
