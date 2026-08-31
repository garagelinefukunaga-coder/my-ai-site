import type { Metadata } from "next";
import Link from "next/link";
import FeaturedAlbumVideo from "./RandomAlbumVideo";
import ShareButtons from "./ShareButtons";

const linkCardClass =
  "glass-link group block rounded-lg border border-white/25 px-4 py-3 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15";

const siteUrl = "https://happy-forever.vercel.app/";
const socialLinks = [
  "https://www.youtube.com/channel/UCG754AZ14rrJ7b7hXUbBw8w",
  "https://x.com/happyforever420",
  "https://note.com/clear_acacia1018",
  "https://suno.com/@happyforever42019",
  "https://www.tiktok.com/@happy.farever.420",
];

export const metadata: Metadata = {
  title: "HAPPY FOREVER 420 | Japanese Drill AI Music",
  description:
    "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログ、ブレンダの実験室を公開している個人プロジェクトです。Happyは福、Foreverは永。",
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
        "HAPPY FOREVER 420は、Japanese Drill、AI Music、パンダラッパー、映像作品、note制作ログ、ブレンダの実験室を公開している個人プロジェクトです。Happyは福、Foreverは永。",
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
        "ブレンダの実験室",
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
        "ブレンダの実験室",
      ],
      sameAs: socialLinks,
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
          name: "ブレンダの実験室",
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
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
                Featured Video
              </p>
              <h2 className="hero-title mt-1 text-2xl font-black text-white">
                今のおすすめ動画
              </h2>
              <p className="mt-2 text-sm font-medium text-white/80">
                「輝くハーベスト 横動画バージョン」をトップで紹介しています。
              </p>
            </div>

            <FeaturedAlbumVideo />

            <div className="rounded-lg border border-amber-100/30 bg-amber-200/10 px-4 py-5 shadow-[0_18px_60px_rgba(245,158,11,0.16)] backdrop-blur-md sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-100">
                お知らせ
              </p>
              <div className="mt-3 space-y-3 text-sm font-medium leading-7 text-white/86 sm:text-base">
                <p>
                  2026年9月9日、大麻栽培の罪について判決が出る予定です。判決内容によっては、その後しばらく更新できない可能性があります。
                </p>
                <p>
                  このサイトを見つけて何か気になった方は、各種SNSや公式LINEから気軽にメッセージしていただければと思います。
                </p>
                <p>
                  その間もアイデアを集めて、戻ってきたらまた新しい形で更新していけたらと思っています。
                </p>
              </div>
            </div>

            <Link href="/en" className={linkCardClass}>
              <p className="text-sm font-black">English / Global Page</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                HAPPY FOREVER 420 in English →
              </p>
            </Link>

            <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
              <div className="max-w-2xl space-y-3 text-sm font-medium leading-7 text-white/86 sm:text-base">
                <p>My name is HAPPY FOREVER 420.</p>
                <p>
                  Japanese Drill、AI Music、パンダラップを中心に、音楽・映像・言葉を作っている個人プロジェクトです。
                </p>
                <p>
                  AIを使って試行錯誤しながら、自分にしかできない表現を少しずつ形にしています。
                </p>
              </div>
            </div>

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


            <Link href="/about" className={linkCardClass}>
              <p className="text-sm font-black">HAPPY FOREVER 420について</p>
              <p className="mt-1 text-xs leading-5 text-emerald-50/70">
                パンダラップを始めた理由と、作りながら成長していく自己紹介 →
              </p>
            </Link>
            <Link href="/blender" className={linkCardClass}>
              <p className="text-sm font-black">ブレンダの実験室</p>
              <p className="mt-1 text-xs leading-5 text-emerald-50/70">
                新しいブレンダ占いと道具箱を置いています。
                <br />
                ブレンダの実験室を見る →
              </p>
            </Link>

            <Link href="/merry" className={linkCardClass}>
              <p className="text-sm font-black">秘密の農園メリーの販売場</p>
              <p className="mt-1 text-xs leading-5 text-emerald-50/70">
                HAPPY FOREVER 420「しんどい日を笑って生き残れ」
                <br />
                LINEスタンプ販売中 →
              </p>
            </Link>

          </section>


          <section className="mt-12 rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
              About HAPPY FOREVER 420
            </p>
            <h2 className="hero-title mt-1 text-2xl font-black text-white">
              HAPPY FOREVER 420について
            </h2>
            <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-white/86 sm:text-base">
              <p>
                最初は、なんとなくラップを歌うパンダがいたら面白そうやと思って作り始めました。
              </p>
              <p>
                遊びながら作り続けているうちに、音楽、映像、言葉、キャラクターが少しずつ形になってきました。
              </p>
            </div>
            <Link
              href="/about"
              className="mt-4 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
            >
              自己紹介を読む →
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
                href="https://www.youtube.com/channel/UCG754AZ14rrJ7b7hXUbBw8w"
                target="_blank"
                rel="noreferrer"
                className={linkCardClass}
              >
                <p className="text-sm font-black">YouTube</p>
                <p className="text-xs text-emerald-50/70">動画とパンダラップ。</p>
              </a>

              <a
                href="https://note.com/clear_acacia1018"
                target="_blank"
                rel="noreferrer"
                className={linkCardClass}
              >
                <p className="text-sm font-black">note</p>
                <p className="text-xs text-emerald-50/70">
                  制作記録・曲解説・考察・ロング文章。
                </p>
              </a>

              <a href="https://x.com/happyforever420" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">X（旧Twitter）</p>
                <p className="text-xs text-emerald-50/70">日常と思想のログ。</p>
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

