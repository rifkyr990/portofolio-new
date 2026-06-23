import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifky Ramadhan | Junior Web Developer",
  description:
    "Portfolio of Rifky Ramadhan, a junior web developer specialized in Next.js, ASP.NET Core, Tailwind CSS, and scalable backend architecture.",
  metadataBase: new URL("https://rifkyramadhan.dev"),
  openGraph: {
    title: "Rifky Ramadhan | Junior Web Developer",
    description:
      "A professional portfolio showcasing .NET and modern web development experience with Next.js, TypeScript, and backend systems.",
    type: "website",
    url: "https://rifkyramadhan.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifky Ramadhan | Junior Web Developer",
    description:
      "A professional portfolio showcasing .NET and modern web development experience with Next.js, TypeScript, and backend systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#090b21] font-sans text-white">{children}</body>
    </html>
  );
}
