"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Publication } from "@/types";
import { PublicationEntry } from "./publication-entry";

function uniq(values: (string | number)[]) {
  return Array.from(new Set(values.map(String)));
}

const selectCls =
  "h-9 rounded-sm border border-rule bg-paper px-2 pr-7 text-sm text-ink focus-visible:outline-2 focus-visible:outline-accent";

export function PublicationBrowser({ publications }: { publications: Publication[] }) {
  const [q, setQ] = useState("");
  const [year, setYear] = useState("all");
  const [topic, setTopic] = useState("all");
  const [venue, setVenue] = useState("all");

  const years = useMemo(() => uniq(publications.map((p) => p.year)).sort().reverse(), [publications]);
  const topics = useMemo(() => uniq(publications.flatMap((p) => p.topics)).sort(), [publications]);
  const venues = useMemo(() => uniq(publications.map((p) => p.venueShort)), [publications]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return publications.filter((p) => {
      if (year !== "all" && String(p.year) !== year) return false;
      if (topic !== "all" && !p.topics.includes(topic)) return false;
      if (venue !== "all" && p.venueShort !== venue) return false;
      if (!needle) return true;
      const hay = [p.title, p.venue, p.summary, ...p.authors, ...p.topics].join(" ").toLowerCase();
      return hay.includes(needle);
    });
  }, [publications, q, year, topic, venue]);

  const groups = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const p of filtered) map.set(p.year, [...(map.get(p.year) ?? []), p]);
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const active = q || year !== "all" || topic !== "all" || venue !== "all";

  return (
    <div>
      <div className="flex flex-col gap-3 border-y border-rule py-4 md:flex-row md:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search publications</span>
          <Search aria-hidden className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search titles, authors, abstracts"
            className="h-9 w-full rounded-sm border border-rule bg-paper pl-8 pr-3 text-sm placeholder:text-ink-3 focus-visible:outline-2 focus-visible:outline-accent"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <label>
            <span className="sr-only">Year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)} className={selectCls}>
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Topic</span>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className={selectCls}>
              <option value="all">All topics</option>
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Venue</span>
            <select value={venue} onChange={(e) => setVenue(e.target.value)} className={selectCls}>
              <option value="all">All venues</option>
              {venues.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-3 text-sm text-ink-3" aria-live="polite">
        {filtered.length} of {publications.length} publications
        {active && (
          <button
            type="button"
            className="link ml-3"
            onClick={() => {
              setQ("");
              setYear("all");
              setTopic("all");
              setVenue("all");
            }}
          >
            Clear filters
          </button>
        )}
      </p>

      {groups.length === 0 && <p className="py-10 text-ink-2">No publications match these filters. Clear a filter or try a different search term.</p>}

      {groups.map(([y, pubs]) => (
        <div key={y} className="grid gap-2 border-b border-rule pt-6 md:grid-cols-[5rem_1fr] md:gap-8">
          <h3 className="font-serif text-xl text-ink-3 md:pt-6">{y}</h3>
          <div className="divide-y divide-rule">
            {pubs.map((p) => (
              <PublicationEntry key={p.id} pub={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
