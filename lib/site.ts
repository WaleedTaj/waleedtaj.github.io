import { media } from "@/lib/media";

/**
 * Site-wide identity, contact details and navigation. Single source of truth
 * for the header, metadata, hero, contact page and footer.
 */
export const site = {
  name: "Waleed Mehmood",
  initials: "WM",
  role: "Flutter Developer",
  experience: "3+ years",
  location: "Lahore, Pakistan",
  url: "https://waleedtaj.github.io",
  description:
    "Waleed Mehmood is a Flutter developer in Lahore, Pakistan, with 3+ years of experience building, publishing and maintaining Android and iOS apps.",
  /** Short availability line for the About hero. */
  availability: "Open to on-site, hybrid and remote roles",
  /** The full statement, shown once on the Contact page. */
  workPreference: "Open to on-site, hybrid and remote roles, including relocation for the right opportunity.",
  email: "waleedtaj420@gmail.com",
  github: { label: "GitHub", handle: "WaleedTaj", href: "https://github.com/WaleedTaj" },
  whatsapp: {
    label: "WhatsApp",
    display: "+92 313 4478862",
    href: "https://wa.me/923134478862",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "waleed-mehmood",
    href: "https://www.linkedin.com/in/waleed-mehmood-8119202b4",
  },
  resume: media.resume,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation, one entry per top-level route. */
export const navItems: NavItem[] = [
  // About is the landing page, so it lives at the root.
  { label: "About", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

/** Drops a trailing slash so "/skills/" and "/skills" compare equal. */
function normalizePath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

/** True when `href` is the current page or a parent of it (e.g. /projects for a case study). */
export function isActivePath(pathname: string, href: string) {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  return target === "/" ? current === "/" : current === target || current.startsWith(`${target}/`);
}

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
