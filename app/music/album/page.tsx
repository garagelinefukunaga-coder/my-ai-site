import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HAPPY SET ALBUM | HAPPY FOREVER 420",
  description:
    "HAPPY FOREVER 420のHAPPY SET ALBUM。綺麗な花を咲かせて、赤い目の龍シェンロン、輝くハーベスト、輝くトリコーム、HAPPY FLOWERINGなどの動画とnote解説をまとめています。",
  alternates: {
    canonical: "/music/album",
  },
};

const playlistLinks = [
  {
    href: "https://youtube.com/playlist?list=PL988GhbTQQYUN5MafhRWiK1C9d_BdQ05y&si=ybYiTkznVSi2KP3Y",
    label: "YouTube Playlist",
  },
  {
    href: "https://suno.com/playlist/193f1a75-1fb0-4d43-a7b2-5bb20601e861",
    label: "SUNO Playlist",
  },
  {
    href: "https://suno.com/playlist/bbe2b5f1-8dc5-4f9e-963b-9d9f31d46b06",
    label: "SUNO English",
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
          </div>

          <PlaylistLinkBar />

          <a
            href="https://distrokid.com/hyperfollow/happyforever420/happy-forever-420"
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-amber-100/35 bg-amber-300/12 px-4 py-5 text-white shadow-[0_0_34px_rgba(245,158,11,0.2)] transition hover:-translate-y-0.5 hover:border-amber-100/75 hover:bg-amber-300/18 sm:px-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              Streaming Release
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
              HAPPY SET 日本語版 配信中
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/82">
              HAPPY SETの日本語バージョンを、Spotifyなどの音楽配信サービスで聴けます。
            </p>
            <p className="mt-3 text-sm font-black text-amber-50">
              Spotify・各配信サービスで聴く →
            </p>
          </a>

          <a
            href="https://distrokid.com/hyperfollow/happyforever420/happy-set--ver-english--?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-emerald-100/35 bg-emerald-300/12 px-4 py-5 text-white shadow-[0_0_34px_rgba(52,211,153,0.2)] transition hover:-translate-y-0.5 hover:border-emerald-100/75 hover:bg-emerald-300/18 sm:px-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">
              Streaming Release
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
              HAPPY SET Ver: English 配信中
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/82">
              HAPPY SETの英語バージョンを、Spotifyなどの音楽配信サービスで聴けます。
            </p>
            <p className="mt-3 text-sm font-black text-emerald-50">
              Spotify・各配信サービスで聴く →
            </p>
          </a>

          <a
            href="https://suno.com/playlist/bbe2b5f1-8dc5-4f9e-963b-9d9f31d46b06"
            target="_blank"
            rel="noreferrer"
            className="glass-link block rounded-lg border border-sky-100/30 bg-sky-300/10 px-4 py-5 text-white shadow-[0_0_32px_rgba(56,189,248,0.18)] transition hover:-translate-y-0.5 hover:border-sky-100/70 hover:bg-sky-300/16 sm:px-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">
              English Version / SUNO
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
              HAPPY SET Ver: English
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/82">
              日本語版の自作リリックと韻をもとに、AIの力を借りて作った英語バージョンです。
            </p>
            <p className="mt-2 text-sm font-medium leading-7 text-white/76">
              理由は分かりませんが、公開した頃から海外フォロワーが約1週間で60人ほど増えました。再生数はまだ大きく変わった感じではありませんが、海外へ届き始めた記録として残しています。
            </p>
            <p className="mt-3 text-xs font-black text-sky-50/80">
              SUNOで英語版プレイリストを聴く →
            </p>
          </a>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              綺麗な花を咲かせて、赤い目の龍シェンロン
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/c195CqWl5ts?rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - 綺麗な花を咲かせて、赤い目の龍シェンロン"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=c195CqWl5ts"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                植物に必要なものと、植物の成長をテーマにしたパンダラップ。
                <br />
                花が育っていく姿と、人間が少しずつ成長していく姿を重ねた曲です。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n88a6067162c0"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              輝くハーベスト 横動画バージョン
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/S5OIN9XRruk?rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - 輝くハーベスト 横動画バージョン"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=S5OIN9XRruk"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              輝くトリコーム、HAPPY FLOWERING
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/MlBUiMZuNUc?rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - 輝くトリコーム、HAPPY FLOWERING"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=MlBUiMZuNUc"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                花とともに育つ。人間も育つ。花の成長と人間の成長を重ねた「輝くトリコーム、HAPPY FLOWERING」の解説をnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/nb06e82ff3b50?sub_rt=share_pw"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              人生ゲームにリセットはない｜イライラした時こそ頭を冷やせ
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/oVZ0LsVxY4U?si=XpXWXKUuxvRS7kT4&rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - 人生ゲームにリセットはない｜イライラした時こそ頭を冷やせ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=oVZ0LsVxY4U"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                人生ゲームにリセットはない。セーブなし、リセットなしで、コツコツレベルを上げていく考えをnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n4e009503d872?sub_rt=share_sb"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              少しでも足掻き、生きる日々
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dYJCj0SfmAg?si=QcY4gILATOBGIYRO&rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - 少しでも足掻き、生きる日々"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=dYJCj0SfmAg"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                少しでも足掻き、生きる日々について、曲の考え方と今の気持ちをnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n0b29274d4ac7?sub_rt=share_sb"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              みんな僕に少しずつ分けてくれよ
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/kOXAteZb58A?si=e8L10_i33qZsrP_4&rel=0&playsinline=1"
                title="HAPPY FOREVER 420 - みんな僕に少しずつ分けてくれよ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=kOXAteZb58A"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                「みんな僕に少しずつ分けてくれよ」の解説note。YouTubeはいいね、登録、コメントが大事らしいのに全部言ってみた流れをまとめています。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n59273f1f538c?sub_rt=share_sb"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              ハイで回す、PDCA
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VLOUCho8-cs?rel=0&playsinline=1"
                title="Panda Rap - ハイで回す、PDCA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/shorts/VLOUCho8-cs"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                ハイで回す、PDCAについて、動きながら考えて次へ回していく感覚をnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n2ecfe4d88c4e"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              景色は変わる感じ方一つで
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/qIidO9DCRfI?rel=0&playsinline=1"
                title="Panda Rap - 景色は変わる感じ方一つで"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/shorts/qIidO9DCRfI"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                景色は変わる感じ方一つで、同じ世界でも受け取り方ひとつで見え方が変わる感覚をnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/ne3cf8755cb7a?sub_rt=share_pw"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              ハッピーじゃないし、未来へ繋ぐ意志
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ZE72hBtFzi8?rel=0&playsinline=1"
                title="Panda Rap - ハッピーじゃないし、未来へ繋ぐ意志"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.youtube.com/shorts/ZE72hBtFzi8"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                ハッピーじゃないし、未来へ繋ぐ意志について、曲の考え方と制作の流れをnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n925a3afbd85d"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              理想の自分軸、自分に負けて嫌なやつになるな
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ATivnkcRmy8"
                title="Panda Rap - 理想の自分軸、自分に負けて嫌なやつになるな"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://youtube.com/shorts/ATivnkcRmy8?si=RgnuQo6-eiR1ePOx"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                理想の自分軸を持ち、自分に負けて嫌なやつにならないための考えをnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/nde0deddbe5a1"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              ステップバイステップ、自分のペースで
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/JC3zIJEdxjM"
                title="Panda Rap - ステップバイステップ、自分のペースで"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://youtube.com/shorts/JC3zIJEdxjM?si=2WFfpVjCnBXngioY"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                ステップバイステップで自分の位置を確認して、先を見ながらゆっくり登っていく気持ちをnoteにまとめました。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n43558d184a50"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              努力と成長、能力は未知、1日1日が大事
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/GvRlRMG7nac"
                title="Panda Rap - 努力と成長、能力は未知、1日1日が大事"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://youtube.com/shorts/GvRlRMG7nac?si=fpMF2gddZqE18a5L"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                努力と成長、能力は未知、1日1日が大事をテーマにしたパンダラップ。
                <br />
                焦らず積み重ねる感覚と、毎日の一歩を大事にする気持ちをnoteにまとめています。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n435facc56999"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              過去の意味が変わる瞬間
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/SKl2MPvezDM"
                title="Panda Rap - 過去の意味が変わる瞬間"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://youtube.com/shorts/SKl2MPvezDM?si=VkXY6cOOxO_uQ2c_"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-lg border border-white/25 bg-red-500/45 px-4 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:bg-red-400/55"
            >
              この動画をYouTubeで見る →
            </a>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                過去の意味が変わる瞬間をテーマにしたパンダラップ。
                <br />
                自分を変える努力と、未来の見え方が変わる感覚を音にしています。
              </p>
              <a
                href="https://note.com/clear_acacia1018"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
            </div>
          </div>

          <div>
            <h2 className="hero-title mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              量子力学、感情コントロール、観測するまで未来はわからない
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/gNcLSvSIJLc"
                title="Panda Rap - 量子力学、感情コントロール"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-sm font-medium leading-7 text-white/86">
                見る覚悟と、感情をコントロールする感覚をテーマにしたパンダラップ。
                <br />
                量子力学的に複数の可能性へ構えて、観測された瞬間に適切な考えと動きができるようにする曲です。
              </p>
              <a
                href="https://note.com/clear_acacia1018/n/n4380f9114c0f?sub_rt=share_pw"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
              >
                この曲の詳しい解説はnoteへ →
              </a>
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
