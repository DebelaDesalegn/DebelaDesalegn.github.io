import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { PublicationBrowser } from "@/components/publications/publication-browser";
import { sortedPublications, manuscriptsUnderReview } from "@/data/publications";
import { profile } from "@/data/profile";
import { JsonLd, scholarlyArticleSchema } from "@/components/ui/json-ld";
import { asset } from "@/lib/site";
import { AuthorList } from "@/components/publications/author-list";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed papers at ACL, NAACL and EMNLP, preprints, and manuscripts under review by Debela Desalegn Yadeta.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  const pubs = sortedPublications();
  const scholar = profile.links.find((l) => l.kind === "scholar")?.href;
  return (
    <>
      <PageHeader
        title="Publications"
        intro={
          <>
            <p>
              Papers on LLM, multimodal and speech evaluation for African languages, and on explainability. My name is highlighted in each author list.
            </p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
              <a href={asset("/publications.bib")} download="debela-yadeta-publications.bib" className="link">
                Download all as BibTeX
              </a>
              {scholar && (
                <a href={scholar} className="link" target="_blank" rel="noopener noreferrer">
                  Google Scholar profile
                </a>
              )}
              <a href="https://orcid.org/0009-0002-1476-2965" className="link" target="_blank" rel="noopener noreferrer">
                ORCID
              </a>
            </p>
          </>
        }
      />
      <PublicationBrowser publications={pubs} />
      <Section id="under-review" title="Manuscripts under review">
        <ul className="divide-y divide-rule">
          {manuscriptsUnderReview.map((m) => (
            <li key={m.id} id={m.id} className="py-5 first:pt-0">
              <p className="font-serif text-[1.15rem] font-[560] leading-snug">{m.title}</p>
              <div className="mt-1.5">
                <AuthorList authors={m.authors} />
              </div>
              <p className="mt-1 text-[0.9rem] italic text-ink-2">Under review.</p>
              <p className="mt-3 max-w-[70ch] text-[0.95rem] leading-relaxed">{m.summary}</p>
              <p className="mt-2 flex flex-wrap gap-x-4 text-[0.88rem] text-ink-3">
                {m.topics.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <JsonLd data={scholarlyArticleSchema(pubs)} />
    </>
  );
}
