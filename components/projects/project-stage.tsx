import Image from "next/image";
import type { ReactNode } from "react";
import type { Project, ProjectSlug } from "@/content/projects";
import { cn } from "@/lib/cn";
import { projectScreenshots, type Screenshot } from "@/lib/media";
import { PhoneFrame } from "./phone";

type Composition = {
  primary: string;
  secondary: string;
  decor: ReactNode;
};

/**
 * A different arrangement per project, so the showcase never repeats itself.
 * Every project shares the gold accent; the layout and the screenshots are
 * what set them apart.
 */
const compositions: Partial<Record<ProjectSlug, Composition>> = {
  // Institutional dashboard: upright, side by side, on a measured grid.
  slms360: {
    primary: "left-[13%] top-[11%] w-[35%]",
    secondary: "left-[52%] top-[21%] w-[35%]",
    decor: (
      <div className="absolute inset-0 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
    ),
  },
  // Childcare: a light tilt and soft rounded shapes.
  "toddlers-app-staff": {
    primary: "left-[15%] top-[12%] w-[34%] -rotate-6",
    secondary: "left-[50%] top-[18%] w-[34%] rotate-[5deg]",
    decor: (
      <>
        <span className="absolute -top-[18%] -left-[10%] aspect-square w-[45%] rounded-full bg-accent-wash" />
        <span className="absolute -right-[8%] -bottom-[22%] aspect-square w-[50%] rounded-full bg-accent-wash" />
      </>
    ),
  },
  // Reading app: one calm, centered page under an arch.
  deenlink: {
    primary: "left-[34%] top-[13%] w-[34%] z-10",
    secondary: "left-[60%] top-[26%] w-[28%]",
    decor: (
      <span className="absolute top-[7%] left-[24%] h-[110%] w-[54%] rounded-t-full border border-accent-ink/30 bg-accent-wash" />
    ),
  },
  // Donor app: two phones staggered over one large disc.
  bloodsync: {
    primary: "left-[12%] top-[9%] w-[35%]",
    secondary: "left-[53%] top-[17%] w-[35%]",
    decor: (
      <span className="absolute top-[14%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-accent-wash" />
    ),
  },
};

type ProjectStageProps = {
  project: Project;
  className?: string;
  /** Load the screenshots eagerly; use for the first visible stage on a page. */
  preload?: boolean;
};

/**
 * Wide visual for a featured project: its first two real screenshots in device frames.
 * Decorative (the case-study gallery describes each screenshot), so it is
 * hidden from assistive technology.
 */
export function ProjectStage({ project, className, preload }: ProjectStageProps) {
  const composition = compositions[project.slug];
  const [primary, secondary] = projectScreenshots[project.slug] ?? [];
  // Unlisted case studies may have no screenshots; they render without a stage.
  if (!composition || !primary || !secondary) return null;

  return (
    <div
      aria-hidden="true"
      className={cn("relative aspect-[4/3] overflow-hidden rounded-panel border border-line bg-surface", className)}
    >
      {composition.decor}
      <PhoneFrame className={cn("absolute", composition.secondary)}>
        <ScreenshotImage shot={secondary} preload={preload} sizes="(min-width: 1024px) 14rem, 34vw" decorative />
      </PhoneFrame>
      <PhoneFrame className={cn("absolute", composition.primary)}>
        <ScreenshotImage shot={primary} preload={preload} sizes="(min-width: 1024px) 14rem, 34vw" decorative />
      </PhoneFrame>
    </div>
  );
}

type ScreenshotImageProps = {
  shot: Screenshot;
  sizes: string;
  preload?: boolean;
  /** Empty alt text, for places where the screenshot repeats nearby content. */
  decorative?: boolean;
};

/**
 * A screenshot filling a PhoneFrame's screen. The screen's proportions differ
 * slightly from the captures, so `object-cover` trims a sliver (from the
 * bottom, or from the sides for wider crops); it never stretches them.
 */
export function ScreenshotImage({ shot, sizes, preload, decorative }: ScreenshotImageProps) {
  return (
    <Image
      src={shot.src}
      alt={decorative ? "" : shot.alt}
      width={shot.width}
      height={shot.height}
      preload={preload}
      sizes={sizes}
      className="size-full object-cover object-top"
    />
  );
}
