<p className="text-xs text-zinc-400 mt-2">DEPLOY TEST: 2025-12-16 01</p>
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">

      {/* ヒーロー */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Hello, Happy Forever420! 🌸
      </h1>
      <p className="text-lg text-zinc-600 mb-8 text-center px-4">
        パンダラップとAI実験のホーム。ここから少しずつ育てていきます。
      </p>

      {/* 動画セクション */}
      <section className="w-full max-w-3xl px-4 mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          最新のラップ動画
        </h2>

        <p className="text-sm text-zinc-600">
          YouTubeに上げた短いの中から、今一番見てほしいやつ。
        </p>

        {/* YouTube embed（正解形） */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
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
          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 underline underline-offset-4"
        >
          YouTube チャンネルで他の動画も見る →
        </a>
      </section>

      {/* SNS & Links */}
      <section className="w-full max-w-3xl px-4 mt-12">
        <h2 className="text-xl font-semibold mb-4">SNS & Link</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <a href="https://x.com/happyforever420" target="_blank" rel="noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-zinc-50 transition">
            <p className="text-sm font-semibold">X（旧Twitter）</p>
            <p className="text-xs text-zinc-600">日常と思想のログ。</p>
          </a>

          <a href="https://note.com/clear_acacia1018" target="_blank" rel="noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-zinc-50 transition">
            <p className="text-sm font-semibold">note</p>
            <p className="text-xs text-zinc-600">ロング文章・考察。</p>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-zinc-50 transition">
            <p className="text-sm font-semibold">Instagram</p>
            <p className="text-xs text-zinc-600">ビジュアルログ。</p>
          </a>

          <a href="https://sora.chatgpt.com/profile/happyforever420" target="_blank" rel="noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-zinc-50 transition">
            <p className="text-sm font-semibold">Sora (ChatGPT Video)</p>
            <p className="text-xs text-zinc-600">AI映像・実験ログ。</p>
          </a>
        </div>
      </section>

    </main>
  );
}
