/** The theme actually applied to the page. */
export type Theme = "light" | "dark";

/** What the visitor chose. "system" follows the OS setting. */
export type ThemePreference = Theme | "system";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint. Reads the saved preference (absent means
 * "system"), resolves it against the OS setting and writes both to <html>:
 *   data-theme       → "light" | "dark"   (drives the color tokens)
 *   data-theme-pref  → "light" | "dark" | "system"   (drives the switcher UI)
 * Kept dependency-free and ES5 so it can be inlined.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement,s=localStorage.getItem("${THEME_STORAGE_KEY}"),p=s==="light"||s==="dark"?s:"system",t=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;d.setAttribute("data-theme",t);d.setAttribute("data-theme-pref",p)}catch(e){}})()`;
