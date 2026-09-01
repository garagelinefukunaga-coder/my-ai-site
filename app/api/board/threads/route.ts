import { NextRequest, NextResponse } from "next/server";
import {
  apiError,
  cleanText,
  enforceRateLimit,
  pinHash,
  postingEnabled,
  requestIpHash,
  supabaseRequest,
  validatePin,
  type BoardReply,
  type BoardThread,
} from "@/lib/board";

type StoredThread = Omit<BoardThread, "replies">;

export async function GET() {
  try {
    const threads = await supabaseRequest<StoredThread[]>(
      "board_threads?select=id,nickname,title,body,created_at&status=eq.visible&order=created_at.desc&limit=30",
    );
    const ids = threads.map((thread) => thread.id);
    const replies = ids.length
      ? await supabaseRequest<BoardReply[]>(
          `board_replies?select=id,thread_id,nickname,body,created_at&status=eq.visible&thread_id=in.(${ids.join(",")})&order=created_at.asc&limit=300`,
        )
      : [];

    const replyMap = new Map<string, BoardReply[]>();
    replies.forEach((reply) => {
      const list = replyMap.get(reply.thread_id) ?? [];
      list.push(reply);
      replyMap.set(reply.thread_id, list);
    });

    return NextResponse.json({
      threads: threads.map((thread) => ({
        ...thread,
        replies: replyMap.get(thread.id) ?? [],
      })),
      postingEnabled: postingEnabled(),
    });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json(
      { error: result.message, setupRequired: result.setupRequired, threads: [] },
      { status: result.status },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!postingEnabled()) throw new Error("現在、新しい投稿を停止しています。");

    const data = (await request.json()) as Record<string, unknown>;
    if (cleanText(data.website, 100)) return NextResponse.json({ ok: true });

    const nickname = cleanText(data.nickname, 20);
    const title = cleanText(data.title, 60);
    const body = cleanText(data.body, 1000);
    if (!nickname || !title || !body) throw new Error("あだ名・題名・本文を入力してください。");
    if (!validatePin(data.pin)) throw new Error("削除パスワードは4〜12桁の数字にしてください。");

    const ipHash = requestIpHash(request);
    await enforceRateLimit(ipHash);
    const rows = await supabaseRequest<StoredThread[]>("board_threads", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        nickname,
        title,
        body,
        pin_hash: pinHash(data.pin as string),
        ip_hash: ipHash,
      }),
    });

    return NextResponse.json({ thread: { ...rows[0], replies: [] } }, { status: 201 });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}
