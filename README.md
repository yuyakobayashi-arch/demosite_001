# demosite_001

架空のアパレルブランド **MONO** の静的Webサイト（HTMLモック）です。ミニマルな白・黒・グレーのトーン、ルーズフィットの定番アイテムを想定したデモ用ページです。

## 構成

| パス | 内容 |
| --- | --- |
| `index.html` | トップ（ヒーロー・導入） |
| `about.html` | ブランドについて |
| `products.html` | 商品ライン（カテゴリ一覧） |
| `lookbook.html` | ルックブック |
| `contact.html` | お問い合わせ（フォームはモック） |
| `product-tee-01.html` | 商品詳細（サンプル1件） |
| `privacy.html` | プライバシーポリシー（雛形） |
| `assets/css/style.css` | 共有スタイル |
| `assets/images/*.jpg` | 掲載用に切り出した写真（連絡用シートから 5×3 分割） |
| `assets/source-composite.jpg` | 元の一枚絵（同じ行・列定義で `npm run split-assets` から再出力可能） |
| `scripts/split-composite.mjs` | シート切り出し用スクリプト（`ROWS` 座標を画像に合わせて調整可） |

## 連絡シートから画像を切り出し直す

元画像を `assets/source-composite.jpg` に置き、必要なら `scripts/split-composite.mjs` 内の `ROWS`（各段の y 座標帯）を合わせてから実行します。

```bash
npm install
npm run split-assets
```

## 閲覧方法

リポジトリのルートで次のいずれかを実行するか、ブラウザで `index.html` を直接開いてください。

```bash
npx -y serve .
```

## GitHub Pages での公開

リポジトリの **Settings → Pages** で、**Branch** として `main`、フォルダは **/ (root)** を選ぶと、`index.html` がトップとして公開されます。

## ライセンス

デモ用のサンプルコンテンツです。
