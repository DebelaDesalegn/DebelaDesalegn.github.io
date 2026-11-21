export const nav = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/thesis", label: "Thesis" },
  { href: "/experience", label: "Experience" },
  { href: "/teaching", label: "Teaching" },
  { href: "/cv", label: "CV" },
];

/** Placeholders are shown in development, or when this env var is "true". */
export const showPlaceholders =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix for static files in /public (Link handles basePath for routes). */
export function asset(p: string) {
  return p.startsWith("/") ? `${basePath}${p}` : p;
}

export function initials(name: string) {
  // "Debela Desalegn Yadeta" -> "D. D. Yadeta"
  const parts = name.split(" ");
  const last = parts.pop()!;
  return [...parts.map((p) => `${p[0]}.`), last].join(" ");
}
