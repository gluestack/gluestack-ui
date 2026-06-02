/**
 * extractor/dom/asset-extractor.ts
 * ----------------------------------
 * Detects and extracts SVG / image assets from DOM nodes.
 * Resolves currentColor in SVGs and captures precise pixel dimensions
 * so the Figma plugin can reconstruct assets at the correct size.
 */

import { SvgDimensions } from "../types";

function resolveCurrentColor(svgStr: string, el: Element): string {
  const cs = window.getComputedStyle(el);
  const colorVal = cs.color;
  if (!colorVal || colorVal === "currentColor") return svgStr;
  const m = colorVal.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return svgStr.replace(/currentColor/g, colorVal);
  const hex =
    "#" +
    ("0" + parseInt(m[1]).toString(16)).slice(-2) +
    ("0" + parseInt(m[2]).toString(16)).slice(-2) +
    ("0" + parseInt(m[3]).toString(16)).slice(-2);
  return svgStr.replace(/currentColor/g, hex);
}

function captureSvgDimensions(
  svgEl: SVGSVGElement,
  wrapperEl: Element,
): SvgDimensions {
  const rect = wrapperEl.getBoundingClientRect();
  const svgRect = svgEl.getBoundingClientRect();
  const renderedWidth = Math.round(
    Math.min(rect.width || svgRect.width, svgRect.width) || svgRect.width,
  );
  const renderedHeight = Math.round(
    Math.min(rect.height || svgRect.height, svgRect.height) || svgRect.height,
  );
  const dims: SvgDimensions = { renderedWidth, renderedHeight };
  const attrW = svgEl.getAttribute("width");
  const attrH = svgEl.getAttribute("height");
  if (attrW && !attrW.endsWith("%")) {
    const parsed = parseFloat(attrW);
    if (!isNaN(parsed)) dims.intrinsicWidth = parsed;
  }
  if (attrH && !attrH.endsWith("%")) {
    const parsed = parseFloat(attrH);
    if (!isNaN(parsed)) dims.intrinsicHeight = parsed;
  }
  const vb = svgEl.getAttribute("viewBox");
  if (vb) dims.viewBox = vb;
  return dims;
}

export function extractAssetInfo(domNode: Element): {
  assetType?: "image" | "svg";
  svgContent?: string;
  svgDimensions?: SvgDimensions;
  imageSrc?: string;
} {
  if (domNode.tagName?.toLowerCase() === "svg") {
    const svgEl = domNode as unknown as SVGSVGElement;
    return {
      assetType: "svg",
      svgContent: resolveCurrentColor(domNode.outerHTML, domNode),
      svgDimensions: captureSvgDimensions(svgEl, domNode),
    };
  }

  const innerSvg = domNode.querySelector("svg");
  if (innerSvg && domNode.childElementCount === 1) {
    return {
      assetType: "svg",
      svgContent: resolveCurrentColor(innerSvg.outerHTML, domNode),
      svgDimensions: captureSvgDimensions(
        innerSvg as unknown as SVGSVGElement,
        domNode,
      ),
    };
  }

  if (domNode.tagName?.toLowerCase() === "img") {
    const src =
      (domNode as HTMLImageElement).currentSrc ||
      (domNode as HTMLImageElement).src;
    if (src) return { assetType: "image", imageSrc: src };
  }

  const cs = window.getComputedStyle(domNode);
  const bg = cs.backgroundImage;
  if (bg && bg !== "none") {
    const urlMatch = bg.match(/url\(["']?([^"')]+)["']?\)/);
    if (urlMatch?.[1]) return { assetType: "image", imageSrc: urlMatch[1] };
  }

  return {};
}
