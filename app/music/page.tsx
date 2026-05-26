import Link from "next/link";

export default function MusicPage() {
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

          <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-100">
              Sound Portal
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight tracking-wide sm:text-6xl">
              HAPPY FOREVER MUSIC
            </h1>
            <p className="mt-4 text-sm font-medium leading-7 text-white/82">
              パンダラップとAI音楽のページ。赤い目の緑の龍みたいに、
              音と言葉をカラフルに伸ばしていく場所。
            </p>
          </div>

          <Link
            href="/music/album"
            className="glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(245,158,11,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
          >
            <p className="text-sm font-black">HAPPY SET ALBUM</p>
            <p className="mt-1 text-xs text-emerald-50/70">
              次のページへ →
            </p>
          </Link>

          <a
            href="https://suno.com/playlist/f80cbfe2-59e7-4583-b693-bb75ddb2a48f"
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(245,158,11,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
          >
            <p className="text-sm font-black">J-POP Mixアルバム（SUNO）</p>
            <p className="mt-1 text-xs text-emerald-50/70">
              SUNOのJ-POPアルバムへ →
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}
