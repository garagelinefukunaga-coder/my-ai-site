import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "./ShareButtons";

const linkCardClass =
  "glass-link group block rounded-lg border border-white/25 px-4 py-3 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15";

const siteUrl = "https://happy-forever.vercel.app/";
const socialLinks = [
  "https://youtube.com/shorts/GvRlRMG7nac?si=fpMF2gddZqE18a5L",
  "https://x.com/happyforever420",
  "https://note.com/clear_acacia1018",
  "https://suno.com/@happyforever42019",
  "https://www.tiktok.com/@happy.farever.420",
];

export const metadata: Metadata = {
  title: "HAPPY FOREVER 420 | Japanese Drill AI Music",
  description:
    "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログ、ブレンダの見極め占いを公開している個人プロジェクトです。Happyは福、Foreverは永。",
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/en",
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://happy-forever.vercel.app/#website",
      url: siteUrl,
      name: "HAPPY FOREVER 420",
      alternateName: ["Happyforever 420 / 福永", "HAPPY FOREVER MUSIC"],
      image: "https://happy-forever.vercel.app/happy-forever-logo.png",
      inLanguage: "ja",
      description:
        "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログ、ブレンダの見極め占いを公開している個人プロジェクトです。Happyは福、Foreverは永。",
    },
    {
      "@type": "Person",
      "@id": "https://happy-forever.vercel.app/#happy-forever",
      name: "HAPPY FOREVER 420",
      alternateName: "Happyforever 420 / 福永",
      url: siteUrl,
      image: "https://happy-forever.vercel.app/happy-forever-logo.png",
      sameAs: socialLinks,
      knowsAbout: [
        "Japanese Drill",
        "AI音楽",
        "パンダラップ",
        "パンダラッパー",
        "映像",
        "note制作ログ",
        "ブレンダの見極め占い",
        "量子力学",
        "感情コントロール",
      ],
    },
    {
      "@type": "MusicGroup",
      "@id": "https://happy-forever.vercel.app/#music-group",
      name: "HAPPY FOREVER 420",
      alternateName: "Happyforever 420 / 福永",
      url: siteUrl,
      image: "https://happy-forever.vercel.app/happy-forever-logo.png",
      genre: ["Japanese Drill", "AI Music", "Panda Rap"],
      sameAs: socialLinks,
    },
    {
      "@type": "CreativeWork",
      "@id": "https://happy-forever.vercel.app/#creative-work",
      name: "HAPPY FOREVER 420 Japanese Drill AI Music",
      creator: {
        "@id": "https://happy-forever.vercel.app/#happy-forever",
      },
      url: siteUrl,
      image: "https://happy-forever.vercel.app/happy-forever-logo.png",
      inLanguage: "ja",
      about: [
        "Japanese Drill",
        "AI Music",
        "パンダラッパー",
        "映像作品",
        "note制作ログ",
        "ブレンダの見極め占い",
      ],
      sameAs: socialLinks,
    },
    {
      "@type": "VideoObject",
      "@id": "https://happy-forever.vercel.app/#latest-video",
      name: "努力と成長、能力は未知、1日1日が大事 | HAPPY FOREVER 420",
      description:
        "HAPPY FOREVER 420の最新パンダラップ動画。努力と成長、未知の能力、1日1日を大事にする感覚をテーマにしたショート動画です。",
      thumbnailUrl: [
        "https://i.ytimg.com/vi/GvRlRMG7nac/maxresdefault.jpg",
        "https://happy-forever.vercel.app/happy-forever-logo.png",
      ],
      embedUrl: "https://www.youtube.com/embed/GvRlRMG7nac",
      contentUrl: "https://youtube.com/shorts/GvRlRMG7nac",
      publisher: {
        "@id": "https://happy-forever.vercel.app/#happy-forever",
      },
      inLanguage: "ja",
      genre: ["Japanese Drill", "AI Music", "Panda Rap"],
    },
    {
      "@type": "ImageObject",
      "@id": "https://happy-forever.vercel.app/#main-image",
      name: "HAPPY FOREVER 420 main visual",
      contentUrl: "https://happy-forever.vercel.app/happy-forever-logo.png",
      caption: "HAPPY FOREVER 420 Japanese Drill AI Music main visual",
      creator: {
        "@id": "https://happy-forever.vercel.app/#happy-forever",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://happy-forever.vercel.app/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "HAPPY FOREVER MUSIC",
          item: "https://happy-forever.vercel.app/music",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ブレンダの見極め占い",
          item: "https://happy-forever.vercel.app/blender",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="forest-rainbow min-h-screen overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black/10">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-10 sm:py-14">
          <section className="mb-5 rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-100">
              Panda Rap / AI Music / Green Dragon
            </p>
            <h1 className="hero-title mb-5 text-4xl font-black leading-tight tracking-wide text-white sm:text-6xl">
              HAPPY FOREVER 420
            </h1>
            <div className="mb-5 overflow-hidden rounded-lg border border-white/20 bg-black/30 shadow-[0_18px_70px_rgba(0,0,0,0.32)]">
              <img
                src="/happy-forever-logo.png"
                alt="HAPPY FOREVER 420 logo"
                className="block w-full object-cover"
              />
            </div>
          </section>

          <section className="space-y-4">
            <ShareButtons />

            <Link href="/en" className={linkCardClass}>
              <p className="text-sm font-black">English / Global Page</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                HAPPY FOREVER 420 in English →
              </p>
            </Link>

            <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
              <div className="max-w-2xl space-y-3 text-sm font-medium leading-7 text-white/86 sm:text-base">
                <p>My name is HAPPY FOREVER 420.</p>
                <p>補助表記は、Happyforever 420 / 福永。</p>
                <p>日本語の漢字で、Happy は「福」、Forever は「永」。</p>
                <p>
                  HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログを公開している個人プロジェクトです。
                </p>
                <p>
                  まだ何かが定まっているわけではありませんが、AIを使いながら、音楽・映像・言葉を少しずつ形にしています。
                </p>
                <p>試行錯誤しながら、自分にしかできない表現を作っていきます。</p>
                <p>皆様、よろしくお願いいたします。</p>
                <p>HAPPY FOREVER 420</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-100">
                Featured Short
              </p>
              <h2 className="hero-title mt-1 text-2xl font-black text-white">
                最新のパンダラップ動画
              </h2>
              <p className="mt-2 text-sm font-medium text-white/80">
                YouTubeに上げた短いの中から、今一番見てほしいやつ。
              </p>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/GvRlRMG7nac"
                title="Panda Rap - 努力と成長、能力は未知、1日1日が大事"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <a
              href="https://youtube.com/shorts/GvRlRMG7nac?si=fpMF2gddZqE18a5L"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              YouTube チャンネルで他の動画も見る →
            </a>

            <div className="pt-2">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-100">
                Main Pages
              </p>
              <h2 className="hero-title mt-1 text-2xl font-black text-white">
                メインページ
              </h2>
            </div>

            <Link href="/music" className={linkCardClass}>
              <p className="text-sm font-black">HAPPY FOREVER MUSIC</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                HAPPY FOREVER制作音楽ページ →
              </p>
            </Link>

            <Link href="/blender" className={linkCardClass}>
              <p className="text-sm font-black">ブレンダの見極め占い</p>
              <p className="mt-1 text-xs leading-5 text-emerald-50/70">
                APIなしの簡単版。占いキャラとして作ったブレンダで、まずは勧誘占いから。
                <br />
                公式LINEでは、ブレンダを使ってもう少し深く対応します →
              </p>
            </Link>

          </section>

          <section className="mt-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-100">
              Portal Links
            </p>
            <h2 className="hero-title mt-1 text-2xl font-black text-white">
              SNS & Link
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a
                href="https://youtube.com/shorts/GvRlRMG7nac?si=fpMF2gddZqE18a5L"
                target="_blank"
                rel="noreferrer"
                className={linkCardClass}
              >
                <p className="text-sm font-black">YouTube</p>
                <p className="text-xs text-emerald-50/70">最新のパンダラップ動画。</p>
              </a>

              <a
                href="https://note.com/clear_acacia1018"
                target="_blank"
                rel="noreferrer"
                className={linkCardClass}
              >
                <p className="text-sm font-black">note制作ログ</p>
                <p className="text-xs text-emerald-50/70">制作記録・曲解説・考察。</p>
              </a>

              <a href="https://x.com/happyforever420" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">X（旧Twitter）</p>
                <p className="text-xs text-emerald-50/70">日常と思想のログ。</p>
              </a>

              <a href="https://note.com/clear_acacia1018" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">note</p>
                <p className="text-xs text-emerald-50/70">ロング文章・考察。</p>
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">Instagram</p>
                <p className="text-xs text-emerald-50/70">ビジュアルログ。</p>
              </a>

              <a href="https://suno.com/@happyforever42019" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">SUNO</p>
                <p className="text-xs text-emerald-50/70">AI音楽・パンダラップ。</p>
              </a>

              <a
                href="https://www.tiktok.com/@happy.farever.420?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className={`${linkCardClass} sm:col-span-2`}
              >
                <p className="text-sm font-black">TikTok</p>
                <p className="text-xs text-emerald-50/70">ショート動画・パンダラップ。</p>
              </a>

              <a
                href="https://line.me/R/oaMessage/%40494whwcg/?%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
                target="_blank"
                rel="noreferrer"
                className={`${linkCardClass} sm:col-span-2`}
              >
                <p className="text-sm font-black">LINE</p>
                <p className="mb-3 text-xs text-emerald-50/70">お気軽にお問い合わせ</p>
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="友だち追加"
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
          </section>

          <div className="mt-8">
            <ShareButtons />
          </div>
        </div>
      </div>
    </main>
  );
}
