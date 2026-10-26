// Builds the optimised WebP derivatives in public/images from the untouched
// originals in assets-src/originals (downloaded once from thepracticebali.com,
// see docs/source-audit/04-assets-manifest.csv). Run with `npm run images`.
//
// crop: [left, top, width, height] as fractions of the original.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets-src/originals';
const OUT = 'public/images';

const jobs = [
  // Hero: three teachers on the right, empty studio wall on the left for the heading
  { src: '2024/01/privates2024.jpg', out: 'hero/studio', widths: [640, 1024, 1487] },
  // Whole team (team section)
  { src: '2024/10/schedule_new.jpg', out: 'team/group', widths: [640, 1024, 1487] },
  // Classes: two teachers seated (left half of the banner)
  { src: '2024/01/description2024.jpg', out: 'classes/studio', crop: [0, 0, 0.55, 1], widths: [480, 818] },
  // Contact: Octavio and Emma seated in the studio (people centred)
  { src: '2024/01/online_training2024.jpg', out: 'contact/founders', crop: [0.18, 0, 0.66, 1], widths: [640, 981] },

  // Class icons (original class-description artwork), trimmed to the icon
  ...[
    ['2022/07/moon22.jpg', 'moon'],
    ['2022/07/sun22.jpg', 'sun'],
    ['2022/07/fire22.jpg', 'fire'],
    ['2023/01/morning.jpg', 'beginners'],
    ['2022/12/yin.jpg', 'yin'],
    ['2022/07/vital22.jpg', 'meditation'],
    ['2022/07/kundalini22.jpg', 'raja'],
    ['2022/07/kirtan22.jpg', 'bhakti'],
    ['2024/01/qi-gong.jpg', 'qi-gong'],
    ['2024/01/wing-chu.jpg', 'jianfa'],
  ].map(([src, name]) => ({
    src,
    out: `classes/${name}`,
    crop: [0.06, 0.06, 0.88, 0.88],
    widths: [144, 288],
  })),

  // Teacher-training posters: photographic lower part only (text is in HTML)
  { src: '2026/06/new-200hr-OE27.jpg', out: 'trainings/200hr', crop: [0, 0.365, 1, 0.635], widths: [640, 1080] },
  { src: '2026/08/IG-Post-Meditation-TT.jpg', out: 'trainings/meditation-100hr', crop: [0, 0.4, 1, 0.6], widths: [480, 800] },
  { src: '2026/09/IG-Post-ONLINE-Meditation-TT.jpg', out: 'trainings/online-meditation-100hr', crop: [0, 0.4, 1, 0.6], widths: [480, 800] },
  { src: '2026/10/300hr-12months-IG-Post.jpg', out: 'trainings/sadhana-300hr', crop: [0, 0.4, 1, 0.6], widths: [480, 800] },
  { src: '2026/09/300hr-Bali-IG-Post.jpg', out: 'trainings/bali-300hr', crop: [0, 0.2, 0.6, 0.36], widths: [480, 648] },

  // Workshop poster (Kriya) – photographic part only
  { src: '2026/09/IG-Square-Octa-Workshop.jpg', out: 'workshops/kriya', crop: [0.16, 0.37, 0.6, 0.6], widths: [480, 648] },

  // Private sessions (2026 editorial portraits)
  { src: '2026/09/lala.jpg', out: 'privates/lala', widths: [480, 800, 1080] },
  { src: '2026/09/jason.jpg', out: 'privates/jason', widths: [480, 800, 1080] },
  { src: '2026/09/ming.jpg', out: 'privates/ming', widths: [480, 800, 1080] },
  { src: '2026/09/yantra.jpg', out: 'privates/yantra', widths: [480, 800, 1080] },

  // Team portraits (350px originals – not upscaled)
  ...['2026/07/octa-profile.jpg', '2021/01/emma-s-profile.jpg', '2024/01/ming.jpg', '2023/01/jason-2023.jpg', '2024/10/lala.jpg', '2026/07/jodie-profile.jpg'].map(
    (src, i) => ({ src, out: `team/${['octavio', 'emma', 'ming', 'jason', 'lala', 'jodie'][i]}`, widths: [350] })
  ),

  // Books flat-lay and The Practice Online banner
  { src: '2025/12/books-banner.jpg', out: 'books/books', widths: [640, 1024, 1487] },
  { src: '2024/01/tpo2024.jpg', out: 'online/tpo', crop: [0.2, 0, 0.8, 1], widths: [640, 1190] },
];

const manifest = {};

for (const job of jobs) {
  const file = path.join(SRC, job.src);
  const meta = await sharp(file).metadata();
  let region = { left: 0, top: 0, width: meta.width, height: meta.height };
  if (job.crop) {
    const [l, t, w, h] = job.crop;
    region = {
      left: Math.round(l * meta.width),
      top: Math.round(t * meta.height),
      width: Math.round(w * meta.width),
      height: Math.round(h * meta.height),
    };
  }
  await mkdir(path.join(OUT, path.dirname(job.out)), { recursive: true });
  const sizes = [];
  for (const w of job.widths) {
    const width = Math.min(w, region.width);
    const height = Math.round((region.height / region.width) * width);
    const target = path.join(OUT, `${job.out}-${width}.webp`);
    await sharp(file).extract(region).resize(width, height).webp({ quality: 78, effort: 6 }).toFile(target);
    sizes.push(width);
  }
  manifest[job.out] = { widths: [...new Set(sizes)], ratio: +(region.width / region.height).toFixed(4) };
}

// Logo: the only available version (260x320 PNG) – kept at its native ratio
await mkdir(path.join(OUT, 'brand'), { recursive: true });
const logo = path.join(SRC, '2023/05/tp_logo_new.png');
await sharp(logo).resize(130, 160).webp({ quality: 90 }).toFile(path.join(OUT, 'brand/logo-130.webp'));
await sharp(logo).webp({ quality: 90 }).toFile(path.join(OUT, 'brand/logo-260.webp'));
// Square app icon: logo centred on a transparent canvas (no stretching)
await sharp(logo)
  .resize(208, 256)
  .extend({ left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('src/app/icon.png');

await writeFile('src/data/image-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${Object.keys(manifest).length} image sets`);
