import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type PageIntroProps = {
  /** Position in the site, shown as a folio number, e.g. "02". */
  folio: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Optional content beside the heading on large screens. */
  aside?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/** Stagger helper for the CSS `animate-rise` entrance. */
export const riseDelay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Opening block of an inner page: folio marker, the page's only h1 and a lead.
 * Entrances are pure CSS so the heading renders without waiting for JS.
 */
export function PageIntro({ folio, label, title, lead, aside, className, children }: PageIntroProps) {
  return (
    <Container
      className={cn(
        "grid gap-10 pt-12 pb-14 sm:pt-16 lg:pt-20 lg:pb-20",
        aside ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end lg:gap-16" : null,
        className,
      )}
    >
      <div>
        <p className="animate-rise flex items-center gap-3 font-mono text-small text-muted">
          <span className="text-accent-ink">{folio}</span>
          <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
          <span className="font-sans font-semibold tracking-wide uppercase text-eyebrow">{label}</span>
        </p>
        <h1 className="animate-rise mt-6 max-w-[20ch] text-h1" style={riseDelay(70)}>
          {title}
        </h1>
        {lead && (
          <div className="animate-rise mt-6 max-w-(--container-prose) text-lead text-muted" style={riseDelay(140)}>
            {lead}
          </div>
        )}
        {children}
      </div>
      {aside && (
        <div className="animate-rise" style={riseDelay(200)}>
          {aside}
        </div>
      )}
    </Container>
  );
}
