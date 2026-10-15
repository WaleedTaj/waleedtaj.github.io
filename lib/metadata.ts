import type { Metadata } from "next";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

type PageMetadataInput = {
  /** Page title without the site name; the root layout's template adds it. */
  title?: string;
  description: string;
  /** Route path, e.g. "/skills". */
  path: string;
};

const socialImage = {
  url: media.portrait.src,
  width: media.portrait.width,
  height: media.portrait.height,
  alt: media.portrait.alt,
};

/**
 * Per-page metadata with canonical URL and Open Graph tags. Open Graph is
 * not deep-merged with the layout's, so every page sets it in full here.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  // Match the exported URLs, which end in a slash (trailingSlash: true).
  const url = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}
