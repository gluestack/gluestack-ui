/**
 * exporter/style-cleaner.ts
 * --------------------------
 * Filters out internal style fields (prefixed with _) that are used
 * only in the extraction pipeline and must not appear in Figma output.
 * Also provides the junk component filter used to exclude Next.js internals.
 */

import { JUNK_COMPONENT_NAMES, JUNK_SUBSTRINGS } from "./constants";

export function isJunkComponent(name: string): boolean {
  if (JUNK_COMPONENT_NAMES.has(name)) return true;
  if (name.startsWith("$")) return true;
  if (name.includes(".")) return true;
  return JUNK_SUBSTRINGS.some((sub) =>
    name.toLowerCase().includes(sub.toLowerCase()),
  );
}

export function stripInternalFields(styles: any): any {
  if (!styles) return styles;
  const {
    _textContent, textContent, _assetType, _svgContent, _imageSrc,
    _svgRenderedWidth, _svgRenderedHeight, _svgIntrinsicWidth,
    _svgIntrinsicHeight, _svgViewBox,
    ...rest
  } = styles;
  return rest;
}

export function stripTextFromVariant(variant: any): any {
  const result: any = { ...variant, styles: stripInternalFields(variant.styles) };
  if (result.children?.length > 0) {
    result.children = result.children.map((child: any) => stripTextFromChild(child));
  }
  return result;
}

export function stripTextFromChild(child: any): any {
  const result: any = { ...child, styles: stripInternalFields(child.styles) };
  if (!result.isTextElement) delete result.textContent;
  if (result.children?.length > 0) {
    result.children = result.children.map((c: any) => stripTextFromChild(c));
  }
  return result;
}
