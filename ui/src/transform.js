export default (file, api) => {
  const j = api.jscodeshift;
  const s = `import { config } from '../ui.config';`;
  const root = j(file.source);

  root.get().node.program.body.unshift(s);

  root
    .find(j.CallExpression, {
      callee: {
        name: 'styled',
      },
    })
    .forEach((path) => {
      const { node } = path;
      const { arguments: args } = node;

      if (args.length === 3) {
        args.push(j.identifier('config'));
      }
    });

  return root.toSource();
};
