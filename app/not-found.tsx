import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata = {
  title: "Page not found",
};

/** Also exported as 404.html, which GitHub Pages serves for unknown paths. */
export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-(--section-y)">
      <p className="font-mono text-small text-accent-ink">404</p>
      <h1 className="mt-4 max-w-[18ch] text-h1">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-(--container-prose) text-lead text-muted">
        The link may be out of date. Everything on the site is reachable from the homepage and the
        navigation above.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Go to the homepage
          <ArrowRightIcon className="size-5" />
        </ButtonLink>
        <ButtonLink href="/projects" variant="secondary" size="lg">
          See projects
        </ButtonLink>
      </div>
    </Container>
  );
}
