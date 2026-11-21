import type { EducationItem } from "@/types";

export const education: EducationItem[] = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "Addis Ababa University",
    unit: "College of Technology and Built Environment",
    start: "Nov 2022",
    end: "Jul 2025",
    details: [
      "CGPA 4.00/4.00. Top MSc Graduate of 2025.",
      "Thesis: Attribution Methods for Explainability of Predictive and Deep Generative Diffusion Models. Evaluation: Excellent.",
      "Coursework: machine learning, deep learning, NLP, computer vision, reinforcement learning, probabilistic graphical models, AI fairness.",
    ],
  },
  {
    degree: "BSc in Biomedical Engineering",
    institution: "Addis Ababa University",
    unit: "College of Technology and Built Environment",
    start: "Sep 2017",
    end: "Jul 2022",
    details: ["Graduated with Great Distinction."],
  },
];

/** Technical stack, grouped. No proficiency bars by design. */
export const skills: { group: string; items: string[] }[] = [
  { group: "Machine learning", items: ["PyTorch", "scikit-learn", "LightGBM", "XGBoost", "TensorFlow", "Hugging Face"] },
  { group: "Research methods", items: ["SHAP", "LIME", "attribution and explainability", "LLM evaluation", "multilingual benchmarks", "multimodal models"] },
  { group: "Data science", items: ["Python", "SQL", "PySpark", "Databricks", "pandas"] },
  { group: "AI engineering", items: ["LLMs", "retrieval-augmented generation", "embeddings", "vector search"] },
  { group: "MLOps", items: ["MLflow", "Docker", "FastAPI", "AWS EKS", "Kubernetes"] },
  { group: "Languages spoken", items: ["Afaan Oromo (native)", "Amharic (native-level)", "English (fluent)"] },
];
