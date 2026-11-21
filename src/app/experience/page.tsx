import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { ExperienceList, EducationList, SimpleList } from "@/components/academic/academic-blocks";
import { academicExperience, industryExperience, awards } from "@/data/experience";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Academic and industry experience, education and awards.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        intro="I combine research with applied machine learning: teaching at Addis Ababa University while building and governing credit-risk and fraud models used across Ethiopian banks."
      />
      <Section id="academic" title="Academic">
        <ExperienceList items={academicExperience} />
      </Section>
      <Section id="industry" title="Industry">
        <ExperienceList items={industryExperience} />
      </Section>
      <Section id="education" title="Education">
        <EducationList items={education} />
      </Section>
      <Section id="awards" title="Awards and honours">
        <SimpleList items={awards} />
      </Section>
    </>
  );
}
