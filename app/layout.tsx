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

const googleSiteVerification = "";

export const metadata: Metadata = {
  metadataBase: new URL("https://happy-forever.vercel.app"),
  title: "HAPPY FOREVER｜AI Music・映像・ブレンダの見極め占い",
  description:
    "HAPPY FOREVERは、AIを使いながら音楽・映像・言葉・ブレンダの見極め占いを少しずつ形にしているホームページです。Happyは幸、Foreverは永。少しずつ進んでいます。",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
