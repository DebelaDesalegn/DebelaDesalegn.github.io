import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-ink-2">
        This page does not exist. Go to the <Link href="/" className="link">homepage</Link> or browse <Link href="/publications" className="link">publications</Link>.
      </p>
    </div>
  );
}
