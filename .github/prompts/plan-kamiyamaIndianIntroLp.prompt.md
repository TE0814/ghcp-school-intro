# Plan: 神山まるごと高専 紹介ページ (インド味LP)

## 概要
- TE0814/ghcp-school-intro を Project site として GitHub Pages で公開
- 公開URL: https://te0814.github.io/ghcp-school-intro/
- 公開元: main ブランチ + /docs フォルダ
- 技術: 素のHTML/CSS/JS(ビルド不要・最小構成)
- 構成: 1ページLP(Hero / 特徴 / カリキュラム / アクセス / CTA)
- コンテンツ: ダミーテキスト(後で差し替え前提)
- デザインテーマ: インド風(配色=サフラン#FF9933/白/緑#138808/濃紺#000080、マンダラ/ペイズリー/アーチ装飾、スパイス・寺院・ボリウッド風ビジュアル、回転/踊るアニメーション)
- アクセスにGoogleマップiframe埋め込み

## ディレクトリ構成
- docs/
  - index.html
  - assets/
    - css/style.css
    - js/main.js
    - img/ (placeholder.svg などダミー画像)
  - .nojekyll (Jekyll処理を避ける)

## 実装ステップ
1. docs/ ディレクトリ作成、.nojekyll 配置
2. docs/index.html 作成
   - <head>: meta, OGP, Google Fonts(Tiroデーヴァナーガリー風 + 本文用 Noto Sans JP)
   - セクション: header(ナビ) / hero / about / features / curriculum / access / cta / footer
   - アクセスにGoogle Maps iframe (神山まるごと高専の所在地: 徳島県名西郡神山町)
3. docs/assets/css/style.css 作成
   - CSS変数でインドカラーパレット定義
   - マンダラ/ペイズリーをCSS or インラインSVGで装飾
   - アーチ型ヘッダー、ボーダーパターン
   - レスポンシブ(モバイル中心 → デスクトップ)
4. docs/assets/js/main.js 作成
   - スクロール連動アニメーション(IntersectionObserver)
   - マンダラ回転アニメーション(CSS animationでも可)
   - ナビのモバイル開閉
5. docs/assets/img/ にダミーSVG配置(スパイス/寺院/ダンス アイコン風)
6. README.md にPages公開URLと公開手順を追記
7. (手動) GitHub の Settings → Pages で Source: Deploy from a branch / Branch: main / Folder: /docs を設定

## 主要な装飾アイデア(インド味)
- Hero: サフラン背景に白い大きなマンダラSVGがゆっくり回転、見出しはデーヴァナーガリー風フォント
- セクション区切り: ペイズリー型のSVGディバイダー
- ボタン: アーチ型(Mughal arch)に金縁
- カード: 縁取りにペイズリー繰り返しパターン
- アクセントとして "ナマステ" 等の挨拶を装飾的に配置

## 関連ファイル
- docs/index.html (新規) — LP本体
- docs/assets/css/style.css (新規) — テーマ・装飾
- docs/assets/js/main.js (新規) — スクロール演出
- docs/.nojekyll (新規) — Jekyll抑止
- README.md (更新) — 公開URLと手順を追記

## 検証
1. ローカル: `python3 -m http.server 8000 --directory docs` で開いて表示確認
2. レイアウト: モバイル(375px) / タブレット / デスクトップで崩れないか
3. リンク/画像のパスが相対パスで通っているか(Project siteなので /assets/ 絶対パスNG)
4. Googleマップiframeの表示確認
5. push後、GitHub Pages 設定 → Actions の deploy 成功 → 公開URLで表示確認
6. 404切り分け: docs/index.html の存在、Pages設定、反映待ちの順で確認

## 決定事項
- 公開方式: branch(main)+/docs。シンプルさ優先、ビルド不要のため
- 技術: 素のHTML/CSS/JS。npm ciはdevcontainer用に残しても害なし、サイト側では不使用
- コンテンツ: 全部ダミー(Lorem/プレースホルダ)。あとで実情報差し替え
- インド味は「やりすぎ寄り」(配色+モチーフ+ビジュアル+アニメ全部入り)

## スコープ外
- 実コンテンツ収集、ライセンス調整済みの画像
- ダークモード、多言語、問い合わせフォーム
- ビルドツール導入、CI設定

## 留意
- 神山まるごと高専は実在校なので、ダミーであることが分かるように注記をフッター等に入れる(誤解防止)
- Google Mapsはiframeの公開埋め込みURLを使用(APIキー不要)
