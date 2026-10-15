import type { MetadataRoute } from "next";
import { projectHref, projects, unlistedProjects } from "@/content/projects";
import { navItems, site } from "@/lib/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...navItems.map((item) => item.href), ...[...projects, ...unlistedProjects].map((project) => projectHref(project.slug))];
  // Exported pages live at "/skills/", so list them with the trailing slash.
  return paths.map((path) => ({ url: `${site.url}${path === "/" ? "/" : `${path}/`}` }));
}
