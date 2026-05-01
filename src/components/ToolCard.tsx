import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Tool } from "@/data/tools";

export function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const Icon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4) }}
    >
      <Link
        to="/tool/$slug"
        params={{ slug: tool.slug }}
        className="shine glass shadow-float group flex items-start gap-4 rounded-2xl p-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tool.hue} shadow-sm transition-transform group-hover:rotate-3`}
        >
          <Icon className="h-6 w-6" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-secondary">{tool.title}</h3>
          <p className="mt-0.5 text-sm leading-snug text-muted-foreground line-clamp-2">{tool.desc}</p>
        </div>
      </Link>
    </motion.div>
  );
}
