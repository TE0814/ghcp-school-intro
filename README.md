# ghcp-school-intro

神山まるごと高専(架空のインド味アレンジ)を題材にした、GitHub Pages 用の紹介LPデモだよん。

> ⚠️ 本サイトは学習・デモ用途です。掲載文章はすべてダミーで、実在する「神山まるごと高専」の公式情報ではありません。

## 公開URL

- https://te0814.github.io/ghcp-school-intro/

## 構成

```
docs/
├ index.html
├ .nojekyll
└ assets/
  ├ css/style.css
  ├ js/main.js
  └ img/*.svg
```

ビルドツール不要。素のHTML/CSS/JSのみで動くよん。

## ローカル確認

```bash
python3 -m http.server 8000 --directory docs
# http://localhost:8000/ を開く
```

## GitHub Pages の公開設定(初回のみ)

1. GitHub の対象リポジトリ → **Settings** → **Pages** を開く
2. **Source** を `Deploy from a branch` に設定
3. **Branch** を `main` / フォルダを `/docs` に設定して **Save**
4. 反映後、上記の公開URLにアクセスして表示を確認

## 仕様ドキュメント

- [spec/requirements.md](spec/requirements.md)
- [spec/design.md](spec/design.md)
- [spec/tasks.md](spec/tasks.md)
