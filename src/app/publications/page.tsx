import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { PublicationBrowser } from "@/components/publications/publication-browser";
import { sortedPublications, manuscriptsUnderReview } from "@/data/publications";
import { profile } from "@/data/profile";
import { JsonLd, scholarlyArticleSchema } from "@/components/ui/json-ld";
import { asset } from "@/lib/site";

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
            <li key={m.title} className="py-4 first:pt-0">
              <p className="font-serif text-[1.1rem] font-[560]">{m.title}</p>
              <p className="text-[0.9rem] text-ink-2">
                <span className="font-medium text-accent">Debela Desalegn Yadeta</span> et al. <span className="font-serif italic">{m.venue}</span>.
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <JsonLd data={scholarlyArticleSchema(pubs)} />
    </>
  );
}
