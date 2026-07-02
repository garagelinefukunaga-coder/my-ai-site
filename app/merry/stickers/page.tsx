import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HAPPY FOREVERパンダ・ハピパン LINEスタンプ販売まとめ | 秘密の農園メリー",
  description:
    "ハピパンのLINEスタンプ「しんどい日を笑って生き残れ」と、低価格LITE版のハピパンスタンプLITE1をまとめた販売ページです。",
  alternates: {
    canonical: "/merry/stickers",
  },
};

export default function MerryStickersPage() {
  return (
    <main className="forest-rainbow min-h-screen text-white">
      <div className="min-h-screen bg-black/10 px-4 py-12">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <Link
            href="/merry"
            className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15"
          >
            ← メリー販売場に戻る
          </Link>

          <header className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-100">
              Sticker Shop
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight text-white sm:text-5xl">
              HAPPY FOREVERパンダ・ハピパン LINEスタンプ販売まとめ
            </h1>
            <p className="mt-4 text-sm font-black leading-7 text-emerald-100">
              ハピパンのLINEスタンプ販売ページをまとめています。
            </p>
          </header>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              LINE Stickers
            </p>
            <h2 className="mt-2 text-base font-black leading-6 text-white">
              ハピパン しんどい日を笑って生き残れ
            </h2>
            <a
              href="https://line.me/S/sticker/34608183?_from=lcm"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-lg border border-white/25 bg-[#06c755]/80 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(6,199,85,0.25)] transition hover:bg-[#06c755]"
            >
              LINEスタンプ販売ページを見る →
            </a>
          </section>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              LINE Stickers
            </p>
            <h2 className="mt-2 text-base font-black leading-6 text-white">
              ハピパンスタンプLITE1
            </h2>
            <p className="mt-2 text-xs font-medium leading-6 text-white/78 sm:text-sm">
              低価格LITE版のLINEスタンプ販売ページです。
            </p>
            <a
              href="https://store.line.me/stickershop/product/34719629/ja?from=sticker"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-lg border border-white/25 bg-[#06c755]/80 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(6,199,85,0.25)] transition hover:bg-[#06c755]"
            >
              ハピパンスタンプLITE1を販売ページで見る →
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}
