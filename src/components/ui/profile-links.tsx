import { profile } from "@/data/profile";
import { asset } from "@/lib/site";
import { BookOpen, Code, Fingerprint, FileText, GraduationCap, Mail, Briefcase } from "lucide-react";
import type { LinkKind } from "@/types";

const ICONS: Record<LinkKind, typeof Mail> = {
  scholar: GraduationCap,
  github: Code,
  linkedin: Briefcase,
  orcid: Fingerprint,
  cv: FileText,
  email: Mail,
  huggingface: BookOpen,
};

/** Vertical list with icons, used in the homepage profile column. */
export function ProfileLinkList() {
  const links = profile.links.filter((l) => l.href);
  return (
    <ul className="mt-6 space-y-2.5 border-t border-rule pt-5 text-[0.92rem]">
      {links.map((l) => {
        const href = l.href!;
        const external = href.startsWith("http");
        const Icon = ICONS[l.kind];
        return (
          <li key={l.kind}>
            <a
              href={href.startsWith("/") ? asset(href) : href}
              className="group inline-flex items-center gap-2.5 text-ink-2 hover:text-accent"
              {...(external ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
            >
              <Icon aria-hidden className="h-4 w-4 text-ink-3 group-hover:text-accent" strokeWidth={1.75} />
              <span className="group-hover:underline">{l.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Text links to profiles. Links with href: null in data/profile.ts are hidden. */
export function ProfileLinks({ className = "" }: { className?: string }) {
  const links = profile.links.filter((l) => l.href);
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {links.map((l) => {
        const href = l.href!;
        const external = href.startsWith("http");
        return (
          <li key={l.kind}>
            <a
              href={href.startsWith("/") ? asset(href) : href}
              className="link"
              {...(external ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
            >
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
