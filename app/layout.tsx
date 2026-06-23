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
const bingSiteVerification = "2B0C15F9AF1FE9A8047AF079F08404A5";
const yahooSiteVerification = "";

const siteVerification = {
  ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
  ...(yahooSiteVerification ? { yahoo: yahooSiteVerification } : {}),
  ...(bingSiteVerification
    ? { other: { "msvalidate.01": bingSiteVerification } }
    : {}),
} satisfies Metadata["verification"];

export const metadata: Metadata = {
  metadataBase: new URL("https://happy-forever.vercel.app"),
  title: "HAPPY FOREVER 420 | Japanese Drill AI Music",
  description:
    "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログ、ブレンダの見極め占いを公開している個人プロジェクトです。Happyは福、Foreverは永。",
  keywords: [
    "HAPPY FOREVER 420",
    "Happyforever 420",
    "福永",
    "Japanese Drill",
    "AI Music",
    "AI音楽",
    "パンダラッパー",
    "パンダラップ",
    "映像作品",
    "note制作ログ",
    "ブレンダの見極め占い",
    "秘密の農園メリー",
    "LINEスタンプ",
    "しんどい日を笑って生き残れ",
    "量子力学",
    "感情コントロール",
  ],
  authors: [{ name: "HAPPY FOREVER 420" }],
  creator: "HAPPY FOREVER 420",
  publisher: "HAPPY FOREVER 420",
  openGraph: {
    title: "HAPPY FOREVER 420 | Japanese Drill AI Music",
    description:
      "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログを公開している個人プロジェクトです。Happyは福、Foreverは永。",
    url: "/",
    siteName: "HAPPY FOREVER 420",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/happy-forever-logo.png",
        width: 1536,
        height: 1024,
        alt: "HAPPY FOREVER 420 main visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAPPY FOREVER 420 | Japanese Drill AI Music",
    description:
      "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログを公開している個人プロジェクトです。",
    images: ["/happy-forever-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification:
    siteVerification && Object.keys(siteVerification).length > 0
      ? siteVerification
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
