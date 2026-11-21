import type { ExperienceItem, ServiceItem } from "@/types";

/**
 * Experience entries. Dates follow your CV.
 * NOTE: your two resumes give different customer counts (3.85M+ and 875K+).
 * The lower figure is used below; change it if the other is correct.
 */
export const academicExperience: ExperienceItem[] = [
  {
    organization: "Addis Ababa University",
    url: "https://www.aau.edu.et",
    location: "School of Information Technology and Engineering, Addis Ababa",
    roles: [{ title: "Part-time Lecturer (previously Teaching Assistant)", start: "Feb 2024", end: "Present" }],
    highlights: [
      "Teach Fundamentals of AI, Machine Learning, Deep Learning, Reinforcement Learning, Natural Language Processing, Computer Vision, Robotics, Probabilistic Graphical Models, Advanced Algorithms, and Fundamentals of Data Structures and Algorithms, to about 60 students per semester.",
      "Supervised more than 30 student AI/ML projects.",
      "Develop practical learning materials and guide students in applying AI methods to technical problems.",
      "Support research and academic development in the school.",
    ],
    kind: "academic",
  },
  {
    organization: "Aperion AI",
    location: "Virginia, United States (remote)",
    roles: [{ title: "AI/ML Instructor (part-time)", start: "Feb 2026", end: "Present" }],
    highlights: [
      "Design and deliver hands-on training in machine learning, deep learning, NLP, LLMs, agentic AI and MLOps.",
    ],
    kind: "teaching",
  },
];

export const industryExperience: ExperienceItem[] = [
  {
    organization: "Kifiya Financial Technology",
    location: "Addis Ababa",
    roles: [
      { title: "Senior Data Scientist", start: "Oct 2026", end: "Present" },
      { title: "Data Scientist", start: "Aug 2024", end: "Sep 2026" },
    ],
    summary:
      "Machine learning for digital lending across 40+ financial products and 6 banks, in an ecosystem serving 875K+ customers and 5.08M+ loans.",
    highlights: [
      "Lead the end-to-end lifecycle of 10+ reusable credit-risk, fraud-detection and predictive models, from data preparation and feature engineering to validation, explainability, deployment and monitoring.",
      "Developed 32+ credit-scoring (probability of default) and fraud-detection models using transaction, KYC/KYB, psychometric, repayment and alternative data.",
      "Drive model performance assessment, governance and explainability so that credit decisions stay robust and interpretable.",
      "Built agricultural risk and yield-prediction models from satellite-derived NDVI, soil, climate and weather data.",
      "Develop LLM-based decision systems; review modelling approaches and mentor data scientists.",
      "Operationalise reproducible ML workflows with Python, PySpark, Databricks, MLflow, FastAPI, Docker and AWS EKS.",
    ],
    kind: "industry",
  },
  {
    organization: "HABTech Solutions PLC",
    location: "Addis Ababa",
    roles: [{ title: "AI Specialist (part-time)", start: "Sep 2025", end: "Jan 2026" }],
    highlights: [
      "Built LLM-powered analytics over structured and unstructured healthcare data, integrating tabular records and documents into one pipeline with privacy and data-governance controls.",
    ],
    kind: "industry",
  },
  {
    organization: "Addisway Technology Solution",
    location: "Addis Ababa",
    roles: [{ title: "AI/ML Engineer", start: "Sep 2022", end: "Aug 2024" }],
    highlights: [
      "Developed and deployed machine learning models and conversational chatbots for health applications, from data preparation to production.",
    ],
    kind: "industry",
  },
];

/** Verified reviewing roles from your CV. */
export const reviewing: ServiceItem[] = [
  { role: "Reviewer", venue: "NeurIPS", years: "2025, 2026" },
  { role: "Reviewer", venue: "AfricaNLP Workshop", years: "2026, 2027" },
  { role: "Reviewer", venue: "PanAfriCon AI", years: "2024, 2025, 2026" },
];

export const programs: { title: string; detail: string; year: string }[] = [
  { title: "Emerging Leaders in AI (ELAI) Grad Prep Program", detail: "Six-month mentorship and training programme for prospective AI PhD scholars.", year: "2024–25" },
  { title: "AI for Global Health Innovation Challenge", detail: "Finalist.", year: "2024" },
  { title: "Machine Learning for Health (ML4H) Career Mentorship", detail: "Participant in the mentorship track.", year: "2023" },
];

export const awards: { title: string; detail: string; year: string }[] = [
  { title: "Best Social Impact Paper, ACL 2026", detail: "For Afri-MCQA: Multimodal Cultural Question Answering for African Languages. The paper also received a Senior Area Chair Award.", year: "2026" },
  {
    title: "Certificate of Academic Excellence: Top of the 2025 MSc Graduates",
    detail: "College of Technology and Built Environment, Addis Ababa University. Awarded for academic excellence and distinguished performance among the MSc class of 2025.",
    year: "2025",
  },
  {
    title: "Certificate of Recognition for Outstanding Student",
    detail: "Addis Ababa University, signed by the University President and Registrar (June 2025), for outstanding performance among the Master's students of the College of Technology and Built Environment.",
    year: "2025",
  },
  {
    title: "BSc in Biomedical Engineering with Great Distinction",
    detail: "Addis Ababa Institute of Technology, Addis Ababa University (July 2022).",
    year: "2022",
  },
];

/** Talks and presentations. */
export const presentations: { title: string; detail: string; year: string }[] = [
  {
    title: "Oral presentation, AAU Research and Technology Expo Week 2025",
    detail: "College of Technology and Built Environment, Addis Ababa University, 20 May 2025.",
    year: "2025",
  },
  {
    title: "Poster presentation, AAU Research and Technology Expo Week 2025",
    detail: "College of Technology and Built Environment, Addis Ababa University, 20 May 2025.",
    year: "2025",
  },
];
