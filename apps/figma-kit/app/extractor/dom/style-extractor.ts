/**
 * extractor/dom/style-extractor.ts
 * ----------------------------------
 * Extracts computed CSS styles, pixel dimensions, offsets,
 * text content, and asset info from a DOM element into a flat
 * styles record used across the extractor pipeline.
 */

import { STYLE_KEYS, ALWAYS_CAPTURE_KEYS } from "../constants";
import { getTextContent } from "./text-extractor";
import { extractAssetInfo } from "./asset-extractor";
import { extractDesignTokenRefs } from "./token-scanner";

export function filterProps(
  raw: Record<string, unknown>,
  ignoredKeys: Set<string>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (ignoredKeys.has(k)) continue;
    if (typeof v === "function") continue;
    if (v === null || v === undefined) continue;
    if (typeof v === "object" && !Array.isArray(v)) continue;
    out[k] = v;
  }
  return out;
}

export function extractStyles(domNode: Element): Record<string, string> {
  const cs = window.getComputedStyle(domNode);
  const styles: Record<string, string> = {};
  const rect = domNode.getBoundingClientRect();

  for (const key of STYLE_KEYS) {
    const value = cs[key] as string | undefined;
    if (!value || value === "") continue;
    if (ALWAYS_CAPTURE_KEYS.has(key as string)) {
      styles[key as string] = value;
      continue;
    }
    if (value === "none" || value === "normal" || value === "auto") continue;

    // Guard: Framer Motion sets opacity near-zero at the start of enter
    // animations. Skip values < 0.01 — they are animation initial-state
    // artefacts, never a real design value.
    if ((key as string) === "opacity" && parseFloat(value) < 0.01) continue;

    styles[key as string] = value;
  }

  if (rect.width > 0) styles["_rectWidth"] = String(Math.round(rect.width));
  if (rect.height > 0) styles["_rectHeight"] = String(Math.round(rect.height));

  const parentEl = domNode.parentElement;
  if (parentEl) {
    const parentRect = parentEl.getBoundingClientRect();
    styles["_offsetTop"] = String(Math.round(rect.top - parentRect.top));
    styles["_offsetLeft"] = String(Math.round(rect.left - parentRect.left));
  }

  const text = getTextContent(domNode);
  if (text) styles["_textContent"] = text;

  const asset = extractAssetInfo(domNode);
  if (asset.assetType) {
    styles["_assetType"] = asset.assetType;
    if (asset.svgContent) styles["_svgContent"] = asset.svgContent;
    if (asset.imageSrc) styles["_imageSrc"] = asset.imageSrc;
    if (asset.svgDimensions) {
      const d = asset.svgDimensions;
      styles["_svgRenderedWidth"] = String(d.renderedWidth);
      styles["_svgRenderedHeight"] = String(d.renderedHeight);
      if (d.intrinsicWidth !== undefined)
        styles["_svgIntrinsicWidth"] = String(d.intrinsicWidth);
      if (d.intrinsicHeight !== undefined)
        styles["_svgIntrinsicHeight"] = String(d.intrinsicHeight);
      if (d.viewBox) styles["_svgViewBox"] = d.viewBox;
    }
  }

  return styles;
}

export { extractDesignTokenRefs };
