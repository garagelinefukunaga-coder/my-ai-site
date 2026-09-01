"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { BoardThread } from "@/lib/board";

type BoardResponse = {
  threads?: BoardThread[];
  postingEnabled?: boolean;
  setupRequired?: boolean;
  error?: string;
};

const fieldClass =
  "w-full rounded-lg border border-white/20 bg-black/30 px-3 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-emerald-200";

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

async function readResponse(response: Response) {
  const result = (await response.json()) as BoardResponse;
  if (!response.ok) throw new Error(result.error || "処理に失敗しました。");
  return result;
}

export default function BoardApp() {
  const [threads, setThreads] = useState<BoardThread[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [setupRequired, setSetupRequired] = useState(false);
  const [postingEnabled, setPostingEnabled] = useState(true);

  const loadThreads = useCallback(async () => {
    try {
      const response = await fetch("/api/board/threads", { cache: "no-store" });
      const result = (await response.json()) as BoardResponse;
      setThreads(result.threads ?? []);
      setPostingEnabled(result.postingEnabled ?? true);
      setSetupRequired(Boolean(result.setupRequired));
      if (!response.ok && !result.setupRequired) setMessage(result.error ?? "読み込みに失敗しました。");
    } catch {
      setMessage("掲示板を読み込めませんでした。少し待ってから試してください。");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadThreads();
  }, [loadThreads]);

  async function createThread(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setMessage("");
    try {
      const values = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/board/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      await readResponse(response);
      form.reset();
      setMessage("スレッドを投稿しました。");
      await loadThreads();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "投稿に失敗しました。");
    } finally {
      setBusy(false);
    }
  }

  async function createReply(event: FormEvent<HTMLFormElement>, threadId: string) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setMessage("");
    try {
      const values = Object.fromEntries(new FormData(form));
      const response = await fetch(`/api/board/threads/${threadId}/replies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      await readResponse(response);
      form.reset();
      setMessage("返信しました。");
      await loadThreads();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "返信に失敗しました。");
    } finally {
      setBusy(false);
    }
  }

  async function deletePost(id: string, kind: "thread" | "reply") {
    const pin = window.prompt("投稿時に決めた削除パスワードを入力してください。");
    if (!pin) return;
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(`/api/board/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, type: kind }),
      });
      await readResponse(response);
      setMessage("投稿を削除しました。");
      await loadThreads();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "削除に失敗しました。");
    } finally {
      setBusy(false);
    }
  }

  async function reportPost(id: string, kind: "thread" | "reply") {
    if (!window.confirm("この投稿を管理者へ通報しますか？")) return;
    try {
      const response = await fetch(`/api/board/posts/${id}/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: kind }),
      });
      await readResponse(response);
      setMessage("通報を受け付けました。");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "通報に失敗しました。");
    }
  }

  if (setupRequired) {
    return (
      <div className="rounded-lg border border-amber-100/30 bg-amber-200/10 px-5 py-8 text-center">
        <h2 className="text-xl font-black">掲示板を準備中です</h2>
        <p className="mt-2 text-sm leading-7 text-white/75">公開前の最終設定をしています。もう少し待ってください。</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {postingEnabled && (
        <form onSubmit={createThread} className="rounded-lg border border-emerald-100/25 bg-white/[0.08] p-4 shadow-xl backdrop-blur-md sm:p-6">
          <h2 className="text-xl font-black">新しい話題を立てる</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input name="nickname" required maxLength={20} className={fieldClass} placeholder="あだ名（20文字まで）" />
            <input name="pin" required inputMode="numeric" pattern="[0-9]{4,12}" className={fieldClass} placeholder="削除用数字 4〜12桁" />
          </div>
          <input name="title" required maxLength={60} className={`${fieldClass} mt-3`} placeholder="話題のタイトル" />
          <textarea name="body" required maxLength={1000} rows={5} className={`${fieldClass} mt-3 resize-y`} placeholder="みんなに聞きたいこと、感想、アイデアなど" />
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button disabled={busy} className="mt-3 w-full rounded-lg bg-emerald-300 px-5 py-3 text-sm font-black text-[#07100c] transition hover:bg-emerald-200 disabled:opacity-50 sm:w-auto">
            スレッドを投稿する
          </button>
        </form>
      )}

      {message && <p role="status" className="rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-sm font-bold">{message}</p>}

      <section className="space-y-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">Open Threads</p>
          <h2 className="mt-1 text-2xl font-black">みんなの話題</h2>
        </div>
        {loading && <p className="text-sm text-white/70">読み込み中...</p>}
        {!loading && threads.length === 0 && <p className="rounded-lg border border-white/15 bg-black/20 p-5 text-sm text-white/70">まだ投稿はありません。最初の話題を立ててみてください。</p>}
        {threads.map((thread) => (
          <article key={thread.id} className="rounded-lg border border-white/15 bg-black/25 p-4 shadow-xl backdrop-blur-md sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-white">{thread.title}</h3>
                <p className="mt-1 text-xs text-emerald-100/75">{thread.nickname} · {dateLabel(thread.created_at)}</p>
              </div>
              <div className="flex gap-3 text-xs font-bold text-white/55">
                <button type="button" onClick={() => void reportPost(thread.id, "thread")} className="hover:text-amber-200">通報</button>
                <button type="button" onClick={() => void deletePost(thread.id, "thread")} className="hover:text-red-200">削除</button>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-white/90">{thread.body}</p>

            {thread.replies.length > 0 && (
              <div className="mt-5 space-y-3 border-l-2 border-emerald-200/30 pl-3 sm:pl-5">
                {thread.replies.map((reply) => (
                  <div key={reply.id} className="rounded-lg bg-white/[0.06] p-3">
                    <div className="flex flex-wrap justify-between gap-2 text-xs">
                      <span className="font-bold text-emerald-100">{reply.nickname} · {dateLabel(reply.created_at)}</span>
                      <span className="flex gap-3 font-bold text-white/55">
                        <button type="button" onClick={() => void reportPost(reply.id, "reply")} className="hover:text-amber-200">通報</button>
                        <button type="button" onClick={() => void deletePost(reply.id, "reply")} className="hover:text-red-200">削除</button>
                      </span>
                    </div>
                    <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-white/85">{reply.body}</p>
                  </div>
                ))}
              </div>
            )}

            {postingEnabled && (
              <form onSubmit={(event) => createReply(event, thread.id)} className="mt-5 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <input name="nickname" required maxLength={20} className={fieldClass} placeholder="あだ名" />
                <input name="pin" required inputMode="numeric" pattern="[0-9]{4,12}" className={fieldClass} placeholder="削除用数字" />
                <textarea name="body" required maxLength={500} rows={2} className={`${fieldClass} resize-y sm:col-span-2`} placeholder="返信を書く" />
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <button disabled={busy} className="rounded-lg border border-emerald-100/40 bg-emerald-300/20 px-5 py-3 text-sm font-black text-white hover:bg-emerald-300/30 disabled:opacity-50 sm:row-start-2">返信する</button>
              </form>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
