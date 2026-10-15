import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { navItems, site } from "@/lib/site";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header
      // Named so route transitions keep the header still (see globals.css).
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-40 border-b border-line bg-(--header-bg) backdrop-blur-md"
    >
      <div className="container-page flex h-(--header-h) items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex min-w-0 items-center gap-3 rounded-control"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-accent text-small font-extrabold tracking-tight text-on-accent"
          >
            {site.initials}
          </span>
          {/* Name hides on the narrowest phones so the controls keep their size. */}
          <span aria-hidden="true" className="hidden min-w-0 flex-col leading-tight min-[25rem]:flex">
            <span className="truncate text-small font-bold text-fg">{site.name}</span>
            <span className="truncate text-eyebrow font-medium tracking-normal text-muted">
              {site.role}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <DesktopNav items={navItems} />
          <ThemeSwitcher />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
