import Link from "next/link";
import type { Metadata } from "next";
import { getThesis } from "@/lib/mdx";
import { asset } from "@/lib/site";
import { manuscriptsUnderReview } from "@/data/publications";

export const metadata: Metadata = {
  title: "MSc thesis",
  description: "Attribution Methods for Explainability of Predictive and Deep Generative Diffusion Models. MSc in Artificial Intelligence, Addis Ababa University, 2025.",
  alternates: { canonical: "/thesis" },
};

const thesisBibtex = `@mastersthesis{yadeta2025attribution,
    title = {Attribution Methods for Explainability of Predictive and Deep Generative Diffusion Models},
    author = {Yadeta, Debela Desalegn},
    school = {Addis Ababa University},
    type = {{MSc} thesis},
    address = {Addis Ababa, Ethiopia},
    month = jun,
    year = {2025},
    url = {https://etd.aau.edu.et/handle/123456789/7483}
}`;

export default async function ThesisPage() {
  const { content, frontmatter: fm } = await getThesis();
  return (
    <article className="pb-10">
      <header className="pb-10 pt-14 md:pt-20">
        <p className="text-[0.95rem] text-ink-2">
          {fm.degree}, {fm.institution}, {fm.date}
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
            <dt className="text-[0.82rem] text-ink-3">Advisor</dt>
            <dd className="font-medium">{fm.advisor}</dd>
          </div>
        </dl>
        <p className="mt-3 text-[0.9rem] text-ink-2">{fm.unit}</p>
        <p className="mt-1 text-[0.9rem] text-ink-3">Keywords: {fm.keywords}</p>
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
          {fm.pdf && (
            <a href={fm.pdf} className="link" target="_blank" rel="noopener noreferrer">
              Thesis PDF
            </a>
          )}
          {fm.repository && (
            <a href={fm.repository} className="link" target="_blank" rel="noopener noreferrer">
              AAU repository record
            </a>
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
        <h2 className="font-serif text-[1.4rem] font-[560]">Cite this thesis</h2>
        <pre className="mt-4 overflow-auto border border-rule bg-shelf p-4 font-mono text-[0.78rem] leading-relaxed text-ink-2">
          <code>{thesisBibtex}</code>
        </pre>
      </section>
      <section className="mt-14 max-w-[70ch] border-t border-rule pt-8">
        <h2 className="font-serif text-[1.4rem] font-[560]">Related publications</h2>
        <ul className="mt-4 space-y-4">
          {manuscriptsUnderReview.map((m) => (
            <li key={m.id}>
              <p className="font-serif text-[1.08rem] font-[560] leading-snug">{m.title}</p>
              <p className="text-[0.9rem] text-ink-2">
                {m.authors.join(", ")}. Under review.
              </p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
