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
} from "@/lib/board";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    if (!postingEnabled()) throw new Error("現在、新しい投稿を停止しています。");
    const { id } = await context.params;
    const data = (await request.json()) as Record<string, unknown>;
    if (cleanText(data.website, 100)) return NextResponse.json({ ok: true });

    const nickname = cleanText(data.nickname, 20);
    const body = cleanText(data.body, 1000);
    if (!nickname || !body) throw new Error("あだ名と返信内容を入力してください。");
    if (!validatePin(data.pin)) throw new Error("削除パスワードは4〜12桁の数字にしてください。");

    const thread = await supabaseRequest<Array<{ id: string }>>(
      `board_threads?select=id&id=eq.${encodeURIComponent(id)}&status=eq.visible&limit=1`,
    );
    if (!thread.length) throw new Error("このスレッドは見つかりません。");

    const ipHash = requestIpHash(request);
    await enforceRateLimit(ipHash);
    const rows = await supabaseRequest<BoardReply[]>("board_replies", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        thread_id: id,
        nickname,
        body,
        pin_hash: pinHash(data.pin as string),
        ip_hash: ipHash,
      }),
    });

    return NextResponse.json({ reply: rows[0] }, { status: 201 });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}
