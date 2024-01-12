module.exports = function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  function removeDarkFromObject(obj) {
    if (!obj) {
      return;
    }

    if (obj.type === 'ObjectExpression') {
      obj.properties = obj.properties.filter((prop) => {
        return prop.key.value !== '_dark';
      });
      obj.properties = obj.properties.filter((prop) => {
        return prop.key.name !== '_dark';
      });
      obj.properties.forEach((prop) => removeDarkFromObject(prop.value));
    } else if (obj.type === 'ArrayExpression') {
      obj.elements.forEach((element) => removeDarkFromObject(element));
    }
  }

  // Find and remove _dark property in the entire AST
  root.find(j.Property, { key: { name: '_dark' } }).remove();

  // Recursive traversal to remove _dark property from nested objects
  root.find(j.ObjectExpression).forEach((path) => {
    removeDarkFromObject(path.value);
  });
  return root.toSource();
};
