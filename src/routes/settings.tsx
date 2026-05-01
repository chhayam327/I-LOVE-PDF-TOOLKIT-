import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings — I Love PDF TOOLKIT" }] }),
});

function Settings() {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-10">
        <div className="glass shadow-float rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SettingsIcon className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-secondary">Settings</h1>
          </div>
          <ul className="mt-6 divide-y divide-border">
            {["Account", "Notifications", "Privacy", "About"].map((label) => (
              <li key={label} className="flex items-center justify-between py-4 text-sm font-medium text-secondary">
                {label}
                <span className="text-muted-foreground">›</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
