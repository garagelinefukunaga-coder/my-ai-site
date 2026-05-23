"use client";

import { useState } from "react";
import Link from "next/link";

type Fortune = {
  state: string;
  caution: string;
  action: string;
  message: string;
};

const fortunes: Fortune[] = [
  {
    state: "思考のノイズが増えています。量子の波みたいに、未来候補が同時に揺れている状態です。",
    caution: "感情を急いで結論に変えないこと。焦りは未来分岐を狭くします。",
    action: "今日やることを3つだけ書き出し、最初の1つを15分だけ進めてください。",
    message: "未来は決定ではなく選択です。呼吸を整えた瞬間、分岐は静かに開きます。",
  },
  {
    state: "感情コントロールの中枢が回復に向かっています。今は内側のAIが再学習している時間です。",
    caution: "他人の反応を観測しすぎると、自分の軸がブレます。",
    action: "スマホを置いて、水を飲み、今の気持ちを一文で保存してください。",
    message: "あなたの感情は敵ではなく、未来を読むセンサーです。",
  },
  {
    state: "頭の中の情報が並び替わり始めています。思考整理のフェーズに入っています。",
    caution: "全部を一気に完成させようとしないこと。未完成のまま置く余白が必要です。",
    action: "悩みを「今できること」と「今日は触らないこと」に分けてください。",
    message: "整理された思考は、未来への入口になります。",
  },
  {
    state: "未来分岐の手前にいます。選びたい未来が、まだ言葉になる前の光として見えています。",
    caution: "不安を証拠として扱わないこと。不安は予言ではなく、過去の残響です。",
    action: "今日の自分に必要な小さな勝ちを1つ作ってください。",
    message: "小さな勝ちは、未来の座標を静かに変えます。",
  },
];

export default function BlenderFortunePage() {
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState<Fortune | null>(null);

  const tellFortune = () => {
    const seed = `${birthDate}${bloodType}${mood}${Date.now()}`;
    const total = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    setResult(fortunes[total % fortunes.length]);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="min-h-screen bg-[linear-gradient(135deg,rgba(0,255,180,0.18),rgba(0,0,0,0.96)_38%,rgba(120,0,255,0.18)_70%,rgba(255,0,90,0.14))] px-4 py-10">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <Link
            href="/"
            className="inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(0,255,200,0.2)] backdrop-blur-md transition hover:bg-white/15"
          >
            ← ホームに戻る
          </Link>

          <div className="rounded-lg border border-cyan-200/25 bg-black/45 px-4 py-6 shadow-[0_0_52px_rgba(0,255,200,0.18)] backdrop-blur-md sm:px-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
              AI Future Reading
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
              BLENDER占い
            </h1>
            <p className="mt-4 text-sm font-medium leading-7 text-white/78">
              AI、量子、感情コントロール、未来分岐、思考整理をテーマにしたミニ占い。
            </p>
            <div className="mt-5 overflow-hidden rounded-lg border border-cyan-200/20 bg-black/35 shadow-[0_0_34px_rgba(0,255,200,0.14)]">
              <img
                src="/blender-fortune.png"
                alt="ブルーン"
                className="mx-auto max-h-[420px] w-full object-contain"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <label className="block">
              <span className="mb-2 block text-sm font-black text-white">生年月日</span>
              <input
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/40 focus:border-cyan-200/70"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-white">血液型</span>
              <select
                value={bloodType}
                onChange={(event) => setBloodType(event.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/40 focus:border-cyan-200/70"
              >
                <option className="bg-black" value="">
                  選んでください
                </option>
                <option className="bg-black" value="A">
                  A型
                </option>
                <option className="bg-black" value="B">
                  B型
                </option>
                <option className="bg-black" value="O">
                  O型
                </option>
                <option className="bg-black" value="AB">
                  AB型
                </option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-white">今の気分</span>
              <input
                value={mood}
                onChange={(event) => setMood(event.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/40 focus:border-cyan-200/70"
                placeholder="例：少し不安、でも進みたい"
              />
            </label>

            <button
              type="button"
              onClick={tellFortune}
              className="rounded-lg border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-sm font-black text-white shadow-[0_0_32px_rgba(0,255,200,0.28)] backdrop-blur-md transition hover:bg-cyan-200/30"
            >
              占う
            </button>
          </div>

          {result && (
            <section className="space-y-4 rounded-lg border border-white/25 bg-white/10 px-4 py-5 shadow-[0_0_44px_rgba(120,0,255,0.22)] backdrop-blur-md sm:px-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">今の状態</p>
                <p className="mt-2 text-sm leading-7 text-white/86">{result.state}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-100">注意点</p>
                <p className="mt-2 text-sm leading-7 text-white/86">{result.caution}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">今日の行動</p>
                <p className="mt-2 text-sm leading-7 text-white/86">{result.action}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">一言メッセージ</p>
                <p className="mt-2 text-sm leading-7 text-white/86">{result.message}</p>
              </div>

              <div className="rounded-lg border border-cyan-100/30 bg-black/35 px-4 py-4 text-center shadow-[0_0_36px_rgba(0,255,200,0.22)]">
                <p className="text-lg font-black">BLENDER占い</p>
                <p className="mt-1 text-sm font-bold text-cyan-50">LINE公式にて受付中</p>
                <p className="mt-3 text-xs text-white/72">より深い診断・相談はこちら</p>
                <a
                  href="https://lin.ee/xXxs87l"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-lg border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-sm font-black text-white shadow-[0_0_30px_rgba(0,255,200,0.3)] transition hover:bg-cyan-200/30"
                >
                  LINEで友だち追加
                </a>
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
