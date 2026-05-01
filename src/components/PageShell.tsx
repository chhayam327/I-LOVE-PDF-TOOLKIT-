import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";

export function PageShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen pb-24">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Header onMenuClick={() => setOpen(true)} />
      <div className="animate-rise-3d">
        {children}
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}
