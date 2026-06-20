import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "秘密の農園メリーの販売場 | HAPPY FOREVER 420",
  description:
    "秘密の農園メリーの紹介とLINEスタンプ販売情報を掲載するHAPPY FOREVER 420の公式ページです。",
  alternates: {
    canonical: "/merry",
  },
};

export default function MerryPage() {
  return (
    <main className="forest-rainbow min-h-screen text-white">
      <div className="min-h-screen bg-black/10 px-4 py-12">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <Link
            href="/"
            className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15"
          >
            ← ホームに戻る
          </Link>

          <header className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-100">
              Secret Farm Merry
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight text-white sm:text-6xl">
              秘密の農園メリーの販売場
            </h1>
            <p className="mt-4 text-sm font-black text-emerald-100">
              LINEスタンプ販売中
            </p>
          </header>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <h2 className="hero-title text-2xl font-black text-white">
              メリーについて
            </h2>
            <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-white/84">
              <p>秘密の農園から生まれた、メリーのLINEスタンプ販売ページです。</p>
              <p>メリーの物語や詳しい紹介を、ここに掲載していきます。</p>
            </div>
          </section>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              LINE Stickers
            </p>
            <h2 className="hero-title mt-2 text-2xl font-black text-white">
              メリーのLINEスタンプ
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/84">
              販売ページへのリンクを準備しています。
            </p>
            <span className="mt-4 inline-flex cursor-not-allowed rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-black text-white/55">
              LINEスタンプ販売ページ 準備中
            </span>
          </section>
        </section>
      </div>
    </main>
  );
}
