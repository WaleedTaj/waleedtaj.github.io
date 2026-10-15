/**
 * Every image and file under /public that the site references, in one place.
 * Components read paths from here instead of hardcoding them, so replacing a
 * placeholder is a one-line change.
 */

export type ImageAsset = {
  /** URL path under /public. Build it with `publicPath` so spaces are encoded. */
  src: string;
  alt: string;
  /** Intrinsic size in pixels, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
};

/** "/images/Profile Pic.jpeg" → "/images/Profile%20Pic.jpeg" */
export function publicPath(path: string) {
  return encodeURI(path);
}

export const media = {
  /** Real photograph, used on the About page (/) and as the social preview image. */
  portrait: {
    src: publicPath("/images/Profile Pic White BG.jpeg"),
    alt: "Portrait of Waleed Mehmood",
    width: 1254,
    height: 1254,
  } satisfies ImageAsset,

  resume: {
    href: publicPath("/Resume_WaleedMehmood_FlutterDeveloper.pdf"),
    /** Name the browser saves the download as. */
    fileName: "Waleed-Mehmood-Flutter-Developer-Resume.pdf",
  },
} as const;

export type ProjectImages = {
  /**
   * Wide cover image for the project showcase and case-study hero.
   * Expected at /public/images/projects/<slug>/cover.png.
   */
  cover?: ImageAsset;
  /**
   * Phone screenshots for the case-study gallery, in display order.
   * Expected at /public/images/projects/<slug>/screenshot-<n>.png.
   */
  screenshots: ImageAsset[];
};

/**
 * Real project imagery, keyed by project slug. Until an entry has images,
 * the site shows designed, clearly labelled mockups instead.
 *
 * To add real images, place the files under public/images/projects/<slug>/
 * and fill in the entry, for example:
 *
 *   slms360: {
 *     cover: {
 *       src: "/images/projects/slms360/cover.png",
 *       alt: "SLMS360 dashboard on Android and iOS",
 *       width: 1600,
 *       height: 1000,
 *     },
 *     screenshots: [
 *       {
 *         src: "/images/projects/slms360/screenshot-1.png",
 *         alt: "SLMS360 attendance screen with QR check-in",
 *         width: 1170,
 *         height: 2532,
 *       },
 *     ],
 *   },
 *
 * Only reference files that exist; a missing file shows as a broken image.
 */
export const projectImages: Record<string, ProjectImages> = {
  slms360: { screenshots: [] },
  "toddlers-app-staff": { screenshots: [] },
  deenlink: { screenshots: [] },
  "service-square": { screenshots: [] },
};
