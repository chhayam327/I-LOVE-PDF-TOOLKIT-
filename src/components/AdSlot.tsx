export function AdSlot({
  width,
  height,
  label = "Advertisement",
}: {
  width: number;
  height: number;
  label?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-muted/40 text-xs font-medium text-muted-foreground"
        style={{ width: "100%", maxWidth: width, aspectRatio: `${width} / ${height}` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,oklch(1_0_0/0.5)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]" />
        <span className="relative">{width} × {height} Ad</span>
      </div>
      <style>{`@keyframes shimmer { 0% { background-position: 200% 0;} 100% { background-position: -200% 0;} }`}</style>
    </div>
  );
}
