import Link from "next/link";
import type { Metadata } from "next";
import { getThesis } from "@/lib/mdx";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "MSc thesis",
  description: "Hybrid Attribution Methods for Explainability of Predictive and Deep Generative Diffusion Models. MSc in Artificial Intelligence, Addis Ababa University, 2025.",
  alternates: { canonical: "/thesis" },
};

export default async function ThesisPage() {
  const { content, frontmatter: fm } = await getThesis();
  return (
    <article className="pb-10">
      <header className="pb-10 pt-14 md:pt-20">
        <p className="text-[0.95rem] text-ink-2">
          {fm.degree}, {fm.institution}, {fm.year}
        </p>
        <h1 className="mt-4 max-w-[28ch] font-serif text-[2.2rem] font-[540] leading-[1.12] tracking-[-0.015em] md:text-[2.8rem]">{fm.title}</h1>
        <dl className="mt-8 grid max-w-[44rem] grid-cols-2 gap-x-8 gap-y-4 border-y border-rule py-5 text-[0.95rem] sm:grid-cols-4">
          <div>
            <dt className="text-[0.82rem] text-ink-3">Evaluation</dt>
            <dd className="font-medium">{fm.evaluation}</dd>
          </div>
          <div>
            <dt className="text-[0.82rem] text-ink-3">CGPA</dt>
            <dd className="font-medium">4.00 / 4.00</dd>
          </div>
          <div>
            <dt className="text-[0.82rem] text-ink-3">Recognition</dt>
            <dd className="font-medium">Top MSc Graduate, 2025</dd>
          </div>
          <div>
            <dt className="text-[0.82rem] text-ink-3">Unit</dt>
            <dd className="font-medium">{fm.unit}</dd>
          </div>
        </dl>
        <p className="mt-5 flex flex-wrap gap-x-5 text-[0.95rem]">
          {fm.pdf ? (
            <a href={asset(fm.pdf)} className="link">
              Thesis PDF
            </a>
          ) : (
            <span className="text-ink-3">Thesis PDF available on request</span>
          )}
          {fm.code && (
            <a href={fm.code} className="link" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          <Link href="/projects/explainable-machine-learning" className="link">
            Project page
          </Link>
        </p>
      </header>
      <div className="prose prose-research max-w-[70ch] border-t border-rule pt-10">{content}</div>
      <section className="mt-14 max-w-[70ch] border-t border-rule pt-8">
        <h2 className="font-serif text-[1.4rem] font-[560]">Related publications</h2>
        <p className="mt-3 leading-relaxed">
          Three first-author manuscripts based on this thesis are under review at IEEE Access: DiffuSAGE, ExplainGen and FIFA.
        </p>
      </section>
    </article>
  );
}
