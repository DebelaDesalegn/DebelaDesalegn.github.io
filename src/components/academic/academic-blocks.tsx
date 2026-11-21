import type { EducationItem, ExperienceItem, ServiceItem } from "@/types";

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="divide-y divide-rule">
      {items.map((e) => (
        <li key={e.organization} className="py-6 first:pt-0 last:pb-0">
          <h3 className="font-serif text-[1.15rem] font-[560]">
            {e.url ? (
              <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
                {e.organization}
              </a>
            ) : (
              e.organization
            )}
          </h3>
          <p className="text-[0.88rem] text-ink-3">{e.location}</p>
          <ul className="mt-2 space-y-0.5">
            {e.roles.map((r) => (
              <li key={r.title} className="flex flex-wrap justify-between gap-x-4 text-[0.95rem]">
                <span className="font-medium">{r.title}</span>
                <span className="tabular-nums text-ink-2">
                  {r.start} – {r.end}
                </span>
              </li>
            ))}
          </ul>
          {e.summary && <p className="mt-3 max-w-[70ch] text-[0.95rem] text-ink-2">{e.summary}</p>}
          <ul className="mt-3 max-w-[70ch] list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed marker:text-ink-3">
            {e.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function EducationList({ items }: { items: EducationItem[] }) {
  return (
    <ol className="divide-y divide-rule">
      {items.map((e) => (
        <li key={e.degree} className="py-6 first:pt-0 last:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-serif text-[1.15rem] font-[560]">{e.degree}</h3>
            <span className="text-[0.95rem] tabular-nums text-ink-2">
              {e.start} – {e.end}
            </span>
          </div>
          <p className="text-[0.9rem] text-ink-3">
            {e.institution}
            {e.unit ? `, ${e.unit}` : ""}
          </p>
          <ul className="mt-2 max-w-[70ch] list-disc space-y-1 pl-5 text-[0.95rem] leading-relaxed marker:text-ink-3">
            {e.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function ServiceTable({ items }: { items: ServiceItem[] }) {
  return (
    <table className="w-full max-w-[40rem] text-left text-[0.95rem]">
      <caption className="sr-only">Reviewing and academic service</caption>
      <thead>
        <tr className="border-b border-rule text-[0.85rem] text-ink-3">
          <th scope="col" className="py-2 font-medium">Venue</th>
          <th scope="col" className="py-2 font-medium">Role</th>
          <th scope="col" className="py-2 text-right font-medium">Years</th>
        </tr>
      </thead>
      <tbody>
        {items.map((s) => (
          <tr key={s.venue} className="border-b border-rule last:border-0">
            <td className="py-2.5 font-medium">{s.venue}</td>
            <td className="py-2.5 text-ink-2">{s.role}</td>
            <td className="py-2.5 text-right tabular-nums text-ink-2">{s.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SimpleList({ items }: { items: { title: string; detail: string; year: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((a) => (
        <li key={a.title} className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
          <span className="text-[0.95rem] tabular-nums text-ink-3">{a.year}</span>
          <div>
            <p className="font-medium">{a.title}</p>
            <p className="text-[0.92rem] text-ink-2">{a.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
