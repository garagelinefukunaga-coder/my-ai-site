import type { Metadata } from "next";
import Link from "next/link";
import BoardApp from "./BoardApp";

export const metadata: Metadata = {
  title: "みんなの掲示板 | HAPPY FOREVER 420",
  description: "あだ名だけで話題を立てて、感想やアイデアを話し合えるHAPPY FOREVER 420の匿名掲示板です。",
};

export default function BoardPage() {
  return (
    <main className="forest-rainbow min-h-screen px-4 py-8 text-white sm:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="inline-flex rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-sm font-bold backdrop-blur-md transition hover:bg-white/15">
          ← ホームに戻る
        </Link>
        <header className="py-8 sm:py-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">HAPPY FOREVER COMMUNITY</p>
          <h1 className="hero-title mt-2 text-4xl font-black leading-tight sm:text-6xl">みんなの掲示板</h1>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/85 sm:text-base">
            あだ名だけで話題を立てたり、返信したりできる場所です。感想、ご意見、アイデア、ちょっと話したいことを自由にどうぞ。
          </p>
        </header>
        <BoardApp />
        <aside className="mt-8 rounded-lg border border-white/15 bg-black/25 p-5 text-xs leading-6 text-white/70">
          <p className="font-black text-white">掲示板の約束</p>
          <p className="mt-2">個人情報、誹謗中傷、違法な内容、宣伝だけの連投は投稿しないでください。投稿時に決めた数字は、自分の投稿を削除するときに使います。</p>
        </aside>
      </div>
    </main>
  );
}
