import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { EducationList, ServiceTable, SimpleList } from "@/components/academic/academic-blocks";
import { education } from "@/data/education";
import { academicExperience, industryExperience, awards, reviewing } from "@/data/experience";
import { sortedPublications, manuscriptsUnderReview } from "@/data/publications";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Debela Desalegn Yadeta.",
  alternates: { canonical: "/cv" },
};

function short(authors: string[]) {
  const idx = authors.indexOf("Debela Desalegn Yadeta");
  if (authors.length <= 4) return authors.join(", ");
  return `${authors.slice(0, 3).join(", ")}${idx >= 3 ? ", …, Debela Desalegn Yadeta" : ""}, et al.`;
}

export default function CvPage() {
  const all = [...academicExperience, ...industryExperience];
  return (
    <>
      <PageHeader
        title="Curriculum vitae"
        intro={
          <a href={asset("/files/Debela_Desalegn_Yadeta_CV.pdf")} className="link" download>
            Download the full CV (PDF)
          </a>
        }
      />
      <Section id="education" title="Education">
        <EducationList items={education} />
      </Section>
      <Section id="publications" title="Publications">
        <ol className="list-decimal space-y-3 pl-5 text-[0.95rem] leading-snug marker:text-ink-3">
          {sortedPublications().map((p) => (
            <li key={p.id}>
              {short(p.authors)} <span className="font-medium">“{p.title}.”</span> <span className="font-serif italic">{p.venue}</span>, {p.year}.
              {p.awards?.length ? <span className="text-accent"> {p.awards.join("; ")}.</span> : null}
            </li>
          ))}
          {manuscriptsUnderReview.map((m) => (
            <li key={m.title}>
              Debela Desalegn Yadeta, et al. <span className="font-medium">“{m.title}.”</span> {m.venue}.
            </li>
          ))}
        </ol>
      </Section>
      <Section id="experience" title="Experience">
        <ul className="space-y-3 text-[0.95rem]">
          {all.flatMap((e) =>
            e.roles.map((r) => (
              <li key={`${e.organization}-${r.title}`} className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <span className="tabular-nums text-ink-3">
                  {r.start} – {r.end}
                </span>
                <span>
                  <span className="font-medium">{r.title}</span>, {e.organization}
                </span>
              </li>
            )),
          )}
        </ul>
      </Section>
      <Section id="awards" title="Awards">
        <SimpleList items={awards} />
      </Section>
      <Section id="service" title="Service">
        <ServiceTable items={reviewing} />
      </Section>
    </>
  );
}
