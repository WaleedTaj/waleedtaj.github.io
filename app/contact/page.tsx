import type { ReactNode } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CopyButton } from "@/components/ui/copy-button";
import {
  ArrowUpRightIcon,
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { riseDelay } from "@/components/ui/page-intro";
import { mailto, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Waleed Mehmood, Flutter developer in Lahore, Pakistan, about on-site, hybrid or remote Flutter roles by email, WhatsApp, LinkedIn or GitHub.",
  path: "/contact",
});

const goodFit = [
  "Building features in new or existing Flutter apps",
  "Improving UI, performance and reliability",
  "REST API, Firebase and offline data integration",
  "Publishing and maintaining Android and iOS releases",
];

const helpful = [
  "The role or project, and who I'd be working with",
  "Whether it's a new app or an existing codebase",
  "Platforms, timeline and how you'd like to work together",
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div>
        <Container className="pt-12 pb-16 sm:pt-16 lg:pt-20">
          <p className="animate-rise flex items-center gap-3 font-mono text-small text-muted">
            <span className="text-accent-ink">05</span>
            <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
            <span className="font-sans text-eyebrow font-semibold tracking-wide uppercase">Contact</span>
          </p>
          <h1 className="animate-rise mt-6 max-w-[16ch] text-display" style={riseDelay(70)}>
            Let&apos;s talk about Flutter work.
          </h1>
          <p className="animate-rise mt-6 max-w-(--container-prose) text-lead text-muted" style={riseDelay(140)}>
            If you&apos;re hiring a Flutter developer or have an Android and iOS app that needs building
            or improving, I&apos;d like to hear about it. Email reaches me directly.
          </p>

          {/* The address, set large */}
          <div className="animate-rise mt-12 border-y border-line py-8 sm:py-10" style={riseDelay(200)}>
            <p className="text-small font-semibold text-muted">Email</p>
            <a
              href={mailto("Flutter development opportunity")}
              className="group mt-2 inline-flex max-w-full items-center gap-3 rounded-sm text-[clamp(1.375rem,0.75rem+3.6vw,3.25rem)] leading-tight font-extrabold tracking-tight break-all text-fg"
            >
              <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_0.14em] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out-soft group-hover:bg-[length:100%_0.14em]">
                {site.email}
              </span>
              <ArrowUpRightIcon className="size-[0.7em] shrink-0 text-accent-ink transition-transform duration-300 ease-out-soft group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mailto("Flutter development opportunity")} className={buttonStyles({ size: "lg" })}>
                <MailIcon className="size-5" />
                Write an email
              </a>
              <CopyButton value={site.email} label="Copy address" />
            </div>
          </div>
        </Container>

        <Container className="grid gap-12 pb-(--section-y) lg:grid-cols-12 lg:gap-14">
          {/* Context for the message */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <Reveal>
              <h2 className="text-h3">Where I can help</h2>
              <ul className="mt-5 space-y-3">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-accent-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-h3">Useful to include</h2>
              <ol className="mt-5 space-y-3">
                {helpful.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span aria-hidden="true" className="mt-0.5 font-mono text-small text-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </Reveal>
            <div className="flex items-start gap-2 text-small text-muted sm:col-span-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0" />
              <p>
                Based in {site.location} (PKT, UTC+5).{" "}
                <span className="font-semibold text-fg">{site.workPreference}</span>
              </p>
            </div>
          </div>

          {/* Other channels */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <h2 className="sr-only">Other ways to connect</h2>
            <ul className="divide-y divide-line overflow-hidden rounded-panel border border-line">
              <Channel
                href={site.whatsapp.href}
                external
                icon={<WhatsAppIcon className="size-5" />}
                title="WhatsApp"
                detail={site.whatsapp.display}
                detailLabel="WhatsApp number"
              />
              <Channel
                href={site.linkedin.href}
                external
                icon={<LinkedInIcon className="size-5" />}
                title="LinkedIn"
                detail="Professional profile and work history"
              />
              <Channel
                href={site.github.href}
                external
                icon={<GitHubIcon className="size-5" />}
                title="GitHub"
                detail={`@${site.github.handle}. Most of my commercial work lives in company-owned repositories.`}
              />
              <Channel
                href={site.resume.href}
                download={site.resume.fileName}
                icon={<DownloadIcon className="size-5" />}
                title="Résumé"
                detail="PDF with my experience, skills and education"
              />
            </ul>
          </Reveal>
        </Container>
      </div>
    </PageTransition>
  );
}

type ChannelProps = {
  href: string;
  icon: ReactNode;
  title: string;
  detail: string;
  /** Accessible prefix for `detail`, e.g. "WhatsApp number". */
  detailLabel?: string;
  external?: boolean;
  download?: string;
};

function Channel({ href, icon, title, detail, detailLabel, external, download }: ChannelProps) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download } : {})}
        className="group flex items-start gap-4 p-6 transition-colors hover:bg-surface focus-visible:-outline-offset-2"
      >
        <span
          aria-hidden="true"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-control bg-accent-wash text-accent-ink"
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-bold text-fg">
            {title}
            {external && <span className="sr-only"> (opens in a new tab)</span>}
            {download && <span className="sr-only"> (PDF download)</span>}
          </span>
          <span className="mt-1 block text-small text-muted">
            {detailLabel && <span className="sr-only">{detailLabel}: </span>}
            {detail}
          </span>
        </span>
        {download ? (
          <DownloadIcon className="mt-1 size-5 shrink-0 text-muted transition-transform group-hover:translate-y-0.5 group-hover:text-fg" />
        ) : (
          <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
        )}
      </a>
    </li>
  );
}
