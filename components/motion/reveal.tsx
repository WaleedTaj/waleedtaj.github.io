"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after entering the viewport; use for light staggering. */
  delay?: number;
};

/**
 * Fades content up once as it scrolls into view. Reduced-motion users get a
 * plain fade; the layout's <noscript> rule keeps
 * content visible without JavaScript.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  // With reduced motion, fade only: no offset is ever applied.
  const offset = useReducedMotion() ? 0 : 16;
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
