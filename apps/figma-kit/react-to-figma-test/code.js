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
  var strVal = String(val);
  if (strVal.indexOf("%") !== -1 || strVal.indexOf("vw") !== -1 || strVal.indexOf("vh") !== -1)
    return null;
  var n = parseFloat(strVal);
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
    .map(function (k) {
      return k + "=" + props[k];
    })
    .join(",");
}

/**
 * dedupeVariants — remove variants with duplicate keys
 */
function dedupeVariants(variants) {
  var seen = {},
    result = [];
  for (var i = 0; i < variants.length; i++) {
    if (!seen[variants[i].key]) {
      seen[variants[i].key] = true;
      result.push(variants[i]);
    }
  }
  return result;
}
/**
 * plugin/token-builder.js
 * ------------------------
 * Creates Figma Variables from the design token registry exported
 * by the fiber extractor. Tokens are grouped into collections by type:
 * Colors, Spacing, Typography, Radius, Other.
 *
 * Returns variableMap: { tokenName → variableId }
 */

async function buildTokenVariables(designTokens) {
  var variableMap = {};
  if (!designTokens || typeof designTokens !== "object") return variableMap;

  var collections = {};

  for (var tokenName in designTokens) {
    var tokenInfo = designTokens[tokenName];
    if (!tokenInfo || !tokenInfo.type) continue;

    var collectionName =
      tokenInfo.type === "color"
        ? "Colors"
        : tokenInfo.type === "spacing"
          ? "Spacing"
          : tokenInfo.type === "typography"
            ? "Typography"
            : tokenInfo.type === "radius"
              ? "Radius"
              : "Other";

    if (!collections[collectionName]) {
      var existing = figma.variables
        .getLocalVariableCollections()
        .find(function (c) {
          return c.name === collectionName;
        });
      collections[collectionName] = existing
        ? existing
        : figma.variables.createVariableCollection(collectionName);
    }

    var collection = collections[collectionName];
    var modeId = collection.modes[0].modeId;
    var resolvedType = tokenInfo.type === "color" ? "COLOR" : "FLOAT";
    var cleanName = tokenName.replace(/^--/, "");

    var existingVar = null;
    for (var vi = 0; vi < collection.variableIds.length; vi++) {
      var vVar = figma.variables.getVariableById(collection.variableIds[vi]);
      if (vVar && vVar.name === cleanName) {
        existingVar = vVar;
        break;
      }
    }

    var variable = existingVar
      ? existingVar
      : figma.variables.createVariable(cleanName, collection, resolvedType);

    if (tokenInfo.type === "color" && tokenInfo.value) {
      var rgb = parseColor(tokenInfo.value);
      if (rgb) variable.setValueForMode(modeId, rgb);
    } else if (tokenInfo.value !== undefined) {
      var numVal = parseFloat(String(tokenInfo.value));
      if (!isNaN(numVal)) variable.setValueForMode(modeId, numVal);
    }

    variableMap[tokenName] = variable.id;
  }

  return variableMap;
}
/**
 * plugin/style-appliers.js
 * -------------------------
 * Pure style application functions for Figma nodes.
 * Each function reads from the normalized styles object produced by the
 * exporter and applies it to a Figma node via the plugin API.
 */

function applyFills(node, styles, variableMap) {
  if (!styles || !styles.fills || !styles.fills[0]) return;
  var fill = styles.fills[0];

  if (fill.token) {
    var v = getVar(fill.token, variableMap);
    if (v) {
      node.fills = [
        {
          type: "SOLID",
          color: { r: 0, g: 0, b: 0 },
          boundVariables: { color: { type: "VARIABLE_ALIAS", id: v.id } },
        },
      ];
      return;
    }
  }

  if (fill.color) {
    var rgb = parseColor(fill.color);
    var isTransparent =
      fill.color.indexOf("rgba(0, 0, 0, 0)") !== -1 ||
      fill.color.indexOf("rgba(0,0,0,0)") !== -1;
    if (rgb && !isTransparent) {
      node.fills = [
        {
          type: "SOLID",
          color: rgb,
          opacity: fill.opacity !== undefined ? fill.opacity : 1,
        },
      ];
    } else if (isTransparent) {
      node.fills = [];
    }
  }
}

function applyStrokes(node, styles, variableMap) {
  if (!styles || !styles.strokes || !styles.strokes.length) return;
  var strokeWeight = parseFloat(styles.strokeWeight);
  if (!isNaN(strokeWeight) && strokeWeight === 0) return;

  var strokes = [];
  for (var s = 0; s < styles.strokes.length; s++) {
    var stroke = styles.strokes[s];
    if (stroke.token) {
      var v = getVar(stroke.token, variableMap);
      if (v) {
        strokes.push({
          type: "SOLID",
          color: { r: 0, g: 0, b: 0 },
          boundVariables: { color: { type: "VARIABLE_ALIAS", id: v.id } },
        });
        continue;
      }
    }
    if (stroke.color) {
      var rgb = parseColor(stroke.color);
      if (rgb)
        strokes.push({
          type: "SOLID",
          color: rgb,
          opacity: stroke.opacity !== undefined ? stroke.opacity : 1,
        });
    }
  }

  if (strokes.length) {
    node.strokes = strokes;
    node.strokeWeight = !isNaN(strokeWeight) ? strokeWeight : 1;
    try {
      node.strokeAlign = "INSIDE";
    } catch (e) {
      /* ignore */
    }
  }
}

function applyRadius(node, styles, variableMap) {
  if (!styles) return;

  if (styles.borderRadiusToken) {
    var v = getVar(styles.borderRadiusToken, variableMap);
    if (v) {
      try {
        node.setBoundVariable("cornerRadius", v);
      } catch (e) {
        /* ignore */
      }
      return;
    }
  }

  var tl = parsePx(styles.borderTopLeftRadius);
  var tr = parsePx(styles.borderTopRightRadius);
  var br = parsePx(styles.borderBottomRightRadius);
  var bl = parsePx(styles.borderBottomLeftRadius);
  var uniform = parsePx(styles.borderRadius);

  if (tl !== null && tr !== null && br !== null && bl !== null) {
    if (tl === tr && tr === br && br === bl) {
      node.cornerRadius = tl;
    } else {
      try {
        node.topLeftRadius = tl;
        node.topRightRadius = tr;
        node.bottomRightRadius = br;
        node.bottomLeftRadius = bl;
      } catch (e) {
        node.cornerRadius = tl;
      }
    }
  } else if (uniform !== null) {
    node.cornerRadius = uniform;
  }
}

function applyPadding(node, styles, variableMap) {
  var p = (styles && styles.padding) || {};
  function set(figmaProp, tokenKey, valKey) {
    if (p[tokenKey]) {
      var v = getVar(p[tokenKey], variableMap);
      if (v) {
        try {
          node.setBoundVariable(figmaProp, v);
        } catch (e) {
          /* ignore */
        }
        return;
      }
    }
    node[figmaProp] = parsePx(p[valKey]) || 0;
  }
  set("paddingTop", "topToken", "top");
  set("paddingRight", "rightToken", "right");
  set("paddingBottom", "bottomToken", "bottom");
  set("paddingLeft", "leftToken", "left");
}

function applyDimensions(node, styles) {
  if (!styles) return;
  var isFlexContainer =
    styles.display === "flex" || styles.display === "inline-flex";
  var isInlineOrBlock =
    styles.display === "block" ||
    styles.display === "inline" ||
    styles.display === "inline-block" ||
    styles.display === "contents" ||
    !styles.display;

  if (styles.width && styles.width !== "auto" && styles.width !== "none") {
    var w = parsePx(styles.width);
    if (w !== null && w > 0) {
      if (node.layoutMode === "HORIZONTAL") {
        node.primaryAxisSizingMode = "FIXED";
      } else if (node.layoutMode === "VERTICAL") {
        node.counterAxisSizingMode = "FIXED";
      }
      try { node.layoutSizingHorizontal = "FIXED"; } catch (e) {}
      node.resize(w, node.height || 40);
    }
  }

  if (styles.height && styles.height !== "auto" && styles.height !== "none") {
    var h = parsePx(styles.height);
    if (h !== null && h > 0) {
      if (node.layoutMode === "HORIZONTAL") {
        node.counterAxisSizingMode = "FIXED";
      } else if (node.layoutMode === "VERTICAL") {
        node.primaryAxisSizingMode = "FIXED";
      }
      try { node.layoutSizingVertical = "FIXED"; } catch (e) {}
      node.resize(node.width || 100, h);
    }
  }

  if (
    styles.minWidth &&
    styles.minWidth !== "none" &&
    styles.minWidth !== "0px"
  ) {
    var minW = parsePx(styles.minWidth);
    if (minW !== null && minW > 0) {
      try {
        node.minWidth = minW;
      } catch (e) {}
    }
  }
  if (styles.maxWidth && styles.maxWidth !== "none") {
    var maxW = parsePx(styles.maxWidth);
    if (maxW !== null && maxW > 0) {
      try {
        node.maxWidth = maxW;
      } catch (e) {}
    }
  }
  if (
    styles.minHeight &&
    styles.minHeight !== "none" &&
    styles.minHeight !== "0px"
  ) {
    var minH = parsePx(styles.minHeight);
    if (minH !== null && minH > 0) {
      try {
        node.minHeight = minH;
      } catch (e) {}
    }
  }
  if (styles.maxHeight && styles.maxHeight !== "none") {
    var maxH = parsePx(styles.maxHeight);
    if (maxH !== null && maxH > 0) {
      try {
        node.maxHeight = maxH;
      } catch (e) {}
    }
  }
}

function applyOpacity(node, styles) {
  if (!styles || styles.opacity === undefined || styles.opacity === null)
    return;
  var op = parseFloat(styles.opacity);
  if (!isNaN(op) && op >= 0 && op <= 1) node.opacity = op;
}

function applyOverflow(node, styles) {
  if (!styles || !styles.overflow) return;
  node.clipsContent =
    styles.overflow === "hidden" ||
    styles.overflow === "clip" ||
    styles.overflow === "scroll" ||
    styles.overflow === "auto";
}

function applyLayout(node, layout, styles) {
  var display = (styles && styles.display) || "";

  if (display === "grid" || display === "inline-grid") {
    node.layoutMode = "NONE";
    var rw = parseFloat(styles.rectWidth),
      rh = parseFloat(styles.rectHeight);
    if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
      try {
        node.resize(rw, rh);
      } catch (e) {}
    }
    return;
  }

  if (
    display === "table" ||
    display === "table-row-group" ||
    display === "table-header-group" ||
    display === "table-footer-group"
  ) {
    node.layoutMode = "VERTICAL";
    node.primaryAxisSizingMode = "AUTO";
    node.counterAxisSizingMode = "AUTO";
    node.primaryAxisAlignItems = "MIN";
    node.counterAxisAlignItems = "MIN";
    node.itemSpacing = 0;
    return;
  }

  if (display === "table-row") {
    node.layoutMode = "HORIZONTAL";
    node.primaryAxisSizingMode = "AUTO";
    node.counterAxisSizingMode = "AUTO";
    node.primaryAxisAlignItems = "MIN";
    node.counterAxisAlignItems = "MIN";
    node.itemSpacing = 0;
    return;
  }

  if (display === "table-cell") {
    node.layoutMode = "HORIZONTAL";
    node.primaryAxisSizingMode = "FIXED";
    node.counterAxisSizingMode = "FIXED";
    node.primaryAxisAlignItems = "MIN";
    node.counterAxisAlignItems = "CENTER";
    node.itemSpacing = 0;
    var rw = parseFloat(styles.rectWidth),
      rh = parseFloat(styles.rectHeight);
    if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
      try {
        node.resize(rw, rh);
      } catch (e) {}
    }
    return;
  }

  var direction = "HORIZONTAL";
  if (styles && styles.flexDirection) {
    direction =
      styles.flexDirection === "column" ||
      styles.flexDirection === "column-reverse"
        ? "VERTICAL"
        : "HORIZONTAL";
  } else if (layout && layout.layoutMode) {
    direction = layout.layoutMode === "VERTICAL" ? "VERTICAL" : "HORIZONTAL";
  }

  node.layoutMode = direction;
  node.primaryAxisSizingMode = "AUTO";
  node.counterAxisSizingMode = "AUTO";

  var jcMap = {
    "flex-start": "MIN",
    start: "MIN",
    left: "MIN",
    normal: "MIN",
    "flex-end": "MAX",
    end: "MAX",
    right: "MAX",
    center: "CENTER",
    "space-between": "SPACE_BETWEEN",
    "space-around": "SPACE_BETWEEN",
    "space-evenly": "SPACE_BETWEEN",
  };
  var aiMap = {
    "flex-start": "MIN",
    start: "MIN",
    left: "MIN",
    normal: "MIN",
    stretch: "MIN",
    "flex-end": "MAX",
    end: "MAX",
    right: "MAX",
    center: "CENTER",
    baseline: "BASELINE",
  };

  var jc = styles && styles.justifyContent;
  var ai = styles && styles.alignItems;
  node.primaryAxisAlignItems = (jc && jcMap[jc]) || "MIN";
  node.counterAxisAlignItems = (ai && aiMap[ai]) || "MIN";

  if (layout && layout.gap) node.itemSpacing = parseFloat(layout.gap) || 0;

  if (styles && styles.flexWrap && styles.flexWrap !== "nowrap") {
    try {
      node.layoutWrap = "WRAP";
    } catch (e) {}
  }
  if (styles && styles.flexGrow) {
    var grow = parseFloat(styles.flexGrow);
    if (!isNaN(grow) && grow > 0) {
      try {
        node.layoutGrow = grow;
      } catch (e) {}
    }
  }
  if (styles && styles.alignSelf) {
    var alignSelfMap = {
      auto: "INHERIT",
      "flex-start": "MIN",
      "flex-end": "MAX",
      center: "CENTER",
      stretch: "STRETCH",
    };
    var alignVal = alignSelfMap[styles.alignSelf];
    if (alignVal) {
      try {
        node.layoutAlign = alignVal;
      } catch (e) {}
    }
  }
}
/**
 * plugin/node-builder.js
 * -----------------------
 * Builds Figma frames and text nodes from the normalized component data.
 * Handles: SVG assets, image fills, text layers, absolute positioning,
 * grid children positioning, and recursive child frame construction.
 */

function resolveSvgSize(styles) {
  function num(v) {
    if (v === undefined || v === null) return NaN;
    var n = parseFloat(String(v));
    return isNaN(n) ? NaN : n;
  }
  var rw = num(styles.svgRenderedWidth),
    rh = num(styles.svgRenderedHeight);
  if (rw > 0 && rh > 0) return { w: rw, h: rh };
  var iw = num(styles.svgIntrinsicWidth),
    ih = num(styles.svgIntrinsicHeight);
  if (iw > 0 && ih > 0) return { w: iw, h: ih };
  var fw = num(styles.rectWidth),
    fh = num(styles.rectHeight);
  if (fw > 0 && fh > 0) return { w: fw, h: fh };
  return null;
}

function applyAsset(node, styles) {
  if (!styles) return;

  if (styles.assetType === "svg" && styles.svgContent) {
    try {
      var iconColor = "#000000";
      if (styles.typography && styles.typography.color) {
        var tc = styles.typography.color;
        var m = tc.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (m) {
          iconColor =
            "#" +
            ("0" + parseInt(m[1]).toString(16)).slice(-2) +
            ("0" + parseInt(m[2]).toString(16)).slice(-2) +
            ("0" + parseInt(m[3]).toString(16)).slice(-2);
        } else if (tc[0] === "#") {
          iconColor = tc;
        }
      }

      var svgString = styles.svgContent.replace(/currentColor/g, iconColor);
      var svgNode = figma.createNodeFromSvg(svgString);
      var svgRootHasNoFill =
        /fill\s*=\s*["']none["']/i.test(styles.svgContent) ||
        /class\s*=\s*["'][^"']*fill-none[^"']*["']/i.test(styles.svgContent);

      function fixVectorFills(n) {
        if (!n) return;
        if (
          n.type === "VECTOR" ||
          n.type === "STAR" ||
          n.type === "POLYGON" ||
          n.type === "ELLIPSE" ||
          n.type === "RECTANGLE"
        ) {
          if (svgRootHasNoFill) {
            try {
              n.fills = [];
            } catch (e) {}
          } else {
            var fills = n.fills;
            if (fills && fills.length === 1) {
              var f = fills[0];
              if (
                f.type === "SOLID" &&
                f.color &&
                f.color.r === 0 &&
                f.color.g === 0 &&
                f.color.b === 0 &&
                (f.opacity === undefined || f.opacity === 1)
              ) {
                if (
                  !/fill\s*=\s*["']#/i.test(styles.svgContent) &&
                  !/fill\s*=\s*["']rgb/i.test(styles.svgContent)
                ) {
                  try {
                    n.fills = [];
                  } catch (e) {}
                }
              }
            }
          }
        }
        if (n.children && n.children.length > 0) {
          for (var ci = 0; ci < n.children.length; ci++)
            fixVectorFills(n.children[ci]);
        }
      }
      fixVectorFills(svgNode);

      var svgSize = resolveSvgSize(styles);
      if (svgSize) {
        try {
          svgNode.resize(svgSize.w, svgSize.h);
        } catch (e) {}
        try {
          svgNode.layoutSizingHorizontal = "FIXED";
        } catch (e) {}
        try {
          svgNode.layoutSizingVertical = "FIXED";
        } catch (e) {}
      }

      node.layoutMode = "NONE";
      node.fills = [];
      if (svgSize) {
        try {
          node.resize(svgSize.w, svgSize.h);
        } catch (e) {}
      }
      try {
        node.layoutSizingHorizontal = "FIXED";
      } catch (e) {}
      try {
        node.layoutSizingVertical = "FIXED";
      } catch (e) {}
      node.appendChild(svgNode);
      svgNode.x = 0;
      svgNode.y = 0;
    } catch (e) {
      console.warn("[applyAsset] SVG failed:", e.message);
    }
    return;
  }

  if (styles.assetType === "image" && styles.imageSrc) {
    try {
      var dataUri = styles.imageSrc;
      var base64 = dataUri.split(",")[1];
      if (!base64) return;
      var binary = atob(base64);
      var bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      var img = figma.createImage(bytes);
      node.fills = [{ type: "IMAGE", imageHash: img.hash, scaleMode: "FILL" }];
    } catch (e) {
      console.warn("[applyAsset] Image fill failed:", e.message);
    }
  }
}

function makeTextNode(characters, typo, variableMap, wrapText) {
  var t = figma.createText();
  t.fontName = { family: "Inter", style: "Regular" };
  t.characters = characters;
  if (!typo) return t;

  if (typo.fontSizeToken) {
    var v = getVar(typo.fontSizeToken, variableMap);
    if (v) {
      t.fontSize = 16;
      t.setBoundVariable("fontSize", v);
    }
  } else if (typo.fontSize) {
    var fs = parseFloat(typo.fontSize);
    if (!isNaN(fs) && fs > 0) t.fontSize = fs;
  }

  var fontStyle = "Regular";
  if (typo.fontWeight) {
    var fw = parseInt(typo.fontWeight);
    fontStyle =
      fw >= 700
        ? "Bold"
        : fw >= 600
          ? "Semi Bold"
          : fw >= 500
            ? "Medium"
            : "Regular";
  }

  var resolvedFamily = "Inter";
  if (typo.fontFamily) {
    var firstFont = typo.fontFamily.split(",")[0].trim().replace(/['"]/g, "");
    var cssGenerics = [
      "ui-sans-serif",
      "system-ui",
      "sans-serif",
      "serif",
      "monospace",
      "ui-serif",
      "ui-monospace",
      "ui-rounded",
      "cursive",
      "fantasy",
    ];
    if (firstFont && cssGenerics.indexOf(firstFont) === -1)
      resolvedFamily = firstFont;
  }

  try {
    t.fontName = { family: resolvedFamily, style: fontStyle };
  } catch (e) {
    try {
      t.fontName = { family: "Inter", style: fontStyle };
    } catch (e2) {
      t.fontName = { family: "Inter", style: "Regular" };
    }
  }

  if (typo.lineHeight) {
    var lhVal = parseFloat(typo.lineHeight);
    if (!isNaN(lhVal) && lhVal > 0) {
      t.lineHeight = {
        value: lhVal,
        unit: typo.lineHeight.indexOf("%") !== -1 ? "PERCENT" : "PIXELS",
      };
    }
  }

  if (typo.textAlign) {
    var alignMap = {
      left: "LEFT",
      start: "LEFT",
      center: "CENTER",
      right: "RIGHT",
      end: "RIGHT",
      justify: "JUSTIFIED",
    };
    var mapped = alignMap[typo.textAlign.toLowerCase()];
    if (mapped) t.textAlignHorizontal = mapped;
  }

  if (typo.colorToken) {
    var v = getVar(typo.colorToken, variableMap);
    if (v) {
      t.fills = [
        {
          type: "SOLID",
          color: { r: 0, g: 0, b: 0 },
          boundVariables: { color: { type: "VARIABLE_ALIAS", id: v.id } },
        },
      ];
    }
  } else if (typo.color) {
    var rgb = parseColor(typo.color);
    if (rgb) t.fills = [{ type: "SOLID", color: rgb }];
  }

  // Text wrapping: when the parent is a hardcoded auto-layout component,
  // fix the width (FILL parent) and let height grow so text wraps instead
  // of overflowing into adjacent elements.
  try {
    t.textAutoResize = "HEIGHT";
  } catch (e) {}
  try {
    t.layoutSizingHorizontal = "FILL";
  } catch (e) {}
  try {
    t.layoutGrow = 1;
  } catch (e) {}
  try {
    t.layoutSizingVertical = "HUG";
  } catch (e) {}

  return t;
}

function hasAbsoluteChildren(children) {
  if (!children || children.length === 0) return false;
  for (var i = 0; i < children.length; i++) {
    var pos =
      children[i].cssPosition ||
      (children[i].styles && children[i].styles.position);
    if (pos === "absolute" || pos === "fixed") return true;
  }
  return false;
}

function isDirectTextParent(nodeData) {
  if (!nodeData.children || nodeData.children.length === 0) return false;
  for (var i = 0; i < nodeData.children.length; i++) {
    if (nodeData.children[i].isTextElement) return true;
  }
  return false;
}

function applyAbsolutePosition(frame, child) {
  var pos = child.cssPosition || (child.styles && child.styles.position);
  if (pos !== "absolute" && pos !== "fixed" && pos !== "sticky") return;
  var offTop = parseFloat(child.offsetTop),
    offLeft = parseFloat(child.offsetLeft);
  var hasOffset = !isNaN(offTop) && !isNaN(offLeft);
  if (!hasOffset) {
    offTop = parsePx(child.cssTop || (child.styles && child.styles.top)) || 0;
    offLeft =
      parsePx(child.cssLeft || (child.styles && child.styles.left)) || 0;
  }
  try {
    frame.layoutPositioning = "ABSOLUTE";
    frame.x = offLeft;
    frame.y = offTop;
  } catch (e) {}
  try {
    var z = parseInt(child.cssZIndex);
    if (!isNaN(z) && z > 0) frame.setPluginData("zIndex", String(z));
  } catch (e) {}
}

function applyGridChildPosition(frame, child) {
  var offTop = parseFloat(child.offsetTop),
    offLeft = parseFloat(child.offsetLeft);
  var rw = parseFloat(child.rectWidth),
    rh = parseFloat(child.rectHeight);
  if (!isNaN(offTop) && !isNaN(offLeft)) {
    try {
      frame.x = offLeft;
      frame.y = offTop;
    } catch (e) {}
  }
  if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
    try {
      frame.resize(rw, rh);
    } catch (e) {}
  }
}

// Components that ALWAYS use flex auto-layout and hug their content (AUTO sizing).
// Rules for every component in this set:
//   1. layoutMode is always HORIZONTAL or VERTICAL (never NONE)
//   2. primaryAxisSizingMode + counterAxisSizingMode are always AUTO (hug content)
//   3. Text children wrap to the next line instead of overflowing
// Only these specific components are affected — all others keep existing behaviour.
var MODAL_FLEX_PARENTS = {
  // Modal / AlertDialog family
  Modal: true,
  ModalFooter: true,
  ModalHeader: true,
  ModalBody: true,
  ModalContent: true,
  ModalCloseButton: true,
  AlertDialog: true,
  AlertDialogContent: true,
  AlertDialogHeader: true,
  AlertDialogBody: true,
  AlertDialogFooter: true,
  // Card family
  Card: true,
  CardBody: true,
  CardHeader: true,
  CardFooter: true,
  // Popover / Menu family
  PopoverContent: true,
  PopoverBody: true,
  PopoverHeader: true,
  PopoverFooter: true,
  // Menu family
  Menu: true,
  // Menu item family
  MenuItem: true,
  MenuItemLabel: true,
  // Accordion family — needs auto-layout + text wrap so content expands correctly
  Accordion: true,
  AccordionItem: true,
  AccordionHeader: true,
  AccordionTrigger: true,
  AccordionContent: true,
  AccordionIcon: true,
  AccordionTitleText: true,
  AccordionContentText: true,
  // Alert family (inline banner, horizontal flex)
  Alert: true,
  AlertText: true,
  AlertIcon: true,
};

// Sub-components that MUST span the full width of their parent container.
// Never call resize() or counterAxisSizingMode=FIXED for these — it pixel-locks
// the width and prevents layoutSizingHorizontal="FILL" from taking effect.
var FILL_WIDTH_COMPONENTS = {
  ModalBody: true,
  ModalHeader: true,
  ModalFooter: true,
  AlertDialogBody: true,
  AlertDialogHeader: true,
  AlertDialogFooter: true,
  AlertText: true,
  CardBody: true,
  CardHeader: true,
  CardFooter: true,
  PopoverBody: true,
  PopoverHeader: true,
  PopoverFooter: true,
  AccordionContent: true,
  AccordionHeader: true,
  AccordionTrigger: true,
  Menu: true,
  MenuItem: true,
  MenuItemLabel: true,
};

function applyWidthFill(frame, parentLayoutMode) {
  // For older APIs where layoutSizingHorizontal fails, we MUST unlock the width axis
  // by setting it to FIXED so that layoutAlign/layoutGrow can stretch it.
  if (frame.layoutMode === "HORIZONTAL") {
    frame.primaryAxisSizingMode = "FIXED";   // width
    frame.counterAxisSizingMode = "AUTO";    // height
  } else if (frame.layoutMode === "VERTICAL") {
    frame.counterAxisSizingMode = "FIXED";   // width
    frame.primaryAxisSizingMode = "AUTO";    // height
  }

  if (parentLayoutMode === "VERTICAL") {
    // Width is cross-axis, Height is primary-axis
    try { frame.layoutAlign = "STRETCH"; } catch (e) {}
    try { frame.layoutGrow = 0; } catch (e) {}
  } else if (parentLayoutMode === "HORIZONTAL") {
    // Width is primary-axis, Height is cross-axis
    try { frame.layoutGrow = 1; } catch (e) {}
    try { frame.layoutAlign = "MIN"; } catch (e) {}
  }

  // Set modern API explicitly last so it overwrites primaryAxisSizingMode="FIXED" 
  try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
  try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
}

// Registry of icon Component nodes built from the Icon component set.
// Keyed by icon name (e.g. "AddIcon"). Populated in buildAllComponents
// when processing comp.name === "Icon", then read in buildChildFrame to
// create instances so every icon inside other components links back to
// the single Icon component — enabling the "icon" property swap in Figma.
var GLOBAL_ICONS = {};
// Secondary registry: maps a master icon's extracted SVG <path> d="..." string to its master node name
var GLOBAL_ICONS_SVG_PATHS = {};

function buildChildFrame(child, variableMap, parentDisplay, parentName, insideModal, parentLayoutMode, siblingColor) {
  var frame = figma.createFrame();
  frame.name = child.name || "Child";
  frame.fills = [];
  frame.clipsContent = false;

  var childHasAbsChild = hasAbsoluteChildren(child.children);
  var childIsTextParent = isDirectTextParent(child);

  // When inside a modal sub-component, also treat flex containers as
  // auto-layout candidates — not just those with immediate text children.
  var parentIsModal = parentName && MODAL_FLEX_PARENTS[parentName];
  var childDisplay = (child.styles && child.styles.display) || "";
  var childIsFlex = childDisplay === "flex" || childDisplay === "inline-flex";

  // shouldFillWidth: true when this frame is a direct or INDIRECT descendant of a
  // Body or Header component. We propagate this flag so text nodes nested
  // 2+ levels deep inside ModalBody also get FILL width.
  // We do NOT propagate from ModalFooter, so Buttons inside it can HUG correctly.
  var PROPAGATE_FILL_PARENTS = {
    ModalBody: true, ModalHeader: true,
    AlertDialogBody: true, AlertDialogHeader: true,
    Alert: true, AlertText: true,
    Card: true, CardBody: true, CardHeader: true,
    PopoverBody: true, PopoverHeader: true,
    AccordionContent: true, AccordionHeader: true,
    Menu: true, MenuItem: true, MenuItemLabel: true
  };
  var parentPropagatesFill = parentName && PROPAGATE_FILL_PARENTS[parentName];
  var shouldFillWidth = !!(parentPropagatesFill || insideModal);

  // Check if the child itself is one of our hardcoded auto-layout components.
  var childIsAutoComp = !!MODAL_FLEX_PARENTS[child.name];

  if (childHasAbsChild) {
    frame.layoutMode = "NONE";
    var absRw = parseFloat(
      child.rectWidth || (child.styles && child.styles.rectWidth),
    );
    var absRh = parseFloat(
      child.rectHeight || (child.styles && child.styles.rectHeight),
    );
    if (!isNaN(absRw) && absRw > 0 && !isNaN(absRh) && absRh > 0) {
      try {
        frame.resize(absRw, absRh);
      } catch (e) {}
    }
  } else if (childIsAutoComp) {
    // This child IS a hardcoded auto-layout component (MenuItem, MenuItemLabel, etc.):
    // apply flex layout, then set direction-aware sizing.
    applyLayout(frame, child.layout, child.styles);
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    // Key hint for the PARENT (Popover, ModalContent, etc.):
    //   FILL horizontal → child stretches across the parent's full width
    //   HUG  vertical   → parent grows when this child grows (height propagation)
    try {
      frame.layoutSizingHorizontal = "FILL";
    } catch (e) {}
    try {
      frame.layoutAlign = "STRETCH";
    } catch (e) {}
    try {
      frame.layoutSizingVertical = "HUG";
    } catch (e) {}
  } else if (childIsFlex) {
    // General flex containers (like Button, Badge) should apply auto-layout
    // and default to HUG for both width and height so they size to their content.
    applyLayout(frame, child.layout, child.styles);
    try {
      frame.layoutSizingVertical = "HUG";
    } catch (e) {}
    try {
      frame.layoutSizingHorizontal = "HUG";
    } catch (e) {}
  } else if (childIsTextParent) {
    // Default: only apply auto-layout when a direct child is a text element.
    applyLayout(frame, child.layout, child.styles);
  } else {
    frame.layoutMode = "NONE";
    var crw = parseFloat(
      child.rectWidth || (child.styles && child.styles.rectWidth),
    );
    var crh = parseFloat(
      child.rectHeight || (child.styles && child.styles.rectHeight),
    );
    if (!isNaN(crw) && crw > 0 && !isNaN(crh) && crh > 0) {
      try {
        frame.resize(crw, crh);
      } catch (e) {}
    }
  }

  applyFills(frame, child.styles, variableMap);
  applyStrokes(frame, child.styles, variableMap);
  // Text-element wrappers (InputField, ButtonText, CheckboxLabel, etc.) are
  // transparent layers — never keep the browser-default or parent-inherited border.
  if (child.isTextElement) {
    frame.fills = [];
    frame.strokes = [];
  }
  applyRadius(frame, child.styles, variableMap);
  applyPadding(frame, child.styles, variableMap);

  if (!(child.styles && child.styles.assetType === "svg"))
    applyDimensions(frame, child.styles);
  // For childIsAutoComp: restore direction-aware sizing after applyDimensions may have locked it.
  //   VERTICAL (column containers): height AUTO, width FIXED to CSS value
  //   HORIZONTAL (row containers like MenuItem): both AUTO so it hugs content
  // Re-apply layoutSizing hints so Popover (parent) knows to grow with this child.
  // Check childIsFillWidth FIRST — never pixel-lock FILL_WIDTH_COMPONENTS (ModalBody, ModalHeader, etc.)
  if (childIsAutoComp && frame.layoutMode !== "NONE") {
    var childIsFillWidth = !!(FILL_WIDTH_COMPONENTS && FILL_WIDTH_COMPONENTS[child.name]);
    // Reset layoutGrow: flexGrow:1 in CSS sets layoutGrow=1, which forces FILL and overrides HUG.
    try { frame.layoutGrow = 0; } catch (e) {}
    if (frame.layoutMode === "VERTICAL") {
      frame.primaryAxisSizingMode = "AUTO";
      if (!childIsFillWidth) {
        var autoCompRw = parseFloat(
          child.rectWidth || (child.styles && child.styles.rectWidth),
        );
        if (!isNaN(autoCompRw) && autoCompRw > 0) {
          frame.counterAxisSizingMode = "FIXED";
          try { frame.resize(autoCompRw, frame.height || 40); } catch (e) {}
        } else {
          frame.counterAxisSizingMode = "AUTO";
        }
      }
    } else {
      // HORIZONTAL (e.g. MenuItem): both AUTO so the row hugs its content.
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
    }
    
    if (childIsFillWidth) {
      applyWidthFill(frame, parentLayoutMode);
    }
    try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
  }
  // Re-apply FILL for ALL direct children of modal parents that are NOT childIsAutoComp.
  // We explicitly blacklist components like Button so they HUG their contents.
  var NO_STRETCH_COMPONENTS = {
    Button: true, ButtonText: true, ButtonIcon: true,
    Badge: true, BadgeText: true, BadgeIcon: true,
    Checkbox: true, Radio: true, Switch: true,
    Icon: true, Spinner: true, Image: true
  };
  var isIconText = child.name && child.name.indexOf("Icon") !== -1;
  if (shouldFillWidth && !childIsAutoComp && !NO_STRETCH_COMPONENTS[child.name] && !isIconText) {
    if (frame.layoutMode !== "NONE") {
      applyWidthFill(frame, parentLayoutMode);
    }
  }

  // Force HUG width for Button, Badge, etc. so applyDimensions doesn't pixel-lock them.
  if (NO_STRETCH_COMPONENTS[child.name] && frame.layoutMode !== "NONE") {
    if (frame.layoutMode === "HORIZONTAL") {
      frame.primaryAxisSizingMode = "AUTO"; // Width
    } else if (frame.layoutMode === "VERTICAL") {
      frame.counterAxisSizingMode = "AUTO"; // Width
    }
    try { frame.layoutSizingHorizontal = "HUG"; } catch(e) {}
    // Height remains FIXED as set by applyDimensions
  }
  applyOpacity(frame, child.styles);
  applyOverflow(frame, child.styles);
  // MODAL_FLEX_PARENTS members with overflow:hidden would get clipsContent=true,
  // which prevents AUTO height from growing beyond the DOM snapshot height.
  if (childIsAutoComp && frame.layoutMode !== "NONE") {
    try {
      frame.clipsContent = false;
    } catch (e) {}
  }

  if (child.styles && child.styles.assetType === "svg") {
    // If this child has a resolved icon name (e.g. "GlobeIcon" inside BadgeIcon),
    // look up the master Icon component and create an instance — this gives
    // designers the "icon" property dropdown in Figma for easy icon swapping.
    var resolvedIconName = child.iconName || child.name;
    var iconMaster = GLOBAL_ICONS[resolvedIconName];

    // Fallback: If we couldn't match by name, try to match by SVG path string.
    // This catches instances (like isolated badge variants) where the extraction
    // phase didn't inject an explicit child.iconName.
    if (!iconMaster && child.styles.svgContent) {
      var childPaths = (child.styles.svgContent.match(/d="([^"]+)"/g) || []).join("");
      if (childPaths) {
        for (var k in GLOBAL_ICONS_SVG_PATHS) {
          if (GLOBAL_ICONS_SVG_PATHS[k] === childPaths) {
            iconMaster = GLOBAL_ICONS[k];
            break;
          }
        }
      }
    }

    if (iconMaster) {
      // ── Step 1: create and size the instance (independent try) ──────────
      var iconInstance = null;
      try {
        iconInstance = iconMaster.createInstance();
        var iw = parseFloat(child.styles.rectWidth) || parseFloat(child.styles.svgRenderedWidth) || 24;
        var ih = parseFloat(child.styles.rectHeight) || parseFloat(child.styles.svgRenderedHeight) || 24;
        try { iconInstance.resize(iw, ih); } catch (e) {}
        try { iconInstance.layoutSizingHorizontal = "FIXED"; } catch (e) {}
        try { iconInstance.layoutSizingVertical = "FIXED"; } catch (e) {}
      } catch (e) {
        iconInstance = null; // creation failed, fall through to applyAsset
      }

      if (iconInstance) {
        // ── Color resolution (highest → lowest priority) ──────────────────
        // P0: siblingColor — the text color from the sibling BadgeText / label.
        //     Ensures the icon always matches its row's text (warning → orange, etc.)
        // P1: SVG stroke/fill attribute baked into the child's svgContent.
        // P2: typography.color from computed CSS (currentColor fallback).
        var svgColorHex = siblingColor || null;
        if (!svgColorHex && child.styles.svgContent) {
          var strokeAttrMatch = child.styles.svgContent.match(/stroke="(#[0-9a-fA-F]{3,8})"/);
          if (strokeAttrMatch) svgColorHex = strokeAttrMatch[1];
          if (!svgColorHex) {
            var fillAttrMatch = child.styles.svgContent.match(/fill="(#[0-9a-fA-F]{3,8})"/);
            if (fillAttrMatch && fillAttrMatch[1].toLowerCase() !== "#none")
              svgColorHex = fillAttrMatch[1];
          }
        }
        if (!svgColorHex && child.styles.typography && child.styles.typography.color) {
          svgColorHex = child.styles.typography.color;
        }
        // ─────────────────────────────────────────────────────────────────

        if (svgColorHex) {
          try {
            var iconRgb = parseColor(svgColorHex);
            if (iconRgb) {
              // findAll works on off-page nodes — no appendChild needed here.
              // (Appending to page before combineAsVariants confuses Figma and
              //  breaks the component property panel on the parent component set.)
              var allVectors = iconInstance.findAll(function(n) {
                return n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION" ||
                       n.type === "STAR"   || n.type === "ELLIPSE" ||
                       n.type === "POLYGON" || n.type === "RECTANGLE" ||
                       n.type === "LINE";
              });
              allVectors.forEach(function(v) {
                if (v.strokes && v.strokes.length > 0) {
                  try {
                    var ns = JSON.parse(JSON.stringify(v.strokes));
                    for (var i = 0; i < ns.length; i++) {
                      ns[i].color = iconRgb;
                    }
                    v.strokes = ns;
                  } catch(e) {}
                }
                if (v.fills && v.fills.length > 0) {
                  try {
                    var nf = JSON.parse(JSON.stringify(v.fills));
                    for (var i = 0; i < nf.length; i++) {
                      if (nf[i] && nf[i].type !== "IMAGE" && nf[i].type !== "NONE") {
                        nf[i].color = iconRgb;
                      }
                    }
                    v.fills = nf;
                  } catch(e) {}
                }
              });
            }
          } catch(e) {
            // Recolor failed — instance still returned with master's default color
          }
        }
        // ───────────────────────────────────────────────────────────────────

        // Safe to remove the placeholder frame now that instance is confirmed
        try { frame.remove(); } catch(e) {}
        return iconInstance;
      }
    }
    applyAsset(frame, child.styles);
    return frame;
  }
  applyAsset(frame, child.styles);

  if (child.isTextElement && child.textContent) {
    var shouldWrap = !!shouldFillWidth;
    var txt = makeTextNode(
      child.textContent,
      child.styles && child.styles.typography,
      variableMap,
      shouldWrap,
    );
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    // CRITICAL: set layout sizing on THIS frame so the parent (ModalBody, PopoverBody, etc.)
    // knows to grow when this text frame grows. Without FILL+HUG here, the parent treats
    // this frame as fixed-height and never expands even as text wraps.
    var NO_STRETCH_COMPONENTS = {
      Button: true, ButtonText: true, ButtonIcon: true,
      Badge: true, BadgeText: true, BadgeIcon: true,
      Checkbox: true, Radio: true, Switch: true,
      Icon: true, Spinner: true, Image: true
    };
    var isIconText = child.name && child.name.indexOf("Icon") !== -1;
    if (shouldFillWidth && !NO_STRETCH_COMPONENTS[child.name] && !isIconText) {
      applyWidthFill(frame, parentLayoutMode);
    }
    frame.appendChild(txt);
    return frame;
  }

  var myDisplay = (child.styles && child.styles.display) || "";
  var frameIsNone = frame.layoutMode === "NONE";

  if (child.children && child.children.length > 0) {
    for (var ci = 0; ci < child.children.length; ci++) {
      // Pass the current child's name AND the propagated insideModal flag so
      // grandchildren (text nodes nested inside a div inside ModalBody) also get FILL.
      var subFrame = buildChildFrame(
        child.children[ci],
        variableMap,
        frameIsNone ? "__abs_parent__" : myDisplay,
        child.name,
        shouldFillWidth,
        frame.layoutMode
      );
      frame.appendChild(subFrame);
      if (frameIsNone || myDisplay === "grid" || myDisplay === "inline-grid") {
        applyGridChildPosition(subFrame, child.children[ci]);
      } else {
        applyAbsolutePosition(subFrame, child.children[ci]);
      }
    }
  } else if (child.isTextElement) {
    var shouldWrap2 = !!shouldFillWidth;
    // Text-element wrappers (InputField, ButtonText, CheckboxLabel, etc.) are
    // transparent text layers inside their parent container. Strip any border/
    // fill the CSS extractor picked up from browser defaults or inherited styles.
    frame.fills = [];
    frame.strokes = [];
    // If no real text content (e.g. InputField on a native <input> element where
    // placeholder wasn't captured), use a sensible gray placeholder label rather
    // than the component name so Figma shows something readable.
    var labelText =
      (child.textContent && child.textContent.trim()) || "Placeholder...";
    var txt = makeTextNode(
      labelText,
      child.styles && child.styles.typography,
      variableMap,
      shouldWrap2,
    );
    // For form-field children (Input, Textarea etc.) that have no real text,
    // dim the text to look like a placeholder and set FILL width.
    if (!child.textContent || !child.textContent.trim()) {
      try {
        txt.opacity = 0.4;
      } catch (e) {}
    }
    // Always make the text wrapper stretch to fill the parent container width.
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    try {
      frame.layoutSizingHorizontal = "FILL";
    } catch (e) {}
    try {
      frame.layoutAlign = "STRETCH";
    } catch (e) {}
    try {
      frame.layoutSizingVertical = "HUG";
    } catch (e) {}
    frame.appendChild(txt);
  }

  return frame;
}
/**
 * plugin/component-builder.js
 * ----------------------------
 * Builds Figma Component and ComponentSet nodes from the exported JSON.
 * Iterates the components array, constructs variant frames with all styles
 * applied, then combines them into a Figma ComponentSet (variant group).
 */

function buildAllComponents(components, variableMap) {
  // Layout: each component occupies one "Page" frame (width 1400px).
  // Pages are arranged continuously from left to right.
  var PAGE_X = 100;
  var PAGE_Y = 100;
  var PAGE_GAP = 200;

  for (var i = 0; i < components.length; i++) {
    var comp = components[i];
    if (!comp.variants || comp.variants.length === 0) continue;

    var variants = dedupeVariants(comp.variants);
    variants = normalizeVariantKeys(variants);
    var variantNodes = [];

    for (var j = 0; j < variants.length; j++) {
      var variant = variants[j];
      var node = figma.createComponent();
      node.name = buildVariantName(variant.key);

      var variantHasAbsChild = hasAbsoluteChildren(variant.children);
      var variantDisplay = (variant.styles && variant.styles.display) || "";
      var variantIsTextParent = isDirectTextParent(variant);
      // Modal sub-components (ModalFooter, ModalHeader, PopoverContent, MenuItem, etc.) are
      // flex containers whose children are frames, not text — so isDirectTextParent returns
      // false and they'd get layoutMode=NONE. Fix: apply flex-based layout for known parents.
      var compIsModal = !!MODAL_FLEX_PARENTS[comp.name];
      var variantIsFlex =
        variantDisplay === "flex" || variantDisplay === "inline-flex";

      if (variantHasAbsChild) {
        node.layoutMode = "NONE";
        var absRw = parseFloat(variant.styles && variant.styles.rectWidth);
        var absRh = parseFloat(variant.styles && variant.styles.rectHeight);
        if (!isNaN(absRw) && absRw > 0 && !isNaN(absRh) && absRh > 0) {
          try {
            node.resize(absRw, absRh);
          } catch (e) {}
        }
      } else if (compIsModal) {
        // Hardcoded auto-layout components: ALWAYS apply flex layout.
        applyLayout(node, variant.layout, variant.styles);
        node.primaryAxisSizingMode = "AUTO";
        node.counterAxisSizingMode = "AUTO";
      } else if (variantIsTextParent) {
        applyLayout(node, variant.layout, variant.styles);
      } else {
        node.layoutMode = "NONE";
        var rw = parseFloat(variant.styles && variant.styles.rectWidth);
        var rh = parseFloat(variant.styles && variant.styles.rectHeight);
        if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
          try {
            node.resize(rw, rh);
          } catch (e) {}
        }
      }

      applyFills(node, variant.styles, variableMap);
      applyStrokes(node, variant.styles, variableMap);
      applyRadius(node, variant.styles, variableMap);
      applyPadding(node, variant.styles, variableMap);

      if (!(variant.styles && variant.styles.assetType === "svg")) {
        applyDimensions(node, variant.styles);
      }
      // For MODAL_FLEX_PARENTS: after applyDimensions potentially locks dimensions,
      // restore direction-aware AUTO sizing:
      //   VERTICAL layout (column, e.g. Popover)  → height AUTO, width FIXED (preserves CSS width)
      //   HORIZONTAL layout (row, e.g. MenuItem)  → both AUTO so it hugs its content
      if (compIsModal && node.layoutMode !== "NONE") {
        var compIsFillWidth = !!(FILL_WIDTH_COMPONENTS && FILL_WIDTH_COMPONENTS[comp.name]);
        if (node.layoutMode === "VERTICAL") {
          node.primaryAxisSizingMode = "AUTO";
          if (compIsFillWidth) {
            // Root-level FILL_WIDTH_COMPONENTS: never pixel-lock, always stretch to parent.
            node.counterAxisSizingMode = "AUTO";
            try { node.layoutSizingHorizontal = "FILL"; } catch (e) {}
          } else {
            var modalRw = parseFloat(variant.styles && variant.styles.rectWidth);
            if (!isNaN(modalRw) && modalRw > 0) {
              node.counterAxisSizingMode = "FIXED";
              try {
                node.resize(modalRw, node.height || 40);
              } catch (e) {}
            } else {
              node.counterAxisSizingMode = "AUTO";
            }
          }
        } else {
          // HORIZONTAL layout (e.g. Alert, MenuItem)
          // Height always hugs (counterAxis = AUTO).
          node.counterAxisSizingMode = "AUTO";
          if (compIsFillWidth) {
            node.primaryAxisSizingMode = "AUTO";
            try { node.layoutSizingHorizontal = "FILL"; } catch (e) {}
          } else {
            // Use the DOM's real width if available (e.g. Alert banner width)
            var hModalRw = parseFloat(variant.styles && variant.styles.rectWidth);
            if (!isNaN(hModalRw) && hModalRw > 0) {
              node.primaryAxisSizingMode = "FIXED";
              try { node.resize(hModalRw, node.height || 40); } catch (e) {}
            } else {
              node.primaryAxisSizingMode = "AUTO";
            }
          }
        }
        // Reset layoutGrow so no child-flex-grow conflicts with AUTO sizing.
        try {
          node.layoutGrow = 0;
        } catch (e) {}
      }

      // ── Fixed-width form-control fix ─────────────────────────────
      // Some form components (Input, Slider, Progress …) have an explicit
      // CSS width and need a FIXED Figma primary axis so they don’t collapse.
      // We do NOT apply this to Button/Badge/Heading which should hug content.
      var FIXED_WIDTH_COMPONENTS = {
        Input: true,
        Select: true,
        Textarea: true,
        Slider: true,
        Progress: true,
        ActivityIndicator: true,
      };
      if (
        FIXED_WIDTH_COMPONENTS[comp.name] &&
        node.layoutMode !== "NONE" &&
        variant.styles &&
        variant.styles.rectWidth
      ) {
        var fcRw = parseFloat(variant.styles.rectWidth);
        if (!isNaN(fcRw) && fcRw > 0) {
          if (node.layoutMode === "HORIZONTAL") {
            node.primaryAxisSizingMode = "FIXED";
            try {
              node.resize(fcRw, node.height || 40);
            } catch (e) {}
          } else {
            node.counterAxisSizingMode = "FIXED";
            try {
              node.resize(fcRw, node.height || 40);
            } catch (e) {}
          }
        }
      }

      // ── HUG content fix for Buttons and Badges ───────────────────
      var NO_STRETCH_ROOT_COMPONENTS = {
        Button: true, Badge: true, Checkbox: true, Radio: true, Switch: true, Icon: true, Spinner: true
      };
      if (NO_STRETCH_ROOT_COMPONENTS[comp.name] && node.layoutMode !== "NONE") {
        if (node.layoutMode === "HORIZONTAL") {
          node.primaryAxisSizingMode = "AUTO"; // Width
        } else if (node.layoutMode === "VERTICAL") {
          node.counterAxisSizingMode = "AUTO"; // Width
        }
        try { node.layoutSizingHorizontal = "HUG"; } catch(e) {}
        // Height remains FIXED as set by applyDimensions
      }

      applyOpacity(node, variant.styles);
      applyOverflow(node, variant.styles);
      // For MODAL_FLEX_PARENTS: overflow:hidden sets clipsContent=true which prevents
      // Figma AUTO-height from expanding beyond the initial snapshot height.
      // Force clipsContent=false so the frame boundary grows with its children.
      if (compIsModal && node.layoutMode !== "NONE") {
        try {
          node.clipsContent = false;
        } catch (e) {}
      }

      if (variant.styles && variant.styles.assetType === "svg") {
        // For the Icon component set, each variant is one icon.
        // Name the node "icon=AddIcon" so Figma creates an "icon" property dropdown.
        // Also register the component node in GLOBAL_ICONS so other components
        // (Badge, Button, etc.) can create instances pointing back here.
        if (comp.name === "Icon" && variant.properties && variant.properties.icon) {
          var iconPropName = variant.properties.icon;
          // Keep node.name intact so Figma sees "icon=AddIcon,size=sm" 
          // Default the GLOBAL_ICONS master to the 'md' size so we don't just grab the last one.
          if (variant.properties.size === "md" || !GLOBAL_ICONS[iconPropName]) {
            GLOBAL_ICONS[iconPropName] = node;
            if (variant.styles.svgContent) {
              var pMatch = (variant.styles.svgContent.match(/d="([^"]+)"/g) || []).join("");
              if (pMatch) GLOBAL_ICONS_SVG_PATHS[iconPropName] = pMatch;
            }
          }
        }
        applyAsset(node, variant.styles);
        variantNodes.push(node);
        continue;
      }
      applyAsset(node, variant.styles);

      if (variant.isTextElement && variant.textContent) {
        var shouldWrapV = !!compIsModal;
        var label = makeTextNode(
          variant.textContent,
          variant.styles && variant.styles.typography,
          variableMap,
          shouldWrapV,
        );
        node.layoutMode = "HORIZONTAL";
        node.primaryAxisSizingMode = "AUTO";
        node.counterAxisSizingMode = "AUTO";
        node.appendChild(label);
      } else if (variant.children && variant.children.length > 0) {
        var variantIsNone = node.layoutMode === "NONE";

        // ── Pre-compute sibling text color for this variant's children ────────
        // Scan all siblings for a text node's typography color. If found, it
        // will be passed to buildChildFrame so icon instances use the same color
        // as their sibling text (e.g. BadgeText warning → BadgeIcon warning).
        var siblingTextColor = null;
        if (variant.children && variant.children.length > 0) {
          for (var si = 0; si < variant.children.length; si++) {
            var sib = variant.children[si];
            if (sib.isTextElement &&
                sib.styles && sib.styles.typography &&
                sib.styles.typography.color) {
              siblingTextColor = sib.styles.typography.color;
              break;
            }
            // Also check fills for solid color children (icon-only rows)
            if (!siblingTextColor &&
                sib.styles && sib.styles.fills &&
                sib.styles.fills.length > 0 &&
                sib.styles.fills[0].color) {
              // skip — fills are backgrounds, not text colors
            }
          }
        }
        // ─────────────────────────────────────────────────────────────────────

        for (var ci = 0; ci < variant.children.length; ci++) {
          // Pass the component name so buildChildFrame knows if we're in a modal sub-component.
          var childNode = buildChildFrame(
            variant.children[ci],
            variableMap,
            variantIsNone ? "__abs_parent__" : variantDisplay,
            comp.name,
            false,
            node.layoutMode,
            siblingTextColor
          );
          node.appendChild(childNode);
          if (
            variantIsNone ||
            variantDisplay === "grid" ||
            variantDisplay === "inline-grid"
          ) {
            applyGridChildPosition(childNode, variant.children[ci]);
          } else {
            applyAbsolutePosition(childNode, variant.children[ci]);
          }
        }
      } else if (variant.isTextElement) {
        var shouldWrapV2 = !!compIsModal;
        var label = makeTextNode(
          comp.name || "Component",
          variant.styles && variant.styles.typography,
          variableMap,
          shouldWrapV2,
        );
        node.appendChild(label);
      }

      variantNodes.push(node);
    }

    if (variantNodes.length > 0) {
      // Append variants temporarily to canvas before combining them
      for (var k = 0; k < variantNodes.length; k++) {
        figma.currentPage.appendChild(variantNodes[k]);
      }

      var set = figma.combineAsVariants(variantNodes, figma.currentPage);
      set.name = comp.name || "Component";

      // Use a robust manual wrapping algorithm instead of auto-layout wrap
      // because ComponentSet auto-layout can be buggy in older Figma API versions.
      set.layoutMode = "NONE";
      
      var vx = 0;
      var vy = 0;
      var rowH = 0;
      var MAX_WIDTH = 1200; // 1400 page width - 200 total horizontal padding
      var GAP = 40;

      for (var k = 0; k < variantNodes.length; k++) {
        var vw = variantNodes[k].width || 100;
        var vh = variantNodes[k].height || 40;
        
        if (vx + vw > MAX_WIDTH && vx > 0) {
          vx = 0;
          vy += rowH + GAP;
          rowH = 0;
        }
        
        variantNodes[k].x = vx;
        variantNodes[k].y = vy;
        
        vx += vw + GAP;
        rowH = Math.max(rowH, vh);
      }

      // Explicitly resize the ComponentSet so the pageFrame auto-layout expands vertically
      var totalHeight = vy + rowH;
      try { set.resize(MAX_WIDTH, totalHeight); } catch(e) {}

      var pageFrame = figma.createFrame();
      pageFrame.name = (comp.name || "Component") + " Page";
      pageFrame.layoutMode = "VERTICAL";
      pageFrame.clipsContent = false; // Prevent clipping of overflowing elements just in case
      pageFrame.itemSpacing = 80; // Gap between component set and docs
      pageFrame.paddingTop = pageFrame.paddingBottom = 100;
      pageFrame.paddingLeft = pageFrame.paddingRight = 100;
      pageFrame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // White background
      pageFrame.strokes = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }]; // Thick dark border
      pageFrame.strokeWeight = 4;
      try { pageFrame.resize(1400, 100); } catch(e) {}
      
      // Explicitly set HUG height and FIXED width AFTER resize
      pageFrame.primaryAxisSizingMode = "AUTO"; // Height hugs content
      pageFrame.counterAxisSizingMode = "FIXED"; // Width is fixed
      try { pageFrame.layoutSizingHorizontal = "FIXED"; } catch(e) {}
      try { pageFrame.layoutSizingVertical = "HUG"; } catch(e) {}
      
      figma.currentPage.appendChild(pageFrame);
      pageFrame.appendChild(set);

      // ── Docs frame ─────────────────────────────────
      // Placed UNDER the variant set in the same page frame
      if (comp.docs) {
        var docsFrame = buildDocsFrame(comp.docs, comp.name || "Component");
        if (docsFrame) {
          pageFrame.appendChild(docsFrame);
          try { docsFrame.layoutSizingHorizontal = "FILL"; } catch (e) {}
        }
      }

      // Position the page horizontally
      pageFrame.x = PAGE_X;
      pageFrame.y = PAGE_Y;
      
      // Advance horizontal position for the next component page.
      PAGE_X += 1400 + PAGE_GAP;
    }
  }
}
/**
 * buildDocsFrame — creates a Figma documentation frame for a component.
 * Placed on canvas directly below the component's variant set.
 * Layout mirrors the screenshot spec:
 *   - Component name + "Docs" badge header
 *   - Description text
 *   - Best Practices section (bullet list)
 *   - Properties table (Property | Type | Description)
 */
function buildDocsFrame(docs, compName) {
  if (!docs) return null;

  // ── Design tokens ────────────────────────────────────
  var WHITE = { r: 1, g: 1, b: 1 };
  var BORDER_C = { r: 0.89, g: 0.89, b: 0.9 };
  var TEXT_MAIN = { r: 0.094, g: 0.094, b: 0.106 };
  var TEXT_SUB = { r: 0.443, g: 0.443, b: 0.482 };
  var TEXT_MUTED = { r: 0.631, g: 0.631, b: 0.667 };
  var ACCENT = { r: 0.388, g: 0.4, b: 0.945 };
  var ACCENT_BG = { r: 0.933, g: 0.945, b: 1.0 };
  var TAG_BG = { r: 0.957, g: 0.957, b: 0.965 };
  var TAG_TEXT = { r: 0.231, g: 0.231, b: 0.31 };
  var ROW_ALT = { r: 0.98, g: 0.98, b: 0.984 };

  var DOC_WIDTH = 420; // kept for hLine fallback only — root is now AUTO width

  // ── Helpers ───────────────────────────────────────────
  function docText(chars, size, color, bold) {
    var t = figma.createText();
    try {
      t.fontName = { family: "Inter", style: bold ? "Semi Bold" : "Regular" };
    } catch (e) {}
    t.characters = chars;
    t.fontSize = size || 13;
    if (color) t.fills = [{ type: "SOLID", color: color }];
    return t;
  }

  function hLine() {
    var line = figma.createRectangle();
    // Width matches table row content width so the divider aligns with the table.
    // COL_NAME/TAGS/DESC not defined yet at this point — use a concrete pixel value
    // that matches: 14+14 padding + 120+12+160+12+180 columns = 512
    line.resize(512, 1);
    line.fills = [{ type: "SOLID", color: BORDER_C }];
    try {
      line.layoutSizingVertical = "FIXED";
    } catch (e) {}
    return line;
  }

  function hFrame(gap) {
    var f = figma.createFrame();
    f.fills = [];
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.itemSpacing = gap || 0;
    f.paddingLeft = f.paddingRight = f.paddingTop = f.paddingBottom = 0;
    f.clipsContent = false;
    return f;
  }

  function vFrame(gap, padH, padV) {
    var f = figma.createFrame();
    f.fills = [];
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.itemSpacing = gap || 0;
    f.paddingLeft = f.paddingRight = padH || 0;
    f.paddingTop = f.paddingBottom = padV || 0;
    f.clipsContent = false;
    return f;
  }

  // Column widths for the properties table.
  // The table rows are AUTO-sized so the root stretches to contain them.
  var COL_NAME = 120;
  var COL_TAGS = 160; // tags wrap vertically if needed, never overflow horizontally
  var COL_DESC = 180;
  // Row total = padding(14*2) + COL_NAME + gap(12) + COL_TAGS + gap(12) + COL_DESC = 512
  // Root total = padding(24*2) + 512 = 560 — but root is AUTO so it just fits whatever rows produce

  // ── Root frame ────────────────────────────────────────
  // counterAxisSizingMode = AUTO: width hugs the widest child (the table rows).
  // primaryAxisSizingMode = AUTO: height grows to fit all content.
  // clipsContent = false: nothing is ever hidden.
  var root = figma.createFrame();
  root.name = compName + " / Docs";
  root.layoutMode = "VERTICAL";
  root.primaryAxisSizingMode = "AUTO";
  root.counterAxisSizingMode = "AUTO";
  root.clipsContent = false;
  root.fills = [{ type: "SOLID", color: WHITE }];
  root.strokes = [{ type: "SOLID", color: BORDER_C }];
  root.strokeWeight = 1;
  try {
    root.strokeAlign = "OUTSIDE";
  } catch (e) {}
  root.cornerRadius = 12;
  root.paddingLeft = root.paddingRight = 24;
  root.paddingTop = root.paddingBottom = 20;
  root.itemSpacing = 16;

  // ── Header row ────────────────────────────────────────
  // AUTO width — sizes to compName text + badge, which drives the root's minimum width.
  var headerRow = hFrame(8);
  headerRow.primaryAxisAlignItems = "SPACE_BETWEEN";
  headerRow.counterAxisAlignItems = "CENTER";

  var nameText = docText(compName, 16, TEXT_MAIN, true);

  var badgeFrame = figma.createFrame();
  badgeFrame.fills = [{ type: "SOLID", color: ACCENT_BG }];
  badgeFrame.cornerRadius = 20;
  badgeFrame.layoutMode = "HORIZONTAL";
  badgeFrame.primaryAxisSizingMode = "AUTO";
  badgeFrame.counterAxisSizingMode = "AUTO";
  badgeFrame.clipsContent = false;
  badgeFrame.paddingLeft = badgeFrame.paddingRight = 10;
  badgeFrame.paddingTop = badgeFrame.paddingBottom = 3;
  badgeFrame.appendChild(docText("Documentation", 10, ACCENT, true));

  headerRow.appendChild(nameText);
  headerRow.appendChild(badgeFrame);
  root.appendChild(headerRow);

  // ── Description ───────────────────────────────────────
  if (docs.description) {
    var descText = docText(docs.description, 13, TEXT_SUB, false);
    // Fix width to match table so text wraps instead of stretching root even wider.
    var descW = 14 + 14 + COL_NAME + 12 + COL_TAGS + 12 + COL_DESC; // = table row width
    try {
      descText.resize(descW, 16);
    } catch (e) {}
    try {
      descText.textAutoResize = "HEIGHT";
    } catch (e) {}
    root.appendChild(descText);
  }

  // ── Best Practices ────────────────────────────────────
  if (docs.bestPractices && docs.bestPractices.length > 0) {
    root.appendChild(hLine());

    var bpLabel = docText("Best Practices", 11, TEXT_MUTED, true);
    try {
      bpLabel.letterSpacing = { value: 0.5, unit: "PIXELS" };
    } catch (e) {}
    root.appendChild(bpLabel);

    var bpList = vFrame(8);
    for (var bi = 0; bi < docs.bestPractices.length; bi++) {
      var bp = docs.bestPractices[bi];
      var bpRow = hFrame(8);
      bpRow.counterAxisAlignItems = "MIN";

      var bullet = docText("•", 13, ACCENT, true);
      try {
        bullet.layoutSizingHorizontal = "FIXED";
        bullet.resize(10, bullet.height || 18);
      } catch (e) {}

      var colonIdx = bp.indexOf(":");
      var bpContent;
      if (colonIdx > 0 && colonIdx < 30) {
        bpContent = docText(
          bp.slice(0, colonIdx).trim() + ": " + bp.slice(colonIdx + 1).trim(),
          12,
          TEXT_SUB,
          false,
        );
      } else {
        bpContent = docText(bp, 12, TEXT_SUB, false);
      }
      // Fix text width so it wraps rather than pushing root wider.
      var bpW = 14 + 14 + COL_NAME + 12 + COL_TAGS + 12 + COL_DESC - 10 - 8; // row width minus bullet+gap
      try {
        bpContent.resize(bpW, 16);
        bpContent.textAutoResize = "HEIGHT";
      } catch (e) {}

      bpRow.appendChild(bullet);
      bpRow.appendChild(bpContent);
      bpList.appendChild(bpRow);
    }
    root.appendChild(bpList);
  }

  // ── Properties table ──────────────────────────────────
  if (docs.properties && docs.properties.length > 0) {
    root.appendChild(hLine());

    var propLabel = docText("Properties", 11, TEXT_MUTED, true);
    try {
      propLabel.letterSpacing = { value: 0.5, unit: "PIXELS" };
    } catch (e) {}
    root.appendChild(propLabel);

    // tbl is AUTO-sized — its width is set by the rows inside it.
    // This is what pushes the root to the right width.
    var tbl = vFrame(0);
    tbl.strokes = [{ type: "SOLID", color: BORDER_C }];
    tbl.strokeWeight = 1;
    try {
      tbl.strokeAlign = "OUTSIDE";
    } catch (e) {}
    tbl.cornerRadius = 8;
    tbl.clipsContent = false; // never clip

    // buildRow: creates a horizontal table row with fixed column widths.
    // All rows are the same fixed total width — tbl sizes to them, root sizes to tbl.
    function buildRow(gap, padH, padV, bgColor) {
      var r = figma.createFrame();
      r.fills = [{ type: "SOLID", color: bgColor }];
      r.layoutMode = "HORIZONTAL";
      r.primaryAxisSizingMode = "AUTO";
      r.counterAxisSizingMode = "AUTO";
      r.itemSpacing = gap;
      r.paddingLeft = r.paddingRight = padH;
      r.paddingTop = r.paddingBottom = padV;
      r.clipsContent = false;
      r.counterAxisAlignItems = "MIN";
      return r;
    }

    // Header row
    var tHead = buildRow(12, 14, 8, ROW_ALT);
    var th1 = docText("Property", 10, TEXT_MUTED, true);
    try {
      th1.resize(COL_NAME, th1.height || 14);
      th1.layoutSizingHorizontal = "FIXED";
    } catch (e) {}
    var th2 = docText("Type", 10, TEXT_MUTED, true);
    try {
      th2.resize(COL_TAGS, th2.height || 14);
      th2.layoutSizingHorizontal = "FIXED";
    } catch (e) {}
    var th3 = docText("Description", 10, TEXT_MUTED, true);
    try {
      th3.resize(COL_DESC, th3.height || 14);
      th3.layoutSizingHorizontal = "FIXED";
    } catch (e) {}
    tHead.appendChild(th1);
    tHead.appendChild(th2);
    tHead.appendChild(th3);
    tbl.appendChild(tHead);

    for (var pi = 0; pi < docs.properties.length; pi++) {
      var prop = docs.properties[pi];
      var tRow = buildRow(12, 14, 10, pi % 2 === 0 ? WHITE : ROW_ALT);

      // Property name — fixed width, text wraps in height
      var pName = docText(prop.name, 12, TEXT_MAIN, true);
      try {
        pName.resize(COL_NAME, pName.height || 16);
        pName.layoutSizingHorizontal = "FIXED";
      } catch (e) {}

      // Tags cell — fixed width, tags wrap onto new lines
      var tagsCell = figma.createFrame();
      tagsCell.fills = [];
      tagsCell.layoutMode = "HORIZONTAL";
      tagsCell.primaryAxisSizingMode = "AUTO";
      tagsCell.counterAxisSizingMode = "FIXED";
      tagsCell.clipsContent = false;
      tagsCell.itemSpacing = 4;
      try {
        tagsCell.layoutWrap = "WRAP";
      } catch (e) {}
      try {
        tagsCell.resize(COL_TAGS, 20);
        tagsCell.layoutSizingHorizontal = "FIXED";
      } catch (e) {}

      var optList = prop.options || [];
      for (var oi = 0; oi < optList.length; oi++) {
        var tagF = figma.createFrame();
        tagF.fills = [{ type: "SOLID", color: TAG_BG }];
        tagF.cornerRadius = 4;
        tagF.layoutMode = "HORIZONTAL";
        tagF.primaryAxisSizingMode = "AUTO";
        tagF.counterAxisSizingMode = "AUTO";
        tagF.clipsContent = false;
        tagF.paddingLeft = tagF.paddingRight = 7;
        tagF.paddingTop = tagF.paddingBottom = 2;
        tagF.appendChild(docText(optList[oi].toUpperCase(), 9, TAG_TEXT, true));
        tagsCell.appendChild(tagF);
      }

      // Description — fixed width, text wraps in height
      var pDesc = docText(prop.description || "", 12, TEXT_SUB, false);
      try {
        pDesc.resize(COL_DESC, pDesc.height || 16);
        pDesc.layoutSizingHorizontal = "FIXED";
        pDesc.textAutoResize = "HEIGHT";
      } catch (e) {}

      tRow.appendChild(pName);
      tRow.appendChild(tagsCell);
      tRow.appendChild(pDesc);
      tbl.appendChild(tRow);
    }

    // Footer note
    var tFoot = buildRow(0, 14, 8, ROW_ALT);
    tFoot.primaryAxisAlignItems = "CENTER";
    tFoot.counterAxisAlignItems = "CENTER";
    var footW = COL_NAME + 12 + COL_TAGS + 12 + COL_DESC;
    var footNote = docText(
      "These properties are available by default but if you wish to customise, the possibilities are endless.",
      11,
      TEXT_MUTED,
      false,
    );
    try {
      footNote.resize(footW, 16);
      footNote.textAutoResize = "HEIGHT";
      footNote.textAlignHorizontal = "CENTER";
    } catch (e) {}
    tFoot.appendChild(footNote);
    tbl.appendChild(tFoot);

    root.appendChild(tbl);
  }

  return root;
}

/**
 * plugin/code.js  (Figma plugin entry point)
 * -------------------------------------------
 * Bootstraps the plugin UI and handles the "import" message from the
 * web app iframe. Delegates to the modular helpers:
 *
 *   utils.js           — parsePx, parseColor, getVar, variant key helpers
 *   token-builder.js   — buildTokenVariables (design tokens → Figma Variables)
 *   style-appliers.js  — applyFills, applyStrokes, applyRadius, applyPadding,
 *                        applyDimensions, applyOpacity, applyOverflow, applyLayout
 *   node-builder.js    — makeTextNode, applyAsset, buildChildFrame,
 *                        applyAbsolutePosition, applyGridChildPosition,
 *                        hasAbsoluteChildren, isDirectTextParent, resolveSvgSize
 *   component-builder.js — buildAllComponents (main component loop)
 *
 * NOTE: The Figma plugin sandbox concatenates all JS files listed in
 * manifest.json's "code" array at runtime. All functions above are
 * available as globals here — no import/require needed.
 */

figma.showUI(__html__, { width: 520, height: 680 });

figma.ui.onmessage = async function (msg) {
  if (msg.type !== "import") return;

  var data = msg.data;

  try {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    var variableMap = await buildTokenVariables(data.designTokens);
    buildAllComponents(data.components || [], variableMap);

    figma.closePlugin("✅ Components imported successfully!");
  } catch (err) {
    console.error(err);
    figma.closePlugin("Error: " + err.message);
  }
};
