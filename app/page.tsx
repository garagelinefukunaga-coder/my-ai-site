// app/page.tsx
// app/page.tsx
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
      <section className="w-full max-w-xl px-4">
        <h2 className="text-2xl font-semibold mb-2">
          最新のパンダラップ動画
        </h2>

        {/* YouTube 埋め込み */}
        <div className="aspect-video w-full mb-4">
          <iframe
            className="w-full h-full rounded-xl border"
            src="https://www.youtube.com/embed/Hs6FU0g6nps"
            title="Panda Rap - Happy Forever"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* チャンネルへのリンク */}
        <a
          href="https://www.youtube.com/@happyforever420"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 underline"
        >
          チャンネル登録して最新の動画をチェック
        </a>
      </section>
    </main>
  );
}
