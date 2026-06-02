/**
 * plugin/utils.js
 * ----------------
 * Shared utility functions for the Figma plugin side.
 * Covers: color parsing, px parsing, variant key normalization,
 * variant deduplication, and variable resolution.
 */

/**
 * parsePx — "16px" → 16, "16" → 16, "none"/"auto" → null
 */
function parsePx(val) {
  if (val === undefined || val === null || val === "none" || val === "auto")
    return null;
  var n = parseFloat(String(val));
  return isNaN(n) ? null : n;
}

/**
 * parseColor — handles #hex, rgb(), rgba(), and "R G B" space-separated.
 * Returns { r, g, b } with values 0–1 for Figma, or null on failure.
 */
function parseColor(str) {
  if (!str) return null;

  if (str[0] === "#") {
    var hex = str.replace("#", "");
    if (hex.length === 3)
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    var n = parseInt(hex, 16);
    return {
      r: ((n >> 16) & 255) / 255,
      g: ((n >> 8) & 255) / 255,
      b: (n & 255) / 255,
    };
  }

  var m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m)
    return {
      r: parseInt(m[1]) / 255,
      g: parseInt(m[2]) / 255,
      b: parseInt(m[3]) / 255,
    };

  // "51 51 51" — CSS custom property resolved values
  var sp = str.match(/^(\d+)\s+(\d+)\s+(\d+)$/);
  if (sp)
    return {
      r: parseInt(sp[1]) / 255,
      g: parseInt(sp[2]) / 255,
      b: parseInt(sp[3]) / 255,
    };

  return null;
}

/**
 * getVar — resolve a CSS token name to a Figma Variable object
 */
function getVar(tokenName, variableMap) {
  if (!tokenName) return null;
  var id = variableMap[tokenName];
  if (!id) return null;
  return figma.variables.getVariableById(id) || null;
}

/**
 * parseVariantKey — "action=primary,size=md" → { action:"primary", size:"md" }
 */
function parseVariantKey(key) {
  var result = {};
  if (!key) return result;
  var parts = key.split(",");
  for (var i = 0; i < parts.length; i++) {
    var pair = parts[i].split("=");
    if (pair.length === 2) result[pair[0].trim()] = pair[1].trim();
  }
  return result;
}

/**
 * normalizeVariantKeys — fill missing keys with "default"
 */
function normalizeVariantKeys(variants) {
  var allKeys = {};
  for (var i = 0; i < variants.length; i++) {
    var props = parseVariantKey(variants[i].key);
    for (var k in props) allKeys[k] = true;
  }
  for (var i = 0; i < variants.length; i++) {
    var props = parseVariantKey(variants[i].key);
    for (var k in allKeys) if (!props[k]) props[k] = "default";
    var parts = [];
    for (var k in props) parts.push(k + "=" + props[k]);
    variants[i].key = parts.join(",");
  }
  return variants;
}

/**
 * buildVariantName — sort keys alphabetically for Figma consistency
 */
function buildVariantName(key) {
  var props = parseVariantKey(key);
  return Object.keys(props)
    .sort()
    .map(function (k) { return k + "=" + props[k]; })
    .join(",");
}

/**
 * dedupeVariants — remove variants with duplicate keys
 */
function dedupeVariants(variants) {
  var seen = {}, result = [];
  for (var i = 0; i < variants.length; i++) {
    if (!seen[variants[i].key]) {
      seen[variants[i].key] = true;
      result.push(variants[i]);
    }
  }
  return result;
}
