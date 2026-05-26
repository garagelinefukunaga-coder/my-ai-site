import Link from "next/link";

const linkCardClass =
  "glass-link group block rounded-lg border border-white/25 px-4 py-3 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://happy-forever.vercel.app/#website",
      url: "https://happy-forever.vercel.app/",
      name: "HAPPY FOREVER",
      alternateName: ["Happy Forever420", "HAPPY FOREVER MUSIC"],
      inLanguage: "ja",
      description:
        "HAPPY FOREVERは、AIを使いながら音楽・映像・言葉・ブレンダの見極め占いを少しずつ形にしているホームページです。",
    },
    {
      "@type": "Person",
      "@id": "https://happy-forever.vercel.app/#happy-forever",
      name: "HAPPY FOREVER",
      url: "https://happy-forever.vercel.app/",
      sameAs: [
        "https://x.com/happyforever420",
        "https://note.com/clear_acacia1018",
        "https://suno.com/@happyforever42019",
        "https://www.tiktok.com/@happy.farever.420",
      ],
      knowsAbout: [
        "AI音楽",
        "パンダラップ",
        "映像",
        "ブレンダの見極め占い",
        "量子力学",
        "感情コントロール",
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
            <h1 className="hero-title text-4xl font-black leading-tight tracking-wide text-white sm:text-6xl">
              HAPPY FOREVER
            </h1>
          </section>

          <section className="space-y-4">
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
                src="https://www.youtube.com/embed/gNcLSvSIJLc"
                title="Panda Rap - Happy Forever"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.youtube.com/shorts/gNcLSvSIJLc?feature=share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              YouTube チャンネルで他の動画も見る →
            </a>

            <a
              href="https://note.com/clear_acacia1018/n/n4380f9114c0f?sub_rt=share_pw"
              target="_blank"
              rel="noreferrer"
              className="glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
            >
              <p className="text-sm font-black">
                量子力学、感情コントロール、観測するまでは決まらない 解説
              </p>
              <p className="mt-1 text-xs text-emerald-50/70">
                曲解説をnoteで読む →
              </p>
            </a>

            <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
              <div className="max-w-2xl space-y-3 text-sm font-medium leading-7 text-white/86 sm:text-base">
                <p>My name is HAPPY FOREVER.</p>
                <p>日本語の漢字で、Happy は「福」、Forever は「永」。</p>
                <p>
                  まだ何かが定まっているわけではありませんが、AIを使いながら、音楽・映像・言葉を少しずつ形にしています。
                </p>
                <p>試行錯誤しながら、自分にしかできない表現を作っていきます。</p>
                <p>皆様、よろしくお願いいたします。</p>
                <p>HAPPY FOREVER</p>
              </div>
            </div>

            <Link href="/music" className={linkCardClass}>
              <p className="text-sm font-black">HAPPY FOREVER MUSIC</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                音楽ページへ →
              </p>
            </Link>

            <Link href="/blender" className={linkCardClass}>
              <p className="text-sm font-black">ブレンダの見極め占い</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                今週の流れをそっと見極める →
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
        </div>
      </div>
    </main>
  );
}
