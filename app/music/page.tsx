import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#07100c] text-white">
      <div className="min-h-screen bg-[linear-gradient(135deg,rgba(7,16,12,1),rgba(12,61,42,0.94)_42%,rgba(92,16,28,0.88)_78%,rgba(9,15,29,1))] px-4 py-12">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <Link
            href="/"
            className="inline-flex rounded-lg border border-emerald-300/40 bg-black/45 px-4 py-2 text-sm font-bold text-emerald-50 transition hover:border-red-300/70 hover:bg-emerald-950/50"
          >
            ← ホームに戻る
          </Link>

          <div className="border-b border-emerald-200/20 pb-6">
            <p className="mb-3 text-xs font-bold uppercase text-red-200">
              Sound Portal
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              HAPPY FOREVER MUSIC
            </h1>
            <p className="mt-4 text-sm leading-7 text-emerald-50/75">
              パンダラップとAI音楽のページ。赤い目の緑の龍みたいに、
              音と言葉をカラフルに伸ばしていく場所。
            </p>
          </div>

          <a
            href="https://suno.com/@happyforever42019"
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-amber-200/40 bg-black/55 px-4 py-4 text-white shadow-[0_0_24px_rgba(245,158,11,0.15)] transition hover:-translate-y-0.5 hover:border-red-300/70 hover:bg-emerald-950/55"
          >
            <p className="text-sm font-black">SUNOで音楽を聴く</p>
            <p className="mt-1 text-xs text-emerald-50/70">
              HAPPY FOREVERのAI音楽・パンダラップ →
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}
