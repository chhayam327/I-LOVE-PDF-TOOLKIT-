import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon, Moon, Sun } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useTheme } from "@/components/ThemeProvider";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings — I Love PDF TOOLKIT" }] }),
});

function Settings() {
  const { theme, toggle } = useTheme();
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 pt-10">
        <div className="glass shadow-float rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SettingsIcon className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-secondary">Settings</h1>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              {theme === "dark" ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
              <div>
                <p className="text-sm font-bold text-secondary">Appearance</p>
                <p className="text-xs text-muted-foreground">{theme === "dark" ? "Dark mode" : "Light mode"}</p>
              </div>
            </div>
            <button
              onClick={toggle}
              className={`relative h-7 w-12 rounded-full transition-colors ${theme === "dark" ? "bg-primary" : "bg-muted"}`}
              aria-label="Toggle theme"
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <ul className="mt-4 divide-y divide-border">
            {["Account", "Notifications", "Privacy", "About"].map((label) => (
              <li key={label} className="flex items-center justify-between py-4 text-sm font-medium text-secondary">
                {label}
                <span className="text-muted-foreground">›</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageShell>
  );
}
