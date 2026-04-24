/**
 * Contact sheet 1024x558 前提で 5x3 グリッド切り出し。座標は rowStd から推定。
 * 変更時: 以下 GRID 定数を調整。
 * Run: node scripts/split-composite.mjs
 */
import Jimp from "jimp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "assets", "source-composite.jpg");
const outDir = join(root, "assets", "images");

/** 左から右、上段→中段→下段。画像説明の並びに合わせる */
const NAMES = [
  "index-editorial-01",
  "index-editorial-02",
  "products-tee-01",
  "products-tee-02",
  "products-tee-03",
  "products-shirt-01",
  "products-shirt-02",
  "products-set-01",
  "products-set-02",
  "products-tee-01-detail",
  "lookbook-01",
  "lookbook-02",
  "lookbook-03",
  "lookbook-04",
  "sheet-tile-15" // 余り枠（使わないなら site から参照しなければよい）
];

// rowStd>25 の大きな帯 [y0, y1] から3段採用（中間帯域を2枚のメイン帯域で分割）
const ROWS = [
  [29, 163], // 上段: index + tees
  [212, 346], // 中段: shirts, sets, detail
  [397, 534] // 下段: lookbook 等
];

// 5等分（枠内に小さなラベル帯を含む可能性 — 厳密トリミングは手元で可）
const COLS = 5;
const MARGIN_X = 0;
const IMG_W = Math.floor((1024 - MARGIN_X * 2) / COLS);

function cropCell(im, x, y, w, h) {
  return im.clone().crop(x, y, w, h);
}

async function main() {
  const im = await Jimp.read(src);
  const w = im.bitmap.width;
  if (w !== 1024) {
    console.warn("警告: 元画像幅が 1024 以外です。cols 再計算が必要かもしれません:", w);
  }
  const imgW = Math.floor((w - MARGIN_X * 2) / COLS);
  await mkdir(outDir, { recursive: true });

  let k = 0;
  for (const [r, row] of ROWS.entries()) {
    const [y0, y1] = row;
    const rh = y1 - y0 + 1;
    for (let c = 0; c < COLS; c++) {
      const x0 = MARGIN_X + c * imgW;
      const name = NAMES[k] || `cell-${r}-${c}`;
      const out = await cropCell(im, x0, y0, imgW, rh);
      const outPath = join(outDir, `${name}.jpg`);
      await out.quality(88).writeAsync(outPath);
      console.log("Wrote", outPath, { x0, y0, w: imgW, h: rh });
      k += 1;
    }
  }
  console.log("Total tiles:", k);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
