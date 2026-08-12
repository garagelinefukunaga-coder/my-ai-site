import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HAPPY FOREVERパンダ・ハピパン LINEスタンプ販売まとめ | 秘密の農園メリー",
  description:
    "ハピパンのLINEスタンプと、携帯絵文字風LINE絵文字ページをまとめた販売ページです。",
  alternates: {
    canonical: "/merry/stickers",
  },
};

const lineItems = [
  {
    type: "LINE Stickers",
    title: "ハピパン 成長と感謝の毎日スタンプ",
    description: "毎日の成長と感謝を伝えるハピパンのLINEスタンプです。",
    href: "https://store.line.me/stickershop/product/35181367/ja",
    cta: "成長と感謝の毎日スタンプを販売ページで見る →",
  },
  {
    type: "LINE Stickers",
    title: "ハピパン しんどい日を笑って生き残れ",
    href: "https://line.me/S/sticker/34608183?_from=lcm",
    cta: "LINEスタンプ販売ページを見る →",
  },
  {
    type: "LINE Stickers",
    title: "ハピパン 車管理・点検連絡",
    description: "車の管理や点検連絡に使えるハピパンのLINEスタンプです。",
    href: "https://store.line.me/stickershop/product/35230636/ja",
    cta: "車管理・点検連絡スタンプを販売ページで見る →",
  },
  {
    type: "LINE Stickers",
    title: "ハピパンスタンプLITE1",
    description: "低価格LITE版のLINEスタンプ販売ページです。",
    href: "https://store.line.me/stickershop/product/34719629/ja?from=sticker",
    cta: "ハピパンスタンプLITE1を販売ページで見る →",
  },
];

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
              ハピパンのLINEスタンプ販売ページと、LINE絵文字シリーズの入口をまとめています。
            </p>
          </header>

          {lineItems.map((item) => (
            <section
              key={item.href}
              className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
                {item.type}
              </p>
              <h2 className="mt-2 text-base font-black leading-6 text-white">
                {item.title}
              </h2>
              {item.description && (
                <p className="mt-2 text-xs font-medium leading-6 text-white/78 sm:text-sm">
                  {item.description}
                </p>
              )}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-lg border border-white/25 bg-[#06c755]/80 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(6,199,85,0.25)] transition hover:bg-[#06c755]"
              >
                {item.cta}
              </a>
            </section>
          ))}

          <Link
            href="/merry/stickers/emoji"
            className="block rounded-lg border border-white/20 bg-black/20 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:bg-white/12 sm:px-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              LINE Emoji
            </p>
            <h2 className="mt-2 text-base font-black leading-6 text-white">
              ハピパン 携帯絵文字風 LINE絵文字
            </h2>
            <p className="mt-2 text-xs font-medium leading-6 text-white/78 sm:text-sm">
              ハピパンのLINE絵文字シリーズをまとめたページです。
            </p>
            <p className="mt-3 text-sm font-black text-emerald-100">
              LINE絵文字まとめを見る →
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
