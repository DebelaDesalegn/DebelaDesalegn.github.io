import Link from "next/link";
import { profile, news } from "@/data/profile";
import { publications, manuscriptsUnderReview } from "@/data/publications";
import { researchInterests, contributions } from "@/data/research";
import { academicExperience, industryExperience, reviewing } from "@/data/experience";
import { Section } from "@/components/ui/section";
import { IntroReveal } from "@/components/ui/intro-reveal";
import { ProfileLinkList } from "@/components/ui/profile-links";
import { InterestList, ContributionItem } from "@/components/research/research-blocks";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { ProjectList } from "@/components/projects/project-list";
import { ExperienceList, ServiceTable } from "@/components/academic/academic-blocks";
import { listProjects } from "@/lib/mdx";
import { asset } from "@/lib/site";

export default function HomePage() {
  const selected = publications.filter((p) => p.selected).sort((a, b) => b.year - a.year);
  const projects = listProjects();
  const teaching = academicExperience.find((e) => e.kind === "teaching");

  return (
    <>
      {/* 1. Researcher introduction: profile column + introduction */}
      <section className="grid gap-10 pb-16 pt-12 md:grid-cols-[15rem_1fr] md:gap-16 md:pb-20 md:pt-20">
        <aside aria-label="Profile" className="md:sticky md:top-24 md:self-start">
          <IntroReveal>
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(profile.photo)}
                alt={`Portrait of ${profile.name}`}
                width={386}
                height={386}
                className="h-40 w-40 rounded-full border border-rule object-cover object-top md:h-48 md:w-48"
              />
            ) : null}
            <h1 className="mt-6 font-serif text-[1.85rem] font-[560] leading-[1.15] tracking-[-0.01em]">{profile.name}</h1>
            <p className="mt-2 text-[0.95rem] leading-snug text-ink-2">{profile.title}</p>
            <p className="mt-3 text-[0.9rem] leading-snug text-ink-3">
              Addis Ababa University
              <br />
              Kifiya Financial Technology
              <br />
              {profile.location}
            </p>
            <ProfileLinkList />
          </IntroReveal>
        </aside>

        <div className="min-w-0 max-w-[44rem]">
          <p className="max-w-[28ch] font-serif text-[1.65rem] font-[420] italic leading-[1.25] tracking-[-0.01em] md:text-[2rem]">
            {profile.headline}
          </p>
          <div className="mt-8 max-w-[64ch] space-y-4 text-[1.04rem] leading-[1.7]">
            {profile.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <h2 id="news-title" className="mt-12 font-serif text-[1.15rem] font-[560]">
            News
          </h2>
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {news.map((n) => (
              <li key={n.text} className="grid gap-1 py-3 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="text-[0.88rem] tabular-nums text-ink-3">{n.date}</span>
                <span className="text-[0.95rem] leading-snug">
                  {n.href ? (
                    <a href={n.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
                      {n.text}
                    </a>
                  ) : (
                    n.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Research interests */}
      <Section id="interests" title="Research interests" more={{ href: "/research", label: "More on my research" }}>
        <InterestList interests={researchInterests} />
      </Section>

      {/* 3. Selected research contributions */}
      <Section id="contributions" title="Selected research contributions">
        <div className="divide-y divide-rule">
          {contributions.map((c) => (
            <ContributionItem key={c.id} c={c} detailed={false} />
          ))}
        </div>
      </Section>

      {/* 4. Recent publications */}
      <Section
        id="publications"
        title="Selected publications"
        aside={`${publications.length} papers and preprints, ${manuscriptsUnderReview.length} manuscripts under review`}
        more={{ href: "/publications", label: "All publications" }}
      >
        <div className="divide-y divide-rule">
          {selected.map((p) => (
            <PublicationEntry key={p.id} pub={p} />
          ))}
        </div>
      </Section>

      {/* 5. Research projects */}
      <Section id="projects" title="Research projects" more={{ href: "/projects", label: "All projects" }}>
        <ProjectList projects={projects.slice(0, 4)} />
      </Section>

      {/* 6. MSc thesis */}
      <Section id="thesis" title="MSc thesis" aside="Addis Ababa University, 2025">
        <Link href="/thesis" className="group block">
          <h3 className="max-w-[40ch] font-serif text-[1.45rem] font-[540] leading-snug tracking-[-0.01em] group-hover:text-accent group-hover:underline">
            Attribution Methods for Explainability of Predictive and Deep Generative Diffusion Models
          </h3>
        </Link>
        <p className="mt-3 text-[0.95rem] text-ink-2">MSc in Artificial Intelligence. Thesis evaluation: Excellent. CGPA 4.00/4.00, Top MSc Graduate of 2025.</p>
        <p className="mt-4 max-w-[68ch] leading-relaxed">
          Develops FIFA, a firefly-inspired method for sparse and faithful attributions of tabular models, and DiffuSAGE, which combines
          Aumann-Shapley values, Integrated Gradients and cross-attention to explain which prompt tokens shape an image generated by Stable
          Diffusion v1.5, when, and where. Both outperform established baselines on faithfulness metrics, and DiffuSAGE agrees with human
          judgement in a 51-participant user study.
        </p>
        <Link href="/thesis" className="link mt-4 inline-block text-[0.95rem]">
          Read the thesis summary
        </Link>
      </Section>

      {/* 7. Academic experience */}
      <Section id="academic" title="Academic experience">
        <ExperienceList items={academicExperience.filter((e) => e.kind === "academic")} />
      </Section>

      {/* 8. Industry experience */}
      <Section id="industry" title="Industry experience" more={{ href: "/experience", label: "Full experience" }}>
        <ExperienceList items={industryExperience.slice(0, 1)} />
      </Section>

      {/* 9. Teaching and service */}
      <Section id="teaching" title="Teaching and service" more={{ href: "/teaching", label: "Teaching and service" }}>
        <p className="max-w-[68ch] leading-relaxed">
          I teach courses from Fundamentals of AI, Machine Learning and Deep Learning to NLP, Computer Vision, Robotics, Reinforcement Learning, Probabilistic Graphical Models and Advanced Algorithms at Addis Ababa University, where I have supervised more than 30
          student AI/ML projects, and {teaching ? "I train practitioners in applied ML and LLMs as an instructor at Aperion AI." : ""}
        </p>
        <h3 className="mb-3 mt-8 font-serif text-[1.08rem] font-[560]">Reviewing</h3>
        <ServiceTable items={reviewing} />
      </Section>

      {/* 10. Contact */}
      <Section id="contact" title="Contact">
        <p className="max-w-[60ch] leading-relaxed">
          I welcome conversations about research collaboration, explainable AI, and language technology for African languages. Email is the best way to reach me.
        </p>
        <p className="mt-4 font-serif text-[1.3rem]">
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
        </p>
        <p className="mt-4 text-[0.95rem] text-ink-2">
          <a href={asset("/files/Debela_Desalegn_Yadeta_CV.pdf")} className="link">
            Download my CV (PDF)
          </a>
        </p>
      </Section>
    </>
  );
}
