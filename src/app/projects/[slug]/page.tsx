import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, listProjects } from "@/lib/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = listProjects().find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${slug}` }, openGraph: { title: p.title, description: p.summary } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const fm = project.frontmatter;
  return (
    <article className="pb-10">
      <header className="pb-10 pt-14 md:pt-20">
        <Link href="/projects" className="link text-sm">
          Research projects
        </Link>
        <h1 className="mt-4 max-w-[30ch] font-serif text-[2.2rem] font-[540] leading-[1.12] tracking-[-0.015em] md:text-[2.8rem]">{fm.title}</h1>
        <p className="mt-4 max-w-[62ch] text-[1.08rem] leading-relaxed text-ink-2">{fm.summary}</p>
        <p className="mt-3 text-[0.9rem] text-ink-3">{fm.theme}</p>
        {fm.role && <p className="mt-1 text-[0.9rem] text-ink-2">My role: {fm.role}</p>}
      </header>
      <div className="prose prose-research max-w-[70ch] border-t border-rule pt-10 prose-headings:scroll-mt-24">{project.content}</div>
    </article>
  );
}
