import Link from "next/link";

const toolboxUrl = "https://blender-toolbox.happyforever420.chatgpt.site";
const fortuneUrl = `${toolboxUrl}/fortune`;
const hapipanDashUrl = `${toolboxUrl}/hapipan-420-dash`;
const stemMixLabUrl = `${toolboxUrl}/stem-mix-lab`;

export default function BlenderFortunePage() {
  return (
    <main className="min-h-screen bg-[#100c12] text-white">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.2),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),linear-gradient(145deg,rgba(16,12,18,0.98),rgba(44,24,41,0.96)_52%,rgba(10,18,18,0.98))] px-4 py-8 sm:py-10">
        <section className="mx-auto w-full max-w-2xl space-y-5">
          <Link
            href="/"
            className="inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-[0_0_24px_rgba(236,72,153,0.14)] backdrop-blur-md transition hover:bg-white/15"
          >
            ← ホームに戻る
          </Link>

          <div className="rounded-lg border border-white/15 bg-white/[0.07] px-4 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-md sm:px-6">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-rose-100">
                Brenda Tools
              </p>
              <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                ブレンダの実験室
              </h1>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-rose-100/20 bg-black/25 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-md">
            <div className="bg-black/20">
              <img
                src="/blender-fortune.png"
                alt="ブレンダ"
                className="mx-auto max-h-[420px] w-full object-contain"
              />
            </div>
          </div>

          <div className="rounded-lg border border-rose-100/20 bg-white/[0.07] px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <div className="space-y-3 text-sm font-medium leading-7 text-white/84">
              <p className="text-base font-black text-rose-50">ブレンダです。</p>
              <p>ここは、ブレンダの秘密道具を少しずつ動かしていく実験室です。</p>
              <p>占いは、新しい道具箱のブレンダ占いに張り替えました。</p>
              <p>普通に開いたら使えるものだけ、ちゃんと形にしてから置いていきます。</p>
              <p>やさしいだけの占いでは、たぶん終わりません。</p>
              <p>
                ちょっと厳しいことも言うかもしれへんけど、ほんまのところを見ずに、きれいごとだけ並べるんは好きやないんです。
              </p>
              <p>
                濃い線と薄い線を見ながら、いくつかの可能性に幅を持たせて、今のあなたがどう動くのがいちばん自然かを見ていきます。
              </p>
              <p>
                目先の安心より、大事な時にちゃんと自分で選べるように整える占いです。
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-100/25 bg-amber-300/10 px-4 py-5 shadow-[0_18px_55px_rgba(251,191,36,0.18)] backdrop-blur-md sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-100">
              Fortune Game
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-white">
              ハピパンダ氏
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/84">
              ハピパン420ダッシュの実験ツールです。占いゲームみたいに、まずはここから遊べます。
            </p>
            <a
              href={hapipanDashUrl}
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center rounded-lg border border-amber-100/45 bg-amber-300/24 px-5 py-4 text-center text-sm font-black text-white shadow-[0_0_34px_rgba(251,191,36,0.24)] transition hover:bg-amber-200/32 sm:inline-flex sm:w-auto"
            >
              ハピパンダ氏を開く →
            </a>
          </div>

          <div className="rounded-lg border border-rose-100/25 bg-rose-300/10 px-4 py-5 shadow-[0_18px_55px_rgba(244,114,182,0.18)] backdrop-blur-md sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-100">
              Fortune Tool
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-white">
              ブレンダ占い
            </h2>
            <p className="mt-3 text-sm font-medium leading-7 text-white/84">
              新しいツールで作った占いです。スマホ・PCからここで使えます。
            </p>
            <a
              href={fortuneUrl}
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center rounded-lg border border-rose-100/45 bg-rose-300/24 px-5 py-4 text-center text-sm font-black text-white shadow-[0_0_34px_rgba(244,114,182,0.24)] transition hover:bg-rose-200/32 sm:inline-flex sm:w-auto"
            >
              新しいブレンダ占いを開く →
            </a>
          </div>

          <div className="space-y-5 pt-5">
            <div className="rounded-lg border border-emerald-100/25 bg-emerald-300/10 px-4 py-5 shadow-[0_18px_55px_rgba(16,185,129,0.18)] backdrop-blur-md sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
                Mobile Toolbox
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                ブレンダの携帯道具箱
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-white/84">
                スマホ・PC対応／動画を9:16へ端末内で変換
              </p>
              <a
                href={toolboxUrl}
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center rounded-lg border border-emerald-100/45 bg-emerald-300/24 px-5 py-4 text-center text-sm font-black text-white shadow-[0_0_34px_rgba(16,185,129,0.24)] transition hover:bg-emerald-200/32 sm:inline-flex sm:w-auto"
              >
                ブレンダの携帯道具箱を開く →
              </a>
            </div>

            <div className="rounded-lg border border-cyan-100/25 bg-cyan-300/10 px-4 py-5 shadow-[0_18px_55px_rgba(34,211,238,0.18)] backdrop-blur-md sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
                Music Tool
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                STEM Mix Lab
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-white/84">
                曲をボーカル・ドラム・ベース・その他へ分割。テンポや音程の変更、楽器音への入れ替え、ミックス保存までできます。
              </p>
              <a
                href={stemMixLabUrl}
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center rounded-lg border border-cyan-100/45 bg-cyan-300/24 px-5 py-4 text-center text-sm font-black text-white shadow-[0_0_34px_rgba(34,211,238,0.24)] transition hover:bg-cyan-200/32 sm:inline-flex sm:w-auto"
              >
                STEM Mix Labを開く →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
