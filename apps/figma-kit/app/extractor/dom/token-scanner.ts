/**
 * extractor/dom/token-scanner.ts
 * --------------------------------
 * Scans CSS stylesheets to build a design token registry and
 * resolves which tokens apply to a given DOM element.
 * Results are cached per extraction run (reset between runs).
 */

import { DesignTokenRef, StylesheetTokenInfo, TokenInfo } from "../types";

let cachedTokenInfo: StylesheetTokenInfo | null = null;

export function resetTokenCache(): void {
  cachedTokenInfo = null;
}

function inferTokenType(
  propName: string,
  value: string,
): DesignTokenRef["type"] {
  const v = value.trim().toLowerCase();
  if (/^#([0-9a-f]{3,8})$/i.test(v) || /^rgba?\(/.test(v) || /^hsla?\(/.test(v))
    return "color";
  if (/font-size|font-weight|line-height|letter-spacing/.test(propName))
    return "typography";
  if (/radius|border-radius/.test(propName)) return "radius";
  if (/spacing|padding|margin|gap|width|height/.test(propName)) return "spacing";
  if (/shadow/.test(propName)) return "shadow";
  if (/^\d+(\.\d+)?px$/.test(v)) return "spacing";
  if (/color|background|fill|stroke|border-color/.test(propName)) return "color";
  return "unknown";
}

export function scanStylesheetTokens(): StylesheetTokenInfo {
  if (cachedTokenInfo) return cachedTokenInfo;

  const tokenRegistry: Record<string, TokenInfo> = {};
  const selectorTokenMap = new Map<string, Record<string, string>>();

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) continue;
      const selector = rule.selectorText;
      const props: Record<string, string> = {};
      for (let i = 0; i < rule.style.length; i++) {
        const prop = rule.style[i];
        const val = rule.style.getPropertyValue(prop).trim();
        const varMatch = val.match(/var\((--[^,)]+)/);
        if (varMatch) props[prop] = varMatch[1];
      }
      if (Object.keys(props).length > 0) selectorTokenMap.set(selector, props);
      if (selector === ":root") {
        for (let i = 0; i < rule.style.length; i++) {
          const prop = rule.style[i];
          if (!prop.startsWith("--")) continue;
          const val = rule.style.getPropertyValue(prop).trim();
          tokenRegistry[prop] = { value: val, type: inferTokenType(prop, val) };
        }
      }
    }
  }

  cachedTokenInfo = { tokenRegistry, selectorTokenMap };
  return cachedTokenInfo;
}

function cssToCamel(prop: string): string {
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function elementMatchesSelector(el: Element, selector: string): boolean {
  try {
    return el.matches(selector);
  } catch {
    return false;
  }
}

export function extractDesignTokenRefs(
  domNode: Element,
): Record<string, DesignTokenRef> {
  const { tokenRegistry, selectorTokenMap } = scanStylesheetTokens();
  const tokens: Record<string, DesignTokenRef> = {};

  for (const [selector, props] of selectorTokenMap.entries()) {
    if (!elementMatchesSelector(domNode, selector)) continue;
    for (const [cssProp, tokenName] of Object.entries(props)) {
      const info = tokenRegistry[tokenName];
      const camelProp = cssToCamel(cssProp);
      if (tokens[camelProp]) continue;
      const cs = window.getComputedStyle(domNode);
      const resolvedValue = cs.getPropertyValue(cssProp).trim();
      tokens[camelProp] = {
        tokenName,
        resolvedValue: resolvedValue || info?.value || "",
        type: info?.type || "unknown",
      };
    }
  }

  const inlineStyle = (domNode as HTMLElement).style;
  if (inlineStyle) {
    for (let i = 0; i < inlineStyle.length; i++) {
      const prop = inlineStyle[i];
      const val = inlineStyle.getPropertyValue(prop).trim();
      if (val.startsWith("var(")) {
        const match = val.match(/var\((--[^,)]+)/);
        if (match) {
          const tokenName = match[1];
          const info = tokenRegistry[tokenName];
          const camelProp = cssToCamel(prop);
          const cs = window.getComputedStyle(domNode);
          tokens[camelProp] = {
            tokenName,
            resolvedValue: cs.getPropertyValue(prop).trim() || info?.value || "",
            type: info?.type || "unknown",
          };
        }
      }
    }
  }

  return tokens;
}

export function getDesignTokenRegistry(): Record<
  string,
  { value: string; type: string }
> {
  const { tokenRegistry } = scanStylesheetTokens();
  return tokenRegistry;
}
