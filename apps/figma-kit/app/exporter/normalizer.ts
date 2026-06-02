/**
 * exporter/normalizer.ts
 * -----------------------
 * Transforms raw extracted styles into the normalized Figma-ready format.
 * Resolves design token references, promotes asset/SVG fields,
 * and extracts Figma auto-layout information.
 */

import { DesignTokenRef } from "../extractor/types";
import { unwrapMotionComponents } from "./variant-utils";

export function extractLayout(styles: Record<string, string> | null) {
  if (!styles) return null;
  if (styles.display === "flex" || styles.display === "inline-flex") {
    return {
      layoutMode:
        styles.flexDirection === "column" || styles.flexDirection === "column-reverse"
          ? "VERTICAL"
          : "HORIZONTAL",
      gap: styles.gap || styles.rowGap || styles.columnGap || "0px",
      alignItems: styles.alignItems || "flex-start",
      justifyContent: styles.justifyContent || "flex-start",
      flexWrap: styles.flexWrap || "nowrap",
    };
  }
  return null;
}

export function normalizeStylesForFigma(
  styles: any,
  tokens?: Record<string, DesignTokenRef>,
  rawStyles?: any,
) {
  if (!styles) return {};

  const bgToken = tokens?.backgroundColor;
  const borderToken = tokens?.borderColor;
  const colorToken = tokens?.color;
  const radiusToken = tokens?.borderRadius;
  const fontSizeToken = tokens?.fontSize;
  const fontWeightToken = tokens?.fontWeight;
  const gapToken = tokens?.gap;
  const pt = tokens?.paddingTop;
  const pr = tokens?.paddingRight;
  const pb = tokens?.paddingBottom;
  const pl = tokens?.paddingLeft;

  const borderRadiusValue = styles.borderRadius || styles.borderTopLeftRadius || undefined;

  return {
    fills: styles.backgroundColor
      ? [{ type: "SOLID", ...(bgToken ? { token: bgToken.tokenName } : { color: styles.backgroundColor }) }]
      : [],

    strokes:
      styles.borderStyle && styles.borderStyle !== "none" &&
      (styles.borderWidth || styles.borderTopWidth) && styles.borderColor
        ? [{ type: "SOLID", ...(borderToken ? { token: borderToken.tokenName } : { color: styles.borderColor }) }]
        : [],
    strokeWeight: styles.borderWidth
      ? parseFloat(styles.borderWidth)
      : styles.borderTopWidth ? parseFloat(styles.borderTopWidth) : 0,

    ...(radiusToken
      ? { borderRadiusToken: radiusToken.tokenName }
      : borderRadiusValue !== undefined ? { borderRadius: borderRadiusValue } : {}),
    borderTopLeftRadius: styles.borderTopLeftRadius,
    borderTopRightRadius: styles.borderTopRightRadius,
    borderBottomLeftRadius: styles.borderBottomLeftRadius,
    borderBottomRightRadius: styles.borderBottomRightRadius,

    padding: {
      ...(pt ? { topToken: pt.tokenName } : { top: styles.paddingTop || styles.padding || "0px" }),
      ...(pr ? { rightToken: pr.tokenName } : { right: styles.paddingRight || styles.padding || "0px" }),
      ...(pb ? { bottomToken: pb.tokenName } : { bottom: styles.paddingBottom || styles.padding || "0px" }),
      ...(pl ? { leftToken: pl.tokenName } : { left: styles.paddingLeft || styles.padding || "0px" }),
    },

    typography: {
      ...(fontSizeToken ? { fontSizeToken: fontSizeToken.tokenName } : { fontSize: styles.fontSize }),
      ...(fontWeightToken ? { fontWeightToken: fontWeightToken.tokenName } : { fontWeight: styles.fontWeight }),
      lineHeight: styles.lineHeight,
      letterSpacing: styles.letterSpacing,
      fontFamily: styles.fontFamily,
      fontStyle: styles.fontStyle,
      textAlign: styles.textAlign,
      textDecoration: styles.textDecoration,
      textTransform: styles.textTransform,
      ...(colorToken ? { colorToken: colorToken.tokenName } : styles.color ? { color: styles.color } : {}),
    },

    width: styles.width,
    height: styles.height,
    minWidth: styles.minWidth,
    maxWidth: styles.maxWidth,
    minHeight: styles.minHeight,
    maxHeight: styles.maxHeight,
    rectWidth: styles._rectWidth,
    rectHeight: styles._rectHeight,

    display: styles.display,
    flexDirection: styles.flexDirection,
    alignItems: styles.alignItems,
    alignSelf: styles.alignSelf,
    justifyContent: styles.justifyContent,
    flexGrow: styles.flexGrow,
    flexShrink: styles.flexShrink,
    flexBasis: styles.flexBasis,
    flexWrap: styles.flexWrap,

    ...(gapToken ? { gapToken: gapToken.tokenName } : {}),
    gap: styles.gap,
    rowGap: styles.rowGap,
    columnGap: styles.columnGap,

    // Guard: drop near-zero opacity values — they are Framer Motion animation
    // initial-state artefacts, not real design values.  Omitting the field
    // means Figma will use the default (fully opaque), which is always correct.
    opacity: styles.opacity && parseFloat(styles.opacity) >= 0.01
      ? styles.opacity
      : undefined,
    boxShadow: styles.boxShadow,
    filter: styles.filter,
    position: styles.position,
    overflow: styles.overflow,
    zIndex: styles.zIndex,

    ...(rawStyles?._assetType ? { assetType: rawStyles._assetType } : {}),
    ...(rawStyles?._svgContent ? { svgContent: rawStyles._svgContent } : {}),
    ...(rawStyles?._imageSrc ? { imageSrc: rawStyles._imageSrc } : {}),
    ...(rawStyles?._svgRenderedWidth ? { svgRenderedWidth: Number(rawStyles._svgRenderedWidth) } : {}),
    ...(rawStyles?._svgRenderedHeight ? { svgRenderedHeight: Number(rawStyles._svgRenderedHeight) } : {}),
    ...(rawStyles?._svgIntrinsicWidth ? { svgIntrinsicWidth: Number(rawStyles._svgIntrinsicWidth) } : {}),
    ...(rawStyles?._svgIntrinsicHeight ? { svgIntrinsicHeight: Number(rawStyles._svgIntrinsicHeight) } : {}),
    ...(rawStyles?._svgViewBox ? { svgViewBox: rawStyles._svgViewBox } : {}),
  };
}

export function processChild(child: any): any {
  // Unwrap any MotionComponent wrapper at this level before building the node.
  // This handles MotionComponent appearing anywhere deep in the child tree.
  const unwrapped = unwrapMotionComponents(child);

  const result: any = {
    name: unwrapped.name || "Child",
    styles: normalizeStylesForFigma(
      stripInternalFieldsLocal(unwrapped.styles),
      unwrapped.designTokens,
      unwrapped.styles,
    ),
    layout: extractLayout(unwrapped.styles),
    properties: unwrapped.props || {},
    isTextElement: unwrapped.isTextElement ?? false,
  };

  if (unwrapped.isTextElement && unwrapped.styles?._textContent)
    result.textContent = unwrapped.styles._textContent;

  if (unwrapped.styles?._rectWidth) result.rectWidth = unwrapped.styles._rectWidth;
  if (unwrapped.styles?._rectHeight) result.rectHeight = unwrapped.styles._rectHeight;
  if (unwrapped.styles?._offsetTop !== undefined) result.offsetTop = unwrapped.styles._offsetTop;
  if (unwrapped.styles?._offsetLeft !== undefined) result.offsetLeft = unwrapped.styles._offsetLeft;
  if (unwrapped.styles?.position) result.cssPosition = unwrapped.styles.position;
  if (unwrapped.styles?.top) result.cssTop = unwrapped.styles.top;
  if (unwrapped.styles?.left) result.cssLeft = unwrapped.styles.left;
  if (unwrapped.styles?.right) result.cssRight = unwrapped.styles.right;
  if (unwrapped.styles?.bottom) result.cssBottom = unwrapped.styles.bottom;
  if (unwrapped.styles?.zIndex) result.cssZIndex = unwrapped.styles.zIndex;

  if (unwrapped.styles?._svgRenderedWidth !== undefined) result.svgRenderedWidth = Number(unwrapped.styles._svgRenderedWidth);
  if (unwrapped.styles?._svgRenderedHeight !== undefined) result.svgRenderedHeight = Number(unwrapped.styles._svgRenderedHeight);
  if (unwrapped.styles?._svgIntrinsicWidth !== undefined) result.svgIntrinsicWidth = Number(unwrapped.styles._svgIntrinsicWidth);
  if (unwrapped.styles?._svgIntrinsicHeight !== undefined) result.svgIntrinsicHeight = Number(unwrapped.styles._svgIntrinsicHeight);
  if (unwrapped.styles?._svgViewBox) result.svgViewBox = unwrapped.styles._svgViewBox;
  // Preserve the resolved icon name so the Figma plugin can look up the
  // master Icon component and create an instance (enabling icon swapping).
  if (unwrapped.styles?._iconName) result.iconName = unwrapped.styles._iconName;

  if (unwrapped.children?.length > 0)
    result.children = unwrapped.children.map((c: any) => processChild(c));

  return result;
}

function stripInternalFieldsLocal(styles: any): any {
  if (!styles) return styles;
  const {
    _textContent, textContent, _assetType, _svgContent, _imageSrc,
    _svgRenderedWidth, _svgRenderedHeight, _svgIntrinsicWidth,
    _svgIntrinsicHeight, _svgViewBox, _iconName, ...rest
  } = styles;
  return rest;
}
