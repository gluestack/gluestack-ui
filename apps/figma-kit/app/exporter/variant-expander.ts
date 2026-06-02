/**
 * exporter/variant-expander.ts
 * -----------------------------
 * Renders missing variant combinations in an isolated container and
 * merges them back into the live-page variants.
 *
 * Components in SKIP_ISOLATED_RENDER are passed through as-is because
 * they depend on GluestackUIProvider / AnimatePresence context that is
 * absent in the isolated container.
 *
 * ── SVG / Asset healing ───────────────────────────────────────────────────
 * When a component is rendered in isolation the React tree often produces
 * SVG icon elements whose <path> children are absent — the DOM shows an
 * empty <svg> shell.  This happens because icon components (GlobeIcon,
 * InfoIcon, …) rely on context or children passed by the parent that are
 * not present in the detached container.
 *
 * Step 1 — Shape healing:
 *   Walk every new variant's child tree.  For any child whose SVG content
 *   is empty / path-less (or whose image src is missing), find the best-
 *   matching live donor variant (highest propMatchScore on parent props)
 *   and copy the full SVG path markup across.
 *
 * Step 2 — Color correction:
 *   The donor's svgContent has stroke/fill hex colors baked in from its own
 *   action/state.  After copying we re-color the SVG using the healed child's
 *   own CSS color value, which the isolated render captured correctly from the
 *   component's CSS classes even though the SVG paths were missing.
 *
 *   Color source priority (raw pre-normalizer styles):
 *     1. child.designTokens.color.resolvedValue  — most precise (CSS rgb string)
 *     2. child.styles.color                      — computed CSS fallback
 *   Both are parsed to #rrggbb hex and used to replace every hex color found
 *   in stroke= / fill= SVG attributes (skipping "none"/"transparent").
 * ──────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { extractComponentsFromFiber } from "../extractor/index";
import { ComponentFnEntry } from "../extractor/types";
import { SKIP_ISOLATED_RENDER } from "./constants";
import {
  buildVariantGroups,
  generateAllCombos,
  dedupVariantsByProps,
  normalizeVariantChildren,
  expandStateToProps,
  collapseStatesToSingleProp,
} from "./variant-utils";
import { buildChildrenFromVariant } from "./children-builder";

// ---------------------------------------------------------------------------
// SVG asset field names on the raw (pre-normalizer) style object.
// ---------------------------------------------------------------------------
const SVG_ASSET_FIELDS = [
  "_svgContent",
  "_svgRenderedWidth",
  "_svgRenderedHeight",
  "_svgIntrinsicWidth",
  "_svgIntrinsicHeight",
  "_svgViewBox",
] as const;

const IMAGE_ASSET_FIELDS = ["_imageSrc"] as const;

// ---------------------------------------------------------------------------
// Color utilities
// ---------------------------------------------------------------------------

/**
 * Parse any CSS color string into a lowercase #rrggbb hex string.
 * Handles:
 *   rgb(11, 141, 205)     → #0b8dcd
 *   rgba(11, 141, 205, 1) → #0b8dcd
 *   #0b8dcd               → #0b8dcd  (pass-through)
 *   #abc                  → #aabbcc  (3-digit expand)
 *   "11 141 205"          → #0b8dcd  (design-token registry space-separated format)
 */
function parseColorToHex(color: string | undefined | null): string | null {
  if (!color) return null;
  const c = color.trim();

  // 6-digit hex — pass through
  if (/^#[0-9a-f]{6}$/i.test(c)) return c.toLowerCase();

  // 3-digit hex → expand
  const hex3 = c.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (hex3) {
    return `#${hex3[1]}${hex3[1]}${hex3[2]}${hex3[2]}${hex3[3]}${hex3[3]}`.toLowerCase();
  }

  // rgb() / rgba()
  const rgbMatch = c.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (rgbMatch) {
    return (
      "#" +
      Number(rgbMatch[1]).toString(16).padStart(2, "0") +
      Number(rgbMatch[2]).toString(16).padStart(2, "0") +
      Number(rgbMatch[3]).toString(16).padStart(2, "0")
    );
  }

  // Design token registry format: "R G B" (three space-separated integers)
  const spaceRgb = c.match(/^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/);
  if (spaceRgb) {
    return (
      "#" +
      Number(spaceRgb[1]).toString(16).padStart(2, "0") +
      Number(spaceRgb[2]).toString(16).padStart(2, "0") +
      Number(spaceRgb[3]).toString(16).padStart(2, "0")
    );
  }

  return null;
}

/**
 * Replace every hex color that appears as a stroke= or fill= attribute value
 * in an SVG string with `newHex`.
 *
 * Only replaces hex colors (not "none", "transparent", "currentColor", etc.)
 * so structural fill="none" declarations are preserved.
 */
function recolorSvgContent(svgContent: string, newHex: string): string {
  // Match stroke="#xxxxxx" or fill="#xxxxxx" (3- or 6-digit hex)
  return svgContent.replace(
    /((?:stroke|fill)=")#[0-9a-fA-F]{3,8}(")/g,
    (_match, prefix, suffix) => `${prefix}${newHex}${suffix}`,
  );
}

/**
 * Resolve the intended display color for a raw (pre-normalizer) child node.
 *
 * Priority:
 *  1. child.designTokens.color.resolvedValue  — CSS rgb() string from the token scanner
 *  2. child.styles.color                      — computed CSS color fallback
 *
 * Returns a #rrggbb hex string, or null if no color could be resolved.
 */
function resolveChildColor(child: any): string | null {
  // 1. Design token resolved value (most reliable)
  const tokenRef = child.designTokens?.color;
  if (tokenRef?.resolvedValue) {
    const hex = parseColorToHex(tokenRef.resolvedValue);
    if (hex) return hex;
  }

  // 2. Raw computed CSS color on the styles object
  const cssColor = child.styles?.color;
  if (cssColor) {
    const hex = parseColorToHex(cssColor);
    if (hex) return hex;
  }

  return null;
}

// ---------------------------------------------------------------------------
// SVG shell detection
// ---------------------------------------------------------------------------

/** Returns true when a styles object contains an SVG but the SVG has no real
 *  drawing elements — i.e. the isolated renderer produced an empty shell. */
function isSvgShell(styles: any): boolean {
  if (!styles) return false;
  if (styles._assetType !== "svg") return false;
  const content: string = styles._svgContent ?? "";
  return !/<(path|circle|rect|line|polyline|polygon|ellipse|g|use|text|image)\b/i.test(
    content,
  );
}

/** Returns true when a styles object expects an image but has no src. */
function isMissingImageSrc(styles: any): boolean {
  if (!styles) return false;
  return styles._assetType === "image" && !styles._imageSrc;
}

// ---------------------------------------------------------------------------
// Donor matching
// ---------------------------------------------------------------------------

/** Count how many prop key/value pairs the two objects share. */
function propMatchScore(
  propsA: Record<string, any>,
  propsB: Record<string, any>,
): number {
  let score = 0;
  for (const [k, v] of Object.entries(propsA)) {
    if (propsB[k] === v) score++;
  }
  return score;
}

/** Depth-first search for the first child (at any depth) with the given name. */
function findChildByName(variant: any, name: string): any | null {
  for (const child of variant.children ?? []) {
    if (child.name === name) return child;
    const found = findChildByName(child, name);
    if (found) return found;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Core healing logic
// ---------------------------------------------------------------------------

/**
 * Heal a single child node from an isolated-rendered variant.
 *
 * For each child with a shell SVG or missing image src:
 *   1. Find the best-matching live donor variant by propMatchScore on the
 *      parent's props (highest number of matching prop key/value pairs).
 *   2. Locate the same-named child inside the donor and copy its asset fields
 *      (_svgContent, dimensions, viewBox, etc.).
 *   3. Re-color the copied svgContent by replacing all baked-in hex stroke/fill
 *      colors with the isolated child's own resolved CSS color.  The isolated
 *      render captured the correct color from CSS classes (e.g. text-info-600)
 *      even though the SVG paths were absent.
 */
function healChildAssets(
  child: any,
  parentProps: Record<string, any>,
  liveVariants: any[],
): any {
  // Recurse depth-first so nested SVGs deep in the tree are also fixed.
  let healed = child;
  if (healed.children?.length > 0) {
    healed = {
      ...healed,
      children: healed.children.map((c: any) =>
        healChildAssets(c, parentProps, liveVariants),
      ),
    };
  }

  const needsSvgHeal = isSvgShell(healed.styles);
  const needsImageHeal = isMissingImageSrc(healed.styles);
  if (!needsSvgHeal && !needsImageHeal) return healed;

  // ── Step 1: find best-matching live donor variant ────────────────────────
  // Match on the *parent* variant's props because the asset content
  // (icon shape, image url) is typically determined by the parent's props.
  let bestDonorVariant: any = null;
  let bestScore = -1;
  for (const lv of liveVariants) {
    const score = propMatchScore(parentProps, lv.props ?? {});
    if (score > bestScore) {
      bestScore = score;
      bestDonorVariant = lv;
    }
  }
  if (!bestDonorVariant) return healed;

  // ── Step 2: locate same-named child in the donor ─────────────────────────
  const donorChild = findChildByName(bestDonorVariant, healed.name);
  if (!donorChild?.styles) return healed;

  // ── Step 3 + 4: copy asset fields then re-color ──────────────────────────
  if (needsSvgHeal && !isSvgShell(donorChild.styles)) {
    const patchedStyles = { ...healed.styles };

    for (const field of SVG_ASSET_FIELDS) {
      if (donorChild.styles[field] !== undefined) {
        patchedStyles[field] = donorChild.styles[field];
      }
    }
    if (donorChild.styles._assetType) {
      patchedStyles._assetType = donorChild.styles._assetType;
    }

    // Re-color: replace the donor's baked-in stroke/fill hex with the correct
    // color for *this* child (resolved from the isolated render's CSS classes).
    const ownHex = resolveChildColor(healed);
    if (ownHex && patchedStyles._svgContent) {
      patchedStyles._svgContent = recolorSvgContent(
        patchedStyles._svgContent,
        ownHex,
      );
    }

    healed = { ...healed, styles: patchedStyles };
  }

  if (needsImageHeal && donorChild.styles._imageSrc) {
    const patchedStyles = { ...healed.styles };
    for (const field of IMAGE_ASSET_FIELDS) {
      if (donorChild.styles[field] !== undefined) {
        patchedStyles[field] = donorChild.styles[field];
      }
    }
    if (donorChild.styles._assetType) {
      patchedStyles._assetType = donorChild.styles._assetType;
    }
    healed = { ...healed, styles: patchedStyles };
  }

  return healed;
}

/**
 * Walk every child of a new (isolated-rendered) variant and heal missing
 * SVG / image assets, then correct their colors.
 */
function healVariantAssets(newVariant: any, liveVariants: any[]): any {
  if (!newVariant.children?.length) return newVariant;
  return {
    ...newVariant,
    children: newVariant.children.map((child: any) =>
      healChildAssets(child, newVariant.props ?? {}, liveVariants),
    ),
  };
}

// ---------------------------------------------------------------------------
// Isolated render helper
// ---------------------------------------------------------------------------

async function renderIsolatedVariants(
  compFn: any,
  combos: Record<string, any>[],
  childrenTemplate: React.ReactNode[] = [],
) {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.style.visibility = "visible";
  container.style.width = `${document.documentElement.clientWidth || 1280}px`;
  container.style.display = "flex";
  container.style.flexDirection = "column";
  document.body.appendChild(container);
  const root = createRoot(container);

  try {
    const elements = combos.map((props, i) => {
      // combos may contain { state: "isHovered" } from the collapsed variant
      // groups.  React components expect the original boolean form, so expand
      // back before rendering: { state: "isHovered" } → { isHovered: true }.
      const expandedProps = expandStateToProps(props);
      const elementProps = { key: i, ...expandedProps };
      return childrenTemplate.length > 0
        ? React.createElement(compFn, elementProps, ...childrenTemplate)
        : React.createElement(compFn, elementProps);
    });
    root.render(React.createElement(React.Fragment, {}, ...elements));
    await new Promise((res) =>
      requestAnimationFrame(() => requestAnimationFrame(res)),
    );
    const extraction = extractComponentsFromFiber(container);
    return {
      components: extraction.components || [],
      componentFns: extraction.componentFns || {},
    };
  } finally {
    root.unmount();
    container.remove();
  }
}

// ---------------------------------------------------------------------------
// Width inheritance (unchanged from original)
// ---------------------------------------------------------------------------

function inheritWidthFromLive(newVariant: any, liveVariants: any[]): any {
  if (!newVariant.styles) return newVariant;
  const sameSize = liveVariants.find(
    (lv: any) => lv.props?.size === newVariant.props?.size,
  );
  const donor: any = sameSize ?? liveVariants[0];
  if (!donor?.styles) return newVariant;
  return {
    ...newVariant,
    styles: {
      ...newVariant.styles,
      width: donor.styles.width ?? newVariant.styles.width,
      _rectWidth: donor.styles._rectWidth ?? newVariant.styles._rectWidth,
    },
  };
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function expandAllVariants(
  components: any[],
  componentFns: Record<string, ComponentFnEntry>,
): Promise<any[]> {
  const finalComponents: any[] = [];

  for (const comp of components) {
    const compEntry = componentFns[comp.name];

    if (SKIP_ISOLATED_RENDER.has(comp.name)) {
      finalComponents.push({
        ...comp,
        variants: dedupVariantsByProps(comp.variants),
      });
      continue;
    }

    const compFn = compEntry?.type ?? compEntry;

    if (!compEntry || comp.variants.length === 0) {
      finalComponents.push({
        ...comp,
        variants: dedupVariantsByProps(comp.variants),
      });
      continue;
    }

    const normalizedVariants = comp.variants.map((v: any) =>
      normalizeVariantChildren(v, comp.name),
    );
    const normalizedComp = { ...comp, variants: normalizedVariants };
    const groups = buildVariantGroups(normalizedComp.variants);

    if (Object.keys(groups).length === 0) {
      finalComponents.push({
        ...normalizedComp,
        variants: dedupVariantsByProps(normalizedComp.variants),
      });
      continue;
    }

    const combos = generateAllCombos(groups);
    // existingKeys uses collapsed props (state unified) to match against the
    // combos that generateAllCombos produces from the same collapsed groups.
    const existingKeys = new Set(
      normalizedComp.variants.map((v: any) =>
        JSON.stringify(collapseStatesToSingleProp(v.props ?? {})),
      ),
    );
    const missing = combos.filter(
      (combo) => !existingKeys.has(JSON.stringify(combo)),
    );

    if (missing.length === 0) {
      finalComponents.push(comp);
      continue;
    }

    const templateVariant = normalizedComp.variants.find(
      (v: any) => v.children && v.children.length > 0,
    );
    const childrenTemplate = templateVariant
      ? buildChildrenFromVariant(
          templateVariant.children,
          componentFns,
          new Set([comp.name]),
        )
      : [];

    const extraction = await renderIsolatedVariants(
      compFn,
      missing,
      childrenTemplate,
    );

    const newVariants = (
      extraction?.components?.find((c) => c.name === comp.name)?.variants || []
    )
      .map((v: any) => normalizeVariantChildren(v, comp.name))
      .map((v: any) => inheritWidthFromLive(v, normalizedComp.variants))
      // ── SVG / asset healing ────────────────────────────────────────────────
      // Pass 1: copy SVG path markup from best-matching live donor.
      // Pass 2: re-color the copied SVG using the child's own resolved CSS color
      //         so stroke/fill reflects the correct variant, not the donor's.
      .map((v: any) => healVariantAssets(v, normalizedComp.variants));

    const merged = [...normalizedComp.variants, ...newVariants];
    const deduped = new Map<string, any>();
    merged.forEach((v) => {
      const key = JSON.stringify(v.props);
      if (!deduped.has(key)) deduped.set(key, v);
    });

    finalComponents.push({
      ...normalizedComp,
      variants: Array.from(deduped.values()),
    });
  }

  return finalComponents;
}
