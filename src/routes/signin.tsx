import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Mail, Lock } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/signin")({
  component: SignInPage,
  head: () => ({
    meta: [
      { title: "Sign in — I Love PDF TOOLKIT" },
      { name: "description", content: "Sign in to your PDF Toolkit account." },
    ],
  }),
});

function SignInPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-md px-4 pt-10">
        <div className="glass shadow-float rounded-3xl p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <User className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-2xl font-extrabold text-secondary">Sign in</h1>
            <p className="mt-1 text-sm text-muted-foreground">Access your saved tools and history</p>
          </div>
          <form className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-border bg-card px-10 py-3 text-sm text-secondary outline-none focus:border-primary" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input type="password" required placeholder="••••••••" className="w-full rounded-xl border border-border bg-card px-10 py-3 text-sm text-secondary outline-none focus:border-primary" />
              </div>
            </label>
            <button type="button" className="shine glow-pulse mt-2 w-full rounded-2xl bg-gradient-primary px-6 py-3.5 text-base font-bold text-primary-foreground">
              Sign in
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Don't have an account? <Link to={"/signup" as "/"} className="font-semibold text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </main>
    </PageShell>
  );
}
