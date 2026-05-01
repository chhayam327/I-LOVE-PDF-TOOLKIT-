import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ArrowLeft, Crown, Download, FileText, UploadCloud, X, Zap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AdSlot } from "@/components/AdSlot";
import { getTool } from "@/data/tools";
import { usePremium } from "@/lib/premium";

export const Route = createFileRoute("/tool/$slug")({
  component: ToolPage,
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tool.title} — I Love PDF TOOLKIT` },
          { name: "description", content: loaderData.tool.desc },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-4xl font-extrabold text-secondary">Tool not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-2xl font-bold text-secondary">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
          Try again
        </button>
      </div>
    </div>
  ),
});

type Stage = "upload" | "converting" | "done";

function ToolPage() {
  const { tool } = Route.useLoaderData();
  const Icon = tool.icon;
  const [stage, setStage] = useState<Stage>("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onPick = (list: FileList | null) => {
    if (!list) return;
    setFiles(Array.from(list));
  };

  const startConvert = () => {
    if (!files.length) {
      inputRef.current?.click();
      return;
    }
    setStage("converting");
    setProgress(0);
    setSecondsLeft(10);
  };

  // Drive 10s countdown + progress while "converting"
  useEffect(() => {
    if (stage !== "converting") return;
    const start = Date.now();
    const total = 10000;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / total) * 100));
      setProgress(pct);
      setSecondsLeft(Math.max(0, Math.ceil((total - elapsed) / 1000)));
      if (elapsed >= total) {
        clearInterval(id);
        setStage("done");
      }
    }, 80);
    return () => clearInterval(id);
  }, [stage]);

  // Confetti when done
  useEffect(() => {
    if (stage !== "done") return;
    const fire = (opts: confetti.Options) =>
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 }, ...opts });
    fire({ angle: 60, origin: { x: 0, y: 0.6 } });
    fire({ angle: 120, origin: { x: 1, y: 0.6 } });
    setTimeout(() => fire({ particleCount: 120, spread: 100 }), 250);
  }, [stage]);

  const reset = () => {
    setStage("upload");
    setFiles([]);
    setProgress(0);
  };

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 pt-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-secondary">
          <ArrowLeft className="h-4 w-4" /> All tools
        </Link>

        {/* Tool header */}
        <div className="mt-4 flex items-center gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tool.hue} shadow-float`}>
            <Icon className="h-7 w-7" strokeWidth={2.2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">{tool.title}</h1>
            <p className="text-sm text-muted-foreground">{tool.desc}</p>
          </div>
        </div>

        {/* Top ad: 728x90 */}
        <div className="mt-6 flex justify-center">
          <AdSlot width={728} height={90} />
        </div>

        {/* Workspace card */}
        <div className="glass shadow-float mt-6 overflow-hidden rounded-3xl p-5 sm:p-8">
          <AnimatePresence mode="wait">
            {stage === "upload" && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <label
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); onPick(e.dataTransfer.files); }}
                  className={`relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
                    dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/60"
                  }`}
                >
                  <span className="pulse-ring mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                    <UploadCloud className="h-8 w-8" />
                  </span>
                  <h2 className="text-lg font-bold text-secondary">Drag & drop files here</h2>
                  <p className="mt-1 text-sm text-muted-foreground">or tap to browse from your device</p>
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={(e) => onPick(e.target.files)}
                  />
                </label>

                {files.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {files.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-secondary">{f.name}</p>
                          <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                          className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-secondary"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={startConvert}
                  className="shine glow-pulse mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  {files.length ? `Convert ${files.length} file${files.length > 1 ? "s" : ""}` : "Select files"}
                </button>
              </motion.div>
            )}

            {stage === "converting" && (
              <motion.div
                key="converting"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <CircularProgress value={progress} />
                <h3 className="mt-5 text-xl font-extrabold text-secondary">Processing your file…</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Estimated time: <span className="font-semibold text-secondary">{secondsLeft}s</span>
                </p>
                <div className="mt-8">
                  <AdSlot width={300} height={250} label="Sponsored" />
                </div>
              </motion.div>
            )}

            {stage === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="animate-float flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                  <Download className="h-10 w-10" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-secondary">Your file is ready! 🎉</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your PDF has been processed successfully.
                </p>
                <button
                  type="button"
                  className="shine glow-pulse mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-secondary hover:underline"
                >
                  Process another file
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </PageShell>
  );
}

function CircularProgress({ value }: { value: number }) {
  const size = 140;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(0.92 0.012 255)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke="url(#g)" strokeWidth={stroke} strokeLinecap="round" fill="none"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 80ms linear" }}
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.605 0.218 27)" />
            <stop offset="100%" stopColor="oklch(0.7 0.22 25)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-extrabold text-gradient-primary">{value}%</span>
      </div>
    </div>
  );
}
