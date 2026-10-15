"use client";

import { useId, useSyncExternalStore, type ReactNode } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { THEME_STORAGE_KEY, type Theme, type ThemePreference } from "@/lib/theme";

const DARK_QUERY = "(prefers-color-scheme: dark)";

const options: { value: ThemePreference; label: string; icon: ReactNode }[] = [
  { value: "light", label: "Light", icon: <SunIcon className="size-4" /> },
  { value: "dark", label: "Dark", icon: <MoonIcon className="size-4" /> },
  { value: "system", label: "System", icon: <MonitorIcon className="size-4" /> },
];

function readPreference(): ThemePreference {
  const value = document.documentElement.dataset.themePref;
  return value === "light" || value === "dark" ? value : "system";
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

/** Writes the preference and the resolved theme to <html>. */
function applyPreference(preference: ThemePreference) {
  const root = document.documentElement;
  root.dataset.themePref = preference;
  root.dataset.theme = preference === "system" ? systemTheme() : preference;
}

function storePreference(preference: ThemePreference) {
  try {
    if (preference === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Storage unavailable (private mode): the choice lasts for this page view.
  }
}

function subscribe(onChange: () => void) {
  // <html data-theme-pref> is the source of truth; re-render when it changes.
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme-pref"],
  });

  // In "system" mode, follow OS theme changes live.
  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (readPreference() === "system") applyPreference("system");
  };
  media.addEventListener("change", onSystemChange);

  // Keep other open tabs in sync.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    const value = event.newValue;
    applyPreference(value === "light" || value === "dark" ? value : "system");
  };
  window.addEventListener("storage", onStorage);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * Light / Dark / System segmented control built on native radio inputs, so
 * arrow keys, focus and screen-reader semantics come for free. The selected
 * highlight is drawn by CSS from <html data-theme-pref>, so it is correct
 * before hydration.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const name = useId();
  // null on the server and during hydration: no input is marked checked yet.
  const preference = useSyncExternalStore<ThemePreference | null>(
    subscribe,
    readPreference,
    () => null,
  );

  function select(value: ThemePreference) {
    applyPreference(value);
    storePreference(value);
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn("inline-flex items-center gap-0.5 rounded-control border border-line p-0.5", className)}
    >
      {options.map((option) => (
        <label key={option.value} title={option.label} className="relative cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={preference === option.value}
            onChange={() => select(option.value)}
            className="peer sr-only"
          />
          <span
            data-theme-option={option.value}
            className="theme-option flex size-8 items-center justify-center rounded-[calc(var(--radius-control)-3px)] text-muted transition-colors duration-200 hover:text-fg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-(--focus-ring)"
          >
            {option.icon}
          </span>
          <span className="sr-only">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
