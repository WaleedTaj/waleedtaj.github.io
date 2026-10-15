import type { ProjectSlug } from "./projects";

/**
 * Professional timeline, most recent first. Dates use "YYYY-MM".
 */

export type ExperienceApp = {
  name: string;
  /** Set when the app has a featured case study. */
  project?: ProjectSlug;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  type: "Full-time" | "Part-time" | "Freelance";
  location: string;
  start: string;
  /** null means the role is ongoing. */
  end: string | null;
  /** One-line framing for previews. */
  summary: string;
  apps: ExperienceApp[];
  /** Label above the app list, e.g. "Applications include" for partial lists. */
  appsLabel?: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Brainstormer Technologies",
    role: "Flutter Developer",
    type: "Full-time",
    location: "Lahore, Pakistan",
    start: "2025-12",
    end: null,
    summary: "Developing and maintaining production apps for education, childcare, Islamic learning and AI story generation, among others.",
    apps: [
      { name: "SLMS360", project: "slms360" },
      { name: "SLMS360 Student" },
      { name: "Toddlers App Staff", project: "toddlers-app-staff" },
      { name: "Toddlers App" },
      { name: "DeenLink", project: "deenlink" },
      { name: "BloodSync" },
      { name: "MyFable" },
    ],
    highlights: [
      "Developed and maintained production Flutter applications.",
      "Implemented features and integrated APIs.",
      "Improved existing UI and application workflows.",
      "Resolved bugs and improved reliability.",
      "Optimized application performance.",
      "Contributed to an approximately 40% overall performance improvement in SLMS360.",
      "Contributed to an approximately 30% overall performance improvement in Toddlers App Staff.",
      "Worked on DeenLink's offline functionality and content-related modules.",
      "Worked on MyFable, a published AI story-generation app.",
    ],
  },
  {
    organization: "Dynamic Dev Technologies",
    role: "Flutter Developer",
    type: "Part-time",
    location: "Remote",
    start: "2026-02",
    end: "2026-08",
    summary: "Developed Flutter apps with role-based workflows, appointments and chat.",
    apps: [{ name: "Service Square", project: "service-square" }, { name: "AzuNii Health" }, { name: "Lagoon Lounge" }],
    highlights: [
      "Developed and maintained Flutter applications.",
      "Implemented role-based application workflows.",
      "Integrated REST APIs.",
      "Worked on authentication, appointments, profiles, chat and notifications.",
      "Improved UI and resolved bugs.",
    ],
  },
  {
    organization: "Freelance / Project-Based",
    role: "Flutter Developer",
    type: "Freelance",
    location: "Remote",
    start: "2023-06",
    end: "2025-09",
    summary: "Delivered Flutter apps and features to individual client requirements.",
    appsLabel: "Applications include",
    apps: [
      { name: "Digital Car Yard" },
      { name: "Dezoc" },
      { name: "Notium" },
      { name: "Weather App" },
      { name: "Task Management" },
    ],
    highlights: [
      "Developed Flutter applications for different client requirements.",
      "Implemented responsive UI.",
      "Integrated Firebase and REST APIs.",
      "Worked with authentication, maps, notifications and data storage.",
      "Delivered applications and features for client projects.",
    ],
  },
];

/** "2025-12" → "Dec 2025". Formatted at build time in UTC. */
export function formatMonth(value: string, month: "short" | "long" = "short") {
  const [year, monthIndex] = value.split("-").map(Number);
  return new Date(Date.UTC(year, monthIndex - 1)).toLocaleDateString("en-US", {
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}
