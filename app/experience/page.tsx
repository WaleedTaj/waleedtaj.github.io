import Link from "next/link";
import { PageTransition } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { toneStyle } from "@/components/projects/project-stage";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, ArrowUpRightIcon, GraduationIcon, MapPinIcon } from "@/components/ui/icons";
import { PageIntro } from "@/components/ui/page-intro";
import { ResumeButton } from "@/components/ui/resume-button";
import { education } from "@/content/education";
import { experience, formatMonth, type ExperienceEntry } from "@/content/experience";
import { getProject, projectHref } from "@/content/projects";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Waleed Mehmood's Flutter experience: full-time at Brainstormer Technologies, part-time with Dynamic Dev Technologies, freelance client work since 2023, and education.",
  path: "/experience",
});

/** Inclusive length of a finished role, e.g. "2 yrs 4 mos". */
function duration(start: string, end: string) {
  const [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);
  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years} yr${years > 1 ? "s" : ""}`, rest && `${rest} mo${rest > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div>
        <PageIntro
          folio="04"
          label="Experience"
          title="From freelance client work to full-time product teams."
          lead={
            <p>
              Full-time at Brainstormer Technologies, part-time with Dynamic Dev Technologies, and
              freelance Flutter projects before that. Featured apps link to their case studies.
            </p>
          }
          aside={
            <ol className="space-y-4 border-l border-line pl-6">
              {experience.map((entry) => (
                <li key={entry.organization} className="relative">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-1.5 -left-[1.8125rem] size-2.5 rounded-full",
                      entry.end === null ? "bg-accent-ink" : "bg-line-strong",
                    )}
                  />
                  <span className="block font-semibold">{entry.organization}</span>
                  <span className="font-mono text-small text-muted">
                    {entry.start.slice(0, 4)}–{entry.end ? entry.end.slice(0, 4) : "now"} · {entry.type}
                  </span>
                </li>
              ))}
            </ol>
          }
        />

        <Container as="ol" className="pb-8">
          {experience.map((entry, index) => (
            <li key={entry.organization}>
              <Role entry={entry} last={index === experience.length - 1} />
            </li>
          ))}
        </Container>

        <Education />

        <Container className="flex flex-col items-start gap-6 py-(--section-y) md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-h3 font-semibold">The same history, in one PDF.</p>
          <div className="flex flex-wrap gap-3">
            <ResumeButton variant="primary" />
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Get in touch
              <ArrowRightIcon className="size-5" />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}

function Role({ entry, last }: { entry: ExperienceEntry; last: boolean }) {
  const current = entry.end === null;
  const headingId = `role-${entry.start}`;

  return (
    <article aria-labelledby={headingId} className="relative grid gap-6 pl-10 lg:grid-cols-12 lg:gap-14 lg:pl-0">
      {/* Small screens: rail along the left edge */}
      <TimelineMark current={current} last={last} className="lg:hidden" />

      {/* When and where */}
      <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:col-span-3 lg:self-start lg:pr-6">
        <p className="font-mono text-small font-semibold text-fg">
          <time dateTime={entry.start}>{formatMonth(entry.start)}</time>
          {" – "}
          {entry.end ? <time dateTime={entry.end}>{formatMonth(entry.end)}</time> : "Present"}
        </p>
        {entry.end && <p className="mt-1 text-small text-muted">{duration(entry.start, entry.end)}</p>}
        <div className="mt-4 flex flex-wrap gap-2 text-small font-semibold">
          <span
            className={cn(
              "rounded-md px-2 py-0.5",
              current ? "bg-accent text-on-accent" : "border border-line text-muted",
            )}
          >
            {current ? `${entry.type} · Current` : entry.type}
          </span>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-small text-muted">
          <MapPinIcon className="size-4" />
          {entry.location}
        </p>
      </div>

      {/* What */}
      <div className="relative pb-16 lg:col-span-9 lg:pl-12">
        {/* Large screens: rail between the two columns */}
        <TimelineMark current={current} last={last} className="hidden lg:block" />
        <Reveal>
        <h2 id={headingId} className="text-h2">
          {entry.organization}
        </h2>
        <p className="mt-1 text-lead font-semibold text-muted">{entry.role}</p>

        <div className="mt-8">
          <h3 className="text-eyebrow text-muted uppercase">{entry.appsLabel ?? "Applications"}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {entry.apps.map((app) => {
              const project = app.project && getProject(app.project);
              if (!project) {
                return (
                  <li key={app.name} className="rounded-lg border border-line px-3 py-1.5 text-small font-semibold">
                    {app.name}
                  </li>
                );
              }
              return (
                <li key={app.name}>
                  <Link
                    href={projectHref(project.slug)}
                    style={toneStyle(project)}
                    className="tone inline-flex items-center gap-1.5 rounded-lg bg-tone-wash px-3 py-1.5 text-small font-semibold text-tone-ink ring-1 ring-tone/40 transition-shadow hover:ring-tone"
                  >
                    {app.name}
                    <span className="sr-only"> case study</span>
                    <ArrowUpRightIcon className="size-3.5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-eyebrow text-muted uppercase">Responsibilities and results</h3>
          <ul className="mt-3 grid gap-x-8 md:grid-cols-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 border-b border-line py-3 text-muted">
                <span aria-hidden="true" className="mt-[0.75rem] h-px w-3 shrink-0 bg-accent-ink" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
      </div>
    </article>
  );
}

function TimelineMark({ current, last, className }: { current: boolean; last: boolean; className?: string }) {
  return (
    <span aria-hidden="true" className={cn("absolute inset-y-0 left-0 w-[0.9375rem]", className)}>
      {!last && <span className="absolute top-3 bottom-0 left-[0.4375rem] w-px bg-line-strong/50" />}
      <span
        className={cn(
          "absolute top-1.5 left-0 size-[0.9375rem] rounded-full border-2",
          current ? "border-accent-ink bg-accent" : "border-line-strong bg-bg",
        )}
      />
    </span>
  );
}

function Education() {
  return (
    <section aria-labelledby="education-title" className="bg-surface py-(--section-y)">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-3">
          <p className="text-eyebrow text-accent-ink uppercase">Education</p>
          <h2 id="education-title" className="mt-3 text-h2">
            Where I studied
          </h2>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-9 lg:pl-12">
          {education.map((entry, index) => (
            <li key={entry.qualification}>
              <Reveal delay={index * 0.06} className="flex h-full flex-col rounded-panel border border-line bg-bg p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 items-center justify-center rounded-control bg-accent-wash text-accent-ink"
                  >
                    <GraduationIcon className="size-5" />
                  </span>
                  <span className="font-mono text-small text-muted">
                    {entry.start}–{entry.end}
                  </span>
                </div>
                <h3 className="mt-6 text-h3">
                  {entry.qualification}
                  {entry.field && <span className="block text-body font-semibold text-muted">{entry.field}</span>}
                </h3>
                <p className="mt-2 text-muted">
                  {entry.institution}, {entry.location}
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="text-small text-muted">Marks</dt>
                    <dd className="font-bold">{entry.marks}</dd>
                  </div>
                  <div>
                    <dt className="text-small text-muted">{entry.result.label}</dt>
                    <dd className="font-bold">{entry.result.value}</dd>
                  </div>
                </dl>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
