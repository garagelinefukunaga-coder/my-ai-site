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
const bingSiteVerification = "";
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
  title: "HAPPY FOREVER 420｜AI Music・映像・ブレンダの見極め占い",
  description:
    "HAPPY FOREVER 420は、AIを使いながら音楽・映像・言葉・ブレンダの見極め占いを少しずつ形にしているホームページです。Happyは福、Foreverは永。少しずつ進んでいます。",
  keywords: [
    "HAPPY FOREVER 420",
    "Happyforever 420",
    "福永",
    "AI Music",
    "AI音楽",
    "パンダラップ",
    "ブレンダの見極め占い",
    "量子力学",
    "感情コントロール",
  ],
  authors: [{ name: "HAPPY FOREVER 420" }],
  creator: "HAPPY FOREVER 420",
  publisher: "HAPPY FOREVER 420",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HAPPY FOREVER 420｜AI Music・映像・ブレンダの見極め占い",
    description:
      "HAPPY FOREVER 420は、AIを使いながら音楽・映像・言葉・ブレンダの見極め占いを少しずつ形にしているホームページです。Happyは福、Foreverは永。",
    url: "/",
    siteName: "HAPPY FOREVER 420",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/happy-forever-logo.png",
        width: 1254,
        height: 1254,
        alt: "HAPPY FOREVER 420 logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAPPY FOREVER 420｜AI Music・映像・ブレンダの見極め占い",
    description:
      "HAPPY FOREVER 420は、AI音楽、映像、言葉、ブレンダの見極め占いを少しずつ形にしているホームページです。",
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
