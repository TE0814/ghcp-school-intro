# Tasks: 神山まるごと高専 紹介ページ (インド味LP)

進捗は各タスクの `[ ]` / `[x]` で管理する。

## Phase 1. プロジェクト土台

- [ ] **T-01 ディレクトリ作成**
  - 内容: `docs/`, `docs/assets/{css,js,img}/` を作成
  - 期待結果: ディレクトリが存在
  - 依存: なし
  - 関連: REQ-PUB-01

- [ ] **T-02 .nojekyll 配置**
  - 内容: `docs/.nojekyll` (空ファイル) を作成
  - 期待結果: GitHub Pages で Jekyll が走らない
  - 依存: T-01
  - 関連: REQ-PUB-02

## Phase 2. デザインアセット

- [ ] **T-03 マンダラ SVG**
  - 内容: `docs/assets/img/mandala.svg` を作成(対称花弁デザイン、単色 stroke)
  - 期待結果: 単独で表示可能
  - 依存: T-01
  - 関連: REQ-UI-02

- [ ] **T-04 ペイズリーディバイダー SVG**
  - 内容: `docs/assets/img/paisley-divider.svg` (横長の繰り返し模様)
  - 依存: T-01
  - 関連: REQ-UI-03

- [ ] **T-05 アイコン SVG セット**
  - 内容: スパイス/寺院/ダンス/書物 風のアイコン 3〜4 個 (`docs/assets/img/icon-*.svg`)
  - 依存: T-01

## Phase 3. スタイル

- [ ] **T-06 CSS トークンとリセット**
  - 内容: `docs/assets/css/style.css` の冒頭で CSS変数、ベースリセット、フォント import 受け入れ
  - 関連: REQ-UI-01, NFR-04
  - 依存: T-01

- [ ] **T-07 レイアウトシステム**
  - 内容: コンテナ幅、Grid / Flex ユーティリティ、レスポンシブ ブレークポイント
  - 関連: REQ-RES-01, REQ-RES-02
  - 依存: T-06

- [ ] **T-08 セクション別スタイル**
  - 内容: Header, Hero, About, Features, Curriculum, Access, CTA, Footer 各セクションのスタイル
  - 関連: REQ-PAGE-01, REQ-UI-04
  - 依存: T-07

- [ ] **T-09 装飾・アニメーション CSS**
  - 内容: マンダラ回転 keyframes、`prefers-reduced-motion` 対応、`.reveal` の初期/可視状態
  - 関連: REQ-ANI-01, REQ-ANI-03
  - 依存: T-08

## Phase 4. マークアップ

- [ ] **T-10 index.html スケルトン**
  - 内容: `<head>` (meta, OGP, fonts, css) と `<body>` の主要ランドマーク
  - 関連: REQ-PUB-03, REQ-UI-05, NFR-02
  - 依存: T-06

- [ ] **T-11 Header / Nav 実装**
  - 内容: ロゴ + ナビリンク + ハンバーガーボタン(`aria-expanded` 付き)
  - 関連: REQ-PAGE-02, REQ-PAGE-03
  - 依存: T-10

- [ ] **T-12 Hero セクション実装**
  - 内容: キャッチ + マンダラ SVG + "ナマステ" 装飾 + 主要 CTA(アーチボタン)
  - 関連: REQ-UI-02, REQ-UI-04
  - 依存: T-10, T-03

- [ ] **T-13 About / Features / Curriculum 実装**
  - 内容: ダミー文 + ペイズリーディバイダー + 特徴カード + 年次タイムライン
  - 関連: REQ-CNT-01, REQ-UI-03
  - 依存: T-10, T-04, T-05

- [ ] **T-14 Access セクション実装**
  - 内容: 住所テキスト + Google Maps iframe(神山町中心部) + iframe `title`
  - 関連: REQ-CNT-03, NFR-02
  - 依存: T-10

- [ ] **T-15 CTA / Footer 実装**
  - 内容: ダミー資料請求ボタン + フッターのダミー注記とコピーライト
  - 関連: REQ-CNT-02
  - 依存: T-10

## Phase 5. スクリプト

- [ ] **T-16 main.js 実装**
  - 内容: ナビトグル / `IntersectionObserver` による reveal / reduced-motion 配慮
  - 関連: REQ-PAGE-03, REQ-ANI-02, REQ-ANI-03
  - 依存: T-11, T-09

## Phase 6. ドキュメント

- [ ] **T-17 README 更新**
  - 内容: 公開URL、ローカル確認手順 (`python3 -m http.server`)、Pages 設定手順を日本語で追記
  - 関連: REQ-DOC-01
  - 依存: なし(並行可)

## Phase 7. 検証

- [ ] **T-18 ローカル表示確認**
  - 内容: `python3 -m http.server 8000 --directory docs` で全セクション目視確認
  - 関連: 成功条件 1〜5
  - 依存: T-10〜T-16

- [ ] **T-19 レスポンシブ確認**
  - 内容: 375 / 768 / 1280 px で崩れがないか
  - 関連: REQ-RES-01

- [ ] **T-20 アクセシビリティ簡易確認**
  - 内容: ランドマーク、`alt`/`aria-hidden`、コントラスト、Lighthouse a11y
  - 関連: NFR-02

- [ ] **T-21 reduced-motion 確認**
  - 内容: OS設定 ON でアニメーション停止
  - 関連: REQ-ANI-03

- [ ] **T-22 公開設定とリリース後確認**
  - 内容: GitHub Settings → Pages で Source=Deploy from a branch / Branch=main / Folder=/docs を設定し、公開URLで表示確認
  - 関連: REQ-PUB-03, 成功条件 1
  - 依存: T-18 完了後 main へマージ

## Phase 8. ハンドオフ

- [ ] **T-23 PR 作成**
  - 内容: 日本語で要約・変更点・確認手順・スクリーンショット(任意) を記載
  - 依存: 上記すべて
