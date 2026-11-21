import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { Providers } from "@/components/ui/providers";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { JsonLd, personSchema } from "@/components/ui/json-ld";

const description =
  "AI researcher working on explainable AI, multilingual and African language NLP, and multimodal evaluation. Senior Data Scientist at Kifiya Financial Technology and part-time lecturer at Addis Ababa University.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name}, AI Researcher`, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  keywords: ["explainable AI", "African language NLP", "multilingual NLP", "LLM evaluation", "interpretability", "Afaan Oromo", "Addis Ababa University"],
  openGraph: { type: "profile", title: profile.name, description, siteName: profile.name, firstName: "Debela", lastName: "Yadeta", url: "/" },
  twitter: { card: "summary_large_image", title: profile.name, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#15171b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-paper text-ink">
        <Providers>
          <SiteHeader name={profile.name} />
          <main id="main" className="mx-auto max-w-[72rem] px-5 md:px-8">
            {children}
          </main>
          <SiteFooter />
        </Providers>
        <JsonLd data={personSchema()} />
      </body>
    </html>
  );
}
