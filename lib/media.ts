import type { ProjectSlug } from "@/content/projects";

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

export type Screenshot = ImageAsset & {
  /** Short visible caption in the case-study gallery. */
  caption: string;
};

/** Phone screenshots at their original 540 × 1200. */
const shot = (folder: string, file: string, caption: string, alt: string): Screenshot => ({
  src: publicPath(`/images/${folder}/${file}`),
  alt,
  caption,
  width: 540,
  height: 1200,
});

/**
 * Real app screenshots per project, keyed by slug and in display order: the
 * first two appear in the project stage, all of them in the case-study
 * gallery. Only reference files that exist under /public.
 */
export const projectScreenshots: Record<ProjectSlug, Screenshot[]> = {
  slms360: [
    shot("SLMS360", "Home.jpeg", "Home", "SLMS360 home screen with attendance, salary, voucher and project management modules"),
    shot("SLMS360", "Mark Attendance.jpeg", "Mark attendance", "SLMS360 attendance screen with check-in, check-out and total hours"),
    shot("SLMS360", "Task Details.jpeg", "Task details", "SLMS360 task details with status, progress and comments"),
    shot("SLMS360", "Settings.jpeg", "Settings", "SLMS360 settings with profile, branch, shift information and user manual"),
  ],
  "toddlers-app-staff": [
    shot("Toddlers Staff App", "Home.jpeg", "Home", "Toddlers App Staff home screen with classroom overview and attendance shortcuts"),
    shot("Toddlers Staff App", "Attendance.jpeg", "Attendance", "Toddlers App Staff attendance menu for staff, classes and evacuation reports"),
    shot("Toddlers Staff App", "Messages.jpeg", "Messages", "Toddlers App Staff messages with staff and parent conversations"),
    shot("Toddlers Staff App", "Settings.jpeg", "Settings", "Toddlers App Staff settings with branch, email alerts and account options"),
  ],
  deenlink: [
    shot("DeenLink", "Home.jpeg", "Home", "DeenLink home screen with prayer times and the dua, ayah and hadith of the moment"),
    shot("DeenLink", "Quran Reading.jpeg", "Quran reading", "DeenLink Quran reader with Arabic verses, Urdu translation, audio and bookmarks"),
    shot("DeenLink", "Quran.jpeg", "Quran index", "DeenLink Quran index by parah, with surah and saved tabs"),
    shot("DeenLink", "Leaderboard.jpeg", "Leaderboard", "DeenLink Tasbeeh leaderboard with weekly and monthly rankings"),
  ],
  // Screen areas cropped from the supplied device renders (Service Square/*.png),
  // so they sit in the same frame as the others. The originals are unchanged.
  "service-square": [
    { ...serviceSquare("Home.png"), caption: "Home", alt: "Service Square home screen with requests, engagements, chat and history" },
    { ...serviceSquare("Find Services.png"), caption: "Find services", alt: "Service Square search results listing service providers with ratings and rates" },
    { ...serviceSquare("Pending Requests.png"), caption: "Pending requests", alt: "Service Square list of pending requests" },
    { ...serviceSquare("Chat.png"), caption: "Chat", alt: "Service Square chat conversation" },
  ],
};

function serviceSquare(file: string) {
  return { src: publicPath(`/images/Service Square/Screens/${file}`), width: 166, height: 336 };
}
