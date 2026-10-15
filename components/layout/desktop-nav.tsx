"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { isActivePath, type NavItem } from "@/lib/site";

/** Inline nav for lg+ screens with a hover highlight that glides between links. */
export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  // Scope the shared layout animation to this nav instance.
  const layoutId = `${useId()}-nav-highlight`;

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-0.5" onMouseLeave={() => setHovered(null)}>
        {items.map((item) => {
          const isActive = isActivePath(pathname, item.href);
          return (
            <li key={item.href} className="relative">
              {hovered === item.href && (
                <motion.span
                  layoutId={layoutId}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-control bg-surface"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={() => setHovered(item.href)}
                onFocus={() => setHovered(item.href)}
                onBlur={() => setHovered(null)}
                className={cn(
                  "relative block rounded-control px-3.5 py-2 text-small font-semibold transition-colors duration-200 hover:text-fg focus-visible:text-fg",
                  isActive ? "text-fg" : "text-muted",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 bottom-1 h-0.5 origin-left rounded-full bg-accent transition-[opacity,scale] duration-300 ease-out-soft",
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
