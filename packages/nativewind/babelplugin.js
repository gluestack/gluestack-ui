const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

module.exports = declare((api, options) => {
  api.assertVersion(7);

  return {
    name: 'babel-plugin-transform-imports',
    visitor: {
      ImportDeclaration(path) {
        const { node } = path;

        // Check if the import statement is from '@gluestack-style/react'
        if (
          t.isStringLiteral(node.source, { value: '@gluestack-style/react' })
        ) {
          // Change the import source to 'nativewind'
          node.source.value = 'nativewind';
        }

        // Check if the import statement is from '@gluestack-style/animation-resolver'
        if (
          t.isStringLiteral(node.source, {
            value: '@gluestack-style/animation-resolver',
          })
        ) {
          let hasAnimatePresence = false;
          // Change the import source to 'react-native'
          node.source.value = 'react-native';
          // Change the imported specifier to 'View' instead of 'AnimatedView'
          node.specifiers.forEach((specifier) => {
            if (
              t.isImportSpecifier(specifier) &&
              specifier.imported.name === 'AnimatedView'
            ) {
              specifier.imported.name = 'View';
            }
            if (
              t.isImportSpecifier(specifier) &&
              specifier.imported.name === 'AnimatedPressable'
            ) {
              specifier.imported.name = 'Pressable';
            }
            if (
              t.isImportSpecifier(specifier) &&
              specifier.imported.name === 'AnimatePresence'
            ) {
              hasAnimatePresence = true;
            }
          });
          if (hasAnimatePresence) {
            path.remove();
          }
        }
      },
      CallExpression(path) {
        const { node } = path;

        if (t.isIdentifier(node.callee, { name: 'styled' })) {
          // Keep only the first argument and remove others
          const [firstArgument] = node.arguments;
          node.arguments = [firstArgument];
        }
        if (node.arguments.length > 0) {
          const firstArgument = node.arguments[0];
          if (t.isObjectExpression(firstArgument)) {
            firstArgument.properties.some((property) => {
              if (t.isIdentifier(property.key, { name: 'AnimatePresence' })) {
                property.value = t.nullLiteral();
              }
            });
          }
        }
      },
    },
  };
});
