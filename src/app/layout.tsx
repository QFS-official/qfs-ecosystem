import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QFSpay — Ecosistema QFS",
  description:
    "Ecosistema QFS: infraestructura financiera cuántica, activos digitales y servicios institucionales. Contratos en Ethereum, Polygon y BNB Chain.",
  keywords: [
    "QFS",
    "QFSpay",
    "Ecosistema QFS",
    "GCRM",
    "AlArab",
    "TRAEX",
    "NESG",
    "Banco Cuántico QFS",
    "Tarjeta Cuántica QFS",
    "Quantum Financial System",
  ],
  authors: [{ name: "QFSpay" }],
  icons: {
    icon: "https://explorer.qfspay.org/favicon.ico",
  },
  openGraph: {
    title: "QFSpay — Ecosistema QFS",
    description:
      "Infraestructura financiera cuántica, activos digitales y servicios institucionales.",
    siteName: "QFSpay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QFSpay — Ecosistema QFS",
    description:
      "Infraestructura financiera cuántica, activos digitales y servicios institucionales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200 min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
