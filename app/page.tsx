export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
        <p className="text-xs text-zinc-400 mb-4">DEPLOY TEST: 2025-12-16 01</p>

        {/* ヒーロー */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hello, Happy Forever420! 🌸
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            パンダラップとAI実験のホーム。ここから少しずつ育てていきます。
          </p>
        </section>

        {/* 動画セクション */}
        <section className="mt-16 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">最新のラップ動画</h2>

          <p className="mt-2 text-sm text-zinc-600">
            YouTubeに上げたショートの中から、いま一番見てほしいやつを置いています。
          </p>

          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/P0XM1Kqcjnc"
              title="Panda Rap - Happy Forever"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <a
            href="https://www.youtube.com/@happyforever420"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-red-600 underline underline-offset-4 hover:text-red-700"
          >
            YouTube チャンネルで他の動画も見る →
          </a>
        </section>

        {/* SNS & Links */}
        <section className="mt-16 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">SNS & Link</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://x.com/happyforever420"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 px-5 py-4 transition hover:bg-zinc-50"
            >
              <p className="text-base font-semibold">X（旧Twitter）</p>
              <p className="mt-1 text-sm text-zinc-600">日常と思想のログ。</p>
            </a>

            <a
              href="https://note.com/clear_acacia1018"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 px-5 py-4 transition hover:bg-zinc-50"
            >
              <p className="text-base font-semibold">note</p>
              <p className="mt-1 text-sm text-zinc-600">ロング文章・地獄ダイブ・考察系はこちら。</p>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 px-5 py-4 transition hover:bg-zinc-50"
            >
              <p className="text-base font-semibold">Instagram</p>
              <p className="mt-1 text-sm text-zinc-600">画像・ビジュアル系のログ。</p>
            </a>

            <a
              href="https://sora.chatgpt.com/profile/happyforever420"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 px-5 py-4 transition hover:bg-zinc-50"
            >
              <p className="text-base font-semibold">Sora (ChatGPT Video)</p>
              <p className="mt-1 text-sm text-zinc-600">AI映像・実験ログ。</p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}