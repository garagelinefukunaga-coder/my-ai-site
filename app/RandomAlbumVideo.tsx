const featuredVideo = {
  id: "S5OIN9XRruk",
  title: "輝くハーベスト 横動画バージョン",
};

export default function FeaturedAlbumVideo() {
  return (
    <div className="space-y-4">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0&playsinline=1`}
          title={featuredVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
        <p className="text-sm font-black leading-7 text-white">
          {featuredVideo.title}
        </p>
        <p className="mt-1 text-xs font-medium leading-6 text-white/72">
          HAPPY SET ALBUMから選んだ、今のおすすめ動画です。
        </p>
        <div className="mt-3">
          <a
            href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-center text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
          >
            この動画をYouTubeで見る →
          </a>
        </div>
      </div>
    </div>
  );
}
