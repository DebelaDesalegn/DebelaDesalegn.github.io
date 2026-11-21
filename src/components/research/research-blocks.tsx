import Link from "next/link";
import type { Contribution, ResearchInterest } from "@/types";
import { getPublication } from "@/data/publications";

export function InterestList({ interests }: { interests: ResearchInterest[] }) {
  return (
    <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      {interests.map((i) => (
        <div key={i.id}>
          <dt className="font-serif text-[1.08rem] font-[560]">{i.title}</dt>
          <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-2">{i.description}</dd>
        </div>
      ))}
    </dl>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
      <dt className="text-[0.85rem] font-medium text-ink-3 sm:pt-[0.15rem]">{label}</dt>
      <dd className="text-[0.95rem] leading-relaxed">{children}</dd>
    </div>
  );
}

export function ContributionItem({ c, detailed = true }: { c: Contribution; detailed?: boolean }) {
  const pubs = c.publications.map(getPublication).filter(Boolean);
  return (
    <article className="py-8 first:pt-0" id={c.id}>
      <h3 className="font-serif text-[1.3rem] font-[560] leading-snug tracking-[-0.005em]">{c.title}</h3>
      <p className="mt-2 max-w-[68ch] font-serif text-[1.05rem] italic leading-relaxed text-ink-2">{c.question}</p>
      <dl className="mt-5 space-y-3.5">
        {detailed && <Row label="Motivation">{c.motivation}</Row>}
        <Row label="Approach">{c.methodology}</Row>
        <Row label="Contribution">{c.contribution}</Row>
        {pubs.length > 0 && (
          <Row label="Publications">
            <ul className="space-y-1">
              {pubs.map((p) => (
                <li key={p!.id}>
                  <Link href={`/publications#${p!.id}`} className="link">
                    {p!.title.split(":")[0]}
                  </Link>{" "}
                  <span className="text-ink-3">
                    {p!.venueShort === "arXiv" ? "arXiv" : `${p!.venueShort}`} {p!.year}
                  </span>
                </li>
              ))}
            </ul>
          </Row>
        )}
        {pubs.length === 0 && <Row label="Publications">MSc thesis (2025); three manuscripts under review at IEEE Access.</Row>}
        {(c.code || c.projectSlug) && (
          <Row label="More">
            <span className="flex flex-wrap gap-x-4">
              {c.code && (
                <a href={c.code} className="link" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              )}
              {c.projectSlug && (
                <Link href={`/projects/${c.projectSlug}`} className="link">
                  Project page
                </Link>
              )}
            </span>
          </Row>
        )}
      </dl>
    </article>
  );
}
