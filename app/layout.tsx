import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { RouteFocus } from "@/components/layout/route-focus";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  authors: [{ name: site.name, url: site.url }],
  ...pageMetadata({ description: site.description, path: "/" }),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-theme is set by ThemeScript before hydration, hence the warning suppression.
    <html lang="en" className={`${manrope.variable} antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-dvh flex-col">
        {/* Without JS, Motion never runs, so un-hide content it would reveal. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SkipLink />
        <RouteFocus />
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
