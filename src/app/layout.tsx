import "./globals.css";

import { Footer } from "@/components/sections/footer";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import ScrollTop from "@/components/scroll-top";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AyeZee Web Designs | Home",
  description: "Custom web design and development services",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "AyeZee Web Designs | Home",
    description: "Custom web design and development services",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AyeZee Web Designs",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative pt-[64px] overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col max-w-[100dvw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
