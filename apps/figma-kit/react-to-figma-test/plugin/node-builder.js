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
  var rw = num(styles.svgRenderedWidth), rh = num(styles.svgRenderedHeight);
  if (rw > 0 && rh > 0) return { w: rw, h: rh };
  var iw = num(styles.svgIntrinsicWidth), ih = num(styles.svgIntrinsicHeight);
  if (iw > 0 && ih > 0) return { w: iw, h: ih };
  var fw = num(styles.rectWidth), fh = num(styles.rectHeight);
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
          iconColor = "#" +
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
        if (n.type === "VECTOR" || n.type === "STAR" || n.type === "POLYGON" ||
          n.type === "ELLIPSE" || n.type === "RECTANGLE") {
          if (svgRootHasNoFill) {
            try { n.fills = []; } catch (e) {}
          } else {
            var fills = n.fills;
            if (fills && fills.length === 1) {
              var f = fills[0];
              if (f.type === "SOLID" && f.color &&
                f.color.r === 0 && f.color.g === 0 && f.color.b === 0 &&
                (f.opacity === undefined || f.opacity === 1)) {
                if (!/fill\s*=\s*["']#/i.test(styles.svgContent) &&
                  !/fill\s*=\s*["']rgb/i.test(styles.svgContent)) {
                  try { n.fills = []; } catch (e) {}
                }
              }
            }
          }
        }
        if (n.children && n.children.length > 0) {
          for (var ci = 0; ci < n.children.length; ci++) fixVectorFills(n.children[ci]);
        }
      }
      fixVectorFills(svgNode);

      var svgSize = resolveSvgSize(styles);
      if (svgSize) {
        try { svgNode.resize(svgSize.w, svgSize.h); } catch (e) {}
        try { svgNode.layoutSizingHorizontal = "FIXED"; } catch (e) {}
        try { svgNode.layoutSizingVertical = "FIXED"; } catch (e) {}
      }

      node.layoutMode = "NONE";
      node.fills = [];
      if (svgSize) { try { node.resize(svgSize.w, svgSize.h); } catch (e) {} }
      try { node.layoutSizingHorizontal = "FIXED"; } catch (e) {}
      try { node.layoutSizingVertical = "FIXED"; } catch (e) {}
      node.appendChild(svgNode);
      svgNode.x = 0; svgNode.y = 0;
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
    if (v) { t.fontSize = 16; t.setBoundVariable("fontSize", v); }
  } else if (typo.fontSize) {
    var fs = parseFloat(typo.fontSize);
    if (!isNaN(fs) && fs > 0) t.fontSize = fs;
  }

  var fontStyle = "Regular";
  if (typo.fontWeight) {
    var fw = parseInt(typo.fontWeight);
    fontStyle = fw >= 700 ? "Bold" : fw >= 600 ? "Semi Bold" : fw >= 500 ? "Medium" : "Regular";
  }

  var resolvedFamily = "Inter";
  if (typo.fontFamily) {
    var firstFont = typo.fontFamily.split(",")[0].trim().replace(/['"]/g, "");
    var cssGenerics = ["ui-sans-serif", "system-ui", "sans-serif", "serif", "monospace",
      "ui-serif", "ui-monospace", "ui-rounded", "cursive", "fantasy"];
    if (firstFont && cssGenerics.indexOf(firstFont) === -1) resolvedFamily = firstFont;
  }

  try { t.fontName = { family: resolvedFamily, style: fontStyle }; } catch (e) {
    try { t.fontName = { family: "Inter", style: fontStyle }; } catch (e2) {
      t.fontName = { family: "Inter", style: "Regular" };
    }
  }

  if (typo.lineHeight) {
    var lhVal = parseFloat(typo.lineHeight);
    if (!isNaN(lhVal) && lhVal > 0) {
      t.lineHeight = { value: lhVal, unit: typo.lineHeight.indexOf("%") !== -1 ? "PERCENT" : "PIXELS" };
    }
  }

  if (typo.textAlign) {
    var alignMap = { left: "LEFT", start: "LEFT", center: "CENTER", right: "RIGHT", end: "RIGHT", justify: "JUSTIFIED" };
    var mapped = alignMap[typo.textAlign.toLowerCase()];
    if (mapped) t.textAlignHorizontal = mapped;
  }

  if (typo.colorToken) {
    var v = getVar(typo.colorToken, variableMap);
    if (v) {
      t.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 },
        boundVariables: { color: { type: "VARIABLE_ALIAS", id: v.id } } }];
    }
  } else if (typo.color) {
    var rgb = parseColor(typo.color);
    if (rgb) t.fills = [{ type: "SOLID", color: rgb }];
  }

  // Text wrapping: when the parent is a hardcoded auto-layout component,
  // fix the width (FILL parent) and let height grow so text wraps instead
  // of overflowing into adjacent elements.
  if (wrapText) {
    try { t.textAutoResize = "HEIGHT"; } catch (e) {}
    try { t.layoutSizingHorizontal = "FILL"; } catch (e) {}
    try { t.layoutSizingVertical = "HUG"; } catch (e) {}
  }

  return t;
}

function hasAbsoluteChildren(children) {
  if (!children || children.length === 0) return false;
  for (var i = 0; i < children.length; i++) {
    var pos = children[i].cssPosition || (children[i].styles && children[i].styles.position);
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
  var offTop = parseFloat(child.offsetTop), offLeft = parseFloat(child.offsetLeft);
  var hasOffset = !isNaN(offTop) && !isNaN(offLeft);
  if (!hasOffset) {
    offTop = parsePx(child.cssTop || (child.styles && child.styles.top)) || 0;
    offLeft = parsePx(child.cssLeft || (child.styles && child.styles.left)) || 0;
  }
  try { frame.layoutPositioning = "ABSOLUTE"; frame.x = offLeft; frame.y = offTop; } catch (e) {}
  try {
    var z = parseInt(child.cssZIndex);
    if (!isNaN(z) && z > 0) frame.setPluginData("zIndex", String(z));
  } catch (e) {}
}

function applyGridChildPosition(frame, child) {
  var offTop = parseFloat(child.offsetTop), offLeft = parseFloat(child.offsetLeft);
  var rw = parseFloat(child.rectWidth), rh = parseFloat(child.rectHeight);
  if (!isNaN(offTop) && !isNaN(offLeft)) {
    try { frame.x = offLeft; frame.y = offTop; } catch (e) {}
  }
  if (!isNaN(rw) && rw > 0 && !isNaN(rh) && rh > 0) {
    try { frame.resize(rw, rh); } catch (e) {}
  }
}

function buildChildFrame(child, variableMap, parentDisplay, parentName) {
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

  // Check if the child itself is one of our hardcoded auto-layout components.
  var childIsAutoComp = !!(MODAL_FLEX_PARENTS[child.name]);

  if (childHasAbsChild) {
    frame.layoutMode = "NONE";
    var absRw = parseFloat(child.rectWidth || (child.styles && child.styles.rectWidth));
    var absRh = parseFloat(child.rectHeight || (child.styles && child.styles.rectHeight));
    if (!isNaN(absRw) && absRw > 0 && !isNaN(absRh) && absRh > 0) {
      try { frame.resize(absRw, absRh); } catch (e) {}
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
    try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
    try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
  } else if (parentIsModal && childIsFlex) {
    // Parent is a modal/card/popover component and this child is a flex container
    // (e.g. Button inside ModalFooter, Text inside ModalBody). Apply flex layout
    // so padding is active, and FILL horizontal so it spans the parent's full width.
    applyLayout(frame, child.layout, child.styles);
    try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
    try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
  } else if (childIsTextParent) {
    // Default: only apply auto-layout when a direct child is a text element.
    applyLayout(frame, child.layout, child.styles);
  } else {
    frame.layoutMode = "NONE";
    var crw = parseFloat(child.rectWidth || (child.styles && child.styles.rectWidth));
    var crh = parseFloat(child.rectHeight || (child.styles && child.styles.rectHeight));
    if (!isNaN(crw) && crw > 0 && !isNaN(crh) && crh > 0) {
      try { frame.resize(crw, crh); } catch (e) {}
    }
  }

  applyFills(frame, child.styles, variableMap);
  applyStrokes(frame, child.styles, variableMap);
  applyRadius(frame, child.styles, variableMap);
  applyPadding(frame, child.styles, variableMap);

  if (!(child.styles && child.styles.assetType === "svg")) applyDimensions(frame, child.styles);
  // For childIsAutoComp: restore direction-aware sizing after applyDimensions may have locked it.
  // Check childIsFillWidth FIRST — never pixel-lock FILL_WIDTH_COMPONENTS (ModalBody, ModalHeader, etc.)
  if (childIsAutoComp && frame.layoutMode !== "NONE") {
    // Determine fill-width before any axis-sizing so we never accidentally lock the width.
    var childIsFillWidth = !!(FILL_WIDTH_COMPONENTS && FILL_WIDTH_COMPONENTS[child.name]);
    // Reset layoutGrow: flexGrow:1 in CSS sets layoutGrow=1 via applyLayout.
    // layoutGrow>0 forces layoutSizingVertical="FILL" which overrides HUG.
    try { frame.layoutGrow = 0; } catch (e) {}
    if (frame.layoutMode === "VERTICAL") {
      frame.primaryAxisSizingMode = "AUTO";
      if (childIsFillWidth) {
        // FILL_WIDTH_COMPONENTS: NEVER call resize() or counterAxisSizingMode=FIXED.
        // Calling resize() pixel-locks the width and prevents FILL from taking effect.
        frame.counterAxisSizingMode = "AUTO";
        try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
        // DEBUG: red fill to confirm this branch fires for ModalBody/ModalHeader/ModalFooter
        try { frame.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 }, opacity: 0.35 }]; } catch (e) {}
      } else {
        // Non-fill vertical containers (Popover, Card, etc.): lock to CSS pixel width.
        var autoCompRw = parseFloat(child.rectWidth || (child.styles && child.styles.rectWidth));
        if (!isNaN(autoCompRw) && autoCompRw > 0) {
          frame.counterAxisSizingMode = "FIXED";
          try { frame.resize(autoCompRw, frame.height || 40); } catch (e) {}
        } else {
          frame.counterAxisSizingMode = "AUTO";
        }
      }
    } else {
      // HORIZONTAL (e.g. MenuItem row): both AUTO so the row hugs its content.
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
    }
    try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
  }
  // Re-apply FILL horizontal for ALL direct children of modal parents (ModalBody, ModalHeader, etc.)
  // that are NOT childIsAutoComp (those are handled above). Must run AFTER applyDimensions
  // because applyDimensions may call resize() which resets layoutSizingHorizontal to FIXED.
  // Covers: Text wrappers (childIsTextParent), flex children (parentIsModal+childIsFlex), etc.
  if (parentIsModal && !childIsAutoComp && frame.layoutMode !== "NONE") {
    try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
    try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
    // DEBUG: blue fill to confirm this branch fires for Text/flex children inside modal parents
    try { frame.fills = [{ type: "SOLID", color: { r: 0, g: 0.4, b: 1 }, opacity: 0.25 }]; } catch (e) {}
  }
  applyOpacity(frame, child.styles);
  applyOverflow(frame, child.styles);
  // MODAL_FLEX_PARENTS members with overflow:hidden would get clipsContent=true,
  // which prevents AUTO height from growing beyond the DOM snapshot height.
  if (childIsAutoComp && frame.layoutMode !== "NONE") {
    try { frame.clipsContent = false; } catch (e) {}
  }

  if (child.styles && child.styles.assetType === "svg") {
    applyAsset(frame, child.styles);
    return frame;
  }
  applyAsset(frame, child.styles);

  if (child.isTextElement && child.textContent) {
    var shouldWrap = !!(parentName && MODAL_FLEX_PARENTS[parentName]);
    var txt = makeTextNode(child.textContent, child.styles && child.styles.typography, variableMap, shouldWrap);
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    if (shouldWrap) {
      try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
      try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
    }
    frame.appendChild(txt);
    return frame;
  }

  var myDisplay = (child.styles && child.styles.display) || "";
  var frameIsNone = frame.layoutMode === "NONE";

  if (child.children && child.children.length > 0) {
    for (var ci = 0; ci < child.children.length; ci++) {
      var subFrame = buildChildFrame(
        child.children[ci], variableMap,
        frameIsNone ? "__abs_parent__" : myDisplay,
        child.name
      );
      frame.appendChild(subFrame);
      if (frameIsNone || myDisplay === "grid" || myDisplay === "inline-grid") {
        applyGridChildPosition(subFrame, child.children[ci]);
      } else {
        applyAbsolutePosition(subFrame, child.children[ci]);
      }
    }
  } else if (child.isTextElement) {
    var shouldWrap2 = !!(parentName && MODAL_FLEX_PARENTS[parentName]);
    var txt = makeTextNode(child.name || "Text", child.styles && child.styles.typography, variableMap, shouldWrap2);
    if (shouldWrap2) {
      frame.layoutMode = "HORIZONTAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      try { frame.layoutSizingHorizontal = "FILL"; } catch (e) {}
      try { frame.layoutSizingVertical = "HUG"; } catch (e) {}
    }
    frame.appendChild(txt);
  }

  return frame;
}
