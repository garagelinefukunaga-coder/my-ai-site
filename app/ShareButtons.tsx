"use client";

import { useState } from "react";

const siteUrl = "https://happy-forever.vercel.app/";
const shareText = "HAPPY FOREVER｜AI Music・映像・ブレンダの見極め占い";
const encodedSiteUrl = encodeURIComponent(siteUrl);
const encodedShareText = encodeURIComponent(shareText);

export default function ShareButtons() {
  const [shareStatus, setShareStatus] = useState("URLをコピー");

  const copySiteUrl = async () => {
    await navigator.clipboard.writeText(siteUrl);
    setShareStatus("コピーできた");
    window.setTimeout(() => setShareStatus("URLをコピー"), 1800);
  };

  const shareSite = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "HAPPY FOREVER",
        text: shareText,
        url: siteUrl,
      });
      return;
    }

    await copySiteUrl();
  };

  return (
    <div className="rounded-lg border border-white/25 bg-black/25 px-4 py-5 shadow-[0_0_46px_rgba(244,114,182,0.22)] backdrop-blur-md sm:px-6">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-100">
        Share HAPPY FOREVER
      </p>
      <button
        type="button"
        onClick={shareSite}
        className="mt-3 w-full rounded-lg border border-white/30 bg-[linear-gradient(110deg,rgba(236,72,153,0.42),rgba(34,211,238,0.34),rgba(250,204,21,0.3))] px-5 py-4 text-left text-lg font-black text-white shadow-[0_0_36px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:border-white/60 hover:shadow-[0_0_52px_rgba(244,114,182,0.34)]"
      >
        このホームページをシェアする
        <span className="mt-1 block text-xs font-bold text-white/78">
          スマホは共有、PCはコピーできます
        </span>
      </button>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedSiteUrl}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-xs font-black text-white transition hover:bg-white/18"
        >
          X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedSiteUrl}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-xs font-black text-white transition hover:bg-white/18"
        >
          Facebook
        </a>
        <a
          href={`https://line.me/R/msg/text/?${encodeURIComponent(`${shareText} ${siteUrl}`)}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-xs font-black text-white transition hover:bg-white/18"
        >
          LINE
        </a>
      </div>
      <button
        type="button"
        onClick={copySiteUrl}
        className="mt-3 w-full rounded-lg border border-emerald-100/30 bg-emerald-300/15 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-200/25"
      >
        {shareStatus}
      </button>
    </div>
  );
}
