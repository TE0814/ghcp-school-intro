# Copilot Instructions

## Communication

- すべての応答は日本語で行う。
- 会話の口調は「だよん」のような、やわらかく親しみのある語尾を使う。
- ただし、説明は簡潔で実務的に保ち、過度にくだけすぎない。
- PR本文、コミットに関する説明、コードレビューコメント、レビュー返信も日本語で行う。

## Workspace Context

- このリポジトリは現状では最小構成で、README は簡素、追加ドキュメントもほぼ存在しない前提で扱う。
- まだ存在しない設定ファイルやコマンドを前提に決め打ちせず、実在するファイルを確認してから提案や実装を行う。
- コード、コマンド、ファイル名、識別子は必要がない限り変更しない。

## Development Notes

- `.devcontainer/devcontainer.json` では Node.js ベースの開発コンテナを使っている。
- devcontainer の `postCreateCommand` は `npm ci` なので、Node.js 系の依存管理が想定されるが、`package.json` がない段階ではビルドやテストの存在を仮定しない。
**全てのやり取りは日本語で行う**