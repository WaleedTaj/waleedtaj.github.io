import type { ReactNode } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  CompassIcon,
  DatabaseIcon,
  LayersIcon,
  MapPinIcon,
  PhoneIcon,
  PlugIcon,
  SparkIcon,
  ToolsIcon,
} from "@/components/ui/icons";
import { PageIntro } from "@/components/ui/page-intro";
import { exploring, skillGroups, type SkillGroup, type SkillIcon } from "@/content/skills";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Waleed Mehmood's Flutter skill set: Dart, responsive UI, state management, REST APIs, Firebase, SQLite, offline support, maps, notifications and store deployment.",
  path: "/skills",
});

const icons: Record<SkillIcon, ReactNode> = {
  mobile: <PhoneIcon className="size-5" />,
  layers: <LayersIcon className="size-5" />,
  plug: <PlugIcon className="size-5" />,
  spark: <SparkIcon className="size-5" />,
  database: <DatabaseIcon className="size-5" />,
  pin: <MapPinIcon className="size-5" />,
  tools: <ToolsIcon className="size-5" />,
  compass: <CompassIcon className="size-5" />,
};

const slug = (title: string) => title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");

export default function SkillsPage() {
  const [core, ...groups] = skillGroups;

  return (
    <PageTransition>
      <div>
        <PageIntro
          folio="02"
          label="Skills"
          title="What I use to build, ship and maintain Flutter apps."
          lead={<p>Grouped by what each part of the toolkit is for, with what I&apos;m currently learning kept separate.</p>}
          aside={
            <nav aria-label="Skill groups">
              <ol className="space-y-1 border-l border-line">
                {[...skillGroups, exploring].map((group, index) => (
                  <li key={group.title}>
                    <a
                      href={`#${slug(group.title)}`}
                      className="-ml-px flex items-baseline gap-3 border-l border-transparent py-1 pl-4 text-small font-semibold text-muted transition-colors hover:border-accent-ink hover:text-fg"
                    >
                      <span className="font-mono text-[0.75rem]">{String(index + 1).padStart(2, "0")}</span>
                      {group.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          }
        />

        {/* Core group, given the most room */}
        <Container as="section" id={slug(core.title)} aria-labelledby={`${slug(core.title)}-title`} className="scroll-mt-24">
          <Reveal className="relative overflow-hidden rounded-panel bg-on-accent px-6 py-10 text-bg sm:px-10 sm:py-14 lg:px-14 dark:bg-surface dark:text-fg dark:ring-1 dark:ring-line">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-control bg-accent text-on-accent"
                >
                  {icons[core.icon]}
                </span>
                <h2 id={`${slug(core.title)}-title`} className="mt-6 text-h2 text-bg dark:text-fg">
                  {core.title}
                </h2>
                <p className="mt-3 opacity-75">{core.description}</p>
              </div>
              <ul className="flex flex-wrap content-start items-baseline gap-x-5 gap-y-3 lg:col-span-8">
                {core.skills.map((skill, index) => (
                  <li key={skill} className="flex items-baseline gap-5 text-h3 font-bold">
                    <span className={index < 2 ? "text-accent" : undefined}>{skill}</span>
                    {index < core.skills.length - 1 && (
                      <span aria-hidden="true" className="font-normal opacity-30">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>

        {/* Remaining groups as a spec sheet */}
        <Container className="pt-16 pb-8 sm:pt-20">
          {groups.map((group, index) => (
            <GroupRow key={group.title} group={group} number={index + 2} />
          ))}
        </Container>

        {/* Learning, clearly separated */}
        <Container as="section" id={slug(exploring.title)} aria-labelledby="exploring-title" className="scroll-mt-24 pb-(--section-y)">
          <Reveal className="grid gap-8 rounded-panel border-2 border-dashed border-line-strong/60 p-6 sm:p-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <span
                aria-hidden="true"
                className="inline-flex size-11 items-center justify-center rounded-control border border-dashed border-line-strong text-muted"
              >
                {icons[exploring.icon]}
              </span>
              <h2 id="exploring-title" className="mt-6 text-h3">
                {exploring.title}
              </h2>
              <p className="mt-2 text-muted">{exploring.description}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-small font-semibold text-muted">
                Learning in progress, not production experience.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {exploring.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-control border border-dashed border-line-strong px-4 py-2 font-semibold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/projects" variant="ghost" className="mt-8 -ml-5">
                See these skills in the case studies
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </div>
    </PageTransition>
  );
}

function GroupRow({ group, number }: { group: SkillGroup; number: number }) {
  const id = slug(group.title);
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line py-10 last:border-b sm:py-12">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-14">
        <div className="flex gap-4 lg:col-span-4">
          <span
            aria-hidden="true"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-control bg-accent-wash text-accent-ink"
          >
            {icons[group.icon]}
          </span>
          <div>
            <p aria-hidden="true" className="font-mono text-[0.75rem] text-muted">
              {String(number).padStart(2, "0")}
            </p>
            <h2 id={`${id}-title`} className="text-[1.25rem] leading-snug font-bold">
              {group.title}
            </h2>
            <p className="mt-2 text-small text-muted">{group.description}</p>
          </div>
        </div>
        <ul className="grid grid-cols-1 content-start gap-x-8 min-[30rem]:grid-cols-2 sm:grid-cols-3 lg:col-span-8">
          {group.skills.map((skill) => (
            <li key={skill} className="flex items-center gap-3 border-b border-line/70 py-2.5 font-semibold">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent-ink" />
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
