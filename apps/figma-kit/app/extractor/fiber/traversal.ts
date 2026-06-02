/**
 * extractor/fiber/traversal.ts
 * ------------------------------
 * Traverses the React fiber tree to produce a flat list of RawEntry records,
 * then groups them into ComponentDefinition objects (one per component name,
 * with each unique prop+style combination as a separate variant).
 */

import {
  RawEntry,
  ComponentDefinition,
  ComponentVariant,
  ComponentFnEntry,
  FiberExtractionResult,
} from "../types";
import { IGNORED_PROP_KEYS, RN_TEXT_COMPONENT_NAMES } from "../constants";
import {
  unwrapFiberType,
  shouldSkipComponent,
  getDomFromFiber,
  fiberHasNamedChild,
} from "./fiber-utils";
import { extractStyles, filterProps } from "../dom/style-extractor";
import { extractDesignTokenRefs } from "../dom/token-scanner";
import { isTextTag } from "../dom/text-extractor";

function variantKey(entry: RawEntry): string {
  return JSON.stringify(entry.props) + "||" + JSON.stringify(entry.styles);
}

function rawEntryToVariant(entry: RawEntry, isChild = false): ComponentVariant {
  const variant: ComponentVariant = {
    props: entry.props,
    styles: entry.styles,
    isTextElement: entry.isTextElement,
  };
  if (isChild) variant.name = entry.name;
  if (Object.keys(entry.designTokens).length > 0)
    variant.designTokens = entry.designTokens;
  if (entry.children.length > 0) {
    variant.children = entry.children.map((c) => rawEntryToVariant(c, true));
  }
  return variant;
}

function collectAllEntries(entries: RawEntry[], out: RawEntry[]): void {
  for (const entry of entries) {
    out.push(entry);
    if (entry.children.length > 0) collectAllEntries(entry.children, out);
  }
}

export function groupIntoComponents(entries: RawEntry[]): ComponentDefinition[] {
  const allEntries: RawEntry[] = [];
  collectAllEntries(entries, allEntries);

  const byName = new Map<string, Map<string, ComponentVariant>>();
  for (const entry of allEntries) {
    if (!byName.has(entry.name)) byName.set(entry.name, new Map());
    const variantMap = byName.get(entry.name)!;
    const key = variantKey(entry);
    if (!variantMap.has(key)) variantMap.set(key, rawEntryToVariant(entry, false));
  }

  const components: ComponentDefinition[] = [];
  for (const [name, variantMap] of byName.entries()) {
    components.push({ name, variants: Array.from(variantMap.values()) });
  }
  return components;
}

export function traverseFiber(
  fiber: Record<string, unknown> | null,
  result: RawEntry[],
  componentFns: Record<string, ComponentFnEntry> = {},
  parentStack: RawEntry[] = [],
): void {
  if (!fiber) return;

  const unwrapped = unwrapFiberType(fiber.type);

  if (unwrapped) {
    const { fn, name } = unwrapped;

    if (
      name !== "Anonymous" &&
      !name.startsWith("_") &&
      name !== "Suspense" &&
      name !== "StrictMode" &&
      name !== "Provider" &&
      name !== "Consumer" &&
      !shouldSkipComponent(name)
    ) {
      if (!componentFns[name]) {
        componentFns[name] = { fn, type: fiber.type };
      }

      // ── Same-name dedup guard ──────────────────────────────────────────────
      // Gluestack components (e.g. Button) often render an inner fiber that
      // resolves to the same component name (the styled/CssInterop wrapper).
      // If the immediate parent on the stack already has this name, skip
      // creating a duplicate wrapper node and traverse transparently instead.
      const immediateParent = parentStack.length > 0 ? parentStack[parentStack.length - 1] : null;
      if (immediateParent && immediateParent.name === name) {
        // Absorb this fiber's styles/props into the parent entry so we don't
        // lose information, then walk children/siblings under the same parent.
        if (fiber.child)
          traverseFiber(fiber.child as Record<string, unknown>, result, componentFns, parentStack);
        if (fiber.sibling)
          traverseFiber(fiber.sibling as Record<string, unknown>, result, componentFns, parentStack);
        return;
      }
      // ──────────────────────────────────────────────────────────────────────

      const rawProps = (fiber.memoizedProps as Record<string, unknown>) ?? {};
      const props = filterProps(rawProps, IGNORED_PROP_KEYS);
      const domNode = getDomFromFiber(fiber);
      const styles = domNode ? extractStyles(domNode) : {};
      const designTokens = domNode ? extractDesignTokenRefs(domNode) : {};

      // ── Icon special: capture the icon name from the `as` prop ──────────────
      // `filterProps` drops objects/functions so `as={AddIcon}` would be lost.
      // We read it directly from memoizedProps — for Icon AND all *Icon wrapper
      // components (BadgeIcon, AccordionIcon, CheckboxIcon, etc.) — and inject
      // `_iconName` so the exporter + Figma plugin can create instances from the
      // Icon component set, enabling the "icon" swap property in Figma.
      if (name === "Icon" || name.endsWith("Icon")) {
        const asProp = rawProps.as as any;
        if (asProp) {
          const iconName =
            (typeof asProp === "object" && (asProp.displayName || asProp.name)) ||
            (typeof asProp === "function" && (asProp.displayName || asProp.name));
          if (iconName && typeof iconName === "string") {
            (styles as Record<string, string>)["_iconName"] = iconName;
          }
        }
      }
      // ────────────────────────────────────────────────────────────────────────

      let isTextElement = false;
      const childFiber = fiber.child as Record<string, unknown> | null;

      if (RN_TEXT_COMPONENT_NAMES.has(name)) {
        isTextElement = true;
      } else if (childFiber && typeof childFiber.type === "string") {
        isTextElement = isTextTag(childFiber.type);
      } else if (domNode) {
        const isSemanticTextTag = isTextTag(domNode.tagName);
        const hasNamedChildComponent = fiberHasNamedChild(fiber);
        isTextElement =
          isSemanticTextTag ||
          (!hasNamedChildComponent &&
            (domNode.getAttribute("role") === "text" ||
              domNode.hasAttribute("data-rn-text")));
      }

      const entry: RawEntry = {
        name,
        props,
        styles,
        designTokens,
        children: [],
        isTextElement,
      };

      if (parentStack.length > 0) {
        parentStack[parentStack.length - 1].children.push(entry);
      } else {
        result.push(entry);
      }

      parentStack.push(entry);
      if (fiber.child)
        traverseFiber(fiber.child as Record<string, unknown>, result, componentFns, parentStack);
      parentStack.pop();

      if (fiber.sibling)
        traverseFiber(fiber.sibling as Record<string, unknown>, result, componentFns, parentStack);

      return;
    }
  }

  if (fiber.child)
    traverseFiber(fiber.child as Record<string, unknown>, result, componentFns, parentStack);
  if (fiber.sibling)
    traverseFiber(fiber.sibling as Record<string, unknown>, result, componentFns, parentStack);
}

export function extractFromFiberNode(
  startFiber: Record<string, unknown>,
): FiberExtractionResult {
  const raw: RawEntry[] = [];
  const componentFns: Record<string, ComponentFnEntry> = {};
  traverseFiber(startFiber, raw, componentFns);
  const components = groupIntoComponents(raw);
  return { components, componentFns };
}
