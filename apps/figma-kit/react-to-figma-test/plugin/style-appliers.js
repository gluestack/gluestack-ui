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
      node.fills = [{
        type: "SOLID",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: { color: { type: "VARIABLE_ALIAS", id: v.id } },
      }];
      return;
    }
  }

  if (fill.color) {
    var rgb = parseColor(fill.color);
    var isTransparent =
      fill.color.indexOf("rgba(0, 0, 0, 0)") !== -1 ||
      fill.color.indexOf("rgba(0,0,0,0)") !== -1;
    if (rgb && !isTransparent) {
      node.fills = [{ type: "SOLID", color: rgb, opacity: fill.opacity !== undefined ? fill.opacity : 1 }];
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
      if (rgb) strokes.push({ type: "SOLID", color: rgb, opacity: stroke.opacity !== undefined ? stroke.opacity : 1 });
    }
  }

  if (strokes.length) {
    node.strokes = strokes;
    node.strokeWeight = !isNaN(strokeWeight) ? strokeWeight : 1;
    try { node.strokeAlign = "INSIDE"; } catch (e) { /* ignore */ }
  }
}

function applyRadius(node, styles, variableMap) {
  if (!styles) return;

  if (styles.borderRadiusToken) {
    var v = getVar(styles.borderRadiusToken, variableMap);
    if (v) {
      try { node.setBoundVariable("cornerRadius", v); } catch (e) { /* ignore */ }
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
        try { node.setBoundVariable(figmaProp, v); } catch (e) { /* ignore */ }
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
  var isFlexContainer = styles.display === "flex" || styles.display === "inline-flex";
  var isInlineOrBlock =
    styles.display === "block" || styles.display === "inline" ||
    styles.display === "inline-block" || styles.display === "contents" || !styles.display;

  if (!isFlexContainer && !isInlineOrBlock && styles.width &&
    styles.width !== "auto" && styles.width !== "none") {
    var w = parsePx(styles.width);
    if (w !== null && w > 0) {
      node.primaryAxisSizingMode = "FIXED";
      node.resize(w, node.height || 40);
    }
  }

  if (styles.height && styles.height !== "auto" && styles.height !== "none") {
    var h = parsePx(styles.height);
    if (h !== null && h > 0) {
      node.counterAxisSizingMode = "FIXED";
      node.resize(node.width || 100, h);
    }
  }

  if (styles.minWidth && styles.minWidth !== "none" && styles.minWidth !== "0px") {
    var minW = parsePx(styles.minWidth);
    if (minW !== null && minW > 0) { try { node.minWidth = minW; } catch (e) {} }
  }
  if (styles.maxWidth && styles.maxWidth !== "none") {
    var maxW = parsePx(styles.maxWidth);
    if (maxW !== null && maxW > 0) { try { node.maxWidth = maxW; } catch (e) {} }
  }
  if (styles.minHeight && styles.minHeight !== "none" && styles.minHeight !== "0px") {
    var minH = parsePx(styles.minHeight);
    if (minH !== null && minH > 0) { try { node.minHeight = minH; } catch (e) {} }
  }
  if (styles.maxHeight && styles.maxHeight !== "none") {
    var maxH = parsePx(styles.maxHeight);
    if (maxH !== null && maxH > 0) { try { node.maxHeight = maxH; } catch (e) {} }
  }
}

function applyOpacity(node, styles) {
  if (!styles || styles.opacity === undefined || styles.opacity === null) return;
  var op = parseFloat(styles.opacity);
  if (!isNaN(op) && op >= 0 && op <= 1) node.opacity = op;
}

function applyOverflow(node, styles) {
  if (!styles || !styles.overflow) return;
  node.clipsContent =
    styles.overflow === "hidden" || styles.overflow === "clip" ||
    styles.overflow === "scroll" || styles.overflow === "auto";
}

function applyLayout(node, layout, styles) {
  var display = (styles && styles.display) || "";

  if (display === "grid" || display === "inline-grid") {
    node.layoutMode = "NONE";
    var rw = parseFloat(styles.rectWidth), rh = parseFloat(styles.rectHeight);
    if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
      try { node.resize(rw, rh); } catch (e) {}
    }
    return;
  }

  if (display === "table" || display === "table-row-group" ||
    display === "table-header-group" || display === "table-footer-group") {
    node.layoutMode = "VERTICAL";
    node.primaryAxisSizingMode = "AUTO"; node.counterAxisSizingMode = "AUTO";
    node.primaryAxisAlignItems = "MIN"; node.counterAxisAlignItems = "MIN";
    node.itemSpacing = 0;
    return;
  }

  if (display === "table-row") {
    node.layoutMode = "HORIZONTAL";
    node.primaryAxisSizingMode = "AUTO"; node.counterAxisSizingMode = "AUTO";
    node.primaryAxisAlignItems = "MIN"; node.counterAxisAlignItems = "MIN";
    node.itemSpacing = 0;
    return;
  }

  if (display === "table-cell") {
    node.layoutMode = "HORIZONTAL";
    node.primaryAxisSizingMode = "FIXED"; node.counterAxisSizingMode = "FIXED";
    node.primaryAxisAlignItems = "MIN"; node.counterAxisAlignItems = "CENTER";
    node.itemSpacing = 0;
    var rw = parseFloat(styles.rectWidth), rh = parseFloat(styles.rectHeight);
    if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
      try { node.resize(rw, rh); } catch (e) {}
    }
    return;
  }

  var direction = "HORIZONTAL";
  if (styles && styles.flexDirection) {
    direction = (styles.flexDirection === "column" || styles.flexDirection === "column-reverse") ? "VERTICAL" : "HORIZONTAL";
  } else if (layout && layout.layoutMode) {
    direction = layout.layoutMode === "VERTICAL" ? "VERTICAL" : "HORIZONTAL";
  }

  node.layoutMode = direction;
  node.primaryAxisSizingMode = "AUTO";
  node.counterAxisSizingMode = "AUTO";

  var jcMap = {
    "flex-start": "MIN", "start": "MIN", "left": "MIN", "normal": "MIN",
    "flex-end": "MAX", "end": "MAX", "right": "MAX", "center": "CENTER",
    "space-between": "SPACE_BETWEEN", "space-around": "SPACE_BETWEEN", "space-evenly": "SPACE_BETWEEN",
  };
  var aiMap = {
    "flex-start": "MIN", "start": "MIN", "left": "MIN", "normal": "MIN",
    "stretch": "MIN", "flex-end": "MAX", "end": "MAX", "right": "MAX",
    "center": "CENTER", "baseline": "BASELINE",
  };

  var jc = styles && styles.justifyContent;
  var ai = styles && styles.alignItems;
  node.primaryAxisAlignItems = (jc && jcMap[jc]) || "MIN";
  node.counterAxisAlignItems = (ai && aiMap[ai]) || "MIN";

  if (layout && layout.gap) node.itemSpacing = parseFloat(layout.gap) || 0;

  if (styles && styles.flexWrap && styles.flexWrap !== "nowrap") {
    try { node.layoutWrap = "WRAP"; } catch (e) {}
  }
  if (styles && styles.flexGrow) {
    var grow = parseFloat(styles.flexGrow);
    if (!isNaN(grow) && grow > 0) { try { node.layoutGrow = grow; } catch (e) {} }
  }
  if (styles && styles.alignSelf) {
    var alignSelfMap = { "auto": "INHERIT", "flex-start": "MIN", "flex-end": "MAX", "center": "CENTER", "stretch": "STRETCH" };
    var alignVal = alignSelfMap[styles.alignSelf];
    if (alignVal) { try { node.layoutAlign = alignVal; } catch (e) {} }
  }
}
