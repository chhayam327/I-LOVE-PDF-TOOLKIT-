import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "I Love PDF TOOLKIT — Professional PDF Tools, Simplified" },
      { name: "description", content: "\"Professional I Love PDF Toolkit - 100% Free & Secure. Merge, Split, and Compress PDF files instantly in your browser. No registration required. Experience ultr" },
      { name: "author", content: "I Love PDF TOOLKIT" },
      { property: "og:title", content: "I Love PDF TOOLKIT — Professional PDF Tools, Simplified" },
      { property: "og:description", content: "\"Professional I Love PDF Toolkit - 100% Free & Secure. Merge, Split, and Compress PDF files instantly in your browser. No registration required. Experience ultr" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "I Love PDF TOOLKIT — Professional PDF Tools, Simplified" },
      { name: "twitter:description", content: "\"Professional I Love PDF Toolkit - 100% Free & Secure. Merge, Split, and Compress PDF files instantly in your browser. No registration required. Experience ultr" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f79db0c0-cb1c-4cdf-a7ec-1526cf1d2457/id-preview-b13889a3--b1bd1829-47d3-4eb3-8fac-b5849126a285.lovable.app-1777642717719.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f79db0c0-cb1c-4cdf-a7ec-1526cf1d2457/id-preview-b13889a3--b1bd1829-47d3-4eb3-8fac-b5849126a285.lovable.app-1777642717719.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
