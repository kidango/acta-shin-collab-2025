# ACTA-SHIN Collaboration 2025

ACT@SAKUと新日本演劇のコラボレーションプロジェクト用LPです。AstroとTailwind CSSを使用して構築されています。

## 必要条件

- Node.js 18.0.0以上
- pnpm 10.0.0以上

## セットアップ

1. リポジトリをクローン
```bash
git clone [repository-url]
cd acta-shin-collab-2025
```

2. 依存関係のインストール
```bash
pnpm install
```

3. 開発サーバーの起動
```bash
pnpm dev
```

開発サーバーは `http://localhost:4321` で起動します。

## ビルド

本番用のビルドを作成する場合：

```bash
pnpm build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## プレビュー

ビルドしたサイトをローカルでプレビューする場合：

```bash
pnpm preview
```

## プロジェクト構成

- `src/pages/` - 各ページのコンポーネント
- `src/layouts/` - レイアウトコンポーネント
- `src/components/` - 再利用可能なコンポーネント
- `src/styles/` - スタイルファイル
- `public/` - 静的アセット（画像、ファビコン等）

## 技術スタック

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [pnpm](https://pnpm.io) - パッケージマネージャー

