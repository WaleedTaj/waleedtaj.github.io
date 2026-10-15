import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { PhoneFrame } from "@/components/projects/phone";
import { ProjectStage, ScreenshotImage } from "@/components/projects/project-stage";
import { StoreLinks } from "@/components/projects/store-links";
import { Container } from "@/components/ui/container";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { riseDelay } from "@/components/ui/page-intro";
import { adjacentProjects, getProject, projectHref, projects, unlistedProjects, type Project } from "@/content/projects";
import { projectScreenshots } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";

// Featured and unlisted case studies only; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...projects, ...unlistedProjects].map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} case study`,
    description: `${project.summary} A Flutter case study by Waleed Mehmood.`,
    path: projectHref(project.slug),
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Null for unlisted case studies, which sit outside the featured cycle.
  const adjacent = adjacentProjects(project.slug);
  const number = adjacent ? String(projects.indexOf(project) + 1).padStart(2, "0") : null;
  const screenshots = projectScreenshots[project.slug] ?? [];

  return (
    <PageTransition>
      <article aria-labelledby="case-title">
        {/* Hero */}
        <header className="border-b border-line bg-surface">
          <Container className="grid gap-12 pt-10 pb-14 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-20">
            <div className={screenshots.length >= 2 ? "lg:col-span-5" : "lg:col-span-8"}>
              <nav aria-label="Breadcrumb" className="animate-rise">
                <ol className="flex items-center gap-2 text-small font-semibold text-muted">
                  <li>
                    <Link href="/projects" className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-fg">
                      <ArrowLeftIcon className="size-4" />
                      Projects
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className={number ? "font-mono text-accent-ink" : "text-accent-ink"}>
                    {number ?? project.name}
                  </li>
                </ol>
              </nav>

              <p className="animate-rise mt-10 text-small font-semibold text-accent-ink" style={riseDelay(60)}>
                {project.category}
              </p>
              <h1 id="case-title" className="animate-rise mt-3 text-h1" style={riseDelay(100)}>
                {project.name}
              </h1>
              <p className="animate-rise mt-5 text-lead text-muted" style={riseDelay(150)}>
                {project.summary}
              </p>

              <dl
                className="animate-rise mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-small"
                style={riseDelay(200)}
              >
                <div>
                  <dt className="text-muted">Platforms</dt>
                  <dd className="mt-0.5 font-semibold">{project.platforms.join(" and ")}</dd>
                </div>
                <div>
                  <dt className="text-muted">Company</dt>
                  <dd className="mt-0.5 font-semibold">{project.company}</dd>
                </div>
              </dl>

              <StoreLinks project={project} className="animate-rise mt-8" />
            </div>

            {screenshots.length >= 2 && (
              <div className="animate-rise lg:col-span-7" style={riseDelay(120)}>
                <ProjectStage project={project} preload className="bg-bg" />
              </div>
            )}
          </Container>
        </header>

        {/* Overview */}
        <CaseSection label="Overview">
          <div className="space-y-5 text-lead text-muted">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-accent py-1 pl-6">
            <p className="text-eyebrow text-accent-ink uppercase">What this case study shows</p>
            <p className="mt-3 text-h3 font-semibold text-fg">{project.focus}</p>
          </blockquote>
        </CaseSection>

        {/* Role */}
        <CaseSection label="My role" title="What I worked on">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {project.contributions.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-line pb-3 font-medium">
                <CheckIcon className="mt-1 size-4 shrink-0 text-accent-ink" />
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* Features */}
        <CaseSection label="Key features" title="What the app does" className="bg-surface">
          <ul className="grid grid-cols-1 gap-3 min-[30rem]:grid-cols-2 md:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={feature} className="flex items-center gap-3 rounded-control border border-line bg-bg px-4 py-3.5">
                <span aria-hidden="true" className="font-mono text-[0.75rem] text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* Challenges */}
        <CaseSection label="Technical challenges" title="Where the interesting work was">
          <ol className="space-y-10">
            {project.challenges.map((challenge, index) => (
              <li key={challenge.title} className="grid gap-4 sm:grid-cols-[4.5rem_1fr]">
                <span aria-hidden="true" className="text-h1 leading-none font-extrabold text-accent-ink/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3">{challenge.title}</h3>
                  <p className="mt-2 text-lead text-muted">{challenge.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </CaseSection>

        {/* Outcome */}
        {project.outcome && (
          <CaseSection label="Outcome">
            <div className="grid gap-6 rounded-panel bg-accent-wash p-8 ring-1 ring-line sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-10">
              <p className="text-[clamp(3.5rem,2.5rem+4vw,5.5rem)] leading-none font-extrabold tracking-tight text-accent-ink">
                {project.outcome.value}
              </p>
              <div>
                <p className="text-h3">{project.outcome.label}</p>
                <p className="mt-2 text-muted">{project.outcome.note}</p>
              </div>
            </div>
          </CaseSection>
        )}

        {/* Stack */}
        <CaseSection label="Technologies" title="Stack and areas">
          <dl className="space-y-6">
            <ChipRow term="Stack" items={project.stack} strong />
            <ChipRow term="Areas" items={project.areas} />
          </dl>
          <p className="mt-6 text-small text-muted">
            Only technologies confirmed for this project are listed.
          </p>
        </CaseSection>

        {/* Gallery */}
        {screenshots.length > 0 && (
          <CaseSection label="Screens" title="Gallery" className="bg-surface">
            <Gallery project={project} />
          </CaseSection>
        )}

        {/* Stores */}
        <Container className="py-(--section-y)">
          <Reveal className="flex flex-col gap-6 rounded-panel border border-line p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-h3">Try {project.name}</h2>
              <p className="mt-1 text-muted">Available for {project.platforms.join(" and ")}.</p>
            </div>
            <StoreLinks project={project} />
          </Reveal>
        </Container>
      </article>

      {/* Other projects */}
      <nav aria-label="More projects" className="border-t border-line">
        {adjacent ? (
          <Container className="grid gap-4 py-12 sm:grid-cols-2 sm:gap-6">
            <AdjacentLink project={adjacent.previous} direction="previous" />
            <AdjacentLink project={adjacent.next} direction="next" />
          </Container>
        ) : (
          <Container className="py-12">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-sm font-semibold text-muted transition-colors hover:text-fg">
              <ArrowLeftIcon className="size-4" />
              All projects
            </Link>
          </Container>
        )}
      </nav>
    </PageTransition>
  );
}

function CaseSection({
  label,
  title,
  className,
  children,
}: {
  label: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const id = `case-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section aria-labelledby={id} className={className}>
      <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="text-eyebrow text-accent-ink uppercase">{label}</p>
          <h2 id={id} className="mt-3 text-h2">
            {title ?? label}
          </h2>
        </div>
        <Reveal className="lg:col-span-8">{children}</Reveal>
      </Container>
    </section>
  );
}

function ChipRow({ term, items, strong }: { term: string; items: string[]; strong?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[6rem_1fr] sm:items-baseline">
      <dt className="text-small font-semibold text-muted">{term}</dt>
      <dd>
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className={
                strong
                  ? "rounded-lg bg-accent px-3 py-1.5 text-small font-semibold text-on-accent"
                  : "rounded-lg border border-line px-3 py-1.5 text-small font-medium"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

function Gallery({ project }: { project: Project }) {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8">
      {(projectScreenshots[project.slug] ?? []).map((shot) => (
        <li key={shot.src}>
          <figure>
            <PhoneFrame className="mx-auto max-w-[17rem]">
              <ScreenshotImage shot={shot} sizes="(min-width: 640px) 17rem, 45vw" />
            </PhoneFrame>
            <figcaption className="mt-4 text-center text-small font-semibold text-muted">{shot.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

function AdjacentLink({ project, direction }: { project: Project; direction: "previous" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={projectHref(project.slug)}
      className={`group flex flex-col gap-2 rounded-panel border border-line p-6 transition-colors hover:border-accent-ink/40 hover:bg-accent-wash sm:p-8 ${isNext ? "sm:items-end sm:text-right" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-small font-semibold text-muted">
        {!isNext && <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />}
        {isNext ? "Next project" : "Previous project"}
        {isNext && <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />}
      </span>
      <span className="text-h3 font-bold">{project.name}</span>
      <span className="text-small text-accent-ink">{project.category}</span>
    </Link>
  );
}
