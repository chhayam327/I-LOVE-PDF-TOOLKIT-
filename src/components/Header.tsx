import { Link } from "@tanstack/react-router";
import { Heart, LogIn, Menu } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-40 glass border-b border-glass-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-1.5 text-secondary hover:bg-muted"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="group flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-secondary">I</span>
            <Heart className="h-6 w-6 fill-primary text-primary drop-shadow-[0_0_10px_oklch(0.605_0.218_27/0.6)] transition-transform group-hover:scale-110" />
            <span className="text-lg font-extrabold tracking-tight text-secondary">
              PDF <span className="text-gradient-primary">TOOLKIT</span>
            </span>
          </Link>
        </div>
        <button
          type="button"
          className="gradient-border inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-secondary shadow-float transition-transform hover:scale-105"
        >
          <LogIn className="h-4 w-4" />
          <span className="hidden sm:inline">Login</span>
        </button>
      </div>
    </header>
  );
}
