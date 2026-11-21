import Link from "next/link";
import type { ProjectFrontmatter } from "@/types";

const STATUS: Record<ProjectFrontmatter["status"], string> = {
  active: "Ongoing",
  completed: "Completed",
  "in-progress": "Manuscripts under review",
};

export function ProjectList({ projects }: { projects: ProjectFrontmatter[] }) {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={`/projects/${p.slug}`} className="group grid gap-1 py-6 md:grid-cols-[1fr_12rem] md:gap-8">
            <div>
              <h3 className="font-serif text-[1.2rem] font-[560] leading-snug group-hover:text-accent group-hover:underline">
                {p.title}
              </h3>
              <p className="mt-1.5 max-w-[66ch] text-[0.95rem] leading-relaxed text-ink-2">{p.summary}</p>
            </div>
            <div className="text-[0.88rem] text-ink-3 md:pt-1 md:text-right">
              <p>{p.theme}</p>
              <p>{STATUS[p.status]}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
