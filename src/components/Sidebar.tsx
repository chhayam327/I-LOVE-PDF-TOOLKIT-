import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Clock, Settings, Crown, Heart, Moon, Sun, X, LogIn, UserPlus, User } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type NavItem = { to: string; label: string; icon: typeof Home; highlight?: boolean };
const items: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/recent", label: "Recent", icon: Clock },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/premium", label: "Premium", icon: Crown, highlight: true },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 max-w-[82vw] flex-col glass border-r border-glass-border shadow-float transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-glass-border">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-secondary">I</span>
            <Heart className="h-5 w-5 fill-primary text-primary drop-shadow-[0_0_10px_oklch(0.605_0.218_27/0.6)]" />
            <span className="text-lg font-extrabold tracking-tight text-secondary">
              PDF <span className="text-gradient-primary">TOOLKIT</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-secondary"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {items.map(({ to, label, icon: Icon, highlight }) => {
              const active = pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to as "/"}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                      active
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : highlight
                        ? "text-secondary hover:bg-primary/10"
                        : "text-secondary hover:bg-muted"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${highlight && !active ? "text-primary" : ""}`} />
                    {label}
                    {highlight && !active && (
                      <span className="ml-auto rounded-full bg-gradient-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Pro
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Account section */}
          <div className="mt-6">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Account
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  to={"/login" as "/"}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-all hover:bg-muted"
                >
                  <LogIn className="h-5 w-5 text-primary" /> Log in
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup" as "/"}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-all hover:bg-muted"
                >
                  <UserPlus className="h-5 w-5 text-primary" /> Sign up
                </Link>
              </li>
              <li>
                <Link
                  to={"/signin" as "/"}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary transition-all hover:bg-muted"
                >
                  <User className="h-5 w-5 text-primary" /> Sign in
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Theme toggle */}
        <div className="border-t border-glass-border p-4">
          <button
            onClick={toggle}
            className="shine flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-secondary shadow-sm transition-transform hover:scale-[1.01]"
          >
            <span className="flex items-center gap-2">
              {theme === "dark" ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-primary" />}
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </span>
            <span
              className={`relative h-6 w-11 rounded-full transition-colors ${
                theme === "dark" ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </span>
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Made with <Heart className="inline h-3 w-3 fill-primary text-primary" /> for everyone
          </p>
        </div>
      </aside>
    </>
  );
}
