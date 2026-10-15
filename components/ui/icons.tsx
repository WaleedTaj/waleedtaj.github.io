import type { SVGProps } from "react";

/** Inline stroke icons on a 24px grid. Decorative by default (aria-hidden). */
type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </StrokeIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
    </StrokeIcon>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </StrokeIcon>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </StrokeIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </StrokeIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.25v.01M12 17v-6.5M12 13.5a2.75 2.75 0 0 1 5.5 0V17" />
    </StrokeIcon>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </StrokeIcon>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </StrokeIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </StrokeIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </StrokeIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </StrokeIcon>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 3v4M15 3v4M6.5 7h11v3.5a5.5 5.5 0 0 1-11 0V7ZM12 16v5" />
    </StrokeIcon>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </StrokeIcon>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
    </StrokeIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </StrokeIcon>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3V11M21.5 9v5" />
    </StrokeIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3.5 13.8 9a1.5 1.5 0 0 0 1 1l5.2 2-5.2 2a1.5 1.5 0 0 0-1 1L12 20.5 10.2 15a1.5 1.5 0 0 0-1-1L4 12l5.2-2a1.5 1.5 0 0 0 1-1L12 3.5Z" />
      <path d="M19 3v3M17.5 4.5h3" />
    </StrokeIcon>
  );
}

export function GooglePlayIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5.5 3.8v16.4c0 .6.6.9 1.1.6l13.6-8.2a.7.7 0 0 0 0-1.2L6.6 3.2c-.5-.3-1.1 0-1.1.6Z" />
      <path d="m5.8 3.5 9.7 11.2M5.8 20.5l9.7-11.2" />
    </StrokeIcon>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M16.37 12.73c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.39 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66l.03-.03ZM14.1 6.06c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.51 2.69-1.27Z" />
    </svg>
  );
}
