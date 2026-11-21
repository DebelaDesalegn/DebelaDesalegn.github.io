import type { ReactNode } from "react";
import { showPlaceholders } from "@/lib/site";

/**
 * Marks content that still needs to be written. In development (or with
 * NEXT_PUBLIC_SHOW_PLACEHOLDERS=true) the editing note is shown; in production
 * readers see a neutral "Details to follow." line instead.
 */
export function Pending({ children }: { children?: ReactNode }) {
  if (showPlaceholders) {
    return (
      <div className="not-prose my-4 rounded-sm border border-dashed border-ink-3/50 px-4 py-3 text-sm text-ink-2">
        <span className="font-medium text-ink">To add: </span>
        {children}
      </div>
    );
  }
  return <p className="text-ink-3 italic">Details to follow.</p>;
}
