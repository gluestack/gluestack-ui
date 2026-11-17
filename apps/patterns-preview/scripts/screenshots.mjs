// Renders every pattern from dist/ in light and dark at phone size and writes
// apps/website/public/patterns-shots/<slug>-<theme>.webp (the catalog cards).
// Usage: yarn export && yarn shots [slug ...]   Fails if a pattern logs errors.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import sharp from 'sharp';
import { serve } from './serve.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(process.env.PREVIEW_DIST || path.resolve(here, '../dist'));
const OUT = path.resolve(process.env.SHOTS_OUT || path.resolve(here, '../../website/public/patterns-shots'));
const all = fs.readdirSync(DIST).filter((f) => f.endsWith('.html') && !/^(index|_sitemap|\+not-found|\[slug\])\.html$/.test(f)).map((f) => f.replace(/\.html$/, ''));
const only = process.argv.slice(2);
const slugs = only.length ? all.filter((s) => only.includes(s)) : all;

fs.mkdirSync(OUT, { recursive: true });
const server = await serve(0);
const base = `http://localhost:${server.address().port}/preview`;
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const failures = [];
for (const theme of ['dark', 'light']) {
  const page = await browser.newPage({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2, colorScheme: theme });
  for (const slug of slugs) {
    const errors = [];
    const onConsole = (m) => m.type() === 'error' && errors.push(m.text());
    const onError = (e) => errors.push(String(e));
    page.on('console', onConsole);
    page.on('pageerror', onError);
    await page.goto(`${base}/${slug}?theme=${theme}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);
    const png = await page.screenshot({ type: 'png' });
    await sharp(png).resize(585).webp({ quality: 82 }).toFile(path.join(OUT, `${slug}-${theme}.webp`));
    page.off('console', onConsole);
    page.off('pageerror', onError);
    const real = errors.filter((e) => !/Failed to load resource|favicon/.test(e));
    if (real.length) failures.push({ slug, theme, errors: real.slice(0, 3) });
    console.log(`${real.length ? '✗' : '✓'} ${slug} (${theme})`);
  }
  await page.close();
}
await browser.close();
server.close();
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
