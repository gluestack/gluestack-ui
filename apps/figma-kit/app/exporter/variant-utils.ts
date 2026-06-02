/**
 * exporter/variant-utils.ts
 * --------------------------
 * Pure utility functions for grouping, combining, deduplicating,
 * and normalizing component variants for Figma export.
 */

// ---------------------------------------------------------------------------
// MotionComponent unwrapper
// ---------------------------------------------------------------------------
// Framer Motion wraps overlay content (ModalContent → MotionComponent,
// Popover → MotionComponent) with an animated div.  That wrapper is a
// useless no-op in Figma.  Instead of creating a MotionComponent frame, we:
//   1. Promote its styles up to the parent node (merging, parent wins on
//      fields that the parent already has meaningful values for).
//   2. Replace the MotionComponent child entry with its own children.
//
// This runs recursively so nested MotionComponents are also collapsed.
// ---------------------------------------------------------------------------

// Fields where the MotionComponent is always the visual source of truth.
// This covers BOTH raw CSS names (used at merge time in the pipeline)
// AND normalized Figma names (used if merge is somehow called on already-
// normalized data).  The parent (ModalContent, Popover) has transparent
// fills, 0px radius, no padding — useless defaults — so Motion always wins.
const PARENT_ALWAYS_WINS_KEYS = new Set([
  // Only these non-visual structural props are inherited from the parent.
  // Everything else (color, shape, spacing, layout) comes from MotionComponent.
  "designTokens",
]);

// Properties that Framer Motion controls at runtime for animation.
// These represent animation state (initial/exit frames), NOT design intent,
// and must never be promoted from MotionComponent into the parent's Figma styles.
const MOTION_ANIMATION_KEYS = new Set([
  "opacity", // Framer Motion fades in from 0 — initial value is meaningless
  "transform", // Framer Motion slide/scale animations
  "transition", // CSS transition definition injected by Framer Motion
  "willChange", // perf hint added by Framer Motion, not a design property
]);

function mergeMotionStyles(parentStyles: any, motionStyles: any): any {
  if (!motionStyles) return parentStyles || {};
  if (!parentStyles) return motionStyles;

  // MotionComponent is the visual source of truth.
  // Start with ALL of its styles, then:
  //   1. Delete animation-runtime keys that must not appear in Figma.
  //   2. Overlay only the parent’s non-visual structural values that are
  //      explicitly whitelisted.
  const merged = { ...motionStyles };

  // Strip Framer Motion animation properties — they reflect a mid-animation
  // DOM snapshot, not the component’s intended design values.
  for (const key of MOTION_ANIMATION_KEYS) {
    delete merged[key];
  }

  for (const key of Object.keys(parentStyles)) {
    const pv = parentStyles[key];
    if (pv === undefined || pv === null) continue;

    // Parent wins only for explicitly whitelisted keys.
    if (PARENT_ALWAYS_WINS_KEYS.has(key)) {
      merged[key] = pv;
      continue;
    }

    // Skip everything else — MotionComponent already has the real value.
  }

  return merged;
}

function unwrapMotionInChildren(children: any[]): any[] {
  const out: any[] = [];
  for (const child of children) {
    if (child.name === "MotionComponent") {
      // Recursively unwrap nested MotionComponents inside this one first
      const grandChildren = child.children?.length
        ? unwrapMotionInChildren(child.children)
        : [];

      if (grandChildren.length === 0) {
        // MotionComponent with no children → emit a single stand-in child
        // that carries its styles (rare, but guard against empty output).
        out.push({ ...child, name: "MotionContent", children: [] });
      } else {
        // Hoist grandchildren, giving each one the MotionComponent's styles
        // as a baseline (grandchild's own styles override on top).
        for (const gc of grandChildren) {
          out.push(gc);
        }
      }
    } else {
      // Not a MotionComponent — recurse into its children normally.
      out.push({
        ...child,
        children: child.children?.length
          ? unwrapMotionInChildren(child.children)
          : child.children,
      });
    }
  }
  return out;
}

/**
 * unwrapMotionComponents
 * -----------------------
 * Given a variant object, collapses any MotionComponent children by:
 *   • Merging the MotionComponent's styles into the parent variant.
 *   • Replacing the MotionComponent child with its own children.
 *
 * This is idempotent — safe to call multiple times.
 */
export function unwrapMotionComponents(variant: any): any {
  if (!variant.children || variant.children.length === 0) return variant;

  // Check if ANY direct child is a MotionComponent.
  const hasMotionChild = variant.children.some(
    (c: any) => c.name === "MotionComponent",
  );

  if (!hasMotionChild) {
    // No direct MotionComponent — still recurse into nested children.
    return {
      ...variant,
      children: unwrapMotionInChildren(variant.children),
    };
  }

  // There is at least one direct MotionComponent child.
  // If there is exactly one and it has children, merge its styles into this
  // variant and adopt its children.
  let mergedStyles = variant.styles;
  let mergedLayout = variant.layout;
  // Also collect designTokens from MotionComponent (raw pipeline stores them separately).
  let mergedDesignTokens = variant.designTokens ?? {};
  const newChildren: any[] = [];

  for (const child of variant.children) {
    if (child.name !== "MotionComponent") {
      newChildren.push(child);
      continue;
    }

    // Merge MotionComponent styles into this variant.
    // MotionComponent is the visual source of truth — its styles replace the parent's.
    mergedStyles = mergeMotionStyles(mergedStyles, child.styles);
    // Also promote its design token refs (e.g. backgroundColor → --color-background-0).
    if (child.designTokens && Object.keys(child.designTokens).length > 0) {
      mergedDesignTokens = { ...child.designTokens, ...mergedDesignTokens };
    }
    // Use MotionComponent's layout if the parent has none.
    if (!mergedLayout && child.layout) mergedLayout = child.layout;

    // Adopt grandchildren (recursively unwrapped).
    const grandChildren = child.children?.length
      ? unwrapMotionInChildren(child.children)
      : [];
    newChildren.push(...grandChildren);
  }

  return {
    ...variant,
    styles: mergedStyles,
    layout: mergedLayout,
    designTokens: mergedDesignTokens,
    children: newChildren,
  };
}

// ---------------------------------------------------------------------------
// State collapsing
// ---------------------------------------------------------------------------
// Gluestack passes interaction states as individual boolean props
// (isHovered, isPressed, isDisabled, isFocused, isFocusVisible).
// Figma's variant system expects a single "state" property with string values
// ("default" | "isHovered" | "isPressed" | ...) instead of N boolean toggles.
//
// collapseStatesToSingleProp:
//   Converts { isHovered: true, isDisabled: false, variant: "solid" }
//        → { state: "isHovered", variant: "solid" }
//   When all state booleans are false/absent → state: "default"
//   When multiple are true, the first truthy one in STATE_PRIORITY wins.
//
// expandStateToProps (inverse — used when generating combos for isolated render):
//   Converts { state: "isHovered", variant: "solid" }
//        → { isHovered: true, variant: "solid" }
// ---------------------------------------------------------------------------

export const STATE_PROPS = new Set([
  "isHovered",
  "isPressed",
  "isDisabled",
  "isFocused",
  "isFocusVisible",
]);

// Priority order: when multiple states are true simultaneously, this
// determines which single label is used as the Figma state name.
const STATE_PRIORITY = [
  "isDisabled",
  "isPressed",
  "isFocusVisible",
  "isFocused",
  "isHovered",
];

export function collapseStatesToSingleProp(
  props: Record<string, any>,
): Record<string, any> {
  // Determine if any state props are present at all.
  const hasAnyStateProp = Object.keys(props).some((k) => STATE_PROPS.has(k));
  if (!hasAnyStateProp) return props;

  // Find the highest-priority truthy state.
  let stateName = "default";
  for (const key of STATE_PRIORITY) {
    if (props[key] === true) {
      stateName = key;
      break;
    }
  }

  // Build new props: drop all boolean state keys, add unified "state".
  const collapsed: Record<string, any> = {};
  for (const [k, v] of Object.entries(props)) {
    if (STATE_PROPS.has(k)) continue;
    collapsed[k] = v;
  }
  collapsed.state = stateName;
  return collapsed;
}

export function expandStateToProps(
  props: Record<string, any>,
): Record<string, any> {
  if (!("state" in props)) return props;
  const { state, ...rest } = props;
  const expanded: Record<string, any> = { ...rest };
  if (state !== "default") {
    expanded[state] = true;
  }
  return expanded;
}

export function buildVariantGroups(variants: any[]): Record<string, Set<any>> {
  const groups: Record<string, Set<any>> = {};
  for (const variant of variants) {
    // Collapse boolean state props → unified "state" before grouping so that
    // Figma sees a single "state" dropdown instead of N boolean toggles.
    const collapsedProps = collapseStatesToSingleProp(variant.props ?? {});
    for (const [key, value] of Object.entries(collapsedProps)) {
      if (
        value === null ||
        value === undefined ||
        typeof value === "function" ||
        typeof value === "object"
      )
        continue;
      if (!groups[key]) groups[key] = new Set();
      groups[key].add(value);
    }
  }
  for (const key of Object.keys(groups)) {
    if (groups[key].size <= 1) delete groups[key];
  }
  return groups;
}

function cartesianProduct(arrays: any[][]): any[][] {
  return arrays.reduce<any[][]>(
    (acc, arr) => acc.flatMap((combo) => arr.map((val) => [...combo, val])),
    [[]],
  );
}

export function generateAllCombos(
  groups: Record<string, Set<any>>,
): Record<string, any>[] {
  const keys = Object.keys(groups);
  if (keys.length === 0) return [];
  const values = keys.map((k) => Array.from(groups[k]));
  return cartesianProduct(values).map((combo) => {
    const obj: Record<string, any> = {};
    keys.forEach((k, i) => {
      obj[k] = combo[i];
    });
    return obj;
  });
}

export function dedupVariantsByProps(variants: any[]): any[] {
  const seen = new Map<string, any>();
  for (const v of variants) {
    // Deduplicate using collapsed (state-unified) props so that
    // { isHovered: true } and { state: "isHovered" } are treated as the same.
    const key = JSON.stringify(collapseStatesToSingleProp(v.props ?? {}));
    if (!seen.has(key)) seen.set(key, v);
  }
  return Array.from(seen.values());
}

export function flattenSameNameChildren(
  children: any[],
  parentName: string,
): any[] {
  const result: any[] = [];
  for (const child of children) {
    if (child.name === parentName) {
      const deeper = flattenSameNameChildren(child.children ?? [], parentName);
      result.push(...deeper);
    } else {
      result.push(child);
    }
  }
  return result;
}

export function normalizeVariantChildren(variant: any, compName: string): any {
  if (!variant.children || variant.children.length === 0) return variant;
  return {
    ...variant,
    isTextElement: variant.children.length > 0 ? false : variant.isTextElement,
    children: flattenSameNameChildren(variant.children, compName),
  };
}
