"use client";

import { useState } from "react";
import Link from "next/link";

type Fortune = {
  state: string;
  caution: string;
  action: string;
  message: string;
  profile: string;
};

type Zodiac = {
  name: string;
  element: string;
  signal: string;
};

const zodiacSigns: (Zodiac & { start: number; end: number })[] = [
  { name: "牡羊座", element: "火", signal: "即決力と突破力", start: 321, end: 419 },
  { name: "牡牛座", element: "地", signal: "継続力と感覚の精度", start: 420, end: 520 },
  { name: "双子座", element: "風", signal: "情報整理と発信力", start: 521, end: 620 },
  { name: "蟹座", element: "水", signal: "守る力と共感の深さ", start: 621, end: 722 },
  { name: "獅子座", element: "火", signal: "表現力と中心を作る力", start: 723, end: 822 },
  { name: "乙女座", element: "地", signal: "調整力と細部を見る力", start: 823, end: 922 },
  { name: "天秤座", element: "風", signal: "バランス感覚と選択の美学", start: 923, end: 1022 },
  { name: "蠍座", element: "水", signal: "集中力と深く変わる力", start: 1023, end: 1121 },
  { name: "射手座", element: "火", signal: "自由な拡張と未来探索", start: 1122, end: 1221 },
  { name: "山羊座", element: "地", signal: "現実化と積み上げる力", start: 1222, end: 119 },
  { name: "水瓶座", element: "風", signal: "独自性と新しい仕組み作り", start: 120, end: 218 },
  { name: "魚座", element: "水", signal: "想像力と境界を溶かす力", start: 219, end: 320 },
];

const bloodSignals: Record<string, string> = {
  A: "丁寧に整える力が強いぶん、考えすぎると出力が遅くなりやすいタイプ",
  B: "直感で未来分岐を見つける力が強いぶん、気分の波がそのまま判断に出やすいタイプ",
  O: "大きく流れを作る力が強いぶん、細かい違和感を後回しにしやすいタイプ",
  AB: "複数の視点を同時処理できるぶん、自分の本音が見えにくくなりやすいタイプ",
};

const moodSignals = [
  {
    words: ["不安", "こわ", "怖", "迷", "心配"],
    state: "感情センサーが過去の記憶を強めに拾っています。",
    caution: "不安を未来の証拠として扱わないこと。",
    action: "今日の判断を1つだけ小さくして、15分で終わる行動に変換してください。",
  },
  {
    words: ["疲", "しんど", "眠", "だる"],
    state: "脳内AIの処理容量が一時的に下がっています。",
    caution: "疲れている時の結論を、人生全体の答えにしないこと。",
    action: "水分、食事、休憩のどれか1つを先に整えてから動いてください。",
  },
  {
    words: ["怒", "イライラ", "むか"],
    state: "感情エネルギーが強く、突破力に変換できる直前です。",
    caution: "言葉をそのまま放つと、必要な未来分岐まで壊しやすいです。",
    action: "伝えたいことを一度メモに退避して、短い一文に圧縮してください。",
  },
  {
    words: ["楽", "嬉", "最高", "前向", "ワク"],
    state: "未来分岐の感度が上がり、行動と結果がつながりやすい状態です。",
    caution: "勢いだけで約束を増やしすぎないこと。",
    action: "今の気分が残っているうちに、作品や予定を1つだけ形にしてください。",
  },
];

const defaultMoodSignal = {
  state: "思考と感情が再配置されている途中です。",
  caution: "まだ言葉になっていない違和感を、無理に正解へ固定しないこと。",
  action: "今の気分を一文で書き、次にできる一手だけ選んでください。",
};

const getZodiac = (birthDate: string) => {
  const [, month, day] = birthDate.split("-").map(Number);
  const value = month * 100 + day;
  return (
    zodiacSigns.find((sign) =>
      sign.start > sign.end
        ? value >= sign.start || value <= sign.end
        : value >= sign.start && value <= sign.end,
    ) ?? zodiacSigns[0]
  );
};

const getMoodSignal = (mood: string) =>
  moodSignals.find((signal) => signal.words.some((word) => mood.includes(word))) ?? defaultMoodSignal;

export default function BlenderFortunePage() {
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState<Fortune | null>(null);
  const canTellFortune = Boolean(birthDate && bloodType);

  const tellFortune = () => {
    if (!canTellFortune) {
      return;
    }

    const zodiac = getZodiac(birthDate);
    const bloodSignal = bloodSignals[bloodType];
    const moodSignal = getMoodSignal(mood);
    const seed = `${birthDate}${bloodType}${mood}`;
    const total = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const branches = [
      "今日は、未来を広げるよりもノイズを減らす日です。",
      "今日は、止まっていた感情を小さく動かす日です。",
      "今日は、考えを作品や行動に変換しやすい日です。",
      "今日は、人の反応より自分の観測データを信じる日です。",
    ];

    setResult({
      profile: `${zodiac.name}・${zodiac.element}のサイン / ${bloodType}型`,
      state: `${zodiac.signal}が強く出ています。${bloodSignal}。${moodSignal.state}`,
      caution: `${moodSignal.caution} ${zodiac.element}のエネルギーが強い時ほど、感情をそのまま結論に固定しないでください。`,
      action: moodSignal.action,
      message: `${branches[total % branches.length]} 思考を整理した瞬間、未来分岐は静かに変わります。`,
    });
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
            <div className="mt-5 overflow-hidden rounded-lg border border-cyan-200/20 bg-black/35 shadow-[0_0_34px_rgba(0,255,200,0.14)]">
              <img
                src="/blender-fortune.png"
                alt="ブルーン"
                className="mx-auto max-h-[420px] w-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-medium leading-7 text-white/78">
              生年月日、血液型、今の気分から、AI、量子、感情コントロール、未来分岐、思考整理をテーマに読みます。
            </p>
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
              disabled={!canTellFortune}
              className="rounded-lg border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-sm font-black text-white shadow-[0_0_32px_rgba(0,255,200,0.28)] backdrop-blur-md transition hover:bg-cyan-200/30 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/45 disabled:shadow-none"
            >
              占う
            </button>
          </div>

          {result && (
            <section className="space-y-4 rounded-lg border border-white/25 bg-white/10 px-4 py-5 shadow-[0_0_44px_rgba(120,0,255,0.22)] backdrop-blur-md sm:px-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-100">診断ベース</p>
                <p className="mt-2 text-sm leading-7 text-white/86">{result.profile}</p>
              </div>
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
