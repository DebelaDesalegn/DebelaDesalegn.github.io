import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The site's core layout device: a narrow left gutter holding the section
 * title, and a reading column on the right. On mobile the title stacks above.
 */
export function Section({
  id,
  title,
  aside,
  more,
  children,
}: {
  id?: string;
  title: string;
  aside?: ReactNode;
  more?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="border-t border-rule py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-12">
        <div>
          <h2 id={id ? `${id}-title` : undefined} className="font-serif text-[1.35rem] font-[560] leading-tight tracking-[-0.005em] md:sticky md:top-24">
            {title}
          </h2>
          {aside && <div className="mt-2 text-sm text-ink-3">{aside}</div>}
          {more && (
            <Link href={more.href} className="link mt-3 hidden text-sm md:inline-block">
              {more.label}
            </Link>
          )}
        </div>
        <div className="min-w-0">
          {children}
          {more && (
            <Link href={more.href} className="link mt-6 inline-block text-sm md:hidden">
              {more.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ title, intro }: { title: string; intro?: ReactNode }) {
  return (
    <header className="pb-10 pt-14 md:pb-14 md:pt-20">
      <h1 className="font-serif text-[2.4rem] font-[540] leading-[1.1] tracking-[-0.015em] md:text-[3rem]">{title}</h1>
      {intro && <div className="mt-5 max-w-[62ch] text-[1.05rem] leading-relaxed text-ink-2">{intro}</div>}
    </header>
  );
}
