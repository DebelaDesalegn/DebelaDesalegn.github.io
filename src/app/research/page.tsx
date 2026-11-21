import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { InterestList, ContributionItem } from "@/components/research/research-blocks";
import { researchInterests, contributions, researchStatement } from "@/data/research";
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
      <Section id="statement" title="Research statement">
        <div className="mb-10 border-b border-rule pb-10">
          <p className="text-[0.88rem] font-medium text-ink-3">Primary research focus</p>
          <h3 className="mt-1 font-serif text-[1.45rem] font-[560] leading-snug tracking-[-0.01em]">{researchStatement.focus.title}</h3>
          <p className="mt-3 max-w-[66ch] text-[1.02rem] leading-[1.7]">{researchStatement.focus.description}</p>
          <p className="mt-6 text-[0.88rem] font-medium text-ink-3">Research themes</p>
          <ol className="mt-3 max-w-[66ch] space-y-3">
            {researchStatement.focus.themes.map((t, i) => (
              <li key={t.title} className="grid grid-cols-[1.6rem_1fr] gap-2">
                <span className="font-serif text-[1.05rem] text-ink-3">{i + 1}.</span>
                <p className="text-[0.98rem] leading-relaxed">
                  <span className="font-medium">{t.title}.</span> <span className="text-ink-2">{t.text}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="max-w-[66ch] space-y-4 text-[1.02rem] leading-[1.7]">
          <p className="font-serif text-[1.2rem] leading-[1.55]">{researchStatement.vision}</p>
          {researchStatement.sofar.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
        <h3 className="mt-10 font-serif text-[1.15rem] font-[560]">Further directions</h3>
        <ol className="mt-4 max-w-[66ch] space-y-4">
          {researchStatement.directions.map((d, i) => (
            <li key={d.title} className="grid grid-cols-[1.6rem_1fr] gap-2">
              <span className="font-serif text-[1.05rem] text-ink-3">{i + 1}.</span>
              <div>
                <p className="font-medium">{d.title}</p>
                <p className="mt-1 text-[0.97rem] leading-relaxed text-ink-2">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[66ch] text-[1.02rem] leading-[1.7]">{researchStatement.closing}</p>
      </Section>
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
