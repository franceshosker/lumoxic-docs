import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DocsLayout from "@/components/DocsLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumoxic AI - Developer Documentation",
  description: "Official developer documentation for Lumoxic AI photon computing platform. API reference, SDK guides, and architecture concepts.",
  keywords: ["Lumoxic AI", "photon computing", "API", "SDK", "documentation", "optical computing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex">
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
