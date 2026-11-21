import { profile } from "@/data/profile";
import { asset } from "@/lib/site";

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
