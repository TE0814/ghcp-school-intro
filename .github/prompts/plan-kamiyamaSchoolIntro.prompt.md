# Plan: 神山まるごと高専 紹介サイト（Astro × GitHub Pages）

## TL;DR
Astro でマルチページ静的サイトを構築し、GitHub Actions で GitHub Pages に自動デプロイする。デザインは白ベース＋アースカラーのアクセント、セリフ系和文フォント、余白多めのミニマル構成。日英バイリンガル対応。本文はあくまでサンプルとして公式公開情報を参考に AI 生成。画像はダミー枠のみ。

---

## フェーズ 1: プロジェクト基盤

1. Astro プロジェクトを初期化（`npm create astro@latest`、テンプレートは minimal、TypeScript 有効）
2. `astro.config.mjs` に `site` / `base` を設定（リポジトリ名 `ghcp-school-intro` を base に）
3. パッケージ追加: `@astrojs/sitemap`、`astro-i18n`（または自前 i18n ルーティング）、`tailwindcss`（@astrojs/tailwind）
4. `.nvmrc` / `package.json` の engines、`.gitignore` に `dist/`、`node_modules/`
5. ベースレイアウト・グローバル CSS（CSS 変数でカラートークン定義）

**並列実行可**: 1→2→3→4→5（順次）

## フェーズ 2: デザインシステム

1. カラートークン定義（`--color-bg: #FAFAF7`、`--color-ink: #2B2A26`、`--accent-green: #6B8E5A`、`--accent-wood: #C9A87B`、`--accent-beige: #E8DFCB`）
2. タイポグラフィ: 和文は Noto Serif JP（セリフ系・温かみ）、欧文は Source Serif 4。Google Fonts を `<link rel="preconnect">` で読込
3. 共通コンポーネント作成（`Header.astro` / `Footer.astro` / `Section.astro` / `Card.astro` / `Button.astro` / `LangSwitch.astro` / `ImagePlaceholder.astro`）
4. レスポンシブ: Tailwind の `sm/md/lg` ブレイクポイント、コンテンツ最大幅 `max-w-5xl`、余白多め（`py-24` 系）
5. スクロールアニメーション: Intersection Observer ベースの軽量フェードイン用 `<FadeIn>` コンポーネント

## フェーズ 3: ページ実装（並列実行可）

各ページは `src/pages/` 配下に日本語版、`src/pages/en/` 配下に英語版。

1. `index.astro` — ヒーロー（キャッチコピー＋メインビジュアル枠）、学校概要抜粋、特徴 3 つ、CTA
2. `about.astro` — 学校概要・ミッション・沿革
3. `curriculum.astro` — カリキュラム / 教育の特徴（学年別、起業家精神・テクノロジー・デザインの 3 軸）
4. `campus.astro` — キャンパス・施設紹介（写真枠 + 説明）
5. `faculty.astro` — 教員・スタッフ紹介（カード一覧）
6. `admissions.astro` — 入試情報・募集要項
7. `news.astro` — ニュース・お知らせ（コンテンツコレクション `src/content/news/` で Markdown 管理）
8. `access.astro` — アクセス（住所・OpenStreetMap iframe または静的地図画像枠）
9. `contact.astro` — お問い合わせ／資料請求（Formspree などの外部サービス前提のフォーム UI、submit 先は TODO）

## フェーズ 4: 多言語対応

1. `src/i18n/ja.json` / `src/i18n/en.json` に共通文言（ナビ、フッター、ボタン）
2. ページ本文は各言語ページに直接記述（保守性優先）
3. `LangSwitch` で `/` ↔ `/en/` をミラー切替、現在パスを保ったまま言語切替
4. `<html lang>` を動的に出力

## フェーズ 5: GitHub Pages デプロイ

1. `.github/workflows/deploy.yml` 作成（`actions/checkout`、`actions/setup-node@v4`、`npm ci`、`npm run build`、`actions/upload-pages-artifact`、`actions/deploy-pages`）
2. リポジトリ設定で Pages のソースを「GitHub Actions」に切替（手動操作の案内をREADMEに記載）
3. `astro.config.mjs` の `site: 'https://te0814.github.io'`、`base: '/ghcp-school-intro/'`

## フェーズ 6: ドキュメント & 仕上げ

1. `README.md` にプロジェクト概要・開発手順・デプロイ手順・コンテンツ更新方法
2. `LICENSE`（任意）、`robots.txt`、`favicon.svg`（シンプルな葉っぱモチーフ）
3. OGP 画像枠・meta タグ（`<SEO>` 共通コンポーネント）

---

## Relevant files（新規作成）
- `package.json` / `astro.config.mjs` / `tsconfig.json` / `tailwind.config.mjs`
- `src/layouts/BaseLayout.astro` — 全ページ共通の HTML シェル、SEO meta、フォント読込
- `src/components/Header.astro` / `Footer.astro` / `LangSwitch.astro` / `FadeIn.astro` / `ImagePlaceholder.astro`
- `src/styles/global.css` — CSS 変数、ベーススタイル、Tailwind ディレクティブ
- `src/pages/index.astro` ほか 9 ページ × 2 言語
- `src/content/news/*.md` + `src/content/config.ts`
- `src/i18n/{ja,en}.json`
- `.github/workflows/deploy.yml`
- `README.md`

## Verification
1. ローカル: `npm run dev` で全ページ表示・言語切替・レスポンシブ（DevTools のデバイス幅 375 / 768 / 1280）を目視確認
2. ビルド: `npm run build` がエラーなく完了し `dist/` が生成される
3. Lighthouse（Chrome DevTools）で Performance / Accessibility / SEO / Best Practices が 90 以上
4. `npm run preview` で base パス込み URL（`/ghcp-school-intro/`）が崩れないか確認
5. PR マージ後、Actions 成功 → `https://te0814.github.io/ghcp-school-intro/` で公開確認

## Decisions
- **技術**: Astro（静的・高速・コンポーネント指向、マルチページ向き）
- **スタイル**: Tailwind CSS + CSS 変数でデザイントークン管理
- **コンテンツ**: 公式公開情報を参考にした AI 生成のサンプル文言（実運用前に学校監修を要する旨を README に明記）
- **画像**: ダミー枠（SVG プレースホルダ）のみ。実画像は後日差し替え
- **i18n**: ファイルベースルーティング `/` (ja) と `/en/`
- **対象外**: バックエンド、CMS 連携、認証、コメント機能、本番フォーム送信実装

## Further Considerations
1. お問い合わせフォームの送信先: Formspree / Google Forms 埋込 / mailto リンクのみ — どれがよいか？（推奨: Formspree か Google Forms 埋込）
2. ニュースの管理方法: Markdown 直接編集 / GitHub の Web UI / 将来的に Decap CMS — まずは Markdown 直接編集を推奨
3. 地図: OpenStreetMap iframe（無料・キー不要）/ Google Maps 埋込 / 静的画像 — 推奨: OpenStreetMap iframe
