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
  metadataBase: new URL(baseUrl),
  title: {
    default: "Zhizhovski Bygg",
    template: "%s | Zhizhovski Bygg",
  },
  description:
    "Zhizhovski Bygg tilbyr snekkerarbeid, montering, håndverkertjenester og malerarbeid med fokus på kvalitet.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Zhizhovski Bygg",
    title: "Zhizhovski Bygg",
    description: "Profesjonelt håndverk innen snekring, montering og maling.",
  },
  verification: {
    google: "1ZNr5tlIQ9sLHmUvQGLKoQR7ke7AsxjdtjS7mtSTook",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
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
