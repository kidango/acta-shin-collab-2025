# ACTNIX Corporate Website

株式会社ACTNIXのコーポレートサイトです。AstroとTailwind CSSを使用して構築されています。

## 必要条件

- Node.js 18.0.0以上
- npm 9.0.0以上

## セットアップ

1. リポジトリをクローン
```bash
git clone [repository-url]
cd actnix_hp
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

## ビルド

本番用のビルドを作成する場合：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## プレビュー

ビルドしたサイトをローカルでプレビューする場合：

```bash
npm run preview
```

## プロジェクト構成

- `src/pages/` - 各ページのコンポーネント
- `src/layouts/` - レイアウトコンポーネント
- `src/components/` - 再利用可能なコンポーネント
- `public/` - 静的アセット（画像、ファビコン等）

## 技術スタック

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

