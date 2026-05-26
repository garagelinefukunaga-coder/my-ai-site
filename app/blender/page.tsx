"use client";

import { useState } from "react";
import Link from "next/link";

const lineUrl =
  "https://line.me/R/oaMessage/%40494whwcg/?%E3%83%96%E3%83%AC%E3%83%B3%E3%83%80%E3%81%AE%E8%A6%8B%E6%A5%B5%E3%82%81%E5%8D%A0%E3%81%84";

type FortuneResult = {
  profile: string;
  overall: string;
  love: string;
  work: string;
  message: string;
};

type Zodiac = {
  name: string;
  element: string;
  look: string;
};

const zodiacSigns: (Zodiac & { start: number; end: number })[] = [
  { name: "牡羊座", element: "火", look: "勢いで道を開く力", start: 321, end: 419 },
  { name: "牡牛座", element: "地", look: "ゆっくり確かめて本物を残す力", start: 420, end: 520 },
  { name: "双子座", element: "風", look: "情報を拾って流れを変える力", start: 521, end: 620 },
  { name: "蟹座", element: "水", look: "大切なものを守りながら育てる力", start: 621, end: 722 },
  { name: "獅子座", element: "火", look: "表現で場の空気を動かす力", start: 723, end: 822 },
  { name: "乙女座", element: "地", look: "細部を整えて信頼に変える力", start: 823, end: 922 },
  { name: "天秤座", element: "風", look: "距離感と美意識で選び直す力", start: 923, end: 1022 },
  { name: "蠍座", element: "水", look: "本音の奥まで見にいく力", start: 1023, end: 1121 },
  { name: "射手座", element: "火", look: "遠くの可能性へ踏み出す力", start: 1122, end: 1221 },
  { name: "山羊座", element: "地", look: "現実を積み上げて形にする力", start: 1222, end: 119 },
  { name: "水瓶座", element: "風", look: "人と違う視点で仕組みを作る力", start: 120, end: 218 },
  { name: "魚座", element: "水", look: "感じたものをやわらかく受け取る力", start: 219, end: 320 },
];

const bloodReadings: Record<string, string> = {
  A: "丁寧に見ようとするぶん、気を遣いすぎるところがあります",
  B: "直感が速いぶん、気分が先に走ってしまう時があります",
  O: "大きく受け止められるぶん、小さい違和感を後回しにしがちです",
  AB: "頭では分かっているのに、心だけ別の場所に残りやすいところがあります",
};

const moodReadings = [
  {
    words: ["不安", "心配", "怖", "こわ", "迷"],
    text: "気持ちが少し先回りしています。悪い予感に見えるものの中に、ただの疲れも混ざっています",
  },
  {
    words: ["疲", "しんど", "眠", "だる"],
    text: "今日は判断力より回復力を優先したほうがよさそうです。無理に元気なふりをすると、あとで響きます",
  },
  {
    words: ["怒", "イライラ", "むか"],
    text: "腹が立つのは、ほんまは大事にしたかった部分を雑に触られたからかもしれません",
  },
  {
    words: ["嬉", "楽", "最高", "前向", "ワク"],
    text: "気持ちの明るさがちゃんと追い風になっています。ただ、勢いで引き受けすぎるのは少し注意です",
  },
];

const defaultMoodReading =
  "今の気分は、まだ言葉になりきっていないようです。無理にきれいな答えにせず、少しだけ眺めるくらいで大丈夫です";

const overallOpenings = [
  "今日は、無理に愛想よくせんでもええ流れです。",
  "今日は、少し立ち止まって見極めるほうが強いです。",
  "今日は、頑張り方を少し変えるだけで空気が軽くなります。",
  "今日は、自分を雑に扱う人や場所から、半歩だけ距離を取るのがよさそうです。",
];

const loveOpenings = [
  "恋愛は、相手を読む前に自分が削られてへんか見たほうがええ日です。",
  "恋愛は、優しさの出しすぎに少し注意です。",
  "恋愛は、追いかけるより観察するほうが流れをつかめます。",
  "恋愛は、言葉の量より温度を見る日です。",
];

const workOpenings = [
  "仕事や作業は、全部を背負うほど評価される週ではありません。",
  "仕事運は、整える力が効いてきます。",
  "仕事では、勢いより段取りが味方になります。",
  "仕事面は、少し言いにくい確認ほど先に済ませたほうがよさそうです。",
];

const brendaClosings = [
  "ちゃんと見えている人ほど、今日は急がなくて大丈夫です。",
  "ええ人でいる前に、自分の扱われ方を見てくださいね。",
  "心がざわつく時ほど、答えは大きな声では来ません。小さい違和感のほうを見てください。",
  "無理に明るくせんでも大丈夫です。整えるだけで、ちゃんと次の流れは来ます。",
];

const getTodayKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
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

const pick = <T,>(items: T[], seed: number, offset: number) => items[(seed + offset) % items.length];

const getMoodReading = (mood: string) =>
  moodReadings.find((reading) => reading.words.some((word) => mood.includes(word)))?.text ?? defaultMoodReading;

export default function BlenderFortunePage() {
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState<FortuneResult | null>(null);
  const canTellFortune = Boolean(birthDate && bloodType && mood.trim());

  const tellFortune = () => {
    if (!canTellFortune) {
      return;
    }

    const zodiac = getZodiac(birthDate);
    const seedText = `${birthDate}-${bloodType}-${mood}-${getTodayKey()}`;
    const seed = Array.from(seedText).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const bloodReading = bloodReadings[bloodType];
    const moodReading = getMoodReading(mood);

    setResult({
      profile: `${zodiac.name} / ${bloodType}型 / ${zodiac.element}の流れ`,
      overall: `${pick(overallOpenings, seed, 0)} ${zodiac.look}が出ていますが、今は押し切るより、何を残して何を置くかを見たほうがええです。 ${moodReading}。 ${bloodReading}ので、頑張りすぎると雑に扱われやすい流れもあります。 ただ、気づいた時点で流れは変えられますから、今日は自分の境界線を少し丁寧に引いてください。`,
      love: `${pick(loveOpenings, seed, 1)} 好きな人や大切な人に合わせるのは悪くありませんが、合わせたあとに自分だけ疲れているなら、そこは見直しどころです。 今日の気分を無視してまで、ええ顔をせんでも大丈夫です。 ただ、何でも笑って流す癖だけは、そろそろ減らしてええと思います。`,
      work: `${pick(workOpenings, seed, 2)} 今日は、目立つ成果よりも、曖昧な部分をきちんと分けることが運を上げます。 頼まれたことを全部抱えると、親切ではなく便利な人になってしまいます。 できること、今日は無理なこと、その線引きを静かに出せたら十分です。`,
      message: `${pick(brendaClosings, seed, 3)} ブレンダから見ると、あなたはもう少し自分の感覚を信じてよさそうです。 きつい答えを急いで出さなくても構いません。 でも、違和感をなかったことにするのだけは、今日はやめときましょうね。`,
    });
  };

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
                Brenda Reading
              </p>
              <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                ブレンダの見極め占い
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

          <div className="rounded-lg border border-white/15 bg-black/30 px-4 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <p className="mb-4 text-sm font-medium leading-7 text-white/82">
              生年月日と血液型、気分から今日のあなたの流れをブレンダがそっと見極めます。
            </p>
            <div className="grid gap-4">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-white">生年月日</span>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md focus:border-rose-200/70"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black text-white">血液型</span>
                <select
                  value={bloodType}
                  onChange={(event) => setBloodType(event.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md focus:border-rose-200/70"
                >
                  <option className="bg-[#100c12]" value="">
                    選んでください
                  </option>
                  <option className="bg-[#100c12]" value="A">
                    A型
                  </option>
                  <option className="bg-[#100c12]" value="B">
                    B型
                  </option>
                  <option className="bg-[#100c12]" value="O">
                    O型
                  </option>
                  <option className="bg-[#100c12]" value="AB">
                    AB型
                  </option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black text-white">今の気分</span>
                <input
                  value={mood}
                  onChange={(event) => setMood(event.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/45 focus:border-rose-200/70"
                  placeholder="例：少し不安、でも進みたい"
                />
              </label>

              <button
                type="button"
                onClick={tellFortune}
                disabled={!canTellFortune}
                className="rounded-lg border border-rose-100/40 bg-rose-300/20 px-5 py-3 text-sm font-black text-white shadow-[0_0_32px_rgba(244,114,182,0.28)] backdrop-blur-md transition hover:bg-rose-200/30 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/45 disabled:shadow-none"
              >
                占う
              </button>
            </div>
          </div>

          {result && (
            <section className="space-y-4">
              <div className="rounded-lg border border-white/15 bg-white/[0.08] px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-md sm:px-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-100">今日の見立て</p>
                <p className="mt-2 text-sm leading-7 text-white/80">{result.profile}</p>
              </div>

              {[
                ["今日の全体運", result.overall],
                ["恋愛運", result.love],
                ["仕事運", result.work],
                ["ブレンダからのひとこと", result.message],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/15 bg-black/28 px-4 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6"
                >
                  <p className="text-sm font-black text-rose-50">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/84">{text}</p>
                </div>
              ))}

              <div className="rounded-lg border border-rose-100/25 bg-white/[0.08] px-4 py-5 shadow-[0_0_42px_rgba(244,114,182,0.18)] backdrop-blur-md sm:px-6">
                <p className="text-lg font-black text-white">公式LINE募集中</p>
                <div className="mt-3 space-y-3 text-sm leading-7 text-white/82">
                  <p>ただいま、AI占いを練習中のため、公式LINEで無料案内しています。</p>
                  <p>まだ育てている途中やけれど、やさしく見てもらいたい方には、今ちょうど入りやすい時期です。</p>
                  <p>少し付き合ってもええよ、という方がおられましたら、ぜひご協力ください。</p>
                  <p>気負わんでも大丈夫です。ええ感じに受け取れるように、ちゃんと見ます。</p>
                </div>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full justify-center rounded-lg border border-rose-100/40 bg-rose-300/20 px-5 py-3 text-sm font-black text-white shadow-[0_0_30px_rgba(244,114,182,0.26)] transition hover:bg-rose-200/30 sm:w-auto"
                >
                  公式LINEはこちら
                </a>
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
