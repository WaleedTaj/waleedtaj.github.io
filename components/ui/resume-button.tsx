import { buttonStyles } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type ResumeButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

/** Downloads the résumé PDF from /public (see lib/media.ts). */
export function ResumeButton({ variant = "secondary", size = "lg", className }: ResumeButtonProps) {
  return (
    <a
      href={site.resume.href}
      download={site.resume.fileName}
      type="application/pdf"
      className={cn(buttonStyles({ variant, size }), className)}
    >
      <DownloadIcon className="size-5" />
      Download Résumé
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
