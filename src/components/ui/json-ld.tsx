import { profile } from "@/data/profile";
import type { Publication } from "@/types";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    image: profile.photo ? `${profile.siteUrl}${profile.photo}` : undefined,
    address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
    affiliation: { "@type": "CollegeOrUniversity", name: profile.affiliation.name },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Addis Ababa University" },
    knowsAbout: ["Explainable AI", "Multilingual NLP", "African language NLP", "Machine learning interpretability", "Multimodal machine learning"],
    sameAs: profile.links.filter((l) => l.href?.startsWith("http")).map((l) => l.href),
    identifier: profile.orcid ? { "@type": "PropertyValue", propertyID: "ORCID", value: profile.orcid } : undefined,
  };
}

export function scholarlyArticleSchema(pubs: Publication[]) {
  return {
    "@context": "https://schema.org",
    "@graph": pubs.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      name: p.title,
      author: p.authors.map((a) => ({ "@type": "Person", name: a })),
      datePublished: String(p.year),
      isPartOf: { "@type": "PublicationIssue", name: p.venue },
      url: p.links.paper ?? p.links.arxiv,
      sameAs: p.links.doi,
      abstract: p.summary,
    })),
  };
}
