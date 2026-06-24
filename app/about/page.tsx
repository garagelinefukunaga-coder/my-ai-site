import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://happy-forever.vercel.app";

export const metadata: Metadata = {
  title: "HAPPY FOREVER 420について | パンダラップとAI音楽",
  description:
    "HAPPY FOREVER 420がパンダラップを作り始めた理由、AI音楽、映像、note制作ログを続けながら成長していく個人プロジェクトの自己紹介ページです。",
  alternates: {
    canonical: "/about",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#about`,
  url: `${siteUrl}/about`,
  name: "HAPPY FOREVER 420について",
  description:
    "HAPPY FOREVER 420がパンダラップを作り始めた理由と、AI音楽、映像、note制作ログを続ける個人プロジェクトの自己紹介。",
  inLanguage: "ja",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@type": "Person",
    "@id": `${siteUrl}/#happy-forever`,
    name: "HAPPY FOREVER 420",
    alternateName: "Happyforever 420 / 福永",
    url: siteUrl,
    image: `${siteUrl}/happy-forever-logo.png`,
    knowsAbout: ["Japanese Drill", "AI音楽", "パンダラップ", "映像作品", "note制作ログ"],
  },
};

export default function AboutPage() {
  return (
    <main className="forest-rainbow min-h-screen overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black/10">
        <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-10 sm:py-14">
          <Link
            href="/"
            className="mb-5 inline-flex w-fit rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
          >
            ← ホームへ戻る
          </Link>

          <section className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-100">
              About / Panda Rap / AI Music
            </p>
            <h1 className="hero-title text-3xl font-black leading-tight tracking-wide text-white sm:text-5xl">
              HAPPY FOREVER 420について
            </h1>
          </section>

          <section className="mt-5 rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
            <div className="space-y-5 text-sm font-medium leading-8 text-white/88 sm:text-base">
              <p>
                最初から、パンダに強いこだわりがあったわけではありません。
              </p>
              <p>
                なんとなく、ラップを歌うパンダがいたら面白そうやと思った。簡単にラップを歌わせられるキャラクターが欲しかった。それくらいの始まりでした。
              </p>
              <p>
                それを遊びながら作り続けているうちに、少しずつ歌詞、音楽、映像、キャラクターの形ができて、気づけば今の位置まで来ていました。
              </p>
              <p>
                これを読んでいるあなたが、どの時点の俺を見ているのかは分かりません。この先も作り続けて、また変わっているかもしれない。
              </p>
              <p>
                ただ、この文章を書いた時点でも、最初と比べれば結構レベルは上がったと思っています。
              </p>
              <p>
                完成してから見せるのではなく、作りながら成長していく。その途中も含めて、HAPPY FOREVER 420のパンダラップです。
              </p>
            </div>
          </section>

          <section className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/music"
              className="glass-link group block rounded-lg border border-white/25 px-4 py-3 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
            >
              <p className="text-sm font-black">HAPPY FOREVER MUSIC</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                制作してきた音楽を見る →
              </p>
            </Link>

            <a
              href="https://note.com/clear_acacia1018"
              target="_blank"
              rel="noreferrer"
              className="glass-link group block rounded-lg border border-white/25 px-4 py-3 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
            >
              <p className="text-sm font-black">note制作ログ</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                曲の考え方や制作記録を読む →
              </p>
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
