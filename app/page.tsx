import Link from "next/link";

const linkCardClass =
  "group block rounded-lg border border-emerald-300/35 bg-black/55 px-4 py-3 text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-300/70 hover:bg-emerald-950/55";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07100c] text-white">
      <div className="min-h-screen bg-[linear-gradient(135deg,rgba(5,46,22,0.95),rgba(6,9,18,0.98)_38%,rgba(71,13,21,0.9)_72%,rgba(13,55,46,0.95))]">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-10 sm:py-14">
          <section className="mb-10 border-b border-emerald-200/20 pb-8">
            <p className="mb-3 text-xs font-bold uppercase text-emerald-200">
              Panda Rap / AI Music / Green Dragon
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
              Happy Forever420
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/80 sm:text-base">
              赤い目の緑の龍、カラフルな花の木、パンダラップ。
              音と映像と言葉をここから育てていきます。
            </p>
          </section>

          <section className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase text-red-200">
                Featured Short
              </p>
              <h2 className="mt-1 text-2xl font-black text-white">
                最新のパンダラップ動画
              </h2>
              <p className="mt-2 text-sm text-emerald-50/75">
                YouTubeに上げた短いの中から、今一番見てほしいやつ。
              </p>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg border border-amber-200/30 bg-black shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
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
              className="inline-flex rounded-lg border border-red-300/60 bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-[0_0_18px_rgba(239,68,68,0.35)] transition hover:bg-red-500"
            >
              YouTube チャンネルで他の動画も見る →
            </a>

            <a
              href="https://note.com/clear_acacia1018/n/n88a6067162c0"
              target="_blank"
              rel="noreferrer"
              className={linkCardClass}
            >
              <p className="text-sm font-black">
                綺麗に咲く花、赤い目の緑の龍シェンロン 解説
              </p>
              <p className="mt-1 text-xs text-emerald-50/70">
                曲解説をnoteで読む →
              </p>
            </a>

            <Link href="/music" className={linkCardClass}>
              <p className="text-sm font-black">HAPPY FOREVER MUSIC</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                音楽ページへ →
              </p>
            </Link>
          </section>

          <section className="mt-12">
            <p className="text-xs font-bold uppercase text-amber-200">
              Portal Links
            </p>
            <h2 className="mt-1 text-2xl font-black text-white">
              SNS & Link
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a href="https://x.com/happyforever420" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">X（旧Twitter）</p>
                <p className="text-xs text-emerald-50/70">日常と思想のログ。</p>
              </a>

              <a href="https://note.com/clear_acacia1018" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">note</p>
                <p className="text-xs text-emerald-50/70">ロング文章・考察。</p>
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">Instagram</p>
                <p className="text-xs text-emerald-50/70">ビジュアルログ。</p>
              </a>

              <a href="https://suno.com/@happyforever42019" target="_blank" rel="noreferrer" className={linkCardClass}>
                <p className="text-sm font-black">SUNO</p>
                <p className="text-xs text-emerald-50/70">AI音楽・パンダラップ。</p>
              </a>

              <a
                href="https://www.tiktok.com/@happy.farever.420?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className={`${linkCardClass} sm:col-span-2`}
              >
                <p className="text-sm font-black">TikTok</p>
                <p className="text-xs text-emerald-50/70">ショート動画・パンダラップ。</p>
              </a>

              <a
                href="https://lin.ee/xXxs87l"
                target="_blank"
                rel="noreferrer"
                className={`${linkCardClass} sm:col-span-2`}
              >
                <p className="text-sm font-black">LINE</p>
                <p className="mb-3 text-xs text-emerald-50/70">お気軽にお問い合わせ</p>
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="友だち追加"
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
