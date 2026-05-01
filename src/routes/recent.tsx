import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/recent")({
  component: Recent,
  head: () => ({ meta: [{ title: "Recent — I Love PDF TOOLKIT" }] }),
});

function Recent() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 pt-10 text-center">
        <div className="glass shadow-float mx-auto rounded-3xl p-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Clock className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-secondary">No recent activity yet</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your recently processed files will appear here.
          </p>
        </div>
      </main>
    </PageShell>
  );
}
