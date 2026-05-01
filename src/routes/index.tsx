import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { ToolCard } from "@/components/ToolCard";
import { TOOLS, CATEGORIES } from "@/data/tools";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "I Love PDF TOOLKIT — Professional PDF Tools, Simplified" },
      { name: "description", content: "Every PDF tool you need in one place. Merge, split, compress, convert, sign, OCR and more — fast, free, and beautifully designed." },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? TOOLS : TOOLS.filter((t) => t.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen pb-24">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-90" />
        <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-72 w-[120%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-12 text-center sm:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-5xl"
          >
            Professional PDF Tools, <span className="text-gradient-primary">Simplified.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Every tool you need to work with PDFs in one place — merge, split, compress, convert,
            sign and more. 100% free and easy to use.
          </motion.p>

          {/* Category chips */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? "bg-secondary text-secondary-foreground shadow-float"
                      : "glass text-secondary hover:scale-105"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="mx-auto max-w-2xl px-4">
        <div className="flex flex-col gap-3">
          {filtered.map((tool, i) => (
            <ToolCard key={tool.slug} tool={tool} index={i} />
          ))}
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}
