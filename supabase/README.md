# 掲示板の公開設定

掲示板の画面とAPIは完成しています。投稿データはSupabaseへ保存し、ブラウザへ管理キーを渡さない構成です。

## 初回設定

1. Supabaseで無料プロジェクトを作成する。
2. SQL Editorで `supabase/board.sql` を実行する。
3. VercelのProject Settings > Environment Variablesへ次を登録する。
   - `SUPABASE_URL`: SupabaseのProject URL
   - `SUPABASE_SERVICE_ROLE_KEY`: Supabaseのservice_role key
   - `BOARD_HASH_SECRET`: 十分に長いランダム文字列
   - `BOARD_POSTING_ENABLED`: `true`
4. Vercelで再デプロイする。

`SUPABASE_SERVICE_ROLE_KEY` と `BOARD_HASH_SECRET` は公開情報ですべきではありません。`NEXT_PUBLIC_` を付けず、Gitにも保存しません。

## 管理

- 投稿を隠す: Supabase Table Editorで対象行の `status` を `hidden` に変更する。
- スレッドを締める: `board_threads.status` を `locked` に変更する。
- 通報を見る: `board_reports` テーブルを確認する。
- 新規投稿を一時停止する: Vercelの `BOARD_POSTING_ENABLED` を `false` にして再デプロイする。

投稿者のIPアドレスはそのまま保存せず、`BOARD_HASH_SECRET` を使ったハッシュだけを保存します。連続投稿は30秒に1回までです。
