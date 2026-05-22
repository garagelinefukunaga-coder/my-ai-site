import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-12">
      <section className="w-full max-w-3xl mx-auto space-y-6">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-zinc-600 hover:text-black underline underline-offset-4"
        >
          ← ホームに戻る
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold">
            HAPPY FOREVER MUSIC
          </h1>
          <p className="text-sm text-zinc-600">
            パンダラップとAI音楽のページ。
          </p>
        </div>

        <a
          href="https://suno.com/@happyforever42019"
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl border px-4 py-3 hover:bg-zinc-50 transition"
        >
          <p className="text-sm font-semibold">SUNOで音楽を聴く</p>
          <p className="text-xs text-zinc-600 mt-1">
            HAPPY FOREVERのAI音楽・パンダラップ →
          </p>
        </a>
      </section>
    </main>
  );
}
