"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** The site's single orchestrated motion moment: the homepage introduction. */
export function IntroReveal({ children }: { children: ReactNode[] }) {
  const reduce = useReducedMotion();
  return (
    <>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 + i * 0.09, ease: [0.2, 0, 0, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
