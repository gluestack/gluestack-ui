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
