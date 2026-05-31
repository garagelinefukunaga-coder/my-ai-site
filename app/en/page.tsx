import type { Metadata } from "next";
import Link from "next/link";

const cardClass =
  "glass-link block rounded-lg border border-white/25 px-4 py-4 text-white shadow-[0_0_28px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-white/15";

const siteUrl = "https://happy-forever.vercel.app/";

export const metadata: Metadata = {
  title: "HAPPY FOREVER 420 | Japanese Drill AI Music and Panda Rap",
  description:
    "HAPPY FOREVER 420 is a personal Japanese Drill and AI Music project featuring panda rap videos, visual works, note production logs, and the Brenda fortune-telling page.",
  alternates: {
    canonical: "/en",
    languages: {
      ja: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "HAPPY FOREVER 420 | Japanese Drill AI Music and Panda Rap",
    description:
      "A personal Japanese Drill and AI Music project featuring panda rap videos, visual works, note production logs, and Brenda fortune-telling.",
    url: "/en",
    siteName: "HAPPY FOREVER 420",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/happy-forever-logo.png",
        width: 1254,
        height: 1254,
        alt: "HAPPY FOREVER 420 main visual",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://happy-forever.vercel.app/en#webpage",
      url: "https://happy-forever.vercel.app/en",
      name: "HAPPY FOREVER 420 | Japanese Drill AI Music",
      isPartOf: {
        "@id": "https://happy-forever.vercel.app/#website",
      },
      inLanguage: "en",
      description:
        "English overview of HAPPY FOREVER 420, a Japanese Drill and AI Music project with panda rap videos, visual works, note logs, and Brenda fortune-telling.",
    },
    {
      "@type": "Person",
      "@id": "https://happy-forever.vercel.app/#happy-forever",
      name: "HAPPY FOREVER 420",
      alternateName: "Happyforever 420 / Fukunaga",
      url: siteUrl,
      sameAs: [
        "https://www.youtube.com/shorts/SKl2MPvezDM?si=VkXY6cOOxO_uQ2c_",
        "https://x.com/happyforever420",
        "https://note.com/clear_acacia1018",
        "https://suno.com/@happyforever42019",
        "https://www.tiktok.com/@happy.farever.420",
      ],
      knowsAbout: [
        "Japanese Drill",
        "AI Music",
        "Panda Rap",
        "Music Video",
        "note production logs",
      ],
    },
  ],
};

export default function EnglishPage() {
  return (
    <main className="forest-rainbow min-h-screen overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black/10 px-4 py-10 sm:py-14">
        <section className="mx-auto w-full max-w-3xl space-y-5">
          <Link href="/" className="glass-link inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(16,185,129,0.16)] transition hover:border-red-200/80 hover:bg-white/15">
            Japanese Home →
          </Link>

          <div className="rounded-lg border border-white/15 bg-black/20 px-4 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-100">
              Japanese Drill / AI Music / Panda Rap
            </p>
            <h1 className="hero-title text-4xl font-black leading-tight tracking-wide sm:text-6xl">
              HAPPY FOREVER 420
            </h1>
            <p className="mt-4 text-sm font-medium leading-7 text-white/84 sm:text-base">
              HAPPY FOREVER 420 is a personal project from Japan, built around
              Japanese Drill, AI Music, panda rap videos, visual works, and note
              production logs. The name carries the idea that Happy is
              "Fuku" and Forever is "Naga".
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/20 bg-black/30 shadow-[0_18px_70px_rgba(0,0,0,0.32)]">
            <img
              src="/happy-forever-logo.png"
              alt="HAPPY FOREVER 420 main visual"
              className="block w-full object-cover"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.youtube.com/shorts/SKl2MPvezDM?si=VkXY6cOOxO_uQ2c_"
              target="_blank"
              rel="noreferrer"
              className={cardClass}
            >
              <p className="text-sm font-black">YouTube Panda Rap</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                Watch the latest short video →
              </p>
            </a>

            <a
              href="https://note.com/clear_acacia1018"
              target="_blank"
              rel="noreferrer"
              className={cardClass}
            >
              <p className="text-sm font-black">note Production Logs</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                Read essays, lyrics, and production notes →
              </p>
            </a>

            <Link href="/music" className={cardClass}>
              <p className="text-sm font-black">HAPPY FOREVER MUSIC</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                Music portal and playlists →
              </p>
            </Link>

            <Link href="/blender" className={cardClass}>
              <p className="text-sm font-black">Brenda Fortune Telling</p>
              <p className="mt-1 text-xs text-emerald-50/70">
                A Japanese mini fortune-telling page →
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
