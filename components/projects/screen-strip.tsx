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
 * A project's real screenshots side by side, each in a plain phone frame: a
 * slim near-black bezel with an Android punch-hole camera, whose screen has
 * the captures' exact 9:20 shape, so nothing is cropped and the real status
 * bar stays visible. Sizes are in
 * cqw, so the bezel scales with the phone. Four across from lg up, where each
 * phone is at most ~270px wide (the 540px captures stay sharp at 2×). Below lg the row
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
              <div className="@container">
                <div className="rounded-[13cqw] bg-device p-[3cqw] ring-1 ring-line-strong/30">
                  <div className="relative overflow-hidden rounded-[10cqw]">
                    {/* Android-style punch-hole camera, about 5% of the screen width as on
                        real phones, centered in the status bar where every capture is
                        empty, so it never covers the time, icons or app bar. */}
                    <span
                      aria-hidden="true"
                      className="absolute top-[2.35cqw] left-1/2 z-10 grid size-[4.7cqw] -translate-x-1/2 place-items-center rounded-full bg-device ring-[0.3cqw] ring-device/40"
                    >
                      {/* Lens: a darker core with a faint ring and a small highlight */}
                      <span className="relative size-[2.6cqw] rounded-full bg-[#1b1d24] ring-[0.25cqw] ring-[#2a2d36]">
                        <span className="absolute top-[22%] left-[24%] size-[28%] rounded-full bg-white/25" />
                      </span>
                    </span>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      preload={preload}
                      sizes="(min-width: 1024px) 16rem, 74vw"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-small font-semibold text-muted">{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
