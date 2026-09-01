import { NextRequest, NextResponse } from "next/server";
import { apiError, cleanText, requestIpHash, supabaseRequest } from "@/lib/board";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const data = (await request.json()) as Record<string, unknown>;
    const type = data.type === "reply" ? "reply" : "thread";
    const reason = cleanText(data.reason, 120) || "不適切な投稿";
    await supabaseRequest("board_reports", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        thread_id: type === "thread" ? id : null,
        reply_id: type === "reply" ? id : null,
        reason,
        ip_hash: requestIpHash(request),
      }),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}
