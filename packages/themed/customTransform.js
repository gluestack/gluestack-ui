const generate = require('@babel/generator').default;

export default function transformer(file, api) {
  const j = api.jscodeshift.withParser('tsx');
  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        name: 'styled',
      },
    })
    .forEach((path) => {
      const argument = path.node.arguments;
      const arg1 = argument[1];
      // Check if the second argument exists and is an object
      if (arg1 && arg1.type === 'ObjectExpression') {
        // Replace the second argument with an empty object
        argument[1] = j.objectExpression([]);
      }
    })
    .toSource();
}
