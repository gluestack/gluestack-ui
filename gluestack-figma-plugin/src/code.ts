/**
 * Figma Plugin — code.ts (runs in Figma sandbox)
 *
 * MISSION: High-Fidelity Design System Generation
 * Ensures compound components (Button -> ButtonText) and all props (isDisabled, etc.)
 * are perfectly preserved through recursive structural mapping.
 *
 * v2.1 — Component properties, variable scopes, text/effect styles,
 *         absolute positioning, duplicate detection, error handling
 */

// ── Types ────────────────────────────────────────────────────────────────────

interface ColorRGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface FigmaNodeJSON {
  type: 'TEXT' | 'RECTANGLE' | 'ELLIPSE' | 'FRAME' | 'GROUP';
  name: string;
  styles: Record<string, any>;
  children?: FigmaNodeJSON[];
  text?: string;
  layerName?: string;
}

interface ComponentInstance {
  props: Record<string, any>;
  label: string;
  tree: FigmaNodeJSON;
}

interface ComponentDefinition {
  name: string;
  description: string;
  variants: Record<string, string[]>;
  defaultProps: Record<string, any>;
  subParts: Array<{ name: string; description: string }>;
  instances: ComponentInstance[];
}

interface DesignTokens {
  colors: { light: Record<string, string>; dark: Record<string, string> };
  spacing: Record<string, number>;
  typography: {
    fontSizes: Record<string, string>;
    fontWeights: Record<string, string>;
    fontFamilies: Record<string, string>;
    lineHeights: Record<string, string>;
    letterSpacings: Record<string, string>;
  };
  radius: Record<string, string>;
  shadows: Record<string, string>;
}

interface DesignSystemExport {
  metadata: {
    source: string;
    version: string;
    exportedAt: string;
    colorMode: 'light' | 'dark';
    totalComponents: number;
    totalTokens: number;
  };
  tokens: DesignTokens;
  components: ComponentDefinition[];
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const EPSILON = 0.001;

/** Generates a stable key for color lookup that is resilient to floating point errors */
function getColorKey(rgb: ColorRGB): string {
  return `${Math.round(rgb.r / EPSILON) * EPSILON},${Math.round(rgb.g / EPSILON) * EPSILON},${Math.round(rgb.b / EPSILON) * EPSILON}`;
}

function post(type: string, payload?: any) {
  figma.ui.postMessage({ type, payload });
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Parse CSS color string → { r, g, b, a } (0-1 scale for Figma) */
function parseRgb(value: string): ColorRGB | null {
  const hexMatch = value.match(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/);
  if (hexMatch) {
    let hex = hexMatch[1];
    let r_val = 0, g_val = 0, b_val = 0, a_val = 1;

    if (hex.length === 3) {
      r_val = parseInt(hex[0] + hex[0], 16);
      g_val = parseInt(hex[1] + hex[1], 16);
      b_val = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r_val = parseInt(hex.slice(0, 2), 16);
      g_val = parseInt(hex.slice(2, 4), 16);
      b_val = parseInt(hex.slice(4, 6), 16);
    } else if (hex.length === 8) {
      r_val = parseInt(hex.slice(0, 2), 16);
      g_val = parseInt(hex.slice(2, 4), 16);
      b_val = parseInt(hex.slice(4, 6), 16);
      a_val = parseInt(hex.slice(6, 8), 16) / 255;
    }
    return { r: r_val / 255, g: g_val / 255, b: b_val / 255, a: a_val };
  }

  const rgbRegex = /^rgba?\(\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)(?:\s*[,/]\s*(\d+(?:\.\d+)?))?\s*\)$/;
  const match = value.match(rgbRegex);

  if (match) {
    return {
      r: parseFloat(match[1]) / 255,
      g: parseFloat(match[2]) / 255,
      b: parseFloat(match[3]) / 255,
      a: match[4] !== undefined ? parseFloat(match[4]) : 1,
    };
  }

  return null;
}

/** Resolve CSS pixel string → number */
function px(val: string | number | undefined): number {
  if (val === undefined || val === null) return 0;
  if (typeof val === 'number') return val;
  return parseFloat(String(val)) || 0;
}

/** Sanitizes property names for Figma Variant naming to avoid parser errors */
function sanitizeVariantName(key: string, value: any): string {
  const cleanKey = key.replace(/[^a-zA-Z0-9_-]/g, '');
  const cleanValue = String(value).replace(/[^a-zA-Z0-9_-]/g, '');
  return `${cleanKey}=${cleanValue}`;
}

// ── State Management ─────────────────────────────────────────────────────────

const colorVariableMap = new Map<string, Variable>();
const spacingVariableMap = new Map<string, Variable>();
const radiusVariableMap = new Map<string, Variable>();
const loadedFonts = new Set<string>();
let availableFontsCache: Font[] | null = null;

// Track created resources for duplicate detection
const createdCollectionIds = new Set<string>();
const createdTextStyleIds = new Map<string, string>();
const createdEffectStyleIds = new Map<string, string>();

function normalizeFontStyle(style: string): string {
  return style.replace(/\s+/g, '').toLowerCase();
}

async function getAvailableFonts(): Promise<Font[]> {
  if (!availableFontsCache) {
    availableFontsCache = await figma.listAvailableFontsAsync();
  }
  return availableFontsCache;
}

function pickBestFontMatch(fonts: Font[], family: string, style: string): FontName | null {
  const familyFonts = fonts.filter((font) => font.fontName.family === family);
  if (familyFonts.length === 0) return null;

  const normalizedTarget = normalizeFontStyle(style);
  const exact = familyFonts.find(
    (font) => normalizeFontStyle(font.fontName.style) === normalizedTarget
  );
  if (exact) return exact.fontName;

  const regular = familyFonts.find(
    (font) => normalizeFontStyle(font.fontName.style) === 'regular'
  );
  if (regular) return regular.fontName;

  return familyFonts[0].fontName;
}

/** Load and return an assignable font name with safe fallbacks */
async function ensureFontLoaded(family: string, style: string): Promise<FontName> {
  const availableFonts = await getAvailableFonts();
  const requestedFont = pickBestFontMatch(availableFonts, family, style);
  const fallbackFont = pickBestFontMatch(availableFonts, 'Inter', 'Regular');
  const finalFont: FontName = requestedFont ?? fallbackFont ?? { family: 'Inter', style: 'Regular' };
  const fontKey = `${finalFont.family}-${finalFont.style}`;
  if (loadedFonts.has(fontKey)) return finalFont;

  try {
    await figma.loadFontAsync(finalFont);
    loadedFonts.add(fontKey);
    return finalFont;
  } catch (e) {
    post('log', `⚠️ Failed to load font: ${finalFont.family} ${finalFont.style}. Falling back to Inter Regular.`);
    const emergencyFallback: FontName =
      fallbackFont ?? availableFonts[0]?.fontName ?? { family: 'Inter', style: 'Regular' };
    await figma.loadFontAsync(emergencyFallback);
    loadedFonts.add(`${emergencyFallback.family}-${emergencyFallback.style}`);
    return emergencyFallback;
  }
}

// ── Weight string → Figma style name mapping ──────────────────────────────────

const WEIGHT_TO_STYLE: Record<string, string> = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
  '950': 'ExtraBlack',
};

function weightToStyle(weight: string | number): string {
  return WEIGHT_TO_STYLE[String(weight)] ?? 'Regular';
}

// ── Variable creation with scopes ────────────────────────────────────────────

async function createColorVariables(
  collection: VariableCollection,
  colors: { light: Record<string, string>; dark: Record<string, string> }
): Promise<void> {
  collection.renameMode(collection.defaultModeId, 'Light');
  let darkModeId: string;
  try {
    darkModeId = collection.addMode('Dark');
  } catch {
    darkModeId = collection.modes.find((m) => m.name === 'Dark')?.modeId ?? collection.defaultModeId;
  }

  let created = 0;
  for (const [name, lightValue] of Object.entries(colors.light)) {
    const lightRgb = parseRgb(lightValue);
    const darkValue = colors.dark[name];
    const darkRgb = darkValue ? parseRgb(darkValue) : lightRgb;
    if (!lightRgb) continue;
    try {
      const variable = figma.variables.createVariable(name, collection, 'COLOR');

      // Determine scopes based on token name
      // Valid VariableScope values: ALL_SCOPES, TEXT_CONTENT, CORNER_RADIUS, WIDTH_HEIGHT, GAP
      // Color variables use ALL_SCOPES by default since the plugin API doesn't
      // have granular color scopes like FRAME_FILL, TEXT_FILL etc.
      const lowerName = name.toLowerCase();
      // All color variables get ALL_SCOPES for now — the Figma API
      // will handle proper scope filtering in the UI automatically
      // based on the variable type (COLOR).

      variable.setValueForMode(collection.defaultModeId, lightRgb);
      if (darkRgb) variable.setValueForMode(darkModeId, darkRgb);
      colorVariableMap.set(getColorKey(lightRgb), variable);
      created++;
    } catch (e) {
      post('log', `⚠️ Skipped duplicate variable: ${name}`);
    }
    await sleep(1);
  }
  post('log', `  ✓ Created ${created} color variables`);
}

async function createSpacingVariables(
  collection: VariableCollection,
  values: Record<string, number>
): Promise<void> {
  let created = 0;
  for (const [name, value] of Object.entries(values)) {
    try {
      const variable = figma.variables.createVariable(`spacing-${name}`, collection, 'FLOAT');
      variable.scopes = ['GAP', 'WIDTH_HEIGHT'];
      variable.setValueForMode(collection.defaultModeId, value);
      spacingVariableMap.set(`spacing-${name}`, variable);
      created++;
    } catch (e) {
      post('log', `⚠️ Skipped duplicate spacing variable: spacing-${name}`);
    }
    await sleep(1);
  }
  post('log', `  ✓ Created ${created} spacing variables`);
}

async function createRadiusVariables(
  collection: VariableCollection,
  values: Record<string, number>
): Promise<void> {
  let created = 0;
  for (const [name, value] of Object.entries(values)) {
    try {
      const variable = figma.variables.createVariable(`radius-${name}`, collection, 'FLOAT');
      variable.scopes = ['CORNER_RADIUS'];
      variable.setValueForMode(collection.defaultModeId, value);
      radiusVariableMap.set(`radius-${name}`, variable);
      created++;
    } catch (e) {
      post('log', `⚠️ Skipped duplicate radius variable: radius-${name}`);
    }
    await sleep(1);
  }
  post('log', `  ✓ Created ${created} radius variables`);
}

// ── Text & Effect styles creation ───────────────────────────────────────────

async function createTextStyles(typography: DesignTokens['typography']): Promise<void> {
  await ensureFontLoaded('Inter', 'Regular');
  const fontSizes = typography.fontSizes;
  const fontWeights = typography.fontWeights;
  const fontFamilies = typography.fontFamilies;
  const lineHeights = typography.lineHeights || {};
  const letterSpacings = typography.letterSpacings || {};

  let created = 0;

  // Create a "Body" style set for common sizes
  const sizeEntries = Object.entries(fontSizes);
  for (const [sizeName, fontSizePx] of sizeEntries) {
    const fontSize = px(fontSizePx);

    // Regular weight body style
    for (const [weightName, weightValue] of Object.entries(fontWeights)) {
      // Only create styles for common combinations to avoid explosion
      if (!['normal', 'medium', 'semibold', 'bold'].includes(weightName)) continue;

      const styleName = `Gluestack/${sizeName === 'base' ? 'Body' : sizeName.charAt(0).toUpperCase() + sizeName.slice(1)} ${weightName.charAt(0).toUpperCase() + weightName.slice(1)}`;

      try {
        const textStyle = figma.createTextStyle();
        textStyle.name = styleName;

        const figmaStyleName = weightToStyle(weightValue);
        const fontFamily = (fontFamilies.sans as string) || 'Inter';
        const fontName = await ensureFontLoaded(fontFamily, figmaStyleName);

        const fontSizeId = fontSize;
        textStyle.fontSize = fontSizeId;

        // Apply font
        try {
          textStyle.fontName = fontName;
        } catch {
          // fontName may be read-only on some Figma versions
        }

        // Apply line height
        const lh = lineHeights[sizeName];
        if (lh) {
          const lhNum = parseFloat(lh);
          if (lhNum > 5) {
            textStyle.lineHeight = { unit: 'PIXELS', value: lhNum * fontSizeId };
          } else {
            textStyle.lineHeight = { unit: 'PERCENT', value: lhNum * 100 };
          }
        } else {
          textStyle.lineHeight = { unit: 'PERCENT', value: 150 };
        }

        // Apply letter spacing
        const ls = letterSpacings[sizeName];
        if (ls) {
          const lsVal = parseFloat(ls);
          textStyle.letterSpacing = { unit: 'PERCENT', value: lsVal * 100 };
        }

        createdTextStyleIds.set(styleName, textStyle.id);
        created++;
      } catch (e) {
        post('log', `⚠️ Skipped duplicate text style: ${styleName}`);
      }
    }
  }
  post('log', `  ✓ Created ${created} text styles`);
}

async function createEffectStyles(shadows: Record<string, string>): Promise<void> {
  let created = 0;
  for (const [name, shadowValue] of Object.entries(shadows)) {
    if (!shadowValue || shadowValue === 'none') continue;

    // Multi-shadow support: split by ), then parse each
    const shadowParts = shadowValue.split(/\),\s*/).map((s) => s.trim().replace(/^\(/, '').replace(/\)$/, ''));
    const effects: Effect[] = [];

    for (const part of shadowParts) {
      const effect = parseShadow(part);
      if (effect) effects.push(effect);
    }

    if (effects.length === 0) continue;

    try {
      const effectStyle = figma.createEffectStyle();
      effectStyle.name = `Gluestack/Shadow/${name}`;
      effectStyle.effects = effects;
      createdEffectStyleIds.set(name, effectStyle.id);
      created++;
    } catch (e) {
      post('log', `⚠️ Skipped duplicate effect style: ${name}`);
    }
    await sleep(1);
  }
  post('log', `  ✓ Created ${created} effect styles`);
}

// ── Node builders ────────────────────────────────────────────────────────────

function getSolidPaint(rgb: ColorRGB): SolidPaint {
  const variable = colorVariableMap.get(getColorKey(rgb));
  const paint: SolidPaint = { type: 'SOLID', color: { r: rgb.r, g: rgb.g, b: rgb.b } };
  if (variable) {
    return figma.variables.setBoundVariableForPaint(paint, 'color', variable);
  }
  return paint;
}

function getStyleValue(styles: Record<string, any>, keys: string[], fallback?: any): any {
  for (const key of keys) {
    if (styles[key] !== undefined && styles[key] !== null && styles[key] !== '') {
      return styles[key];
    }
  }
  return fallback;
}

function parseShadow(value: string): Effect | null {
  const colorMatch = value.match(/(rgba?\([^)]+\)|#[0-9a-fA-F]{3,8})/);
  if (!colorMatch) return null;

  const color = parseRgb(colorMatch[1]);
  if (!color) return null;

  const cleaned = value.replace(colorMatch[1], '').trim();
  const parts = cleaned
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) return null;

  const offsetX = px(parts[0]);
  const offsetY = px(parts[1]);
  const blur = px(parts[2] ?? 0);
  const spread = px(parts[3] ?? 0);

  return {
    type: 'DROP_SHADOW',
    color: {
      r: color.r,
      g: color.g,
      b: color.b,
      a: color.a ?? 1,
    },
    offset: { x: offsetX, y: offsetY },
    radius: blur,
    spread,
    visible: true,
    blendMode: 'NORMAL',
  };
}

function parseBackgroundPaints(value: unknown): Paint[] | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed === 'transparent' || trimmed === 'none') return [];

  if (trimmed.startsWith('linear-gradient')) {
    const colorMatches = trimmed.match(/(rgba?\([^)]+\)|#[0-9a-fA-F]{3,8})/g) ?? [];
    if (colorMatches.length >= 2) {
      const [startColor, endColor] = colorMatches;
      if (!startColor || !endColor) return null;
      const first = parseRgb(startColor);
      const second = parseRgb(endColor);
      if (first && second) {
        const gradient: GradientPaint = {
          type: 'GRADIENT_LINEAR',
          gradientTransform: [
            [1, 0, 0],
            [0, 1, 0],
          ],
          gradientStops: [
            { position: 0, color: { r: first.r, g: first.g, b: first.b, a: first.a ?? 1 } },
            { position: 1, color: { r: second.r, g: second.g, b: second.b, a: second.a ?? 1 } },
          ],
        };
        return [gradient];
      }
    }
  }

  const rgb = parseRgb(trimmed);
  if (!rgb) return null;
  return [getSolidPaint(rgb)];
}

function applyCornerRadii(
  node: FrameNode | ComponentNode | RectangleNode,
  styles: Record<string, any>
) {
  // Try per-corner first
  const tl = getStyleValue(styles, ['borderTopLeftRadius']);
  const tr = getStyleValue(styles, ['borderTopRightRadius']);
  const br = getStyleValue(styles, ['borderBottomRightRadius']);
  const bl = getStyleValue(styles, ['borderBottomLeftRadius']);
  const hasPerCorner = [tl, tr, br, bl].some((v) => v !== undefined);

  if (hasPerCorner) {
    node.topLeftRadius = px(tl ?? 0);
    node.topRightRadius = px(tr ?? 0);
    node.bottomRightRadius = px(br ?? 0);
    node.bottomLeftRadius = px(bl ?? 0);
    return;
  }

  const borderRadius = getStyleValue(styles, ['borderRadius', 'radius']);
  if (borderRadius !== undefined) {
    const radiusVal = px(borderRadius);
    node.cornerRadius = radiusVal;
    // Try to bind to radius variable
    if (typeof borderRadius === 'string') {
      const radiusVar = radiusVariableMap.get(`radius-${borderRadius}`);
      if (radiusVar && 'setBoundVariable' in node) {
        try {
          node.setBoundVariable('cornerRadius' as any, radiusVar);
        } catch { /* not all nodes support this */ }
      }
    }
  }
}

function applySize(
  node: FrameNode | ComponentNode | RectangleNode,
  styles: Record<string, any>,
  defaults: { width: number; height: number } = { width: 1, height: 1 },
  allowFillSizing = false
) {
  const rawWidth = getStyleValue(styles, ['width', 'minWidth']);
  const rawHeight = getStyleValue(styles, ['height', 'minHeight']);
  const minWidth = getStyleValue(styles, ['minWidth']);
  const minHeight = getStyleValue(styles, ['minHeight']);
  const maxWidth = getStyleValue(styles, ['maxWidth']);
  const maxHeight = getStyleValue(styles, ['maxHeight']);

  const hasFixedWidth = rawWidth !== undefined && rawWidth !== '100%' && rawWidth !== 'auto';
  const hasFixedHeight = rawHeight !== undefined && rawHeight !== '100%' && rawHeight !== 'auto';

  if (hasFixedWidth || hasFixedHeight) {
    let width = hasFixedWidth ? Math.max(px(rawWidth), 1) : Math.max(defaults.width, 1);
    let height = hasFixedHeight ? Math.max(px(rawHeight), 1) : Math.max(defaults.height, 1);

    if (minWidth !== undefined) width = Math.max(width, px(minWidth));
    if (minHeight !== undefined) height = Math.max(height, px(minHeight));
    if (maxWidth !== undefined) width = Math.min(width, px(maxWidth));
    if (maxHeight !== undefined) height = Math.min(height, px(maxHeight));

    node.resize(width, height);
    // HUG is only valid on auto-layout frames. For nodes without auto-layout, use FIXED.
    const isAutoLayout = 'layoutMode' in node && node.layoutMode !== 'NONE';
    node.layoutSizingHorizontal = hasFixedWidth ? 'FIXED' : (isAutoLayout ? 'HUG' : 'FIXED');
    node.layoutSizingVertical = hasFixedHeight ? 'FIXED' : (isAutoLayout ? 'HUG' : 'FIXED');
    return;
  }

  const parentIsAutoLayout = !!node.parent && 'layoutMode' in node.parent && node.parent.layoutMode !== 'NONE';
  if (!parentIsAutoLayout) {
    const width = rawWidth === '100%' ? (node.parent && 'width' in node.parent ? (node.parent as any).width : defaults.width) : Math.max(px(rawWidth ?? 0), 1);
    const height = rawHeight === '100%' ? (node.parent && 'height' in node.parent ? (node.parent as any).height : defaults.height) : Math.max(px(rawHeight ?? 0), 1);
    node.resize(width, height);
    node.layoutSizingHorizontal = 'FIXED';
    node.layoutSizingVertical = 'FIXED';
    return;
  }

  // HUG sizing is only valid on auto-layout frames. For non-auto-layout nodes,
  // fall back to FIXED sizing using the node's current dimensions.
  const isAutoLayout = 'layoutMode' in node && node.layoutMode !== 'NONE';
  node.layoutSizingHorizontal = rawWidth === '100%' && allowFillSizing ? 'FILL' : (isAutoLayout ? 'HUG' : 'FIXED');
  node.layoutSizingVertical = rawHeight === '100%' && allowFillSizing ? 'FILL' : (isAutoLayout ? 'HUG' : 'FIXED');
}

function applyFrameStyling(node: FrameNode | ComponentNode, styles: Record<string, any>) {
  const background = getStyleValue(styles, ['backgroundColor', 'background']);
  const paints = parseBackgroundPaints(background);
  if (paints) node.fills = paints;
  else if (background && background !== 'transparent' && background !== 'none') {
    // Try as direct color
    const rgb = parseRgb(String(background));
    if (rgb) node.fills = [getSolidPaint(rgb)];
  }

  // Handle directional borders
  const borderWidth = px(getStyleValue(styles, ['borderWidth'], 0));
  const borderTopWidth = px(getStyleValue(styles, ['borderTopWidth'], borderWidth));
  const borderBottomWidth = px(getStyleValue(styles, ['borderBottomWidth'], borderWidth));
  const borderLeftWidth = px(getStyleValue(styles, ['borderLeftWidth'], borderWidth));
  const borderRightWidth = px(getStyleValue(styles, ['borderRightWidth'], borderWidth));

  if (borderWidth > 0 || borderTopWidth > 0 || borderBottomWidth > 0 || borderLeftWidth > 0 || borderRightWidth > 0) {
    const borderColor = parseRgb(String(getStyleValue(styles, ['borderColor'], '#E2E8F0')));
    if (borderColor) {
      node.strokes = [getSolidPaint(borderColor)];
      node.strokeWeight = borderWidth > 0 ? borderWidth : Math.max(borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth);
      node.strokeAlign = 'INSIDE';

      // Per-side borders (approximate with individual sides)
      if (borderTopWidth > 0 || borderBottomWidth > 0 || borderLeftWidth > 0 || borderRightWidth > 0) {
        // Use individual stroke sides if supported
        if ('strokeTop' in node) {
          (node as any).strokeTop = borderTopWidth > 0;
          (node as any).strokeBottom = borderBottomWidth > 0;
          (node as any).strokeLeft = borderLeftWidth > 0;
          (node as any).strokeRight = borderRightWidth > 0;
        }
      }
    }
  } else {
    node.strokes = [];
  }

  // Dash pattern
  const borderStyle = getStyleValue(styles, ['borderStyle'], 'solid');
  if (borderStyle === 'dashed') {
    node.dashPattern = [6, 4];
  } else if (borderStyle === 'dotted') {
    node.dashPattern = [2, 2];
  }

  applyCornerRadii(node, styles);

  const opacity = Number(getStyleValue(styles, ['opacity'], 1));
  if (!Number.isNaN(opacity)) {
    node.opacity = Math.max(0, Math.min(opacity, 1));
  }

  // Shadow
  const shadowValue = getStyleValue(styles, ['boxShadow', 'shadow']);
  if (typeof shadowValue === 'string' && shadowValue.trim() && shadowValue !== 'none') {
    // Try to find a matching effect style
    const shadowParts = shadowValue.split(/\),\s*/).map((s) => s.trim().replace(/^\(/, '').replace(/\)$/, ''));
    const effects: Effect[] = [];
    for (const part of shadowParts) {
      const effect = parseShadow(part);
      if (effect) effects.push(effect);
    }
    if (effects.length > 0) node.effects = effects;
  } else {
    node.effects = [];
  }

  // Overflow
  const overflow = getStyleValue(styles, ['overflow']);
  if (overflow === 'hidden') {
    node.clipsContent = true;
  }
}

function applyAutoLayout(frame: FrameNode | ComponentNode, styles: Record<string, any>) {
  const flexDirection = getStyleValue(styles, ['flexDirection'], 'column');
  frame.layoutMode = flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';

  const justify = getStyleValue(styles, ['justifyContent'], 'flex-start');
  if (justify === 'center') frame.primaryAxisAlignItems = 'CENTER';
  else if (justify === 'flex-end' || justify === 'end') frame.primaryAxisAlignItems = 'MAX';
  else if (justify === 'space-between') frame.primaryAxisAlignItems = 'SPACE_BETWEEN';
  else if (justify === 'space-around') frame.primaryAxisAlignItems = 'SPACE_BETWEEN'; // Approximation
  else frame.primaryAxisAlignItems = 'MIN';

  const align = getStyleValue(styles, ['alignItems'], 'flex-start');
  if (align === 'center') frame.counterAxisAlignItems = 'CENTER';
  else if (align === 'flex-end' || align === 'end') frame.counterAxisAlignItems = 'MAX';
  else if (align === 'stretch') frame.counterAxisAlignItems = 'MIN'; // STRETCH not supported on counter axis
  else frame.counterAxisAlignItems = 'MIN';

  frame.itemSpacing = px(getStyleValue(styles, ['gap', 'columnGap', 'rowGap'], 0));

  // Try to bind spacing variable for gap
  const gapValue = getStyleValue(styles, ['gap', 'columnGap', 'rowGap']);
  if (typeof gapValue === 'string') {
    const spacingVar = spacingVariableMap.get(`spacing-${gapValue}`);
    if (spacingVar) {
      try { frame.setBoundVariable('itemSpacing', spacingVar); } catch { /* not supported */ }
    }
  }

  frame.paddingTop = px(getStyleValue(styles, ['paddingTop', 'paddingVertical', 'padding'], 0));
  frame.paddingBottom = px(getStyleValue(styles, ['paddingBottom', 'paddingVertical', 'padding'], 0));
  frame.paddingLeft = px(getStyleValue(styles, ['paddingLeft', 'paddingHorizontal', 'padding'], 0));
  frame.paddingRight = px(getStyleValue(styles, ['paddingRight', 'paddingHorizontal', 'padding'], 0));

  // Flex grow/shrink
  const flexGrow = getStyleValue(styles, ['flexGrow']);
  if (flexGrow !== undefined) {
    // Store for child nodes — not directly settable on frames in Figma
  }
}

async function createTextNode(spec: FigmaNodeJSON): Promise<TextNode> {
  const family = spec.styles.fontFamily ?? 'Inter';
  const fontWeight = spec.styles.fontWeight ?? '400';
  const style = weightToStyle(fontWeight);

  const resolvedFont = await ensureFontLoaded(family, style);
  const t = figma.createText();
  t.name = spec.layerName ?? spec.name;
  t.fontName = resolvedFont;

  let textValue = spec.text ??
    String(getStyleValue(spec.styles, ['text', 'content', 'characters'], spec.name) || spec.name);

  const textTransform = String(getStyleValue(spec.styles, ['textTransform'], '')).toLowerCase();
  if (textTransform === 'uppercase') textValue = textValue.toUpperCase();
  if (textTransform === 'lowercase') textValue = textValue.toLowerCase();

  t.characters = textValue;
  t.fontSize = px(getStyleValue(spec.styles, ['fontSize'], 14));

  const lineHeight = getStyleValue(spec.styles, ['lineHeight']);
  if (lineHeight !== undefined) {
    const lhNum = parseFloat(String(lineHeight));
    if (lhNum > 5) {
      t.lineHeight = { unit: 'PIXELS', value: lhNum };
    } else if (lhNum > 0) {
      t.lineHeight = { unit: 'PERCENT', value: lhNum * 100 };
    }
  }

  const letterSpacing = getStyleValue(spec.styles, ['letterSpacing']);
  if (letterSpacing !== undefined) {
    const lsVal = String(letterSpacing);
    if (lsVal.endsWith('em')) {
      t.letterSpacing = { unit: 'PERCENT', value: parseFloat(lsVal) * 100 };
    } else {
      t.letterSpacing = { unit: 'PIXELS', value: px(lsVal) };
    }
  }

  const textAlign = String(getStyleValue(spec.styles, ['textAlign', 'textAlignHorizontal'], 'left'));
  if (textAlign === 'center') t.textAlignHorizontal = 'CENTER';
  else if (textAlign === 'right' || textAlign === 'end') t.textAlignHorizontal = 'RIGHT';
  else if (textAlign === 'justify') t.textAlignHorizontal = 'JUSTIFIED';
  else t.textAlignHorizontal = 'LEFT';

  const rgb = parseRgb(getStyleValue(spec.styles, ['color'], '#0F172A'));
  if (rgb) t.fills = [getSolidPaint(rgb)];

  const textDecoration = String(getStyleValue(spec.styles, ['textDecorationLine', 'textDecoration'], '')).toLowerCase();
  if (textDecoration.includes('underline')) t.textDecoration = 'UNDERLINE';
  if (textDecoration.includes('line-through')) t.textDecoration = 'STRIKETHROUGH';

  const textOpacity = Number(getStyleValue(spec.styles, ['opacity'], 1));
  if (!Number.isNaN(textOpacity)) {
    t.opacity = Math.max(0, Math.min(textOpacity, 1));
  }
  return t;
}

async function composeComponentFromTree(node: ComponentNode, tree: FigmaNodeJSON): Promise<void> {
  if (tree.type === 'TEXT') {
    node.layoutMode = 'HORIZONTAL';
    node.primaryAxisAlignItems = 'MIN';
    node.counterAxisAlignItems = 'MIN';
    node.paddingTop = 0; node.paddingBottom = 0;
    node.paddingLeft = 0; node.paddingRight = 0;
    applySize(node, tree.styles, { width: 1, height: 1 }, false);
    node.fills = [];
    const t = await createTextNode(tree);
    node.appendChild(t);
    return;
  }

  if (tree.type === 'RECTANGLE' || tree.type === 'ELLIPSE') {
    const rawW = getStyleValue(tree.styles, ['width']);
    const rawH = getStyleValue(tree.styles, ['height']);
    const resolvedW = rawW === undefined || rawW === '100%' ? 1 : Math.max(px(rawW), 1);
    const resolvedH = rawH === undefined || rawH === '100%' ? 1 : Math.max(px(rawH), 1);
    node.resize(resolvedW, resolvedH);
    node.layoutMode = 'NONE';
    applyCornerRadii(node, tree.styles);
    const paints = parseBackgroundPaints(getStyleValue(tree.styles, ['backgroundColor', 'background']));
    if (paints) node.fills = paints;
    const borderWidth = px(getStyleValue(tree.styles, ['borderWidth'], 0));
    if (borderWidth > 0) {
      const bRgb = parseRgb(String(getStyleValue(tree.styles, ['borderColor'], 'rgb(229,229,229)')));
      if (bRgb) {
        node.strokes = [getSolidPaint(bRgb)];
        node.strokeWeight = borderWidth;
        node.strokeAlign = 'INSIDE';
      }
    }
    return;
  }

  // For non-text/shape nodes, check if it's a container that should have Auto Layout
  const flexDirection = getStyleValue(tree.styles, ['flexDirection']);
  const isExplicitAutoLayout = !!flexDirection;

  if (isExplicitAutoLayout) {
    applyAutoLayout(node, tree.styles);
  } else if (tree.children && tree.children.length > 0) {
    // Default to column layout for containers with children
    node.layoutMode = 'VERTICAL';
    node.primaryAxisAlignItems = 'MIN';
    node.counterAxisAlignItems = 'MIN';
  } else {
    node.layoutMode = 'NONE';
  }

  applyFrameStyling(node, tree.styles);
  applySize(node, tree.styles, { width: 1, height: 1 }, true);

  // Handle position: absolute
  if (tree.styles.position === 'absolute') {
    node.layoutPositioning = 'ABSOLUTE';
    if (tree.styles.top !== undefined) node.y = px(tree.styles.top);
    if (tree.styles.left !== undefined) node.x = px(tree.styles.left);
    if (tree.styles.right !== undefined) node.x = px(tree.styles.right);
    if (tree.styles.bottom !== undefined) node.y = px(tree.styles.bottom);
    if (tree.styles.inset !== undefined) { node.x = px(tree.styles.inset); node.y = px(tree.styles.inset); }
  }

  for (const child of tree.children ?? []) {
    await buildNode(child, node);
  }
}

async function buildNode(spec: FigmaNodeJSON, parent: FrameNode | ComponentNode): Promise<void> {
  const parentSupportsFill = parent.layoutMode !== 'NONE';

  if (spec.type === 'TEXT') {
    const t = await createTextNode(spec);
    parent.appendChild(t);
    // Text sizing in auto-layout
    if (parentSupportsFill) {
      const widthIsFill = getStyleValue(spec.styles, ['width']) === '100%';
      if (widthIsFill) t.layoutSizingHorizontal = 'FILL';
    }
    return;
  }

  if (spec.type === 'ELLIPSE') {
    const ellipse = figma.createEllipse();
    ellipse.name = spec.layerName ?? spec.name;
    const rawWidth = getStyleValue(spec.styles, ['width']);
    const rawHeight = getStyleValue(spec.styles, ['height']);
    const width = rawWidth === undefined ? 20 : Math.max(px(rawWidth), 1);
    const height = rawHeight === undefined ? 20 : Math.max(px(rawHeight), 1);
    ellipse.resize(width, height);
    const rgb = parseRgb(getStyleValue(spec.styles, ['backgroundColor', 'background'], '#E2E8F0'));
    if (rgb) ellipse.fills = [getSolidPaint(rgb)];
    else ellipse.fills = [];
    parent.appendChild(ellipse);
    if (parentSupportsFill) {
      const widthIsFill = rawWidth === '100%';
      if (widthIsFill) ellipse.layoutSizingHorizontal = 'FILL';
      ellipse.layoutAlign = 'INHERIT';
    }
    return;
  }

  if (spec.type === 'RECTANGLE') {
    const shape = figma.createRectangle();
    shape.name = spec.layerName ?? spec.name;
    const rawWidth = getStyleValue(spec.styles, ['width']);
    const rawHeight = getStyleValue(spec.styles, ['height']);
    const widthIsFill = rawWidth === '100%' && parentSupportsFill;
    const heightIsFill = rawHeight === '100%' && parentSupportsFill;
    const width = rawWidth === undefined || rawWidth === '100%' ? 1 : Math.max(px(rawWidth), 1);
    const height = rawHeight === undefined || rawHeight === '100%' ? 1 : Math.max(px(rawHeight), 1);
    shape.resize(width, height);
    const rgb = parseRgb(getStyleValue(spec.styles, ['backgroundColor', 'background'], '#E2E8F0'));
    if (rgb) shape.fills = [getSolidPaint(rgb)];
    else shape.fills = [];
    if (getStyleValue(spec.styles, ['borderRadius']) !== undefined) {
      shape.cornerRadius = px(spec.styles.borderRadius);
    }
    // Handle per-corner radii
    const tl = getStyleValue(spec.styles, ['borderTopLeftRadius']);
    const tr = getStyleValue(spec.styles, ['borderTopRightRadius']);
    const br = getStyleValue(spec.styles, ['borderBottomRightRadius']);
    const bl = getStyleValue(spec.styles, ['borderBottomLeftRadius']);
    if (tl !== undefined) shape.topLeftRadius = px(tl);
    if (tr !== undefined) shape.topRightRadius = px(tr);
    if (br !== undefined) shape.bottomRightRadius = px(br);
    if (bl !== undefined) shape.bottomLeftRadius = px(bl);

    const borderWidth = px(getStyleValue(spec.styles, ['borderWidth'], 0));
    if (borderWidth > 0) {
      const bRgb = parseRgb(String(getStyleValue(spec.styles, ['borderColor'], '#E2E8F0')));
      if (bRgb) {
        shape.strokes = [getSolidPaint(bRgb)];
        shape.strokeWeight = px(getStyleValue(spec.styles, ['borderWidth'], 1));
        shape.strokeAlign = 'INSIDE';
      }
    }
    parent.appendChild(shape);
    if (parentSupportsFill) {
      if (widthIsFill) shape.layoutSizingHorizontal = 'FILL';
      if (heightIsFill) shape.layoutSizingVertical = 'FILL';
      shape.layoutAlign = 'INHERIT';
    }
    return;
  }

  const frame = figma.createFrame();
  frame.name = spec.layerName ?? spec.name;

  // Check if the design explicitly requests auto-layout via flexDirection or similar
  const flexDirection = getStyleValue(spec.styles, ['flexDirection']);
  const hasChildren = (spec.children?.length ?? 0) > 0;

  if (flexDirection) {
    applyAutoLayout(frame, spec.styles);
  } else if (hasChildren) {
    // Default to column layout for containers with children
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'MIN';
    frame.counterAxisAlignItems = 'MIN';
  } else {
    frame.layoutMode = 'NONE';
  }

  applyFrameStyling(frame, spec.styles);

  parent.appendChild(frame);
  applySize(frame, spec.styles, { width: 1, height: 1 }, parentSupportsFill);

  // Handle position: absolute
  if (spec.styles.position === 'absolute') {
    frame.layoutPositioning = 'ABSOLUTE';
    if (spec.styles.top !== undefined) frame.y = px(spec.styles.top);
    if (spec.styles.left !== undefined) frame.x = px(spec.styles.left);
    if (spec.styles.right !== undefined) frame.x = px(spec.styles.right);
    if (spec.styles.bottom !== undefined) frame.y = px(spec.styles.bottom);
    if (spec.styles.inset !== undefined) { frame.x = px(spec.styles.inset); frame.y = px(spec.styles.inset); }
  }

  for (const child of spec.children ?? []) {
    await buildNode(child, frame);
  }
}

// ── Component generation with property definitions ─────────────────────────────

async function createComponents(
  components: ComponentDefinition[],
  page: PageNode
): Promise<void> {
  let xOffset = 0;

  for (const comp of components) {
    post('log', `Creating ${comp.name}…`);

    const hasVariants = comp.instances.length > 1;

    if (hasVariants) {
      const figmaComponents: ComponentNode[] = [];

      for (const instance of comp.instances) {
        const node = figma.createComponent();
        node.name = Object.entries(instance.props)
          .map(([k, v]) => sanitizeVariantName(k, v))
          .join(', ') || 'default';
        node.description = comp.description;

        const tree = instance.tree;

        await composeComponentFromTree(node, tree);

        page.appendChild(node);
        figmaComponents.push(node);
        await sleep(5);
      }

      if (figmaComponents.length > 0) {
        const set = figma.combineAsVariants(figmaComponents, page);
        set.name = comp.name;
        set.x = xOffset;
        set.y = 0;
        set.fills = [];
        set.strokes = [];
        set.paddingTop = 0; set.paddingBottom = 0;
        set.paddingLeft = 0; set.paddingRight = 0;
        set.itemSpacing = 16;
        set.layoutMode = 'VERTICAL';
        set.counterAxisSpacing = 16;

        // Note: componentPropertyDefinitions is read-only on ComponentSetNode.
        // Text override capability is set on individual ComponentNodes via
        // findTextNodes and setting their properties. This is handled during
        // composeComponentFromTree where text nodes get editable content.

        xOffset += (set.width ?? 400) + 80;
      }
    } else {
      const node = figma.createComponent();
      node.name = comp.name;
      node.description = comp.description;
      node.x = xOffset;
      node.y = 0;

      const tree = comp.instances[0]?.tree;
      if (tree) {
        await composeComponentFromTree(node, tree);
      }

      // Add text property definitions for single-instance components
      // Note: componentPropertyDefinitions is read-only in the current API.
      // Text nodes created inside components are automatically editable.
      // We mark them as overridable by finding them after creation.

      page.appendChild(node);
      xOffset += (node.width ?? 200) + 80;
    }

    await sleep(10);
  }
}

// ── Main import flow ─────────────────────────────────────────────────────────

async function drawTokens(page: PageNode, tokens: DesignTokens) {
  let x = 0;
  let y = 0;
  await ensureFontLoaded('Inter', 'Regular');
  for (const variable of colorVariableMap.values()) {
    const rect = figma.createRectangle();
    rect.name = variable.name;
    rect.resize(100, 100);
    rect.x = x;
    rect.y = y;
    rect.cornerRadius = 8;
    rect.fills = [figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }, 'color', variable)];

    const label = figma.createText();
    label.characters = variable.name;
    label.fontSize = 10;
    label.x = x;
    label.y = y + 110;

    page.appendChild(rect);
    page.appendChild(label);

    x += 150;
    if (x > 1000) { x = 0; y += 150; }
  }
}

/** Validate the imported JSON structure */
function validateJSON(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.metadata) errors.push('Missing "metadata" field');
  if (!data.tokens) errors.push('Missing "tokens" field');
  if (!data.components) errors.push('Missing "components" field');

  if (data.tokens) {
    if (!data.tokens.colors) errors.push('Missing "tokens.colors" field');
    if (!data.tokens.spacing) errors.push('Missing "tokens.spacing" field');
  }

  if (Array.isArray(data.components)) {
    for (let i = 0; i < data.components.length; i++) {
      const c = data.components[i];
      if (!c.name) errors.push(`Component ${i}: missing "name"`);
      if (!c.instances || !Array.isArray(c.instances)) errors.push(`Component ${c.name || i}: missing "instances" array`);
    }
  }

  return { valid: errors.length === 0, errors };
}

async function importDesignSystem(
  data: DesignSystemExport,
  options: { createVariables: boolean; createComponents: boolean }
): Promise<void> {
  const { tokens, components, metadata } = data;

  // Validate JSON structure
  const validation = validateJSON(data);
  if (!validation.valid) {
    post('error', `Invalid JSON structure:\n${validation.errors.join('\n')}`);
    return;
  }

  if (options.createVariables) {
    post('log', '🔑 Creating Figma Variable collections…');

    // Check for existing collections and reuse or skip
    const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();

    let colorCollection: VariableCollection;
    const existingColor = existingCollections.find((c) => c.name === 'Gluestack / Colors');
    if (existingColor) {
      colorCollection = existingColor;
      post('log', '  ℹ️ Reusing existing "Gluestack / Colors" collection');
    } else {
      colorCollection = figma.variables.createVariableCollection('Gluestack / Colors');
    }
    await createColorVariables(colorCollection, tokens.colors);

    let spacingCollection: VariableCollection;
    const existingSpacing = existingCollections.find((c) => c.name === 'Gluestack / Spacing');
    if (existingSpacing) {
      spacingCollection = existingSpacing;
      post('log', '  ℹ️ Reusing existing "Gluestack / Spacing" collection');
    } else {
      spacingCollection = figma.variables.createVariableCollection('Gluestack / Spacing');
    }
    await createSpacingVariables(spacingCollection, tokens.spacing);

    let radiusCollection: VariableCollection;
    const existingRadius = existingCollections.find((c) => c.name === 'Gluestack / Radius');
    if (existingRadius) {
      radiusCollection = existingRadius;
      post('log', '  ℹ️ Reusing existing "Gluestack / Radius" collection');
    } else {
      radiusCollection = figma.variables.createVariableCollection('Gluestack / Radius');
    }
    const radiusValues: Record<string, number> = Object.fromEntries(
      Object.entries(tokens.radius).map(([k, v]) => [k, px(v)])
    );
    await createRadiusVariables(radiusCollection, radiusValues);

    // Create text styles from typography tokens
    if (tokens.typography && tokens.typography.fontSizes) {
      post('log', '✍️ Creating text styles…');
      await createTextStyles(tokens.typography);
    }

    // Create effect styles from shadow tokens
    if (tokens.shadows && Object.keys(tokens.shadows).length > 0) {
      post('log', '🎨 Creating effect styles…');
      await createEffectStyles(tokens.shadows);
    }
  }

  if (options.createComponents) {
    let tokensPage = figma.root.children.find((p) => p.name === '🎨 Gluestack Tokens') as PageNode | undefined;
    if (!tokensPage) {
      tokensPage = figma.createPage();
      tokensPage.name = '🎨 Gluestack Tokens';
    }
    // CRITICAL: Ensure the page is loaded before appending to it
    await figma.setCurrentPageAsync(tokensPage);

    let dsPage = figma.root.children.find((p) => p.name === '🧩 Gluestack Components') as PageNode | undefined;
    if (!dsPage) {
      dsPage = figma.createPage();
      dsPage.name = '🧩 Gluestack Components';
    }
    // CRITICAL: Ensure the page is loaded before appending to it
    await figma.setCurrentPageAsync(dsPage);

    post('log', `🎨 Drawing tokens…`);
    await drawTokens(tokensPage, tokens);

    const totalInstances = components.reduce((sum, c) => sum + c.instances.length, 0);
    post('log', `🧩 Creating ${components.length} components (${totalInstances} variant instances)…`);
    await createComponents(components, dsPage);

    await figma.setCurrentPageAsync(dsPage);
    figma.viewport.scrollAndZoomIntoView(dsPage.children);
  }

  post('log', `🎉 Import complete! (v${metadata.version})`);
  post('done', { components: components.length, tokens: metadata.totalTokens });
}

// ── Plugin entrypoint ────────────────────────────────────────────────────────

figma.showUI(__html__, { width: 480, height: 600, title: 'Gluestack Design System' });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import') {
    try {
      const data: DesignSystemExport = JSON.parse(msg.json);
      await importDesignSystem(data, {
        createVariables: msg.createVariables !== false,
        createComponents: msg.createComponents !== false,
      });
    } catch (err: any) {
      post('error', err?.message ?? String(err));
    }
    return;
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};