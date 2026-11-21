import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { ExperienceList, ServiceTable, SimpleList } from "@/components/academic/academic-blocks";
import { academicExperience, reviewing, programs, presentations } from "@/data/experience";

export const metadata: Metadata = {
  title: "Teaching and service",
  description: "Teaching at Addis Ababa University and Aperion AI, reviewing for NeurIPS, AfricaNLP and PanAfriCon AI, talks, and mentorship programmes.",
  alternates: { canonical: "/teaching" },
};

const courses = ["Machine learning", "Natural language processing", "Computer vision", "Reinforcement learning"];

export default function TeachingPage() {
  return (
    <>
      <PageHeader title="Teaching and service" />
      <Section id="teaching" title="Teaching">
        <ExperienceList items={academicExperience} />
      </Section>
      <Section id="courses" title="Courses taught" aside="Addis Ababa University">
        <ul className="grid gap-2 sm:grid-cols-2">
          {courses.map((c) => (
            <li key={c} className="font-serif text-[1.08rem]">
              {c}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="reviewing" title="Reviewing">
        <ServiceTable items={reviewing} />
      </Section>
      <Section id="talks" title="Talks and presentations">
        <SimpleList items={presentations} />
      </Section>
      <Section id="programs" title="Programmes and mentorship">
        <SimpleList items={programs} />
      </Section>
    </>
  );
}
