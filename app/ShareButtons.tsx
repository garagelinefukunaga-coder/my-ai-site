"use client";

import { useState } from "react";

const siteUrl = "https://happy-forever.vercel.app/";
const shareText = "HAPPY FOREVER｜AI Music・映像・ブレンダの見極め占い";
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
    "inline-flex h-9 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-black text-white transition hover:border-white/40 hover:bg-white/18";

  return (
    <div className="glass-link flex flex-wrap items-center gap-2 rounded-lg border border-white/25 px-3 py-2 shadow-[0_0_28px_rgba(244,114,182,0.2)]">
      <button
        type="button"
        onClick={shareSite}
        className="inline-flex h-10 flex-1 items-center justify-between rounded-full border border-white/30 bg-[linear-gradient(110deg,rgba(236,72,153,0.42),rgba(34,211,238,0.3),rgba(250,204,21,0.22))] px-4 text-left text-sm font-black text-white shadow-[0_0_26px_rgba(34,211,238,0.2)] transition hover:border-white/60 hover:shadow-[0_0_34px_rgba(244,114,182,0.3)] sm:flex-none sm:min-w-64"
      >
        <span>このサイトを共有</span>
        <span className="text-xs text-white/75">Share</span>
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
