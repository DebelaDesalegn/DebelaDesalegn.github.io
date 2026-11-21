"use client";

import { useState } from "react";
import { OWNER_NAME } from "@/data/publications";

const COLLAPSE_AT = 20;
const HEAD = 6;

function Name({ name }: { name: string }) {
  if (name === OWNER_NAME) {
    return <span className="font-medium text-accent">{name}</span>;
  }
  return <>{name}</>;
}

/** Full author list with the site owner highlighted. Very long lists collapse. */
export function AuthorList({ authors }: { authors: string[] }) {
  const [open, setOpen] = useState(false);
  const long = authors.length > COLLAPSE_AT;
  const ownerIdx = authors.indexOf(OWNER_NAME);

  if (!long || open) {
    return (
      <p className="text-[0.9rem] leading-snug text-ink-2">
        {authors.map((a, i) => (
          <span key={`${a}-${i}`}>
            <Name name={a} />
            {i < authors.length - 1 ? ", " : ""}
          </span>
        ))}
        {long && (
          <button type="button" onClick={() => setOpen(false)} className="link ml-2 text-[0.85rem]">
            Show fewer
          </button>
        )}
      </p>
    );
  }

  const head = authors.slice(0, HEAD);
  const hidden = authors.length - head.length - (ownerIdx >= HEAD ? 1 : 0);
  return (
    <p className="text-[0.9rem] leading-snug text-ink-2">
      {head.map((a, i) => (
        <span key={a}>
          <Name name={a} />
          {i < head.length - 1 ? ", " : ""}
        </span>
      ))}
      {ownerIdx >= HEAD && (
        <>
          , …, <Name name={OWNER_NAME} /> (author {ownerIdx + 1} of {authors.length})
        </>
      )}
      , and {hidden} others.{" "}
      <button type="button" onClick={() => setOpen(true)} className="link text-[0.85rem]" aria-expanded={false}>
        Show all {authors.length} authors
      </button>
    </p>
  );
}
