/**
 * Figma Plugin — code.ts (runs in Figma sandbox)
 *
 * MISSION: High-Fidelity Design System Generation
 * Ensures compound components (Button -> ButtonText) and all props (isDisabled, etc.)
 * are perfectly preserved through recursive structural mapping.
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
  styles: any;
  children?: FigmaNodeJSON[];
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
  const cleanKey = key.replace(/[^a-zA-Z0-9]/g, '');
  const cleanValue = String(value).replace(/[^a-zA-Z0-9]/g, '');
  return `${cleanKey}=${cleanValue}`;
}

// ── State Management ─────────────────────────────────────────────────────────

const colorVariableMap = new Map<string, Variable>();
const loadedFonts = new Set<string>();
let availableFontsCache: Font[] | null = null;

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
    console.error(
      `Failed to load font: ${finalFont.family} ${finalFont.style}. Falling back to Inter Regular.`
    );
    const emergencyFallback: FontName =
      fallbackFont ?? availableFonts[0]?.fontName ?? { family: 'Inter', style: 'Regular' };
    await figma.loadFontAsync(emergencyFallback);
    loadedFonts.add(`${emergencyFallback.family}-${emergencyFallback.style}`);
    return emergencyFallback;
  }
}

// ── Variable creation ────────────────────────────────────────────────────────

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

  for (const [name, lightValue] of Object.entries(colors.light)) {
    const lightRgb = parseRgb(lightValue);
    const darkValue = colors.dark[name];
    const darkRgb = darkValue ? parseRgb(darkValue) : lightRgb;
    if (!lightRgb) continue;
    try {
      const variable = figma.variables.createVariable(name, collection, 'COLOR');
      variable.setValueForMode(collection.defaultModeId, lightRgb);
      if (darkRgb) variable.setValueForMode(darkModeId, darkRgb);
      colorVariableMap.set(`${lightRgb.r},${lightRgb.g},${lightRgb.b}`, variable);
    } catch {
      // skip duplicates
    }
    await sleep(1);
  }
}

async function createNumberVariables(
  collection: VariableCollection,
  values: Record<string, number>,
  prefix: string
): Promise<void> {
  for (const [name, value] of Object.entries(values)) {
    try {
      const variable = figma.variables.createVariable(`${prefix}-${name}`, collection, 'FLOAT');
      variable.setValueForMode(collection.defaultModeId, value);
    } catch {
      // skip
    }
    await sleep(1);
  }
}

async function createSpacingVariables(
  collection: VariableCollection,
  values: Record<string, number>
): Promise<void> {
  for (const [name, value] of Object.entries(values)) {
    try {
      const variable = figma.variables.createVariable(`spacing-${name}`, collection, 'FLOAT');
      variable.setValueForMode(collection.defaultModeId, value);
    } catch {
      // skip
    }
    await sleep(1);
  }
}

// ── Node builders ────────────────────────────────────────────────────────────

function getSolidPaint(rgb: ColorRGB): SolidPaint {
  const variable = colorVariableMap.get(`${rgb.r},${rgb.g},${rgb.b}`);
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
    node.cornerRadius = px(borderRadius);
  }
}

function applySize(
  node: FrameNode | ComponentNode,
  styles: Record<string, any>,
  defaults: { width: number; height: number } = { width: 1, height: 1 },
  allowFillSizing = false
) {
  const rawWidth = getStyleValue(styles, ['width', 'minWidth']);
  const rawHeight = getStyleValue(styles, ['height', 'minHeight']);
  const hasFixedWidth = rawWidth !== undefined && rawWidth !== '100%' && rawWidth !== 'auto';
  const hasFixedHeight = rawHeight !== undefined && rawHeight !== '100%' && rawHeight !== 'auto';

  if (hasFixedWidth || hasFixedHeight) {
    const width = hasFixedWidth ? Math.max(px(rawWidth), 1) : Math.max(defaults.width, 1);
    const height = hasFixedHeight ? Math.max(px(rawHeight), 1) : Math.max(defaults.height, 1);
    node.resize(width, height);
    node.layoutSizingHorizontal = hasFixedWidth ? 'FIXED' : 'HUG';
    node.layoutSizingVertical = hasFixedHeight ? 'FIXED' : 'HUG';
    return;
  }

  const parentIsAutoLayout = !!node.parent && 'layoutMode' in node.parent && node.parent.layoutMode !== 'NONE';
  if (!parentIsAutoLayout) {
    return;
  }

  node.layoutSizingHorizontal = rawWidth === '100%' && allowFillSizing ? 'FILL' : 'HUG';
  node.layoutSizingVertical = rawHeight === '100%' && allowFillSizing ? 'FILL' : 'HUG';
}

function applyFrameStyling(node: FrameNode | ComponentNode, styles: Record<string, any>) {
  const background = getStyleValue(styles, ['backgroundColor', 'background']);
  const paints = parseBackgroundPaints(background);
  if (paints) node.fills = paints;

  const borderWidth = px(getStyleValue(styles, ['borderWidth'], 0));
  if (borderWidth > 0) {
    const borderColor = parseRgb(String(getStyleValue(styles, ['borderColor'], '#E2E8F0')));
    if (borderColor) {
      node.strokes = [getSolidPaint(borderColor)];
      node.strokeWeight = borderWidth;
      node.strokeAlign = 'INSIDE';
    }
  } else {
    node.strokes = [];
  }

  applyCornerRadii(node, styles);

  const opacity = Number(getStyleValue(styles, ['opacity'], 1));
  if (!Number.isNaN(opacity)) {
    node.opacity = Math.max(0, Math.min(opacity, 1));
  }

  const shadowValue = getStyleValue(styles, ['boxShadow', 'shadow']);
  if (typeof shadowValue === 'string' && shadowValue.trim() && shadowValue !== 'none') {
    const shadow = parseShadow(shadowValue);
    if (shadow) node.effects = [shadow];
  } else {
    node.effects = [];
  }
}

function applyAutoLayout(frame: FrameNode | ComponentNode, styles: Record<string, any>) {
  const flexDirection = getStyleValue(styles, ['flexDirection'], 'column');
  frame.layoutMode = flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';

  const justify = getStyleValue(styles, ['justifyContent'], 'flex-start');
  if (justify === 'center') frame.primaryAxisAlignItems = 'CENTER';
  else if (justify === 'flex-end' || justify === 'end') frame.primaryAxisAlignItems = 'MAX';
  else if (justify === 'space-between') frame.primaryAxisAlignItems = 'SPACE_BETWEEN';
  else frame.primaryAxisAlignItems = 'MIN';

  const align = getStyleValue(styles, ['alignItems'], 'flex-start');
  if (align === 'center') frame.counterAxisAlignItems = 'CENTER';
  else if (align === 'flex-end' || align === 'end') frame.counterAxisAlignItems = 'MAX';
  else frame.counterAxisAlignItems = 'MIN';

  frame.itemSpacing = px(getStyleValue(styles, ['gap', 'columnGap', 'rowGap'], 0));
  frame.paddingTop = px(getStyleValue(styles, ['paddingTop', 'paddingVertical', 'padding'], 0));
  frame.paddingBottom = px(getStyleValue(styles, ['paddingBottom', 'paddingVertical', 'padding'], 0));
  frame.paddingLeft = px(getStyleValue(styles, ['paddingLeft', 'paddingHorizontal', 'padding'], 0));
  frame.paddingRight = px(getStyleValue(styles, ['paddingRight', 'paddingHorizontal', 'padding'], 0));
}

async function createTextNode(spec: FigmaNodeJSON): Promise<TextNode> {
  const family = spec.styles.fontFamily ?? 'Inter';
  const fontWeight = spec.styles.fontWeight ?? '400';
  let style: 'Regular' | 'Medium' | 'SemiBold' | 'Bold' = 'Regular';

  if (String(fontWeight) === '700') style = 'Bold';
  else if (String(fontWeight) === '600') style = 'SemiBold';
  else if (String(fontWeight) === '500') style = 'Medium';

  const resolvedFont = await ensureFontLoaded(family, style);
  const t = figma.createText();
  t.name = spec.name;
  t.fontName = resolvedFont;
  let textValue =
    String(getStyleValue(spec.styles, ['text', 'content', 'characters'], spec.name) || spec.name);
  const textTransform = String(getStyleValue(spec.styles, ['textTransform'], '')).toLowerCase();
  if (textTransform === 'uppercase') textValue = textValue.toUpperCase();
  if (textTransform === 'lowercase') textValue = textValue.toLowerCase();
  t.characters = textValue;
  t.fontSize = px(getStyleValue(spec.styles, ['fontSize'], 14));

  const lineHeight = px(getStyleValue(spec.styles, ['lineHeight'], 0));
  if (lineHeight > 0) {
    t.lineHeight = { unit: 'PIXELS', value: lineHeight };
  }

  const letterSpacing = px(getStyleValue(spec.styles, ['letterSpacing'], 0));
  if (letterSpacing !== 0) {
    t.letterSpacing = { unit: 'PIXELS', value: letterSpacing };
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

  applyAutoLayout(node, tree.styles);
  applySize(node, tree.styles, { width: 1, height: 1 }, false);
  applyFrameStyling(node, tree.styles);

  for (const child of tree.children ?? []) {
    await buildNode(child, node);
  }
}

async function buildNode(spec: FigmaNodeJSON, parent: FrameNode | ComponentNode): Promise<void> {
  const parentSupportsFill = parent.layoutMode !== 'NONE';

  if (spec.type === 'TEXT') {
    const t = await createTextNode(spec);
    parent.appendChild(t);
    return;
  }

  if (spec.type === 'RECTANGLE' || spec.type === 'ELLIPSE') {
    const shape = spec.type === 'ELLIPSE' ? figma.createEllipse() : figma.createRectangle();
    shape.name = spec.name;
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
      (shape as RectangleNode).cornerRadius = px(spec.styles.borderRadius);
    }
    if (px(getStyleValue(spec.styles, ['borderWidth'], 0)) > 0) {
      const bRgb = parseRgb(getStyleValue(spec.styles, ['borderColor'], '#E2E8F0'));
      if (bRgb) {
        shape.strokes = [getSolidPaint(bRgb)];
        shape.strokeWeight = px(getStyleValue(spec.styles, ['borderWidth'], 1));
        shape.strokeAlign = 'INSIDE';
      }
    }
    parent.appendChild(shape);
    if (parentSupportsFill) {
      // Shapes in auto-layout can be FIXED or FILL; HUG is invalid for most shape nodes.
      if (widthIsFill) shape.layoutSizingHorizontal = 'FILL';
      if (heightIsFill) shape.layoutSizingVertical = 'FILL';
      shape.layoutAlign = 'INHERIT';
    }
    return;
  }

  const frame = figma.createFrame();
  frame.name = spec.name;
  applyAutoLayout(frame, spec.styles);
  applyFrameStyling(frame, spec.styles);

  parent.appendChild(frame);
  applySize(frame, spec.styles, { width: 1, height: 1 }, parentSupportsFill);

  for (const child of spec.children ?? []) {
    await buildNode(child, frame);
  }
}

// ── Component generation ─────────────────────────────────────────────────────

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
        set.layoutMode = 'HORIZONTAL';
        set.layoutWrap = 'WRAP';
        set.counterAxisSpacing = 16;

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
    label.x = x;
    label.y = y + 110;

    page.appendChild(rect);
    page.appendChild(label);

    x += 150;
    if (x > 1000) { x = 0; y += 150; }
  }
}

async function importDesignSystem(
  data: DesignSystemExport,
  options: { createVariables: boolean; createComponents: boolean }
): Promise<void> {
  const { tokens, components, metadata } = data;

  if (options.createVariables) {
    post('log', '🔑 Creating Figma Variable collections…');
    const colorCollection = figma.variables.createVariableCollection('Gluestack / Colors');
    await createColorVariables(colorCollection, tokens.colors);

    const spacingCollection = figma.variables.createVariableCollection('Gluestack / Spacing');
    await createSpacingVariables(spacingCollection, tokens.spacing);

    const radiusCollection = figma.variables.createVariableCollection('Gluestack / Radius');
    const radiusValues = Object.fromEntries(
      Object.entries(tokens.radius).map(([k, v]) => [k, px(v)])
    );
    await createNumberVariables(radiusCollection, radiusValues, 'radius');
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

    post('log', `🧩 Creating ${components.length} components…`);
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
