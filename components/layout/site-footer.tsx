import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, site } from "@/lib/site";

const linkClass = "w-fit rounded-sm text-muted transition-colors hover:text-fg";

export function SiteFooter() {
  // Rendered at build time; the year updates on the next deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-12 text-small sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <p className="flex items-center gap-3 font-bold text-fg">
            <span
              aria-hidden="true"
              className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-[0.75rem] font-extrabold text-on-accent"
            >
              {site.initials}
            </span>
            {site.name}
          </p>
          <p className="mt-3 text-muted">
            {site.role} in {site.location}, building and maintaining Android and iOS apps with Flutter.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-eyebrow text-muted uppercase">Pages</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 font-semibold">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-eyebrow text-muted uppercase">Elsewhere</h2>
          <ul className="mt-4 space-y-2.5 font-semibold">
            <li>
              <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.github.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.resume.href} download={site.resume.fileName} className={linkClass}>
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-6 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <p>{site.location}</p>
      </Container>
    </footer>
  );
}
