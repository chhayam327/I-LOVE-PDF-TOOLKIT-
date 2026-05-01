import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-secondary/95 text-secondary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-extrabold">
              I <Heart className="h-5 w-5 fill-primary text-primary" /> PDF TOOLKIT
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Professional PDF tools — fast, secure, and free.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Tools</h4>
            <ul className="mt-3 space-y-2 text-sm text-secondary-foreground/70">
              <li>Merge PDF</li>
              <li>Split PDF</li>
              <li>Compress PDF</li>
              <li>PDF to Word</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-secondary-foreground/70">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-secondary-foreground/60 md:flex-row">
          <span>© {new Date().getFullYear()} I Love PDF TOOLKIT</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for Web Developers
          </span>
        </div>
      </div>
    </footer>
  );
}
