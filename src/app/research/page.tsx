import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { InterestList, ContributionItem } from "@/components/research/research-blocks";
import { researchInterests, contributions } from "@/data/research";
import { skills } from "@/data/education";

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests and selected contributions in explainable AI, multilingual and African language NLP, and multimodal evaluation.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        intro="My work asks two connected questions: how can we tell what a machine learning model is really doing, and how can we tell whether language technology actually works for the languages and cultures of Africa?"
      />
      <Section id="interests" title="Interests">
        <InterestList interests={researchInterests} />
      </Section>
      <Section id="contributions" title="Selected research contributions">
        <div className="divide-y divide-rule">
          {contributions.map((c) => (
            <ContributionItem key={c.id} c={c} />
          ))}
        </div>
      </Section>
      <Section id="stack" title="Technical research stack">
        <dl className="space-y-3">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-[0.9rem] font-medium text-ink-3">{s.group}</dt>
              <dd className="text-[0.95rem]">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
