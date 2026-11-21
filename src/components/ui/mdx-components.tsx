import Link from "next/link";
import type { ComponentProps } from "react";
import { Pending } from "./pending";
import { getPublication } from "@/data/publications";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { asset } from "@/lib/site";

function Figure({ src, alt, caption, width = 1200, height = 675 }: { src: string; alt?: string; caption?: string; width?: number; height?: number }) {
  return (
    <figure className="not-prose my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt ?? caption ?? ""} width={width} height={height} className="h-auto w-full border border-rule bg-white" loading="lazy" />
      {caption && <figcaption className="mt-3 text-sm leading-snug text-ink-2">{caption}</figcaption>}
    </figure>
  );
}

/** Usage in MDX: <PublicationList ids="afri-mcqa-2026,cammt-2025" /> */
function PublicationList({ ids = "" }: { ids?: string }) {
  return (
    <div className="not-prose divide-y divide-rule border-y border-rule">
      {ids.split(",").map((s) => s.trim()).filter(Boolean).map((id) => {
        const p = getPublication(id);
        return p ? <PublicationEntry key={id} pub={p} compact /> : null;
      })}
    </div>
  );
}

function A({ href = "", ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

export const mdxComponents = { Pending, Figure, PublicationList, a: A };
