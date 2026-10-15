import Link from "next/link";
import { PageTransition } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { ProjectStage } from "@/components/projects/project-stage";
import { StoreLinks } from "@/components/projects/store-links";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { PageIntro } from "@/components/ui/page-intro";
import { getProject, projectHref, projects, publishedApps, type Project, type PublishedApp } from "@/content/projects";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Flutter apps by Waleed Mehmood on Google Play and the App Store: case studies of SLMS360, Toddlers App Staff, DeenLink and Service Square, plus SLMS360 Student, Toddlers App, BloodSync and MyFable.",
  path: "/projects",
});

export default function ProjectsPage() {
  const companies = new Set(projects.map((project) => project.company));

  return (
    <PageTransition>
      <div>
        <PageIntro
          folio="03"
          label="Projects"
          title="Four apps, four very different problems."
          lead={
            <p>
              Institutional operations, childcare, offline religious content and a two-sided service
              marketplace. Each case study covers what the app does, what I worked on and the technical
              challenges along the way.
            </p>
          }
          aside={
            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              {[
                [String(projects.length + publishedApps.length), "published apps"],
                [String(projects.length), "detailed case studies"],
                [String(companies.size), "companies"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col-reverse justify-end gap-1">
                  <dt className="text-small leading-snug text-muted">{label}</dt>
                  <dd className="text-h2 font-extrabold">{value}</dd>
                </div>
              ))}
            </dl>
          }
        />

        <h2 className="sr-only">Case studies</h2>
        <Container as="ol" className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectFeature project={project} index={index} />
            </li>
          ))}
        </Container>

        <MoreApps />
      </div>
    </PageTransition>
  );
}

function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  const headingId = `project-${project.slug}`;
  const href = projectHref(project.slug);

  return (
    <article aria-labelledby={headingId} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={cn("lg:col-span-7", flipped && "lg:order-2")}>
        <Link href={href} tabIndex={-1} aria-hidden="true" className="group block">
          <ProjectStage
            project={project}
            preload={index === 0}
            className="transition-[transform,box-shadow] duration-500 ease-out-soft group-hover:shadow-card-hover motion-safe:group-hover:-translate-y-1"
          />
        </Link>
      </Reveal>

      <Reveal delay={0.08} className={cn("lg:col-span-5", flipped && "lg:order-1")}>
        <div className="flex items-baseline gap-4">
          <span aria-hidden="true" className="font-mono text-small font-semibold text-accent-ink">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
          <span className="text-small font-semibold text-muted">{project.platforms.join(" · ")}</span>
        </div>

        <p className="mt-6 text-small font-semibold text-accent-ink">{project.category}</p>
        <h2 id={headingId} className="mt-2 text-h2">
          {project.name}
        </h2>
        <p className="mt-4 text-lead text-muted">{project.summary}</p>

        <ul aria-label="Highlights" className="mt-6 flex flex-wrap gap-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="rounded-lg bg-accent-wash px-2.5 py-1 text-small font-medium text-fg ring-1 ring-line">
              {feature}
            </li>
          ))}
        </ul>

        {project.outcome && (
          <p className="mt-6 flex items-baseline gap-3 border-l-2 border-accent pl-4">
            <span className="text-h3 font-extrabold">{project.outcome.value}</span>
            <span className="text-small text-muted">{project.outcome.label.toLowerCase()} (approximate)</span>
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={href} className={buttonStyles({ variant: "primary" })}>
            Read case study
            <span className="sr-only">: {project.name}</span>
            <ArrowRightIcon className="size-4" />
          </Link>
          <span className="flex gap-4 text-small font-semibold">
            <StoreTextLink href={project.store.googlePlay} label="Google Play" project={project.name} />
            <StoreTextLink href={project.store.appStore} label="App Store" project={project.name} />
          </span>
        </div>
      </Reveal>
    </article>
  );
}

function StoreTextLink({ href, label, project }: { href: string; label: string; project: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-sm text-muted transition-colors hover:text-fg"
    >
      <span className="sr-only">{project} on </span>
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowUpRightIcon className="size-3.5" />
    </a>
  );
}

/** Published apps without case studies: compact cards with store buttons. */
function MoreApps() {
  return (
    <section aria-labelledby="more-apps-title" className="mt-(--section-y) bg-surface py-(--section-y)">
      <Container>
        <Reveal className="max-w-(--container-prose)">
          <p className="text-eyebrow text-accent-ink uppercase">Also on the stores</p>
          <h2 id="more-apps-title" className="mt-3 text-h2">
            More Published Applications
          </h2>
          <p className="mt-4 text-muted">
            Other apps I&apos;ve worked on that are live on Google Play and the App Store. Some of my
            client and company work isn&apos;t publicly available, so it&apos;s listed on the{" "}
            <Link href="/experience" className="rounded-sm font-semibold text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-ink">
              Experience page
            </Link>{" "}
            without links.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publishedApps.map((app, index) => (
            <li key={app.name}>
              <Reveal delay={(index % 4) * 0.05} className="h-full">
                <AppCard app={app} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function AppCard({ app }: { app: PublishedApp }) {
  const related = app.related && getProject(app.related);
  // Initials from the name before any subtitle: "MyFable: …" → "M".
  const initials = app.name
    .split(":")[0]
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <article aria-label={app.name} className="flex h-full flex-col rounded-card border border-line bg-bg p-6">
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-control bg-accent-wash text-body font-extrabold text-accent-ink"
      >
        {initials.toUpperCase()}
      </span>
      <h3 className="mt-5 text-[1.125rem] leading-snug font-bold">{app.name}</h3>
      <p className="mt-1 text-small text-muted">{app.company}</p>

      {(app.tag || related) && (
        <p className="mt-4 flex flex-wrap gap-2 text-small">
          {app.tag && <span className="rounded-md bg-accent-wash px-2 py-0.5 font-semibold text-fg">{app.tag}</span>}
          {related && (
            <Link
              href={projectHref(related.slug)}
              className="rounded-sm font-semibold text-muted underline decoration-line-strong underline-offset-4 hover:text-fg"
            >
              Related: {related.name}
            </Link>
          )}
        </p>
      )}

      <StoreLinks project={app} size="sm" className="mt-auto flex-col gap-2 pt-6 [&_a]:w-full" />
    </article>
  );
}
