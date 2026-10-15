import { buttonStyles } from "@/components/ui/button";
import { AppleIcon, GooglePlayIcon } from "@/components/ui/icons";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

type StoreLinksProps = {
  /** A featured project or a published app; only the name and store links are used. */
  project: Pick<Project, "name" | "store">;
  size?: "sm" | "md";
  className?: string;
};

/** Google Play and App Store links for a project. Both open in a new tab. */
export function StoreLinks({ project, size = "md", className }: StoreLinksProps) {
  const stores = [
    { label: "Google Play", href: project.store.googlePlay, icon: <GooglePlayIcon className="size-[1.125rem]" /> },
    { label: "App Store", href: project.store.appStore, icon: <AppleIcon className="size-[1.125rem]" /> },
  ];

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {stores.map((store) => (
        <li key={store.label}>
          <a
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "secondary", size })}
          >
            {store.icon}
            <span>
              <span className="sr-only">{project.name} on </span>
              {store.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
