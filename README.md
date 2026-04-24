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

## 閲覧方法

リポジトリのルートで次のいずれかを実行するか、ブラウザで `index.html` を直接開いてください。

```bash
npx -y serve .
```

## GitHub Pages での公開

リポジトリの **Settings → Pages** で、**Branch** として `main`、フォルダは **/ (root)** を選ぶと、`index.html` がトップとして公開されます。

## ライセンス

デモ用のサンプルコンテンツです。
