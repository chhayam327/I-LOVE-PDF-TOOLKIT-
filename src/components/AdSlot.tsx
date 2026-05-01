export function AdSlot({
  width,
  height,
  label = "Advertisement",
  className = "",
}: {
  width: number;
  height: number;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
        {label}
      </span>
      <div
        className="ad-3d relative flex items-center justify-center overflow-hidden rounded-2xl"
        style={{ width: "100%", maxWidth: width, aspectRatio: `${width} / ${height}` }}
      >
        {/* Inner glass layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/30 to-white/10 dark:from-white/10 dark:via-white/[0.04] dark:to-transparent" />
        {/* Conic shimmer border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl [background:conic-gradient(from_0deg,transparent_0deg,rgba(229,50,46,0.35)_60deg,transparent_120deg,transparent_240deg,rgba(99,102,241,0.3)_300deg,transparent_360deg)] opacity-40 animate-spin-slow" style={{ mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" } as React.CSSProperties} />
        {/* Diagonal sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.5)_50%,transparent_70%)] bg-[length:220%_220%] animate-[shimmer_3.2s_linear_infinite]" />
        {/* Label */}
        <div className="relative z-10 flex flex-col items-center gap-0.5 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary/80">
            Sponsored
          </span>
          <span className="text-[10px] text-muted-foreground">
            {width} × {height}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes shimmer { 0% { background-position: 220% 0;} 100% { background-position: -220% 0;} }
        .ad-3d {
          background:
            linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.15)),
            linear-gradient(135deg, oklch(0.96 0.012 25), oklch(0.94 0.02 260));
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.7) inset,
            0 -1px 0 rgba(0,0,0,0.04) inset,
            0 12px 32px -12px rgba(229, 50, 46, 0.25),
            0 24px 48px -20px rgba(30, 41, 59, 0.25);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transform: perspective(900px) rotateX(2deg);
          transition: transform .5s ease;
        }
        .ad-3d:hover { transform: perspective(900px) rotateX(0deg) translateY(-2px); }
        .dark .ad-3d {
          background:
            linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)),
            linear-gradient(135deg, rgba(120,0,0,0.25), rgba(30,30,60,0.35));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.08) inset,
            0 12px 32px -12px rgba(180, 20, 20, 0.45),
            0 24px 48px -20px rgba(0,0,0,0.6);
        }
      `}</style>
    </div>
  );
}
