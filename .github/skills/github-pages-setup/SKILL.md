---
name: github-pages-setup
description: 'GitHub Pages サイトを構築・公開するときに使う Skill。GitHub Pages, Pages 設定, publishing source, GitHub Actions, Jekyll, custom domain, 404 troubleshooting の判断と手順を案内する。'
argument-hint: 'リポジトリ種別、公開方法、使いたい技術スタックがあれば渡す'
user-invocable: true
---

# GitHub Pages Setup

## いつ使うか

- GitHub Pages で静的サイトを公開したいとき
- リポジトリを User/Organization site と Project site のどちらで公開するか整理したいとき
- branch から公開するか GitHub Actions で公開するか決めたいとき
- custom domain, Jekyll, 404 の確認ポイントも含めて一通り進めたいとき

## この Skill がやること

1. リポジトリの公開形態を整理する
2. 公開方式を選ぶ
3. 必要な配置と設定を案内する
4. 公開後の確認項目と 404 の切り分けを行う

## 手順

### 1. サイト種別を決める

- User/Organization site:
  リポジトリ名が `<owner>.github.io` のとき。公開 URL は通常 `https://<owner>.github.io/`。
- Project site:
  任意のリポジトリ名のとき。公開 URL は通常 `https://<owner>.github.io/<repo>/`。

判断後は、asset path や link path が公開 URL に合うかを確認する。Project site では絶対パス `/assets/...` が壊れやすいので、相対パスか適切な base path を使う。

### 2. 公開方式を選ぶ

- 単純な静的ファイルをそのまま公開するなら、branch からの公開を優先する
- ビルド工程が必要なら、GitHub Actions からの公開を優先する
- Jekyll を GitHub Pages 標準の範囲で使うなら、Jekyll 対応ドキュメントを参照する

### 3. branch から公開する場合

1. 公開ファイルを repository root または `docs/` に配置する
2. 少なくとも `index.html` を用意する
3. GitHub の Pages 設定で公開元の branch と folder を選ぶ
4. 公開 URL が反映されるまで待ち、配信先 URL を開いて確認する

### 4. GitHub Actions で公開する場合

1. 生成物を出力する build 手順の有無を確認する
2. Pages 用 workflow を用意し、artifact を deploy する
3. GitHub の Pages 設定で GitHub Actions を公開元にする
4. Actions 実行結果と deploy 完了を確認する

Actions を使う場合は、既存のビルドツールや framework の標準出力先を確認してから workflow を設計する。存在しない build コマンドは仮定しない。

### 5. カスタムドメインが必要か確認する

- 必要なら `CNAME` と DNS 設定を合わせて構成する
- HTTPS 強制と反映待ち時間を確認する

### 6. 公開確認を行う

- `index.html` に到達できる
- CSS, JS, image への path が壊れていない
- Project site なら `<repo>` を含む URL で表示できる
- README の相対リンクと Pages の公開 URL を混同していない
- 必要なら custom domain 側でも表示できる

### 7. 404 のときの切り分け

- Pages の公開元 branch / folder が正しいか
- 公開対象に `index.html` が含まれているか
- Project site で path が `/repo/...` を前提にできているか
- 反映待ち中ではないか
- Actions 公開なら workflow が成功しているか

## 分岐ルール

- リポジトリ名が `<owner>.github.io` なら User/Organization site として扱う
- それ以外は Project site 前提で base path を確認する
- build コマンドや静的出力先があるなら GitHub Actions を検討する
- 単純な HTML/CSS/JS だけなら branch 公開を先に検討する
- Jekyll 固有のテーマや front matter を使うなら Jekyll ドキュメントを参照する

## 完了条件

- 公開 URL が確定している
- 公開元が Settings で正しく設定されている
- `index.html` を含む配信物が存在する
- 主要ページがブラウザで表示できる
- asset path と内部リンクが壊れていない

## 参考資料

- [公式ドキュメント一覧](./references/official-docs.md)

## 実行時の進め方

1. まず repository 名と公開したい URL 形態を確認する
2. 次に build の有無を確認して branch 公開か Actions 公開かを決める
3. 既存ファイルを読んで `index.html`, `docs/`, workflow の有無を確認する
4. 足りない設定やファイルだけを最小変更で追加する
5. 最後に公開 URL と 404 リスクを確認する