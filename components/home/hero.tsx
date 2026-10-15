import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/icons";
import { riseDelay } from "@/components/ui/page-intro";
import { ResumeButton } from "@/components/ui/resume-button";
import { BrandIcon } from "@/components/ui/brand-icons";
import { experience } from "@/content/experience";
import { coreStack } from "@/content/skills";
import { projects, publishedApps } from "@/content/projects";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

const current = experience.find((entry) => entry.end === null);

const facts = [
  { value: site.experience.replace(" years", ""), label: "years building with Flutter" },
  // "+": the lists behind these counts are not exhaustive.
  {
    value: `${projects.length + publishedApps.length}+`,
    label: "published apps on Google Play and the App Store",
  },
  {
    value: `${experience.reduce((total, entry) => total + entry.apps.length, 0)}+`,
    label: "apps worked on overall, across full-time, part-time and freelance roles",
  },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12 lg:pt-20 lg:pb-24">
        <div>
          <p className="animate-rise inline-flex items-center gap-2.5 rounded-2xl border border-line py-1.5 pr-3.5 pl-3 text-small font-semibold text-muted">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent-ink ring-4 ring-accent-wash" />
            {site.availability}
          </p>

          <h1 id="hero-title" className="mt-8">
            <span className="animate-rise block text-h3 font-bold text-fg" style={riseDelay(60)}>
              {/* The name is visible on the portrait; screen readers still get it here. */}
              <span className="sr-only">{site.name}, </span>
              {site.role}
            </span>
            <span className="animate-rise mt-4 block max-w-[16ch] text-display" style={riseDelay(120)}>
              I build and improve{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">production apps</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.1em] bottom-[0.06em] h-[0.32em] rounded-sm bg-accent/70 dark:bg-accent/30"
                />
              </span>{" "}
              for Android and iOS.
            </span>
          </h1>

          <p className="animate-rise mt-7 max-w-[38rem] text-lead text-muted" style={riseDelay(180)}>
            For {site.experience} I&apos;ve built Flutter apps for real businesses and their users: staff
            attendance and payroll for institutions, classroom tools for childcare teams, offline
            Islamic reading, a two-sided service marketplace and personalized AI stories. I develop features,
            connect them to APIs and Firebase, and keep them fast and reliable after release.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={riseDelay(240)}>
            <ButtonLink href="/projects" size="lg">
              Explore Projects
              <ArrowRightIcon className="size-5" />
            </ButtonLink>
            <ResumeButton />
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-[38rem] grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6"
            style={riseDelay(300)}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-[0.8125rem] leading-snug text-muted">{fact.label}</dt>
                <dd className="text-h2 font-extrabold text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="animate-rise mt-8 flex flex-wrap items-center gap-x-4 gap-y-3" style={riseDelay(340)}>
            <h2 className="text-eyebrow text-muted uppercase">Core stack</h2>
            <ul className="flex flex-wrap gap-2">
              {coreStack.map((tool) => (
                <li
                  key={tool.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-1.5 text-small font-semibold text-fg"
                >
                  <BrandIcon name={tool.logo} className="size-4 text-accent-ink" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Portrait currentCompany={current?.organization} />
      </Container>
    </section>
  );
}

/**
 * Editorial portrait: the real photograph in a print-like frame, set against
 * an offset gold block and a hairline outline. The photo itself is untouched.
 */
function Portrait({ currentCompany }: { currentCompany?: string }) {
  return (
    <div className="animate-rise relative mx-auto w-[84%] max-w-[24rem] sm:w-full sm:max-w-[26rem] lg:mr-0" style={riseDelay(160)}>
      {/* Offset shapes */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-[7%] translate-y-[6%] rounded-panel bg-accent" />
      <div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-0 translate-x-[7%] translate-y-[6%] rounded-panel opacity-25 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-[5%] -translate-y-[4%] rounded-panel border border-line-strong"
      />

      <figure className="relative overflow-hidden rounded-panel border border-line bg-white shadow-card-hover">
        <Image
          src={media.portrait.src}
          alt={media.portrait.alt}
          width={media.portrait.width}
          height={media.portrait.height}
          preload
          sizes="(min-width: 1024px) 26rem, (min-width: 640px) 26rem, 90vw"
          className="aspect-[4/5] w-full object-cover object-[50%_30%]"
        />
        <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-card border border-line bg-bg/90 px-4 py-3 backdrop-blur-md">
          <span className="min-w-0">
            <span className="block truncate text-small font-bold text-fg">{site.name}</span>
            <span className="flex items-center gap-1 truncate text-[0.8125rem] text-muted">
              <MapPinIcon className="size-3.5 shrink-0" />
              {site.location}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-accent text-small font-extrabold text-on-accent"
          >
            {site.initials}
          </span>
        </figcaption>
      </figure>

      {currentCompany && (
        <p className="absolute -top-5 -left-4 max-w-[14rem] rounded-card border border-line bg-bg px-4 py-2.5 text-[0.8125rem] leading-snug shadow-card sm:-left-8">
          <span className="block font-mono text-[0.6875rem] tracking-wide text-accent-ink uppercase">Currently</span>
          <span className="font-semibold text-fg">{site.role}</span>
          <span className="text-muted"> at {currentCompany}</span>
        </p>
      )}
    </div>
  );
}
