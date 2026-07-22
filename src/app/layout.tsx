import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Zhizhovski Bygg",
  description: "Velkommen til Zhizhovski Bygg sitt nettsted. Vi tilbyr tjenester innen bygg og anlegg, og vi er dedikert til å levere kvalitetsarbeid til våre kunder.",

  verification: {
    google: "1ZNr5tlIQ9sLHmUvQGLKoQR7ke7AsxjdtjS7mtSTook"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
