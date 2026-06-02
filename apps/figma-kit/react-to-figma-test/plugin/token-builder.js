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
        .find(function (c) { return c.name === collectionName; });
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
