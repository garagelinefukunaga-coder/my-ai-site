import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HAPPY FOREVERパンダ・ハピパン LINEスタンプ販売まとめ | 秘密の農園メリー",
  description:
    "ハピパンのLINEスタンプとLINE絵文字シリーズをまとめた販売ページです。",
  alternates: {
    canonical: "/merry/stickers",
  },
};

const lineItems = [
  {
    type: "LINE Stickers",
    title: "ハピパン しんどい日を笑って生き残れ",
    href: "https://line.me/S/sticker/34608183?_from=lcm",
    cta: "LINEスタンプ販売ページを見る →",
  },
  {
    type: "LINE Stickers",
    title: "ハピパンスタンプLITE1",
    description: "低価格LITE版のLINEスタンプ販売ページです。",
    href: "https://store.line.me/stickershop/product/34719629/ja?from=sticker",
    cta: "ハピパンスタンプLITE1を販売ページで見る →",
  },
  {
    type: "LINE Stickers",
    title: "ハピパン 成長と感謝の毎日スタンプ",
    description: "毎日の成長と感謝を伝えるハピパンのLINEスタンプです。",
    href: "https://store.line.me/stickershop/product/35181367/ja",
    cta: "成長と感謝の毎日スタンプを販売ページで見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン 連絡・仕事リアクション絵文字2",
    description: "連絡や仕事の返事に使いやすいハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a4618476fe13735fb7c9001/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン毎日あいづち絵文字3",
    description: "毎日のあいづちに使えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a44d03e6fe13735fb7c8ade/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン表情・コンディション絵文字 第4弾",
    description: "表情やコンディションを伝えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a45c1e1198a1f172e43ca96/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン 感情リアクション絵文字 第5弾",
    description: "感情リアクションを返しやすいハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a45d49cad4e7e794791286f/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン ジェスチャーサイン絵文字 第6弾",
    description: "ジェスチャーやサインで気持ちを伝えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a461fba198a1f172e43cd5d/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン 食べ物・飲み物絵文字 第8弾",
    description: "食べ物や飲み物の話題に使えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a4758546fe13735fb7c9587/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン おでかけ・乗り物絵文字 第9弾",
    description: "おでかけや乗り物の会話に使えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a4b0ff837efe94940a298eb/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパンの携帯絵文字風シリーズ第11弾",
    description: "携帯絵文字風に使えるハピパンのLINE絵文字シリーズです。",
    href: "https://store.line.me/emojishop/product/6a5431afa9ee5b3be23637e3/ja",
    cta: "LINE絵文字販売ページを見る →",
  },
  {
    type: "LINE Emoji",
    title: "ハピパン絵文字12 スポーツアクション",
    description: "スポーツやアクションの会話に使えるハピパンのLINE絵文字です。",
    href: "https://store.line.me/emojishop/product/6a549ea00e78c061cc26d766/ja",
    cta: "LINE絵文字販売ページを見る →",
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
              ハピパンのLINEスタンプ・LINE絵文字販売ページをまとめています。
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
        </section>
      </div>
    </main>
  );
}
