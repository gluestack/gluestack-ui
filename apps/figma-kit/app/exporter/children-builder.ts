/**
 * exporter/children-builder.ts
 * ------------------------------
 * Rebuilds React element children from a variant's children template.
 * Used during isolated rendering to produce missing variant combinations
 * with the correct child structure (e.g. CheckboxIndicator + CheckboxLabel).
 */

import React from "react";
import { ComponentFnEntry } from "../extractor/types";

const SAFE_CHILD_TEXT_PROPS = new Set([
  "placeholder", "label", "title", "alt", "aria-label",
]);

function buildSafeProps(
  props: Record<string, unknown>,
  compFn: any,
  childFns: Record<string, ComponentFnEntry>,
  excludeNames: Set<string>,
): Record<string, unknown> {
  const safe: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (typeof v === "function") continue;
    if (v === null || v === undefined) continue;
    if (typeof v === "object" && !Array.isArray(v)) continue;
    safe[k] = v;
  }
  return safe;
}

export function buildChildrenFromVariant(
  children: any[],
  componentFns: Record<string, ComponentFnEntry>,
  excludeNames: Set<string> = new Set(),
): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];

  children.forEach((child, i) => {
    const childName = child.name;
    if (!childName || excludeNames.has(childName)) return;

    const entry = componentFns[childName];
    if (!entry) return;

    const childType = entry.type ?? entry.fn;
    const safeProps = buildSafeProps(
      child.props ?? {},
      childType,
      componentFns,
      excludeNames,
    );
    safeProps.key = i;

    const grandChildren: React.ReactNode[] = [];
    if (child.children?.length > 0) {
      grandChildren.push(
        ...buildChildrenFromVariant(child.children, componentFns, excludeNames),
      );
    }

    if (child.isTextElement) {
      const label =
        child.styles?._textContent ||
        (child.props?.children as string) ||
        childName;
      nodes.push(React.createElement(childType, safeProps, label));
      return;
    }

    nodes.push(
      grandChildren.length > 0
        ? React.createElement(childType, safeProps, ...grandChildren)
        : React.createElement(childType, safeProps),
    );
  });

  return nodes;
}
