"use client";

import { useState } from "react";

const siteUrl = "https://happy-forever.vercel.app/";
const shareText =
  "HAPPY FOREVERのホームページ、チェックしてみよう。\n\nHAPPY FOREVER";
const encodedSiteUrl = encodeURIComponent(siteUrl);
const encodedShareText = encodeURIComponent(shareText);
const lineShareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(
  `${shareText} ${siteUrl}`,
)}`;

export default function ShareButtons() {
  const [shareStatus, setShareStatus] = useState("コピー");

  const copySiteUrl = async () => {
    await navigator.clipboard.writeText(siteUrl);
    setShareStatus("コピー済み");
    window.setTimeout(() => setShareStatus("コピー"), 1800);
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

  const chipClass =
    "inline-flex h-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 px-2.5 text-[11px] font-black leading-none text-white transition hover:border-white/40 hover:bg-white/18";

  return (
    <div className="glass-link flex items-center gap-1.5 overflow-x-auto rounded-full border border-white/25 px-2 py-1.5 shadow-[0_0_22px_rgba(244,114,182,0.18)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={shareSite}
        className="inline-flex h-8 shrink-0 items-center gap-2 rounded-full border border-white/30 bg-[linear-gradient(110deg,rgba(236,72,153,0.42),rgba(34,211,238,0.3),rgba(250,204,21,0.22))] px-3 text-xs font-black leading-none text-white shadow-[0_0_22px_rgba(34,211,238,0.18)] transition hover:border-white/60 hover:shadow-[0_0_28px_rgba(244,114,182,0.28)]"
      >
        <span>共有する</span>
        <span className="text-[10px] text-white/75">Share</span>
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedSiteUrl}`}
        target="_blank"
        rel="noreferrer"
        className={chipClass}
      >
        X
      </a>
      <a
        href={lineShareUrl}
        target="_blank"
        rel="noreferrer"
        className={chipClass}
      >
        LINE
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedSiteUrl}`}
        target="_blank"
        rel="noreferrer"
        className={chipClass}
      >
        Facebook
      </a>
      <button
        type="button"
        onClick={copySiteUrl}
        className={chipClass}
      >
        {shareStatus}
      </button>
    </div>
  );
}
