# Requirements: 神山まるごと高専 紹介ページ (インド味LP)

## 背景・目的

- 神山まるごと高専を題材に、インドの意匠を全面に出した紹介LP(Landing Page)を制作する。
- 公開先は GitHub Pages (Project site)。リポジトリは `TE0814/ghcp-school-intro`。
- コンテンツは現時点ではダミーで、後日差し替え可能な構造を備えること。
- 本サイトは学習・デモ用途であり、実在校の公式情報ではない旨を明示する。

## 用語

- **LP**: 1ページで完結するスクロール型ランディングページ。
- **Project site**: GitHub Pages におけるリポジトリ単位サイト。公開URLは `https://<owner>.github.io/<repo>/`。
- **インド味**: 配色・モチーフ・装飾・タイポ・アニメーションを総合した「インド文化を想起させる」表現。

## スコープ

### スコープ内

- 1ページのHTML/CSS/JS製LP
- インド味デザインテーマ(配色・装飾・モチーフ・アニメーション)
- 主要セクション: Header / Hero / About / Features / Curriculum / Access / CTA / Footer
- Google Maps iframe 埋め込み(神山町中心部、APIキー不要)
- レスポンシブ対応(モバイル/タブレット/デスクトップ)
- GitHub Pages (main + /docs) での公開設定手順の README 反映

### スコープ外

- 実コンテンツの収集、公式ロゴ・写真の使用
- ダークモード、多言語切替、問い合わせフォーム
- ビルドツール導入、CI/CDワークフロー
- アクセス解析、SEO最適化(meta最低限のみ)

## 機能要件 (EARS Notation)

### サイト公開

- **REQ-PUB-01 (Ubiquitous)**: THE SYSTEM SHALL `docs/` 配下の静的ファイル一式で構成され、追加のビルド工程なしに GitHub Pages から配信できる。
- **REQ-PUB-02 (Ubiquitous)**: THE SYSTEM SHALL `docs/.nojekyll` を含むことで Jekyll 処理を無効化する。
- **REQ-PUB-03 (Event-driven)**: WHEN ユーザーが `https://te0814.github.io/ghcp-school-intro/` にアクセスしたとき、THE SYSTEM SHALL `docs/index.html` をルートとして表示する。
- **REQ-PUB-04 (Ubiquitous)**: THE SYSTEM SHALL すべての内部 asset 参照を `docs/index.html` からの相対パスで解決し、Project site の base path で破綻しない。

### ページ構成

- **REQ-PAGE-01 (Ubiquitous)**: THE SYSTEM SHALL 1枚の `index.html` 上に Header, Hero, About, Features, Curriculum, Access, CTA, Footer の各セクションを上から順に配置する。
- **REQ-PAGE-02 (Event-driven)**: WHEN ユーザーがヘッダーのナビリンクをクリックしたとき、THE SYSTEM SHALL 対応するセクションへスムーズにスクロール移動する。
- **REQ-PAGE-03 (State-driven)**: WHILE ビューポート幅が 768px 以下のとき、THE SYSTEM SHALL ヘッダーのナビをハンバーガーメニュー形式で開閉可能にする。

### コンテンツ

- **REQ-CNT-01 (Ubiquitous)**: THE SYSTEM SHALL 本文テキストをすべてダミー(Lorem 相当)で記述する。
- **REQ-CNT-02 (Ubiquitous)**: THE SYSTEM SHALL フッターに「本サイトはダミーコンテンツの紹介ページサンプルであり、実在校の公式情報ではない」旨の注記を表示する。
- **REQ-CNT-03 (Ubiquitous)**: THE SYSTEM SHALL Access セクションに Google Maps の iframe 埋め込みを表示し、徳島県名西郡神山町中心部を指す。

### デザインテーマ(インド味)

- **REQ-UI-01 (Ubiquitous)**: THE SYSTEM SHALL 配色としてサフラン (`#FF9933`)、白 (`#FFFFFF`)、緑 (`#138808`)、濃紺 (`#000080`) を主要トーンに用いる。
- **REQ-UI-02 (Ubiquitous)**: THE SYSTEM SHALL Hero セクションにマンダラ模様の SVG を配置する。
- **REQ-UI-03 (Ubiquitous)**: THE SYSTEM SHALL セクション区切りまたは装飾要素にペイズリー柄のモチーフを用いる。
- **REQ-UI-04 (Ubiquitous)**: THE SYSTEM SHALL 主要 CTA ボタンを Mughal アーチ形のシルエットでスタイリングする。
- **REQ-UI-05 (Ubiquitous)**: THE SYSTEM SHALL 見出しに Devanagari 風(例: Tiro Devanagari Hindi)+ 本文に Noto Sans JP を Google Fonts から読み込む。

### アニメーション

- **REQ-ANI-01 (Ubiquitous)**: THE SYSTEM SHALL Hero のマンダラ SVG を CSS アニメーションで継続的にゆっくり回転させる。
- **REQ-ANI-02 (Event-driven)**: WHEN セクションがビューポートに進入したとき、THE SYSTEM SHALL `IntersectionObserver` を用いてフェードイン等の出現アニメーションを適用する。
- **REQ-ANI-03 (Optional / WHERE)**: WHERE ユーザーの OS 設定が `prefers-reduced-motion: reduce` のとき、THE SYSTEM SHALL アニメーションを無効化または最小化する。

### レスポンシブ

- **REQ-RES-01 (Ubiquitous)**: THE SYSTEM SHALL 375px / 768px / 1280px の代表ビューポートでレイアウトが破綻なく表示される。
- **REQ-RES-02 (Ubiquitous)**: THE SYSTEM SHALL モバイルファースト方針で CSS を組み立てる。

### ドキュメント

- **REQ-DOC-01 (Ubiquitous)**: THE SYSTEM SHALL `README.md` に公開URL、ローカル確認手順、GitHub Pages 設定手順を日本語で記載する。

## 非機能要件

- **NFR-01 性能**: 初回ロード時のJS実行はメインスレッド負荷を抑え、外部スクリプトは Google Fonts と Google Maps iframe のみとする。
- **NFR-02 アクセシビリティ**: セマンティック HTML を用い、画像/装飾SVGには適切な `alt` または `role="presentation"` を付与する。コントラスト比は本文で 4.5:1 以上を目標。
- **NFR-03 互換性**: 主要モダンブラウザ最新版(Chrome / Edge / Safari / Firefox)で表示できること。
- **NFR-04 保守性**: CSS変数でテーマトークンを定義し、配色変更が1箇所で完結する。
- **NFR-05 安全性**: 外部リソースは公式ドメイン(fonts.googleapis.com, www.google.com/maps/embed)に限定し、機密情報・APIキーをコミットしない。

## 依存・制約

- ビルドツール不使用。`docs/` 直下を静的配信。
- `.devcontainer/devcontainer.json` の `npm ci` は維持(本サイト構築には不使用)。
- 神山まるごと高専のロゴ・写真等の著作物は使用しない(自作 SVG / CSS 装飾のみ)。

## エッジケース

- JS が無効な環境でも、コンテンツは閲覧可能であること(アニメーション/ハンバーガーメニューは degrade してよい)。
- iframe ブロック環境では Maps が表示されないため、所在地テキストを併記する。
- 低速回線での Google Fonts 未読み込み時、`font-display: swap` 相当のフォールバックで読みやすさを保つ。

## 成功条件

1. `docs/` を public source とした GitHub Pages で `index.html` が公開URLで表示できる。
2. Hero / About / Features / Curriculum / Access / CTA / Footer の全セクションが順に表示される。
3. インド味の配色・マンダラ・ペイズリー・アーチ装飾・回転アニメーションが視認できる。
4. モバイル幅でナビが開閉でき、レイアウトが破綻しない。
5. Access セクションに Google Maps が表示される。
6. README に公開URLと公開手順が日本語で記載されている。

## 確信度

- **Confidence Score: 88%**
- 根拠: 技術スタックは標準的、構造はLP定型、依存も限定的。リスクは「インド味」表現の主観的調整のみ。
