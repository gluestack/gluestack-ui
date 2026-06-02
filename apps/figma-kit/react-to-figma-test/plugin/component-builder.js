/**
 * plugin/component-builder.js
 * ----------------------------
 * Builds Figma Component and ComponentSet nodes from the exported JSON.
 * Iterates the components array, constructs variant frames with all styles
 * applied, then combines them into a Figma ComponentSet (variant group).
 */

// Components that ALWAYS use flex auto-layout and hug their content (AUTO sizing).
// Only these specific components are affected — all others keep existing behaviour.
var MODAL_FLEX_PARENTS = {
  // Modal family — "Modal" is the overlay wrapper; ModalContent/ModalBody are its flex children
  "Modal": true,
  "ModalFooter": true, "ModalHeader": true,
  "ModalBody": true, "ModalContent": true, "ModalCloseButton": true,
  // Card family
  "Card": true, "CardBody": true, "CardHeader": true, "CardFooter": true,
  // Popover / Menu family:
  //   "Popover" is the top-level column-flex container holding all MenuItems;
  //   "PopoverContent" etc. are the inner sub-components.
  "Popover": true,
  "PopoverContent": true, "PopoverBody": true,
  "PopoverHeader": true, "PopoverFooter": true,
  // Menu family
  "Menu": true,
  // Menu item family — each row item must hug its content height
  "MenuItem": true, "MenuItemLabel": true,
};

// Components that must fill their parent's full width (layoutSizingHorizontal="FILL").
// When these appear as root variants they get counterAxisSizingMode="FILL" instead of
// a pixel-locked FIXED resize, so Figma keeps them stretching to the parent container.
var FILL_WIDTH_COMPONENTS = {
  "ModalBody": true, "ModalHeader": true, "ModalFooter": true,
  "CardBody": true, "CardHeader": true, "CardFooter": true,
  "PopoverBody": true, "PopoverHeader": true, "PopoverFooter": true,
};

function buildAllComponents(components, variableMap) {
  var xPos = 100;

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
      // Modal sub-components (ModalFooter, PopoverContent, MenuItem, etc.) are flex
      // containers whose children are frames, not text — so isDirectTextParent
      // returns false and they'd get layoutMode=NONE. Fix: apply flex-based layout.
      var compIsModal = !!(MODAL_FLEX_PARENTS[comp.name]);
      var variantIsFlex = variantDisplay === "flex" || variantDisplay === "inline-flex";

      if (variantHasAbsChild) {
        node.layoutMode = "NONE";
        var absRw = parseFloat(variant.styles && variant.styles.rectWidth);
        var absRh = parseFloat(variant.styles && variant.styles.rectHeight);
        if (!isNaN(absRw) && absRw > 0 && !isNaN(absRh) && absRh > 0) {
          try { node.resize(absRw, absRh); } catch (e) {}
        }
      } else if (compIsModal) {
        // Hardcoded auto-layout components: always apply flex layout.
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
          try { node.resize(rw, rh); } catch (e) {}
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
      //   HORIZONTAL layout (row, e.g. MenuItem)  → width AUTO, height AUTO (hugs content)
      // Exception: FILL_WIDTH_COMPONENTS (ModalBody, ModalHeader, etc.) always get
      //   FILL horizontal sizing so they stretch to the parent ModalContent's width.
      var compIsFillWidth = !!(FILL_WIDTH_COMPONENTS[comp.name]);
      if (compIsModal && node.layoutMode !== "NONE") {
        if (node.layoutMode === "VERTICAL") {
          // Primary axis = height → AUTO so it grows with children
          node.primaryAxisSizingMode = "AUTO";
          if (compIsFillWidth) {
            // FILL_WIDTH components: do NOT lock to a pixel width — let the parent stretch them.
            node.counterAxisSizingMode = "AUTO";
            try { node.layoutSizingHorizontal = "FILL"; } catch (e) {}
          } else {
            // Counter axis = width → FIXED so it keeps its CSS-specified width
            var modalRw = parseFloat(variant.styles && variant.styles.rectWidth);
            if (!isNaN(modalRw) && modalRw > 0) {
              node.counterAxisSizingMode = "FIXED";
              try { node.resize(modalRw, node.height || 40); } catch (e) {}
            } else {
              node.counterAxisSizingMode = "AUTO";
            }
          }
        } else {
          // HORIZONTAL (e.g. MenuItem row): both axes AUTO so it hugs its content
          node.primaryAxisSizingMode = "AUTO";
          node.counterAxisSizingMode = "AUTO";
        }
      }
      applyOpacity(node, variant.styles);
      applyOverflow(node, variant.styles);

      if (variant.styles && variant.styles.assetType === "svg") {
        applyAsset(node, variant.styles);
        variantNodes.push(node);
        continue;
      }
      applyAsset(node, variant.styles);

      if (variant.isTextElement && variant.textContent) {
        var label = makeTextNode(variant.textContent, variant.styles && variant.styles.typography, variableMap);
        node.layoutMode = "HORIZONTAL";
        node.primaryAxisSizingMode = "AUTO";
        node.counterAxisSizingMode = "AUTO";
        node.appendChild(label);
      } else if (variant.children && variant.children.length > 0) {
        var variantIsNone = node.layoutMode === "NONE";
        for (var ci = 0; ci < variant.children.length; ci++) {
          // Pass the component name so buildChildFrame knows the modal context.
          var childNode = buildChildFrame(variant.children[ci], variableMap, variantIsNone ? "__abs_parent__" : variantDisplay, comp.name);
          node.appendChild(childNode);
          if (variantIsNone || variantDisplay === "grid" || variantDisplay === "inline-grid") {
            applyGridChildPosition(childNode, variant.children[ci]);
          } else {
            applyAbsolutePosition(childNode, variant.children[ci]);
          }
        }
      } else if (variant.isTextElement) {
        var label = makeTextNode(comp.name || "Component", variant.styles && variant.styles.typography, variableMap);
        node.appendChild(label);
      }

      variantNodes.push(node);
    }

    if (variantNodes.length > 0) {
      for (var k = 0; k < variantNodes.length; k++) {
        figma.currentPage.appendChild(variantNodes[k]);
      }

      var vx = 0, vy = 0, rowH = 0;
      var cols = Math.ceil(Math.sqrt(variantNodes.length));
      for (var k = 0; k < variantNodes.length; k++) {
        variantNodes[k].x = vx;
        variantNodes[k].y = vy;
        rowH = Math.max(rowH, variantNodes[k].height || 40);
        vx += (variantNodes[k].width || 100) + 16;
        if ((k + 1) % cols === 0) { vx = 0; vy += rowH + 16; rowH = 0; }
      }

      var set = figma.combineAsVariants(variantNodes, figma.currentPage);
      set.name = comp.name || "Component";
      set.x = xPos;
      set.y = 200;
      xPos += set.width + 80;
    }
  }
}
