import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { ProjectFrontmatter } from "@/types";
import { mdxComponents } from "@/components/ui/mdx-components";

const CONTENT = path.join(process.cwd(), "src", "content");

export async function renderMdx<T extends Record<string, unknown>>(source: string) {
  return compileMDX<T>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeKatex] },
    },
  });
}

export function listProjects(): ProjectFrontmatter[] {
  const dir = path.join(CONTENT, "projects");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => matter(fs.readFileSync(path.join(dir, f), "utf8")).data as ProjectFrontmatter)
    .sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string) {
  const file = path.join(CONTENT, "projects", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return renderMdx<ProjectFrontmatter & Record<string, unknown>>(fs.readFileSync(file, "utf8"));
}

export interface ThesisFrontmatter {
  title: string;
  degree: string;
  institution: string;
  unit: string;
  year: number;
  evaluation: string;
  pdf: string | null;
  code: string | null;
  [key: string]: unknown;
}

export async function getThesis() {
  const file = path.join(CONTENT, "thesis", "thesis.mdx");
  return renderMdx<ThesisFrontmatter>(fs.readFileSync(file, "utf8"));
}
