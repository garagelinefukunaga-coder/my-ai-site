"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";

const MAX_FILE_SIZE = 100 * 1024 * 1024;
const MAX_DURATION = 60 * 60;
const OUTPUT_SAMPLE_RATE = 44_100;

function writeText(view: DataView, offset: number, text: string) {
  for (let index = 0; index < text.length; index += 1) {
    view.setUint8(offset + index, text.charCodeAt(index));
  }
}

function encodeWave(audio: AudioBuffer): Blob {
  const channelCount = 2;
  const frameCount = audio.length;
  const bytesPerSample = 2;
  const buffer = new ArrayBuffer(44 + frameCount * channelCount * bytesPerSample);
  const view = new DataView(buffer);

  writeText(view, 0, "RIFF");
  view.setUint32(4, 36 + frameCount * channelCount * bytesPerSample, true);
  writeText(view, 8, "WAVE");
  writeText(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channelCount, true);
  view.setUint32(24, audio.sampleRate, true);
  view.setUint32(28, audio.sampleRate * channelCount * bytesPerSample, true);
  view.setUint16(32, channelCount * bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeText(view, 36, "data");
  view.setUint32(40, frameCount * channelCount * bytesPerSample, true);

  const left = audio.getChannelData(0);
  const right = audio.numberOfChannels > 1 ? audio.getChannelData(1) : left;
  let offset = 44;
  for (let index = 0; index < frameCount; index += 1) {
    const leftSample = Math.max(-1, Math.min(1, left[index]));
    const rightSample = Math.max(-1, Math.min(1, right[index]));
    view.setInt16(offset, leftSample < 0 ? leftSample * 0x8000 : leftSample * 0x7fff, true);
    view.setInt16(offset + 2, rightSample < 0 ? rightSample * 0x8000 : rightSample * 0x7fff, true);
    offset += 4;
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function outputName(fileName: string) {
  const baseName = fileName.replace(/\.[^.]+$/, "") || "変換した音声";
  return `${baseName}.wav`;
}

export default function AudioConverter() {
  const [file, setFile] = useState<File | null>(null);
  const outputRef = useRef("");
  const [outputUrl, setOutputUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("音声ファイルを選んでください");
  const [error, setError] = useState(false);

  useEffect(() => {
    return () => {
      if (outputRef.current) URL.revokeObjectURL(outputRef.current);
    };
  }, []);

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null;
    if (outputRef.current) URL.revokeObjectURL(outputRef.current);
    outputRef.current = "";
    setOutputUrl("");
    setError(false);

    if (!nextFile) {
      setFile(null);
      setMessage("音声ファイルを選んでください");
      return;
    }
    if (nextFile.size > MAX_FILE_SIZE) {
      setFile(null);
      setError(true);
      setMessage("ファイルが大きすぎます。100MB以下の音声を選んでください。");
      event.target.value = "";
      return;
    }
    setFile(nextFile);
    setMessage(`${nextFile.name} を選びました`);
  };

  const convert = async () => {
    if (!file || busy) return;
    setBusy(true);
    setError(false);
    setMessage("音をWAVに変換しています…");

    try {
      const input = await file.arrayBuffer();
      const context = new AudioContext();
      const decoded = await context.decodeAudioData(input.slice(0));
      await context.close();
      if (decoded.duration > MAX_DURATION) {
        throw new Error("too long");
      }

      const outputLength = Math.max(1, Math.ceil(decoded.duration * OUTPUT_SAMPLE_RATE));
      const offline = new OfflineAudioContext(2, outputLength, OUTPUT_SAMPLE_RATE);
      const source = offline.createBufferSource();
      source.buffer = decoded;
      source.connect(offline.destination);
      source.start();
      const rendered = await offline.startRendering();
      const nextUrl = URL.createObjectURL(encodeWave(rendered));

      if (outputRef.current) URL.revokeObjectURL(outputRef.current);
      outputRef.current = nextUrl;
      setOutputUrl(nextUrl);
      setMessage("変換できました。下のボタンから保存してください。");
    } catch {
      setError(true);
      setMessage("この音声は変換できませんでした。MP3、M4A、WAVなど別の形式でお試しください。");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-lg border border-cyan-100/25 bg-cyan-300/10 px-4 py-5 shadow-[0_18px_55px_rgba(34,211,238,0.16)] backdrop-blur-md sm:px-6">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
        Audio Tool
      </p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-white">
        音声をWAVに変換
      </h2>
      <p className="mt-3 text-sm font-medium leading-7 text-white/84">
        MP3・M4A・WAVなどを、動画編集で使いやすい44.1kHz・ステレオのWAVへ変換します。
        音声はこの端末の中だけで処理され、サイトへ送信されません。
      </p>

      <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-cyan-100/35 bg-black/20 px-4 py-7 text-center transition hover:bg-cyan-100/10">
        <span className="text-base font-black text-cyan-50">音声ファイルを選ぶ</span>
        <span className="mt-1 text-xs font-medium text-white/60">100MB・60分まで</span>
        <input
          type="file"
          accept="audio/*,.mp3,.m4a,.wav,.aac,.ogg,.webm,.flac"
          className="sr-only"
          onChange={selectFile}
          data-testid="audio-file"
        />
      </label>

      <div
        className={`mt-4 rounded-lg border px-4 py-3 text-sm font-bold ${
          error
            ? "border-red-200/35 bg-red-300/10 text-red-50"
            : "border-white/15 bg-black/20 text-white/80"
        }`}
        role="status"
        data-testid="audio-status"
      >
        {message}
      </div>

      <button
        type="button"
        onClick={convert}
        disabled={!file || busy}
        className="mt-4 flex w-full items-center justify-center rounded-lg border border-cyan-100/45 bg-cyan-300/24 px-5 py-4 text-sm font-black text-white shadow-[0_0_34px_rgba(34,211,238,0.2)] transition hover:bg-cyan-200/32 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        data-testid="convert-audio"
      >
        {busy ? "変換しています…" : "WAVに変換する"}
      </button>

      {outputUrl ? (
        <div className="mt-5 space-y-3 rounded-lg border border-emerald-100/25 bg-emerald-300/10 p-4">
          <audio controls src={outputUrl} className="w-full" data-testid="audio-preview">
            音声を再生できません。
          </audio>
          <a
            href={outputUrl}
            download={outputName(file?.name ?? "変換した音声")}
            className="flex w-full items-center justify-center rounded-lg border border-emerald-100/45 bg-emerald-300/25 px-5 py-4 text-sm font-black text-white transition hover:bg-emerald-200/35 sm:inline-flex sm:w-auto"
            data-testid="download-wav"
          >
            WAVを保存する ↓
          </a>
        </div>
      ) : null}
    </section>
  );
}
