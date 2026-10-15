import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Project, ProjectSlug } from "@/content/projects";
import { cn } from "@/lib/cn";
import { projectImages } from "@/lib/media";
import { mockupScreens } from "./mockups";
import { PhoneFrame } from "./phone";

/** Sets the project's hue for `tone` utilities on this element. */
export const toneStyle = (project: Pick<Project, "hue">) => ({ "--hue": project.hue }) as CSSProperties;

type Composition = {
  primary: string;
  secondary: string;
  decor: ReactNode;
};

/** A different arrangement per project, so the showcase never repeats itself. */
const compositions: Record<ProjectSlug, Composition> = {
  // Institutional dashboard: upright, side by side, on a measured grid.
  slms360: {
    primary: "left-[13%] top-[11%] w-[35%]",
    secondary: "left-[52%] top-[21%] w-[35%]",
    decor: (
      <div className="absolute inset-0 [background-image:linear-gradient(var(--tone-soft)_1px,transparent_1px),linear-gradient(90deg,var(--tone-soft)_1px,transparent_1px)] [background-size:2.5rem_2.5rem] opacity-70" />
    ),
  },
  // Childcare: playful tilt and soft rounded shapes.
  "toddlers-app-staff": {
    primary: "left-[15%] top-[12%] w-[34%] -rotate-6",
    secondary: "left-[50%] top-[18%] w-[34%] rotate-[5deg]",
    decor: (
      <>
        <span className="absolute -top-[18%] -left-[10%] aspect-square w-[45%] rounded-full bg-tone-soft" />
        <span className="absolute -right-[8%] -bottom-[22%] aspect-square w-[50%] rounded-full bg-tone-soft/70" />
        <span className="absolute top-[14%] right-[10%] aspect-square w-[7%] rounded-full bg-tone/60" />
      </>
    ),
  },
  // Reading app: one calm, centered page under an arch.
  deenlink: {
    primary: "left-[34%] top-[13%] w-[34%] z-10",
    secondary: "left-[60%] top-[26%] w-[28%] opacity-90",
    decor: (
      <>
        <span className="absolute top-[7%] left-[24%] h-[110%] w-[54%] rounded-t-full border border-tone/50 bg-tone-soft/40" />
        <span className="absolute top-[13%] left-[29%] h-[110%] w-[44%] rounded-t-full border border-tone/30" />
      </>
    ),
  },
  // Marketplace: two roles, two phones facing each other across the stage.
  "service-square": {
    primary: "left-[10%] top-[16%] w-[34%]",
    secondary: "left-[54%] top-[9%] w-[34%]",
    decor: (
      <>
        <span className="absolute inset-y-0 left-1/2 w-px bg-tone/30" />
        <span className="absolute top-[7%] left-[10%] rounded-full bg-bg px-3 py-1 text-[0.6875rem] font-semibold text-tone-ink shadow-card">
          Customer
        </span>
        <span className="absolute top-[4%] right-[8%] rounded-full bg-bg px-3 py-1 text-[0.6875rem] font-semibold text-tone-ink shadow-card">
          Professional
        </span>
      </>
    ),
  },
};

type ProjectStageProps = {
  project: Project;
  className?: string;
  /** Load the cover eagerly; use for the first visible stage on a page. */
  preload?: boolean;
  /** Hides the mockup label, e.g. when the surrounding text already states it. */
  hideLabel?: boolean;
};

/**
 * Wide visual for a project: the real cover image once one is configured in
 * lib/media.ts, otherwise a composition of illustrative mockup screens.
 */
export function ProjectStage({ project, className, preload, hideLabel }: ProjectStageProps) {
  const cover = projectImages[project.slug]?.cover;
  const base = "tone relative overflow-hidden rounded-panel border border-line bg-tone-wash";

  if (cover) {
    return (
      <div style={toneStyle(project)} className={cn(base, className)}>
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          preload={preload}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="size-full object-cover"
        />
      </div>
    );
  }

  const composition = compositions[project.slug];
  const [Primary, Secondary] = mockupScreens[project.slug];

  return (
    <div style={toneStyle(project)} className={cn(base, "aspect-[4/3]", className)}>
      <div aria-hidden="true" className="absolute inset-0">
        {composition.decor}
        <PhoneFrame className={cn("absolute", composition.secondary)}>
          <Secondary />
        </PhoneFrame>
        <PhoneFrame className={cn("absolute", composition.primary)}>
          <Primary />
        </PhoneFrame>
      </div>
      {!hideLabel && <MockupLabel className="absolute bottom-3 left-3" />}
    </div>
  );
}

/** Small primary-screen tile for compact project lists. */
export function ProjectThumb({ project, className }: { project: Project; className?: string }) {
  const cover = projectImages[project.slug]?.cover;
  const [Primary] = mockupScreens[project.slug];

  return (
    <div
      aria-hidden="true"
      style={toneStyle(project)}
      className={cn("tone relative overflow-hidden rounded-card border border-line bg-tone-wash", className)}
    >
      {cover ? (
        // Decorative here: the project name sits right beside it.
        <Image src={cover.src} alt="" width={cover.width} height={cover.height} sizes="160px" className="size-full object-cover" />
      ) : (
        <PhoneFrame className="absolute top-[14%] left-1/2 w-[62%] -translate-x-1/2">
          <Primary />
        </PhoneFrame>
      )}
    </div>
  );
}

export function MockupLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded-md border border-line bg-bg/90 px-2 py-1 font-mono text-[0.6875rem] font-medium text-muted backdrop-blur-sm",
        className,
      )}
    >
      Illustrative mockup
    </span>
  );
}
