import Link from "next/link";

const playlistLinks = [
  {
    href: "https://youtube.com/playlist?list=PL988GhbTQQYUN5MafhRWiK1C9d_BdQ05y&si=ybYiTkznVSi2KP3Y",
    label: "YouTube Playlist",
  },
  {
    href: "https://suno.com/playlist/193f1a75-1fb0-4d43-a7b2-5bb20601e861",
    label: "SUNO Playlist",
  },
];

function PlaylistLinkBar() {
  return (
    <div className="glass-link flex items-center gap-1.5 overflow-x-auto rounded-full border border-white/25 px-2 py-1.5 shadow-[0_0_22px_rgba(245,158,11,0.18)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <span className="shrink-0 px-2 text-[10px] font-black uppercase tracking-[0.16em] text-amber-100/85">
        Playlist
      </span>
      {playlistLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-8 shrink-0 items-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-black leading-none text-white transition hover:border-red-200/80 hover:bg-white/18"
        >
          {link.label} →
        </a>
      ))}
    </div>
  );
}

export default function AlbumPage() {
  return (
    <main className="forest-rainbow min-h-screen text-white">
      <div className="min-h-screen bg-black/10 px-4 py-12">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/music"
              className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15"
            >
              ← MUSICに戻る
            </Link>
            <Link
              href="/"
              className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15"
            >
              ホームへ
            </Link>
          </div>

          <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-100">
              Happy Set Album
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight tracking-wide sm:text-6xl">
              HAPPY SET ALBUM
            </h1>
            <p className="mt-4 text-sm font-medium leading-7 text-white/82">
              老子力学 → 綺麗に咲く花 → note解説の順番で見るページ。
            </p>
          </div>

          <PlaylistLinkBar />

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-red-100">
              New Cover Song
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/gNcLSvSIJLc"
                title="Panda Rap - New Cover Song"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://note.com/clear_acacia1018/n/n4380f9114c0f?sub_rt=share_pw"
              target="_blank"
              rel="noreferrer"
              className="glass-link mt-4 block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
            >
              <p className="text-sm font-black">
                量子力学、感情コントロール、観測するまでは決まらない 解説
              </p>
              <p className="mt-1 text-xs text-emerald-50/70">
                曲解説をnoteで読む →
              </p>
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
              綺麗に咲く花、赤い目の緑の龍シェンロン
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6fPCNFhm5cQ"
                title="Panda Rap - Happy Forever"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/shorts/6fPCNFhm5cQ?feature=share"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
          </div>

          <a
            href="https://note.com/clear_acacia1018/n/n88a6067162c0"
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15"
          >
            <p className="text-sm font-black">
              綺麗に咲く花、赤い目の緑の龍シェンロン 解説
            </p>
            <p className="mt-1 text-xs text-emerald-50/70">
              曲解説をnoteで読む →
            </p>
          </a>

          <PlaylistLinkBar />
        </section>
      </div>
    </main>
  );
}
