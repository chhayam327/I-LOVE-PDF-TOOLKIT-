import { createFileRoute, Link } from "@tanstack/react-router";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Sign up — I Love PDF TOOLKIT" },
      { name: "description", content: "Create your free PDF Toolkit account to save history and unlock premium features." },
    ],
  }),
});

function SignupPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-md px-4 pt-10">
        <div className="glass shadow-float rounded-3xl p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <UserPlus className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-2xl font-extrabold text-secondary">Create account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Join PDF Toolkit — it's free</p>
          </div>
          <form className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</span>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input type="text" required placeholder="Your name" className="w-full rounded-xl border border-border bg-card px-10 py-3 text-sm text-secondary outline-none focus:border-primary" />
              </div>
            </label>
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
                <input type="password" required placeholder="Create a password" className="w-full rounded-xl border border-border bg-card px-10 py-3 text-sm text-secondary outline-none focus:border-primary" />
              </div>
            </label>
            <button type="button" className="shine glow-pulse mt-2 w-full rounded-2xl bg-gradient-primary px-6 py-3.5 text-base font-bold text-primary-foreground">
              Create account
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Already have one? <Link to={"/login" as "/"} className="font-semibold text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </main>
    </PageShell>
  );
}
