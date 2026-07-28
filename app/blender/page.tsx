"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import Link from "next/link";

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

type ImageFixOutput = {
  url: string;
  width: number;
  height: number;
  name: string;
};

type TrialCounter = {
  date: string;
  count: number;
};

const DAILY_TRIAL_LIMIT = 3;
const MAX_AUDIO_SECONDS = 30;
const MAX_AUDIO_BYTES = 40 * 1024 * 1024;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_IMAGE_EDGE = 720;
const TRIAL_COUNTER_KEY = "happyForeverBlenderTrialCounter";

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

const trialTools = [
  {
    label: "Music Split",
    title: "音楽分離ツール",
    body: "歌、伴奏、音の要素を分けるための試作ツールです。30秒以内の音声だけ、お試し受付チェックできます。",
  },
  {
    label: "Image Fix",
    title: "画像直しツール",
    body: "画像の荒れ、ぼやけ、見た目の違和感を整えるための試作ツールです。低解像度とHAPPY FOREVER表記入りで出力します。",
  },
];

const trialRules = [
  "音楽は30秒まで",
  "画像は低解像度だけ",
  "1日3回まで",
  "出力に小さく HAPPY FOREVER 表記",
];

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

const getStoredTrialCounter = (): TrialCounter => {
  const today = getTodayKey();

  if (typeof window === "undefined") {
    return { date: today, count: 0 };
  }

  try {
    const stored = window.localStorage.getItem(TRIAL_COUNTER_KEY);
    const parsed = stored ? (JSON.parse(stored) as Partial<TrialCounter>) : null;

    if (parsed?.date === today && typeof parsed.count === "number") {
      return { date: today, count: Math.min(Math.max(parsed.count, 0), DAILY_TRIAL_LIMIT) };
    }
  } catch {
    window.localStorage.removeItem(TRIAL_COUNTER_KEY);
  }

  return { date: today, count: 0 };
};

const formatSeconds = (seconds: number) => {
  if (!Number.isFinite(seconds)) {
    return "不明";
  }

  return `${Math.round(seconds * 10) / 10}秒`;
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
  const [trialCount, setTrialCount] = useState(0);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioDuration, setAudioDuration] = useState<number | null>(null);
  const [isAudioAccepted, setIsAudioAccepted] = useState(false);
  const [audioStatus, setAudioStatus] = useState("音声ファイルを選ぶと、30秒以内か確認できます。");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageStatus, setImageStatus] = useState("画像を選ぶと、低解像度のHAPPY FOREVER表記入りで出力できます。");
  const [imageOutput, setImageOutput] = useState<ImageFixOutput | null>(null);
  const [isImageProcessing, setIsImageProcessing] = useState(false);
  const canTellFortune = Boolean(birthDate && bloodType && mood.trim());
  const remainingTrials = Math.max(DAILY_TRIAL_LIMIT - trialCount, 0);

  useEffect(() => {
    setTrialCount(getStoredTrialCounter().count);
  }, []);

  useEffect(() => {
    return () => {
      if (imageOutput?.url) {
        URL.revokeObjectURL(imageOutput.url);
      }
    };
  }, [imageOutput]);

  const useTrialCount = () => {
    const current = getStoredTrialCounter();

    if (current.count >= DAILY_TRIAL_LIMIT) {
      setTrialCount(current.count);
      return false;
    }

    const next = { date: getTodayKey(), count: current.count + 1 };
    window.localStorage.setItem(TRIAL_COUNTER_KEY, JSON.stringify(next));
    setTrialCount(next.count);
    return true;
  };

  const handleAudioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setAudioFile(file);
    setAudioDuration(null);
    setIsAudioAccepted(false);

    if (!file) {
      setAudioStatus("音声ファイルを選ぶと、30秒以内か確認できます。");
      return;
    }

    if (!file.type.startsWith("audio/")) {
      setAudioStatus("音声ファイルだけ選んでください。");
      return;
    }

    if (file.size > MAX_AUDIO_BYTES) {
      setAudioStatus("音声ファイルが大きすぎます。短い音源だけにしてください。");
      return;
    }

    const url = URL.createObjectURL(file);
    const audio = document.createElement("audio");
    audio.preload = "metadata";
    audio.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      setAudioDuration(audio.duration);
      setAudioStatus(
        audio.duration <= MAX_AUDIO_SECONDS
          ? `長さは${formatSeconds(audio.duration)}です。お試し受付できます。`
          : `長さは${formatSeconds(audio.duration)}です。無料お試しは30秒までです。`,
      );
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      setAudioStatus("音声の長さを確認できませんでした。別のファイルで試してください。");
    };
    audio.src = url;
  };

  const acceptAudioTrial = () => {
    if (!audioFile || audioDuration === null) {
      setAudioStatus("先に30秒以内の音声ファイルを選んでください。");
      return;
    }

    if (audioDuration > MAX_AUDIO_SECONDS) {
      setAudioStatus("無料お試しは30秒までです。短い音声で試してください。");
      return;
    }

    if (!useTrialCount()) {
      setAudioStatus("今日のお試し回数は上限です。また明日試してください。");
      return;
    }

    setIsAudioAccepted(true);
    setAudioStatus("受付チェックOKです。本格的な音楽分離処理は、準備でき次第ここにつなぎます。");
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setImageFile(file);

    if (!file) {
      setImageStatus("画像を選ぶと、低解像度のHAPPY FOREVER表記入りで出力できます。");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setImageStatus("画像ファイルだけ選んでください。");
      return;
    }

    setImageStatus("画像を読み込みました。低解像度で出力できます。");
  };

  const fixImage = async () => {
    if (!imageFile) {
      setImageStatus("先に画像を選んでください。");
      return;
    }

    if (!imageFile.type.startsWith("image/")) {
      setImageStatus("画像ファイルだけ選んでください。");
      return;
    }

    if (imageFile.size > MAX_IMAGE_BYTES) {
      setImageStatus("画像ファイルが大きすぎます。軽い画像で試してください。");
      return;
    }

    if (remainingTrials <= 0) {
      setImageStatus("今日のお試し回数は上限です。また明日試してください。");
      return;
    }

    setIsImageProcessing(true);
    setImageStatus("画像を整えています。");

    const objectUrl = URL.createObjectURL(imageFile);

    try {
      const image = new window.Image();
      image.decoding = "async";
      image.src = objectUrl;
      await image.decode();

      const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas is not available");
      }

      context.filter = "contrast(1.06) saturate(1.08) brightness(1.02)";
      context.drawImage(image, 0, 0, width, height);
      context.filter = "none";

      const watermark = "HAPPY FOREVER";
      const fontSize = Math.max(14, Math.round(width * 0.035));
      const padding = Math.max(10, Math.round(width * 0.025));
      context.font = `700 ${fontSize}px Arial, sans-serif`;
      const textMetrics = context.measureText(watermark);
      const boxWidth = textMetrics.width + padding * 1.8;
      const boxHeight = fontSize + padding * 1.25;
      const boxX = Math.max(padding, width - boxWidth - padding);
      const boxY = Math.max(padding, height - boxHeight - padding);

      context.fillStyle = "rgba(0, 0, 0, 0.48)";
      context.fillRect(boxX, boxY, boxWidth, boxHeight);
      context.fillStyle = "rgba(255, 255, 255, 0.92)";
      context.fillText(watermark, boxX + padding * 0.9, boxY + fontSize + padding * 0.15);

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((nextBlob) => {
          if (nextBlob) {
            resolve(nextBlob);
          } else {
            reject(new Error("Image export failed"));
          }
        }, "image/jpeg", 0.86);
      });

      if (!useTrialCount()) {
        setImageStatus("今日のお試し回数は上限です。また明日試してください。");
        return;
      }

      const outputUrl = URL.createObjectURL(blob);
      setImageOutput((current) => {
        if (current?.url) {
          URL.revokeObjectURL(current.url);
        }

        return {
          url: outputUrl,
          width,
          height,
          name: `happy-forever-fixed-${imageFile.name.replace(/\.[^.]+$/, "")}.jpg`,
        };
      });
      setImageStatus(`低解像度版を書き出しました。${width} x ${height}pxです。`);
    } catch {
      setImageStatus("画像を処理できませんでした。別の画像で試してください。");
    } finally {
      URL.revokeObjectURL(objectUrl);
      setIsImageProcessing(false);
    }
  };

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
              <p>今は、生年月日・血液型・気分から今日の流れを見るミニ占いツールを置いています。</p>
              <p>次に、音楽分離と画像直しの試作ツールもここに置いていく予定です。</p>
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

          <section className="rounded-lg border border-emerald-100/20 bg-black/28 px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
                Trial Tools
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                準備中の制作ツール
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-white/82">
                便利なものほど、無料で全部開放しすぎると続けにくくなります。まずは軽いお試しだけ置いて、ちゃんと使いたい人は相談できる形にします。
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {trialTools.map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-lg border border-white/15 bg-white/[0.07] px-4 py-4 shadow-[0_14px_42px_rgba(0,0,0,0.24)]"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-100">
                    {tool.label}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-white">{tool.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-white/82">
                    {tool.body}
                  </p>
                  <p className="mt-4 inline-flex rounded-lg border border-amber-100/35 bg-amber-300/15 px-3 py-2 text-xs font-black text-amber-50">
                    制限付きお試し
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-4">
              <p className="text-sm font-black text-emerald-50">無料お試しルール</p>
              <ul className="mt-3 grid gap-2 text-sm font-medium leading-6 text-white/84 sm:grid-cols-2">
                {trialRules.map((rule) => (
                  <li key={rule} className="rounded-lg border border-white/10 bg-black/18 px-3 py-2">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-lg border border-emerald-100/20 bg-emerald-300/10 px-4 py-4">
              <p className="text-sm font-black text-emerald-50">
                今日の残りお試し回数: {remainingTrials} / {DAILY_TRIAL_LIMIT}
              </p>
              <p className="mt-2 text-xs font-medium leading-6 text-white/70">
                音楽分離と画像直しを合わせた回数です。公開版では、あとでサーバー側の制限にもつなげます。
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-lg border border-white/15 bg-black/22 px-4 py-4">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-100">
                  Music Split Trial
                </p>
                <h3 className="mt-2 text-lg font-black text-white">音楽分離お試し受付</h3>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioChange}
                  className="mt-4 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-sm text-white file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-200 file:px-3 file:py-2 file:text-xs file:font-black file:text-emerald-950"
                />
                <p className="mt-3 text-sm font-medium leading-7 text-white/78">{audioStatus}</p>
                {audioDuration !== null && (
                  <p className="mt-1 text-xs font-medium text-white/55">
                    確認した長さ: {formatSeconds(audioDuration)}
                  </p>
                )}
                <button
                  type="button"
                  onClick={acceptAudioTrial}
                  disabled={remainingTrials <= 0 || !audioFile || audioDuration === null || audioDuration > MAX_AUDIO_SECONDS || isAudioAccepted}
                  className="mt-4 rounded-lg border border-emerald-100/35 bg-emerald-300/20 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(16,185,129,0.18)] transition hover:bg-emerald-200/28 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/45 disabled:shadow-none"
                >
                  受付チェックを使う
                </button>
              </div>

              <div className="rounded-lg border border-white/15 bg-black/22 px-4 py-4">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-100">
                  Image Fix Trial
                </p>
                <h3 className="mt-2 text-lg font-black text-white">画像直しお試し</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-4 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-sm text-white file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-200 file:px-3 file:py-2 file:text-xs file:font-black file:text-emerald-950"
                />
                <p className="mt-3 text-sm font-medium leading-7 text-white/78">{imageStatus}</p>
                <button
                  type="button"
                  onClick={fixImage}
                  disabled={remainingTrials <= 0 || !imageFile || isImageProcessing}
                  className="mt-4 rounded-lg border border-emerald-100/35 bg-emerald-300/20 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(16,185,129,0.18)] transition hover:bg-emerald-200/28 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/45 disabled:shadow-none"
                >
                  {isImageProcessing ? "画像を処理中" : "低解像度で画像を直す"}
                </button>

                {imageOutput && (
                  <div className="mt-4 overflow-hidden rounded-lg border border-white/15 bg-white/[0.06]">
                    <img
                      src={imageOutput.url}
                      alt="HAPPY FOREVER表記入りの低解像度画像"
                      className="max-h-[360px] w-full object-contain"
                    />
                    <div className="border-t border-white/10 px-4 py-3">
                      <p className="text-xs font-medium text-white/65">
                        {imageOutput.width} x {imageOutput.height}px
                      </p>
                      <a
                        href={imageOutput.url}
                        download={imageOutput.name}
                        className="mt-3 inline-flex rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/18"
                      >
                        画像をダウンロード →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

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
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
