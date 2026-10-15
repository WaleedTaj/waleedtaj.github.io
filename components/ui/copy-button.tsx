"use client";

import { useEffect, useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

/** Copies `value` to the clipboard and confirms it visibly and to screen readers. */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <>
      <button type="button" onClick={copy} className={cn(buttonStyles({ variant: "secondary", size: "lg" }), className)}>
        {status === "copied" ? <CheckIcon className="size-5" /> : <CopyIcon className="size-5" />}
        {status === "copied" ? "Copied" : label}
      </button>
      <span role="status" className="sr-only">
        {status === "copied" ? `${value} copied to clipboard` : status === "failed" ? "Copy failed. Select the address to copy it." : ""}
      </span>
    </>
  );
}
