import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";

export type BoardReply = {
  id: string;
  thread_id: string;
  nickname: string;
  body: string;
  created_at: string;
};

export type BoardThread = {
  id: string;
  nickname: string;
  title: string;
  body: string;
  created_at: string;
  replies: BoardReply[];
};

type SupabaseConfig = {
  url: string;
  serviceKey: string;
  hashSecret: string;
};

export class BoardSetupError extends Error {}

export function getBoardConfig(): SupabaseConfig {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const hashSecret = process.env.BOARD_HASH_SECRET;

  if (!url || !serviceKey || !hashSecret) {
    throw new BoardSetupError("掲示板の保存先を準備しています。");
  }

  return { url, serviceKey, hashSecret };
}

export async function supabaseRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const config = getBoardConfig();
  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: config.serviceKey,
      Authorization: `Bearer ${config.serviceKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Board database error", response.status, detail);
    throw new Error("掲示板の保存処理に失敗しました。");
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim().slice(0, maxLength);
}

export function validatePin(value: unknown) {
  return typeof value === "string" && /^\d{4,12}$/.test(value);
}

export function hashValue(value: string) {
  const { hashSecret } = getBoardConfig();
  return createHmac("sha256", hashSecret).update(value).digest("hex");
}

export function requestIpHash(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  return hashValue(`ip:${ip}`);
}

export function pinHash(pin: string) {
  return hashValue(`pin:${pin}`);
}

export function postingEnabled() {
  return process.env.BOARD_POSTING_ENABLED !== "false";
}

export async function enforceRateLimit(ipHash: string) {
  const since = new Date(Date.now() - 30_000).toISOString();
  const query = new URLSearchParams({
    select: "id",
    ip_hash: `eq.${ipHash}`,
    created_at: `gte.${since}`,
    limit: "1",
  });

  const [threads, replies] = await Promise.all([
    supabaseRequest<Array<{ id: string }>>(`board_threads?${query}`),
    supabaseRequest<Array<{ id: string }>>(`board_replies?${query}`),
  ]);

  if (threads.length || replies.length) {
    throw new Error("連続投稿は30秒待ってからお願いします。");
  }
}

export function apiError(error: unknown) {
  if (error instanceof BoardSetupError) {
    return { message: error.message, status: 503, setupRequired: true };
  }
  return {
    message: error instanceof Error ? error.message : "処理に失敗しました。",
    status: 400,
    setupRequired: false,
  };
}
