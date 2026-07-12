import type { Metadata } from "next";
import Link from "next/link";

const sunoPlaylistUrl = "https://suno.com/playlist/2399334a-c8fc-45bc-8c0f-8eb67a10b937";

export const metadata: Metadata = {
  title: "狂気のピエロ（SUNO） | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420の別ライン、狂気のピエロ（SUNO）。YouTube動画とSUNOプレイリストをまとめています。",
  alternates: {
    canonical: "/music/crazy-clown",
  },
};

export default function CrazyClownPage() {
  return (
    <main className="forest-rainbow min-h-screen text-white">
      <div className="min-h-screen bg-black/10 px-4 py-12">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <Link
            href="/music"
            className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15"
          >
            ← MUSICに戻る
          </Link>

          <header className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-100">
              SUNO Playlist
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight text-white sm:text-5xl">
              狂気のピエロ（SUNO）
            </h1>
            <p className="mt-4 text-sm font-medium leading-7 text-white/82">
              HAPPYパンダとは別ライン。AIを使って、少し毒舌めの機械音声と危ない雰囲気のラップを作ってみました。
            </p>
          </header>

          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6urmDrJyM1g?si=aKxXNw-vrA43ENvX&rel=0&playsinline=1"
              title="狂気のピエロ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a
            href={sunoPlaylistUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(245,158,11,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
          >
            <p className="text-sm font-black">狂気のピエロ（SUNO）</p>
            <p className="mt-2 text-sm font-medium leading-6 text-white/82">
              SUNOのプレイリストで曲を聴く。
            </p>
            <p className="mt-2 text-xs text-emerald-50/70">
              SUNOの狂気のピエロへ →
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}
