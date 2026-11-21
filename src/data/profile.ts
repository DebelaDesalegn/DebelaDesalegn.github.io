import type { Profile } from "@/types";

/**
 * Central profile data. Edit this file to change your name, bio and links
 * everywhere on the site.
 *
 * TODO: set siteUrl to your real domain once deployed (used for SEO + Open Graph).
 */
export const profile: Profile = {
  name: "Debela Desalegn Yadeta",
  shortName: "Debela Desalegn",
  title: "AI Researcher, Senior Data Scientist, ML Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "dabedesalegn@gmail.com",
  headline: "Researching and building intelligent systems that understand, explain, and learn.",
  bio: [
    "I am an AI researcher and Senior Data Scientist working at the intersection of machine learning research, explainable AI, multilingual NLP, and practical AI systems.",
    "My research focuses on understanding complex machine learning models, developing methods for interpretable AI, and advancing AI research for multilingual and African language contexts.",
    "Alongside my research, I work on developing and deploying machine learning systems for real-world applications.",
  ],
  links: [
    { kind: "scholar", label: "Google Scholar", href: "https://scholar.google.com/citations?user=a272tZcAAAAJ" },
    { kind: "github", label: "GitHub", href: "https://github.com/DebelaDesalegn" },
    { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/debela-desalegn430" },
    { kind: "orcid", label: "ORCID", href: "https://orcid.org/0009-0002-1476-2965" },
    { kind: "cv", label: "CV (PDF)", href: "/files/Debela_Desalegn_Yadeta_CV.pdf" },
    { kind: "email", label: "Email", href: "mailto:dabedesalegn@gmail.com" },
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  orcid: "0009-0002-1476-2965",
  affiliation: { name: "Addis Ababa University", url: "https://www.aau.edu.et" },
};

/** Short dated notes shown on the homepage. Newest first. */
export const news: { date: string; text: string; href?: string }[] = [
  {
    date: "Oct 2026",
    text: "CulturalRiddles, a community-built benchmark of riddles from 62 cultures, is on arXiv.",
    href: "https://arxiv.org/abs/2610.29968",
  },
  { date: "Sep 2026", text: "Started as Senior Data Scientist at Kifiya Financial Technology." },
  {
    date: "Jul 2026",
    text: "Afri-MCQA received the Best Social Impact Paper award at ACL 2026.",
    href: "https://aclanthology.org/2026.acl-long.1869/",
  },
  { date: "Jul 2025", text: "Completed the MSc in Artificial Intelligence at Addis Ababa University (CGPA 4.00/4.00), recognised as a Top MSc Graduate of 2025." },
];
