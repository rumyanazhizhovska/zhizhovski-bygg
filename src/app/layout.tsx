import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhizhovski Bygg",
  description: "Velkommen til Zhizhovski Bygg sitt nettsted. Vi tilbyr tjenester innen bygg og anlegg, og vi er dedikert til å levere kvalitetsarbeid til våre kunder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
