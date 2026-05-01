import { createFileRoute } from "@tanstack/react-router";
import { Crown, Infinity as InfinityIcon, Zap, ShieldOff, Sparkles, Check, Cloud, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { isPremium, setPremium } from "@/lib/premium";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/premium")({
  component: Premium,
  head: () => ({
    meta: [
      { title: "Premium — I Love PDF TOOLKIT" },
      { name: "description", content: "Unlock unlimited PDF tools, 5× faster processing, and an ad-free experience." },
    ],
  }),
});

const features = [
  { icon: InfinityIcon, title: "Unlimited usage", desc: "No daily limits, no file count restrictions." },
  { icon: Zap, title: "5× faster processing", desc: "Priority servers process your files in seconds." },
  { icon: ShieldOff, title: "Skip all ads", desc: "Zero banners, zero sponsored loaders. Pure focus." },
  { icon: Cloud, title: "Larger file size", desc: "Process files up to 5 GB per upload." },
  { icon: Sparkles, title: "AI premium tools", desc: "Unlock Summarizer, Translate and OCR Pro." },
  { icon: HeadphonesIcon, title: "Priority support", desc: "Dedicated 24/7 chat with our team." },
];

const plans = [
  { id: "monthly", name: "Monthly", price: "$5.99", per: "/month", tag: "" },
  { id: "yearly", name: "Yearly", price: "$39.99", per: "/year", tag: "Save 44%" },
  { id: "lifetime", name: "Lifetime", price: "$89.99", per: "one-time", tag: "Best value" },
] as const;

function Premium() {
  const [active, setActive] = useState<(typeof plans)[number]["id"]>("yearly");
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => setUnlocked(isPremium()), []);

  const upgrade = () => {
    setPremium(true);
    setUnlocked(true);
  };
  const cancel = () => {
    setPremium(false);
    setUnlocked(false);
  };

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 pt-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass shadow-float relative overflow-hidden rounded-3xl p-6 text-center sm:p-10"
        >
          <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow glow-pulse">
              <Crown className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Go <span className="text-gradient-primary">Premium</span>
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Unlock unlimited use, 5× faster processing, and a 100% ad-free experience.
            </p>
            {unlocked && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700">
                <Check className="h-4 w-4" /> Premium active
              </div>
            )}
          </div>
        </motion.div>

        {/* Features */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass shadow-float flex items-start gap-3 rounded-2xl p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-secondary">{f.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Plans */}
        <div className="mt-8">
          <h2 className="mb-3 text-center text-lg font-extrabold text-secondary">Choose your plan</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {plans.map((p) => {
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`shine relative rounded-2xl p-5 text-left transition-all ${
                    isActive
                      ? "bg-gradient-primary text-primary-foreground shadow-glow scale-[1.02]"
                      : "glass shadow-float text-secondary hover:scale-[1.01]"
                  }`}
                >
                  {p.tag && (
                    <span
                      className={`absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? "bg-white text-primary" : "bg-gradient-primary text-primary-foreground"
                      }`}
                    >
                      {p.tag}
                    </span>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-wider ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {p.name}
                  </p>
                  <p className="mt-2 text-2xl font-extrabold">{p.price}</p>
                  <p className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.per}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-3">
          {!unlocked ? (
            <button
              onClick={upgrade}
              className="shine glow-pulse inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-extrabold text-primary-foreground"
            >
              <Crown className="h-5 w-5" />
              Upgrade Now — {plans.find((p) => p.id === active)?.price}
            </button>
          ) : (
            <button
              onClick={cancel}
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-base font-bold text-secondary"
            >
              Cancel Premium (demo)
            </button>
          )}
          <p className="text-xs text-muted-foreground">Cancel anytime · Secure payments · 7-day money-back</p>
        </div>
      </main>
    </PageShell>
  );
}
