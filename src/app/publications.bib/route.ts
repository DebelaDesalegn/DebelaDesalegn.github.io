import { sortedPublications } from "@/data/publications";

export const dynamic = "force-static";

export function GET() {
  const body = sortedPublications()
    .filter((p) => p.bibtex)
    .map((p) => p.bibtex)
    .join("\n\n");
  return new Response(`% Publications of Debela Desalegn Yadeta\n\n${body}\n`, {
    headers: { "Content-Type": "application/x-bibtex; charset=utf-8" },
  });
}
