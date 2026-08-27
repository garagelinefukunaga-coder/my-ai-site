"use client";

import { useSyncExternalStore } from "react";
import { happySetVideos } from "./music/album/videos";

function randomVideoIndex(previousIndex?: number) {
  let nextIndex = Math.floor(Math.random() * happySetVideos.length);
  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * happySetVideos.length);
  }
  return nextIndex;
}

let currentVideoIndex = randomVideoIndex();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function selectAnotherVideo() {
  currentVideoIndex = randomVideoIndex(currentVideoIndex);
  listeners.forEach((listener) => listener());
}

export default function RandomAlbumVideo() {
  const videoIndex = useSyncExternalStore(
    subscribe,
    () => currentVideoIndex,
    () => -1,
  );

  if (videoIndex < 0) {
    return (
      <div className="rounded-lg border border-white/20 bg-black/20 px-4 py-8 text-center shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
        <p className="text-sm font-black text-white/80">HAPPY SETから選曲中...</p>
      </div>
    );
  }

  const video = happySetVideos[videoIndex];

  return (
    <div className="space-y-4">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
        <iframe
          key={video.id}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.id}?rel=0&playsinline=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 shadow-[0_14px_48px_rgba(0,0,0,0.24)] backdrop-blur-md">
        <p className="text-sm font-black leading-7 text-white">{video.title}</p>
        <p className="mt-1 text-xs font-medium leading-6 text-white/72">
          HAPPY SET ALBUMからランダムで選ばれた1曲です。
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-center text-sm font-black text-white transition hover:border-red-200/80 hover:bg-white/18"
          >
            この動画をYouTubeで見る →
          </a>
          <button
            type="button"
            onClick={selectAnotherVideo}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-100/30 bg-emerald-300/12 px-4 py-2 text-center text-sm font-black text-white transition hover:border-emerald-100/70 hover:bg-emerald-300/20"
          >
            別の曲をランダムで選ぶ
          </button>
        </div>
      </div>
    </div>
  );
}
