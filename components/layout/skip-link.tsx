/** First focusable element: lets keyboard users jump past the header. */
export function SkipLink({ href = "#main" }: { href?: string }) {
  return (
    <a
      href={href}
      className="fixed top-3 left-3 z-50 -translate-y-24 rounded-control bg-accent px-4 py-2 text-small font-semibold text-on-accent shadow-card transition-transform focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  );
}
