export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">

      {/* ヒーローエリア */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Hello, Happy Forever420! 🌸
      </h1>
      <p className="text-lg text-zinc-600 mb-8 text-center px-4">
        パンダラップとAI実験のホーム。ここから少しずつ育てていきます。
      </p>

      {/* 動画セクション */}
      <section className="w-full max-w-3xl px-4 mt-10 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">
          最新のパンダラップ動画
        </h2>

        <p className="text-sm text-zinc-600">
          YouTube に上げたショートの中から、いま一番見てほしいやつを置いてます。
        </p>

        {/* YouTube 埋め込み */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/PoXM1Kgqcjnc?feature=share"
            title="Panda Rap - Happy Forever"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* YouTube チャンネルへ */}
        <a
          href="https://www.youtube.com/@happyforever420"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 underline underline-offset-4"
        >
          YouTube チャンネルで他の動画も見る →
        </a>
      </section>

      {/* SNS / Link セクション */}
      <section className="w-full max-w-3xl px-4 mt-12">
        <h2 className="text-xl font-semibold mb-4">SNS & Link</h2>

        <div className="grid gap-4 sm:grid-cols-2">

          {/* X */}
          <a
            href="https://x.com/happyforever420"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-4 py-3 hover:bg-zinc-50 transition"
          >
            <p className="text-sm font-semibold">X（旧Twitter）</p>
            <p className="text-xs text-zinc-600">日常と思想のログ。</p>
          </a>

          {/* note */}
          <a
            href="https://note.com/clear_acacia1018"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-4 py-3 hover:bg-zinc-50 transition"
          >
            <p className="text-sm font-semibold">note</p>
            <p className="text-xs text-zinc-600">ロング文章・地獄ダイブ・考察系はこちら。</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-4 py-3 hover:bg-zinc-50 transition"
          >
            <p className="text-sm font-semibold">Instagram</p>
            <p className="text-xs text-zinc-600">画像・ビジュアル系のログ。</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@happyforever.420?is_from_webapp=1"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-dashed border-zinc-200 px-4 py-3 hover:bg-zinc-50 transition"
          >
            <p className="text-sm font-semibold">TikTok</p>
            <p className="text-xs text-zinc-600">ショート動画の別バージョンなど。</p>
          </a>

        </div>
      </section>

    </main>
  );
}
