# 神山まるごと高専 紹介サイト（Astro × GitHub Pages）

Astro で構築したマルチページ静的サイトです。日本語と英語の 2 言語に対応し、GitHub Actions から GitHub Pages へ自動デプロイできます。

## 構成

- 技術: Astro, Tailwind CSS, Astro Content Collections
- デザイン: 白ベース + アースカラー、セリフ系タイポグラフィ
- ルーティング: `/`（日本語）と `/en/`（英語）
- ニュース: `src/content/news/` の Markdown 管理

## セットアップ

1. Node.js 20 系を利用
2. 依存関係をインストール

	 npm install

3. 開発サーバー起動

	 npm run dev

## ビルドと確認

- 本番ビルド

	npm run build

- プレビュー

	npm run preview

GitHub Pages 用の base パスは `astro.config.mjs` で設定済みです。

## デプロイ（GitHub Pages）

1. リポジトリ Settings > Pages で Source を GitHub Actions に設定
2. `main` ブランチへ push
3. Actions の `Deploy Astro to GitHub Pages` が成功すると公開

公開 URL:

https://te0814.github.io/ghcp-school-intro/

## コンテンツ更新

- ニュース追加: `src/content/news/` に Markdown を追加
- 文言修正: 各ページ (`src/pages/`, `src/pages/en/`) または `src/i18n/`
- 画像差し替え: 現在はダミー枠コンポーネントを使用。実画像は後日配置して参照を更新

## 注意事項

- 本サイト本文は、公式公開情報を参考にした AI 生成サンプルです。
- 実運用前に、学校関係者による監修と事実確認を必ず実施してください。
