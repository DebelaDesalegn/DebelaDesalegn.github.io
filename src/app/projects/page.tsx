import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/section";
import { ProjectList } from "@/components/projects/project-list";
import { listProjects } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Research projects",
  description: "Research projects on explainable machine learning, African language NLP, and multimodal AI.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Research projects"
        intro="Each project page follows the structure of a paper: motivation, question, method, data, results and limitations, with links to the publications and code."
      />
      <ProjectList projects={listProjects()} />
    </>
  );
}
