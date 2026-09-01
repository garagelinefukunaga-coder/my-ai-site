import { NextRequest, NextResponse } from "next/server";
import { apiError, pinHash, supabaseRequest, validatePin } from "@/lib/board";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const data = (await request.json()) as Record<string, unknown>;
    const type = data.type === "reply" ? "reply" : "thread";
    if (!validatePin(data.pin)) throw new Error("削除パスワードを確認してください。");

    const table = type === "reply" ? "board_replies" : "board_threads";
    const existing = await supabaseRequest<Array<{ id: string; pin_hash: string }>>(
      `${table}?select=id,pin_hash&id=eq.${encodeURIComponent(id)}&status=eq.visible&limit=1`,
    );
    if (!existing.length || existing[0].pin_hash !== pinHash(data.pin as string)) {
      throw new Error("削除パスワードが違います。");
    }

    await supabaseRequest(`${table}?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ status: "deleted" }),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}
