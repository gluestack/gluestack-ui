/**
 * exporter/index.ts
 * ------------------
 * Main entry point for the Figma JSON export pipeline.
 * Orchestrates: fiber extraction → overlay detection → variant expansion
 * → image resolution → Figma-formatted output.
 */

import {
  extractComponentsFromFiber,
  extractOverlays,
  getRootFiberFromElement,
  getDesignTokenRegistry,
  type OverlayExtractionResult,
  type ComponentFnEntry,
} from "../extractor/index";
import { isJunkComponent, stripInternalFields } from "./style-cleaner";
import { resolveVariantImages } from "./image-resolver";
import { expandAllVariants } from "./variant-expander";
import {
  buildVariantGroups,
  normalizeVariantChildren,
  unwrapMotionComponents,
  collapseStatesToSingleProp,
} from "./variant-utils";
import {
  normalizeStylesForFigma,
  extractLayout,
  processChild,
} from "./normalizer";
import { IMAGE_QUALITY, ROOT_COMPONENTS } from "./constants";
import COMPONENT_DOCS from "../component-docs";

export { extractFigmaJSON };

async function extractFigmaJSON(rootElement: Element = document.body) {
  const { components, componentFns } = extractComponentsFromFiber(rootElement);

  // Filter junk AND the bare MotionComponent entry — it will be absorbed
  // into its parent (ModalContent, Popover, etc.) by unwrapMotionComponents.
  const realComponents = components.filter(
    (comp) => !isJunkComponent(comp.name) && comp.name !== "MotionComponent",
  );

  const rootFiber = getRootFiberFromElement(rootElement);
  let overlayResults: OverlayExtractionResult[] = [];
  if (rootFiber) {
    try {
      overlayResults = await extractOverlays(
        rootFiber,
        componentFns,
        rootElement,
      );
    } catch (e) {
      console.warn("[extractFigmaJSON] Overlay extraction failed:", e);
    }
  }

  const mergedComponentFns: Record<string, ComponentFnEntry> = {
    ...componentFns,
  };
  for (const overlayResult of overlayResults) {
    for (const [name, entry] of Object.entries(overlayResult.componentFns)) {
      if (!mergedComponentFns[name]) mergedComponentFns[name] = entry;
    }
  }

  const overlayComponents = overlayResults.flatMap((r) =>
    r.components
      .filter((c) => !isJunkComponent(c.name) && c.name !== "MotionComponent")
      .map((c) => ({ ...c, isOverlay: true, overlayParent: r.name })),
  );

  const overlayByName = new Map<string, any>();
  for (const oc of overlayComponents) {
    const existing = overlayByName.get(oc.name);
    if (!existing) {
      overlayByName.set(oc.name, oc);
    } else {
      const countChildren = (comp: any) =>
        (comp.variants ?? []).reduce(
          (n: number, v: any) => n + (v.children?.length ?? 0),
          0,
        );
      if (countChildren(oc) > countChildren(existing)) {
        overlayByName.set(oc.name, oc);
      }
    }
  }

  const filteredRealComponents = realComponents.filter(
    (c) => !overlayByName.has(c.name),
  );
  const allComponents = [
    ...filteredRealComponents,
    ...Array.from(overlayByName.values()),
  ];

  // ── Icon component synthesis ────────────────────────────────────────────
  // The extractor injected `_iconName` into every `Icon` fiber's styles.
  // Use those entries to build a clean Icon component set where each variant
  // IS one icon (key = "icon=AddIcon", SVG content baked in).
  // This runs entirely independently of the standard component pipeline so it
  // cannot affect any other component's styling or variant grouping.
  const rawIconComp = allComponents.find((c) => c.name === "Icon");
  let synthesizedIconComponent: any = null;
  if (rawIconComp) {
    // Gluestack Icon size → pixel dimension mapping
    const ICON_SIZES: Record<string, number> = {
      "2xs": 10,
      xs:    12,
      sm:    16,
      md:    18,
      lg:    20,
      xl:    24,
    };
    const ICON_SIZE_ORDER = ["2xs", "xs", "sm", "md", "lg", "xl"];

    // Collect the SVG content for each unique icon (first occurrence wins)
    const iconSvgMap = new Map<string, {
      svgContent?: string;
      svgViewBox?: string;
    }>();

    for (const v of rawIconComp.variants ?? []) {
      const iconName = (v.styles as any)?._iconName;
      if (!iconName || typeof iconName !== "string") continue;
      if (iconSvgMap.has(iconName)) continue; // already captured

      iconSvgMap.set(iconName, {
        svgContent: (v.styles as any)?._svgContent,
        svgViewBox: (v.styles as any)?._svgViewBox,
      });
    }

    const iconVariants: any[] = [];
    const seenIcons = new Set<string>();

    for (const [iconName, svg] of iconSvgMap.entries()) {
      seenIcons.add(iconName);
      for (const size of ICON_SIZE_ORDER) {
        const px = ICON_SIZES[size];
        iconVariants.push({
          key: `icon=${iconName},size=${size}`,
          styles: {
            fills: [],
            strokes: [],
            strokeWeight: 0,
            borderRadius: "0px",
            padding: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
            width:  `${px}px`,
            height: `${px}px`,
            rectWidth:  String(px),
            rectHeight: String(px),
            display: "block",
            ...(svg.svgContent ? {
              assetType: "svg",
              svgContent: svg.svgContent,
              svgViewBox: svg.svgViewBox ?? "0 0 24 24",
            } : {}),
          },
          layout: null,
          properties: { icon: iconName, size },
          isTextElement: false,
          svgRenderedWidth:  px,
          svgRenderedHeight: px,
          svgViewBox: svg.svgViewBox ?? "0 0 24 24",
        });
      }
    }

    if (iconVariants.length > 0) {
      synthesizedIconComponent = {
        name: "Icon",
        variantGroups: {
          icon: [...seenIcons],
          size: ICON_SIZE_ORDER,
        },
        variants: iconVariants,
        docs: null,
      };
    }
  }
  // ────────────────────────────────────────────────────────────────────────

  // Keep only true root-level Gluestack components (excluding Icon — it's
  // handled above via direct synthesis, not the standard pipeline).
  const rootComponents = allComponents.filter((c) =>
    ROOT_COMPONENTS.has(c.name) && c.name !== "Icon",
  );

  const expanded = await expandAllVariants(rootComponents, mergedComponentFns);

  for (const comp of expanded) {
    for (const variant of comp.variants ?? []) {
      await resolveVariantImages(variant);
    }
  }

  const designTokens = getDesignTokenRegistry();
  const figmaComponents: any[] = synthesizedIconComponent ? [synthesizedIconComponent] : [];

  for (const comp of expanded) {
    if (comp.variants.length === 0) continue;

    const variantGroups = buildVariantGroups(comp.variants);

    const processedVariants = comp.variants.map((rawVariant: any) => {
      // Unwrap Framer Motion wrappers before any further processing.
      const unwrapped = unwrapMotionComponents(rawVariant);
      const variant = normalizeVariantChildren(unwrapped, comp.name);

      // Collapse boolean state props (isHovered, isPressed, isDisabled,
      // isFocused, isFocusVisible) into a single "state" string prop so that
      // Figma renders one dropdown ("default" | "isHovered" | …) instead of
      // N separate boolean toggles.
      const collapsedProps = collapseStatesToSingleProp(variant.props ?? {});

      const keyParts: string[] = [];

      Object.keys(variantGroups).forEach((k) => {
        const val = collapsedProps[k];
        if (val !== undefined) keyParts.push(`${k}=${val}`);
      });

      const cleanStyles = normalizeStylesForFigma(
        stripInternalFields(variant.styles),
        variant.designTokens,
        variant.styles,
      );

      const processed: any = {
        key: keyParts.join(","),
        styles: cleanStyles,
        layout: extractLayout(variant.styles),
        properties: collapsedProps,
        isTextElement: variant.isTextElement ?? false,
      };

      if (variant.isTextElement && variant.styles?._textContent)
        processed.textContent = variant.styles._textContent;

      if (variant.styles?._svgRenderedWidth !== undefined)
        processed.svgRenderedWidth = Number(variant.styles._svgRenderedWidth);
      if (variant.styles?._svgRenderedHeight !== undefined)
        processed.svgRenderedHeight = Number(variant.styles._svgRenderedHeight);
      if (variant.styles?._svgIntrinsicWidth !== undefined)
        processed.svgIntrinsicWidth = Number(variant.styles._svgIntrinsicWidth);
      if (variant.styles?._svgIntrinsicHeight !== undefined)
        processed.svgIntrinsicHeight = Number(
          variant.styles._svgIntrinsicHeight,
        );
      if (variant.styles?._svgViewBox)
        processed.svgViewBox = variant.styles._svgViewBox;

      if (variant.children?.length > 0)
        processed.children = variant.children.map((child: any) =>
          processChild(child),
        );

      return processed;
    });

    figmaComponents.push({
      name: comp.name,
      variantGroups,
      variants: processedVariants,
      // Attach static documentation so the Figma plugin can render a docs
      // frame directly on the canvas beside each component.
      docs: COMPONENT_DOCS[comp.name] ?? null,
      ...(comp.isOverlay
        ? { isOverlay: true, overlayParent: comp.overlayParent }
        : {}),
    });
  }

  return {
    components: figmaComponents,
    designTokens,
    meta: {
      source: "react-fiber-extractor",
      version: "5.0",
      imageQuality: IMAGE_QUALITY,
    },
  };
}
