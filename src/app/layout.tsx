import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const baseUrl = "https://zhizhovski-bygg.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Zhizhovski Bygg",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/white-logo.png`,
  },
};

export const metadata: Metadata = {
  title: "Zhizhovski Bygg",
  description: "Velkommen til Zhizhovski Bygg sitt nettsted. Vi tilbyr tjenester innen bygg og anlegg, og vi er dedikert til å levere kvalitetsarbeid til våre kunder.",

  verification: {
    google: "1ZNr5tlIQ9sLHmUvQGLKoQR7ke7AsxjdtjS7mtSTook"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
