/**
 * Figma Plugin — code.ts (runs in Figma sandbox)
 *
 * Responsibilities:
 *  1. Create Color/Number/Text variables from token data
 *  2. Create component frames + variant sets for each component
 *  3. Communicate progress back to UI
 */

// ── Types (duplicated from exporter so this file is standalone) ──────────────
interface FigmaNodeJSON {
  type: 'FRAME' | 'TEXT' | 'RECTANGLE' | 'ELLIPSE' | 'GROUP';
  name: string;
  styles: Record<string, any>;
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

/** Parse "rgb(r, g, b)" → { r, g, b } (0-1 scale for Figma) */
function parseRgb(value: string): RGB | null {
  const m = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (m) {
    return {
      r: parseInt(m[1]) / 255,
      g: parseInt(m[2]) / 255,
      b: parseInt(m[3]) / 255,
    };
  }
  // hex
  const hex = value.replace('#', '');
  if (/^[0-9a-fA-F]{6}$/.test(hex)) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
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

// ── Variable creation ────────────────────────────────────────────────────────

const colorVariableMap = new Map<string, Variable>();

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

async function createSpacingVariables(
  collection: VariableCollection,
  spacing: Record<string, number>
): Promise<void> {
  for (const [name, value] of Object.entries(spacing)) {
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

async function drawTokens(page: PageNode) {
  let x = 0;
  let y = 0;
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
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
    if (x > 1000) {
      x = 0;
      y += 150;
    }
  }
}

function getSolidPaint(rgb: RGB): SolidPaint {
  const variable = colorVariableMap.get(`${rgb.r},${rgb.g},${rgb.b}`);
  const paint: SolidPaint = { type: 'SOLID', color: rgb };
  if (variable) {
    return figma.variables.setBoundVariableForPaint(paint, 'color', variable);
  }
  return paint;
}

async function buildNode(spec: FigmaNodeJSON, parent: FrameNode | ComponentNode): Promise<void> {
  if (spec.type === 'TEXT') {
    await figma.loadFontAsync({ family: spec.styles.fontFamily ?? 'Inter', style: 'Regular' });
    await figma.loadFontAsync({ family: spec.styles.fontFamily ?? 'Inter', style: 'Medium' });
    const t = figma.createText();
    t.name = spec.name;
    t.characters = spec.name;
    t.fontSize = spec.styles.fontSize ?? 14;
    const rgb = parseRgb(spec.styles.color ?? '#0F172A');
    if (rgb) t.fills = [getSolidPaint(rgb)];
    parent.appendChild(t);
    return;
  }

  if (spec.type === 'RECTANGLE' || spec.type === 'ELLIPSE') {
    const shape = spec.type === 'ELLIPSE' ? figma.createEllipse() : figma.createRectangle();
    shape.name = spec.name;
    shape.resize(px(spec.styles.width) || 16, px(spec.styles.height) || 16);
    const rgb = parseRgb(spec.styles.backgroundColor ?? '#E2E8F0');
    if (rgb) shape.fills = [getSolidPaint(rgb)];
    if (spec.styles.borderRadius) {
      (shape as RectangleNode).cornerRadius = px(spec.styles.borderRadius);
    }
    parent.appendChild(shape);
    return;
  }

  // FRAME / GROUP
  const frame = figma.createFrame();
  frame.name = spec.name;

  // Layout
  frame.layoutMode = spec.styles.flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';
  frame.primaryAxisAlignItems = spec.styles.justifyContent === 'center' ? 'CENTER' : 'MIN';
  frame.counterAxisAlignItems = spec.styles.alignItems === 'center' ? 'CENTER' : 'MIN';
  frame.itemSpacing = px(spec.styles.gap);
  frame.paddingTop = px(spec.styles.paddingTop);
  frame.paddingBottom = px(spec.styles.paddingBottom);
  frame.paddingLeft = px(spec.styles.paddingLeft);
  frame.paddingRight = px(spec.styles.paddingRight);

  // Size
  if (spec.styles.width && spec.styles.width !== '100%') {
    frame.resize(px(spec.styles.width) || 160, px(spec.styles.height) || 40);
  } else {
    frame.layoutSizingHorizontal = 'HUG';
    frame.layoutSizingVertical = 'HUG';
  }

  // Fill
  if (spec.styles.backgroundColor && spec.styles.backgroundColor !== 'transparent') {
    const rgb = parseRgb(spec.styles.backgroundColor);
    if (rgb) frame.fills = [getSolidPaint(rgb)];
    else frame.fills = [];
  } else {
    frame.fills = [];
  }

  // Border
  if (spec.styles.borderWidth && spec.styles.borderWidth > 0) {
    const borderRgb = parseRgb(spec.styles.borderColor ?? '#E2E8F0');
    if (borderRgb) {
      frame.strokes = [getSolidPaint(borderRgb)];
      frame.strokeWeight = spec.styles.borderWidth;
      frame.strokeAlign = 'INSIDE';
    }
  }

  // Radius
  if (spec.styles.borderRadius) {
    frame.cornerRadius = px(spec.styles.borderRadius);
  }

  parent.appendChild(frame);

  // Recurse
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
      // Build individual components then group into ComponentSet
      const figmaComponents: ComponentNode[] = [];

      for (const instance of comp.instances) {
        const node = figma.createComponent();
        node.name = Object.entries(instance.props)
          .map(([k, v]) => `${k}=${v}`)
          .join(', ') || 'default';
        node.description = comp.description;

        // Apply layout from tree root
        const tree = instance.tree;
        node.layoutMode = tree.styles.flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';
        node.primaryAxisAlignItems = 'CENTER';
        node.counterAxisAlignItems = 'CENTER';
        node.itemSpacing = px(tree.styles.gap);
        node.paddingTop = px(tree.styles.paddingTop);
        node.paddingBottom = px(tree.styles.paddingBottom);
        node.paddingLeft = px(tree.styles.paddingLeft);
        node.paddingRight = px(tree.styles.paddingRight);
        node.layoutSizingHorizontal = 'HUG';
        node.layoutSizingVertical = 'HUG';
        node.cornerRadius = px(tree.styles.borderRadius);

        if (tree.styles.backgroundColor && tree.styles.backgroundColor !== 'transparent') {
          const rgb = parseRgb(tree.styles.backgroundColor);
          if (rgb) node.fills = [getSolidPaint(rgb)];
          else node.fills = [];
        } else {
          node.fills = [];
        }

        if (tree.styles.borderWidth) {
          const bRgb = parseRgb(tree.styles.borderColor ?? '#E2E8F0');
          if (bRgb) {
            node.strokes = [getSolidPaint(bRgb)];
            node.strokeWeight = tree.styles.borderWidth;
            node.strokeAlign = 'INSIDE';
          }
        }

        // Children
        for (const child of tree.children ?? []) {
          await buildNode(child, node);
        }

        page.appendChild(node);
        figmaComponents.push(node);
        await sleep(5);
      }

      // Combine into ComponentSet
      if (figmaComponents.length > 0) {
        const set = figma.combineAsVariants(figmaComponents, page);
        set.name = comp.name;
        set.x = xOffset;
        set.y = 0;
        set.fills = [getSolidPaint(parseRgb('#F8FAFC')!)];
        set.strokes = [getSolidPaint(parseRgb('#E2E8F0')!)];
        set.strokeWeight = 1;
        set.cornerRadius = 8;
        set.paddingTop = 24;
        set.paddingBottom = 24;
        set.paddingLeft = 24;
        set.paddingRight = 24;
        set.itemSpacing = 16;
        
        // Auto-arrange the variants inside the set
        set.layoutMode = 'HORIZONTAL';
        set.layoutWrap = 'WRAP';
        set.counterAxisSpacing = 16;
        
        xOffset += (set.width ?? 400) + 80;
      }
    } else {
      // Single-variant component
      const node = figma.createComponent();
      node.name = comp.name;
      node.description = comp.description;
      node.x = xOffset;
      node.y = 0;

      const tree = comp.instances[0]?.tree;
      if (tree) {
        node.layoutMode = tree.styles.flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';
        node.primaryAxisAlignItems = 'CENTER';
        node.counterAxisAlignItems = 'CENTER';
        node.itemSpacing = px(tree.styles.gap);
        node.paddingTop = px(tree.styles.paddingTop);
        node.paddingBottom = px(tree.styles.paddingBottom);
        node.paddingLeft = px(tree.styles.paddingLeft);
        node.paddingRight = px(tree.styles.paddingRight);
        node.layoutSizingHorizontal = 'HUG';
        node.layoutSizingVertical = 'HUG';
        node.cornerRadius = px(tree.styles.borderRadius);
        if (tree.styles.backgroundColor && tree.styles.backgroundColor !== 'transparent') {
          const rgb = parseRgb(tree.styles.backgroundColor);
          if (rgb) node.fills = [getSolidPaint(rgb)];
          else node.fills = [];
        } else {
          node.fills = [];
        }
        for (const child of tree.children ?? []) {
          await buildNode(child, node);
        }
      }

      page.appendChild(node);
      xOffset += (node.width ?? 200) + 80;
    }

    await sleep(10);
  }
}

// ── Main import flow ─────────────────────────────────────────────────────────

async function importDesignSystem(
  data: DesignSystemExport,
  options: { createVariables: boolean; createComponents: boolean }
): Promise<void> {
  const { tokens, components, metadata } = data;

  if (options.createVariables) {
    post('log', '🔑 Creating Figma Variable collections…');

    // Color collection
    const colorCollection = figma.variables.createVariableCollection('Gluestack / Colors');
    await createColorVariables(colorCollection, tokens.colors);
    post('log', `  ✅ ${Object.keys(tokens.colors.light).length} color variables created with Light/Dark modes`);

    // Spacing collection
    const spacingCollection = figma.variables.createVariableCollection('Gluestack / Spacing');
    await createSpacingVariables(spacingCollection, tokens.spacing);
    post('log', `  ✅ ${Object.keys(tokens.spacing).length} spacing variables`);
  }

  if (options.createComponents) {
    // Create dedicated pages
    let tokensPage = figma.root.children.find((p) => p.name === '🎨 Gluestack Tokens') as PageNode | undefined;
    if (!tokensPage) {
      tokensPage = figma.createPage();
      tokensPage.name = '🎨 Gluestack Tokens';
    }
    let dsPage = figma.root.children.find((p) => p.name === '🧩 Gluestack Components') as PageNode | undefined;
    if (!dsPage) {
      dsPage = figma.createPage();
      dsPage.name = '🧩 Gluestack Components';
    }

    post('log', `🎨 Drawing tokens on Tokens canvas…`);
    await drawTokens(tokensPage);

    post('log', `🧩 Creating ${components.length} components…`);
    await createComponents(components, dsPage);
    post('log', `  ✅ All components created`);

    await figma.setCurrentPageAsync(dsPage);
    figma.viewport.scrollAndZoomIntoView(dsPage.children);
  }

  post('log', `🎉 Import complete! (v${metadata.version}, ${metadata.colorMode} mode)`);
  post('done', {
    components: components.length,
    tokens: metadata.totalTokens,
  });
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
