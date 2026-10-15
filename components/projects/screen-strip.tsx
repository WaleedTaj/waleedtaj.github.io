import Image from "next/image";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { projectScreenshots } from "@/lib/media";

type ScreenStripProps = {
  project: Pick<Project, "slug" | "name">;
  className?: string;
  /** Load the screenshots eagerly; use for the first strip visible on a page. */
  preload?: boolean;
};

/**
 * A project's real screenshots side by side, shown as captured: no device
 * frame, just a hairline border. Four across from lg up, where each is at
 * most ~270px wide (the 540px captures stay sharp at 2×). Below lg the row
 * scrolls sideways with snap points and a peek at the next screen; the
 * region is focusable so the arrow keys can scroll it.
 */
export function ScreenStrip({ project, className, preload }: ScreenStripProps) {
  return (
    <div
      role="region"
      aria-label={`${project.name} screenshots`}
      tabIndex={0}
      className={cn(
        "-mx-(--gutter) snap-x snap-mandatory scroll-px-(--gutter) overflow-x-auto px-(--gutter) pb-3 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0",
        className,
      )}
    >
      <ul className="flex gap-4 lg:grid lg:grid-cols-4 lg:gap-6">
        {projectScreenshots[project.slug].map((shot) => (
          <li key={shot.src} className="w-[78%] max-w-[16rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
            <figure>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                preload={preload}
                sizes="(min-width: 1024px) 17rem, 78vw"
                className="h-auto w-full rounded-lg border border-line"
              />
              <figcaption className="mt-3 text-small font-semibold text-muted">{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
