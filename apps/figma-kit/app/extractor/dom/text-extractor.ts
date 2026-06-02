/**
 * extractor/dom/text-extractor.ts
 * ---------------------------------
 * Extracts visible text content from DOM nodes and detects
 * whether a component maps to a text layer in Figma.
 */

import { TEXT_ELEMENT_TAGS } from "../constants";

export function getTextContent(domNode: Element): string {
  // Native form controls are void elements — they have no child text nodes.
  // Capture placeholder (or current value) so Figma renders something meaningful
  // instead of falling back to the component name.
  const tag = domNode.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") {
    const input = domNode as HTMLInputElement | HTMLTextAreaElement;
    const placeholder = input.placeholder?.trim();
    const value = input.value?.trim();
    return placeholder || value || "";
  }

  function walk(node: Node, depth: number): string {
    if (depth > 3) return "";
    if (node.nodeType === Node.TEXT_NODE)
      return (node.textContent || "").trim();
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      const cs = window.getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") return "";
      let text = "";
      for (const child of Array.from(node.childNodes)) {
        text += walk(child, depth + 1);
      }
      return text;
    }
    return "";
  }
  return walk(domNode, 0);
}

export function isTextTag(tag: string): boolean {
  return TEXT_ELEMENT_TAGS.has(tag.toLowerCase());
}
