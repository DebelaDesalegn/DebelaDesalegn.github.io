"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Award, Check, Copy } from "lucide-react";
import type { Publication } from "@/types";
import { AuthorList } from "./author-list";

const LINK_LABELS: [keyof Publication["links"], string][] = [
  ["paper", "Paper"],
  ["pdf", "PDF"],
  ["arxiv", "arXiv"],
  ["code", "Code"],
  ["data", "Data"],
  ["doi", "DOI"],
];

export function PublicationEntry({ pub, compact = false }: { pub: Publication; compact?: boolean }) {
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const bibId = `bib-${pub.id}`;

  async function copy() {
    if (!pub.bibtex) return;
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowBib(true);
    }
  }

  const titleHref = pub.links.paper ?? pub.links.arxiv ?? pub.links.pdf;

  return (
    <article className="py-6" id={pub.id}>
      <h3 className="font-serif text-[1.15rem] font-[560] leading-snug tracking-[-0.003em]">
        {titleHref ? (
          <a href={titleHref} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>
      <div className="mt-1.5">
        <AuthorList authors={pub.authors} />
      </div>
      <p className="mt-1 text-[0.9rem] text-ink-2">
        <span className="font-serif italic">{pub.venue}</span>
        {pub.status === "preprint" ? " (preprint)" : ""}, {pub.year}.
      </p>
      {pub.awards && pub.awards.length > 0 && (
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.88rem] font-medium text-accent">
          {pub.awards.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5">
              <Award aria-hidden className="h-4 w-4" strokeWidth={1.75} />
              {a}
            </span>
          ))}
        </p>
      )}
      {!compact && <p className="mt-3 max-w-[70ch] text-[0.95rem] leading-relaxed text-ink">{pub.summary}</p>}
      {!compact && pub.role && <p className="mt-2 text-[0.9rem] text-ink-2">My role: {pub.role}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.88rem]">
        {LINK_LABELS.map(([key, label]) =>
          pub.links[key] ? (
            <a key={key} href={pub.links[key]} target="_blank" rel="noopener noreferrer" className="link">
              {label}
            </a>
          ) : null,
        )}
        {pub.bibtex && (
          <button
            type="button"
            className="link"
            aria-expanded={showBib}
            aria-controls={bibId}
            onClick={() => setShowBib((s) => !s)}
          >
            {showBib ? "Hide BibTeX" : "BibTeX"}
          </button>
        )}
        {!compact &&
          pub.topics.map((t) => (
            <span key={t} className="text-ink-3">
              {t}
            </span>
          ))}
      </div>

      <AnimatePresence initial={false}>
        {showBib && pub.bibtex && (
          <motion.div
            id={bibId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="relative mt-3 border border-rule bg-shelf">
              <button
                type="button"
                onClick={copy}
                className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-sm border border-rule bg-paper px-2 py-1 text-xs text-ink-2 hover:text-ink"
              >
                {copied ? <Check aria-hidden className="h-3.5 w-3.5" /> : <Copy aria-hidden className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy BibTeX"}
              </button>
              <pre className="max-h-80 overflow-auto p-4 pr-28 font-mono text-[0.78rem] leading-relaxed text-ink-2">
                <code>{pub.bibtex}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only" aria-live="polite">
        {copied ? "BibTeX copied to clipboard" : ""}
      </span>
    </article>
  );
}
