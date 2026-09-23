import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/qfs/language-context";

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "QFSpay — Ecosistema QFS",
    description:
      "Infraestructura financiera cuántica, activos digitales y servicios institucionales.",
    siteName: "QFSpay",
    type: "website",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QFSpay — Ecosistema QFS",
    description:
      "Infraestructura financiera cuántica, activos digitales y servicios institucionales.",
    images: ["/icon-512.png"],
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
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
