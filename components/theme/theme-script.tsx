import { themeInitScript } from "@/lib/theme";

/**
 * Inline blocking script for <head>: sets <html data-theme> before first
 * paint so there is no flash of the wrong theme. Pair with
 * `suppressHydrationWarning` on <html>, since the attribute is added
 * before React hydrates.
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
}
