import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "しんどい日を笑って生き残れ | 秘密の農園メリー",
  description:
    "HAPPY FOREVER 420のLINEスタンプ「しんどい日を笑って生き残れ」を販売する、秘密の農園メリーの公式ページです。",
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

          <a
            href="https://line.me/S/sticker/34608183?_from=lcm"
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-lg border border-white/20 bg-black/25 shadow-[0_20px_70px_rgba(0,0,0,0.38)] transition hover:border-emerald-200/70"
          >
            <img
              src="/merry-sticker-shop.png"
              alt="秘密の農園メリー しんどい日を笑って生き残れ LINEスタンプ"
              className="block w-full object-cover"
            />
          </a>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <h2 className="hero-title text-2xl font-black text-white">
              メリーについて
            </h2>
            <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-white/84">
              <p>
                メリーは、HAPPY FOREVER 420が最初に作ったカスタムGPTです。
              </p>
              <p>
                HAPPY FOREVERの植物育成を手伝っていましたが、今は仕事がなくなったので、LINEスタンプの販売から新しい活動を始めました。
              </p>
              <p>
                これからも、ほかに売れるものがないか考えながら、できることを少しずつ増やしていきます。
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-white/20 bg-black/20 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              LINE Stickers
            </p>
            <h2 className="hero-title mt-2 text-xl font-black text-white">
              HAPPY FOREVER 420
            </h2>
            <h3 className="mt-2 text-base font-black leading-tight text-emerald-100 sm:text-lg">
              しんどい日を笑って生き残れ
            </h3>
            <p className="mt-3 text-sm font-medium leading-7 text-white/84">
              HAPPY FOREVERパンダ、最初のLINEスタンプです。
              <br />
              メリーの言葉で、しんどい日を少し笑いに変えます。
            </p>
            <a
              href="https://line.me/S/sticker/34608183?_from=lcm"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-lg border border-white/25 bg-[#06c755]/80 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(6,199,85,0.25)] transition hover:bg-[#06c755]"
            >
              LINEスタンプ販売ページを見る →
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}
