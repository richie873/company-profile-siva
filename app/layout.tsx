import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { site } from "@/lib/site";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

const description =
  "PT Siva Parama Dhana, Mojokerto: precision machining, jig & fixture, moulding, fabrikasi, serta pekerjaan sipil dan MEP untuk industri.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PT Siva Parama Dhana | Machining, Jig & Fixture, Fabrikasi, Sipil",
    template: "%s | PT Siva Parama Dhana",
  },
  description,
  openGraph: {
    title: "PT Siva Parama Dhana",
    description,
    type: "website",
    locale: "id_ID",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.tagline,
  telephone: "+62 813 8855 605",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Sukoharjo No. 89, Jetis",
    addressLocality: "Mojokerto",
    addressRegion: "Jawa Timur",
    postalCode: "61352",
    addressCountry: "ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
