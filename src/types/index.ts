export type LinkKind = "scholar" | "github" | "linkedin" | "orcid" | "cv" | "email" | "huggingface";

export interface ProfileLink {
  kind: LinkKind;
  label: string;
  /** Leave as null until you have a real URL; null links are hidden on the site. */
  href: string | null;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  location: string;
  email: string;
  headline: string;
  /** Each string is one paragraph. */
  bio: string[];
  links: ProfileLink[];
  siteUrl: string;
  orcid: string | null;
  affiliation: { name: string; url?: string };
  /** Path to a photo in /public, e.g. "/images/profile.jpg". null hides it. */
  photo: string | null;
}

export type PublicationStatus = "published" | "preprint" | "under-review";

export interface Publication {
  id: string;
  title: string;
  /** Full author list, in order, exactly as published. */
  authors: string[];
  venue: string;
  /** Short venue label used for filtering, e.g. "ACL", "NAACL", "EMNLP", "arXiv". */
  venueShort: string;
  year: number;
  status: PublicationStatus;
  topics: string[];
  summary: string;
  /** Your role, as stated in your CV. */
  role?: string;
  awards?: string[];
  links: { paper?: string; pdf?: string; code?: string; data?: string; arxiv?: string; doi?: string };
  pages?: string;
  /** Verbatim BibTeX. Omit for items without a citable record. */
  bibtex?: string;
  selected?: boolean;
  /** Set true when metadata could not be verified against an official record. */
  needsVerification?: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  /** Publication ids that relate to this area. */
  publications?: string[];
}

export interface Contribution {
  id: string;
  title: string;
  question: string;
  motivation: string;
  methodology: string;
  contribution: string;
  publications: string[];
  projectSlug?: string;
  code?: string | null;
}

export interface ExperienceItem {
  organization: string;
  url?: string;
  location: string;
  roles: { title: string; start: string; end: string }[];
  summary?: string;
  highlights: string[];
  kind: "academic" | "industry" | "teaching";
}

export interface EducationItem {
  degree: string;
  institution: string;
  unit?: string;
  start: string;
  end: string;
  details: string[];
}

export interface ServiceItem {
  role: string;
  venue: string;
  years: string;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  theme: string;
  status: "active" | "completed" | "in-progress" | "published" | "preprint";
  order: number;
  /** Publication id from data/publications.ts this project is based on. */
  paper?: string;
  /** Your role, shown under the title. */
  role?: string;
  publications?: string[];
  code?: string | null;
}

export interface Manuscript {
  id: string;
  title: string;
  authors: string[];
  summary: string;
  topics: string[];
}
