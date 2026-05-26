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
  keywords: [
    "HAPPY FOREVER",
    "Happy Forever420",
    "AI Music",
    "AI音楽",
    "パンダラップ",
    "ブレンダの見極め占い",
    "量子力学",
    "感情コントロール",
  ],
  authors: [{ name: "HAPPY FOREVER" }],
  creator: "HAPPY FOREVER",
  publisher: "HAPPY FOREVER",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HAPPY FOREVER｜AI Music・映像・ブレンダの見極め占い",
    description:
      "HAPPY FOREVERは、AIを使いながら音楽・映像・言葉・ブレンダの見極め占いを少しずつ形にしているホームページです。",
    url: "/",
    siteName: "HAPPY FOREVER",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/blender-fortune.png",
        width: 1240,
        height: 1240,
        alt: "HAPPY FOREVER ブレンダの見極め占い",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAPPY FOREVER｜AI Music・映像・ブレンダの見極め占い",
    description:
      "AI音楽、映像、言葉、ブレンダの見極め占いを少しずつ形にしているホームページです。",
    images: ["/blender-fortune.png"],
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
