module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Remove value of AnimatePresence to null
  root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          type: 'ImportSpecifier',
          imported: { name: 'AnimatePresence' },
        },
      ],
      source: { value: '@gluestack-style/animation-resolver' },
    })
    .remove();

  root
    .find(j.CallExpression, {
      arguments: [
        {
          type: 'ObjectExpression',
        },
      ],
    })
    .forEach((path) => {
      // Get the object expression
      const objectExpression = path.value.arguments[0];

      // Find the property with name 'AnimatePresence' and assign null to its value
      objectExpression.properties.forEach((property) => {
        if (property.key.name === 'AnimatePresence') {
          property.value = j.literal(null);
        }
      });
    });

  // Remove import statements for AnimatePresence
  root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          type: 'ImportSpecifier',
          imported: { name: 'AnimatePresence' },
        },
      ],
      source: { value: '@gluestack-style/animation-resolver' },
    })
    .remove();

  // Replace import statements for AnimatedView with import statements for View as AnimatedView
  root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          type: 'ImportSpecifier',
          imported: { name: 'AnimatedView' },
        },
      ],
      source: { value: '@gluestack-style/animation-resolver' },
    })
    .replaceWith((path) => {
      // Replace with import { View as AnimatedView } from "react-native"
      const newImportDeclaration = j.importDeclaration(
        [j.importSpecifier(j.identifier('View'))],
        j.literal('react-native')
      );
      return newImportDeclaration;
    });

  root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          type: 'ImportSpecifier',
          imported: { name: 'AnimatedPressable' },
        },
      ],
      source: { value: '@gluestack-style/animation-resolver' },
    })
    .replaceWith((path) => {
      // Replace with import { Pressable as AnimatedPressable } from "react-native"
      const newImportDeclaration = j.importDeclaration(
        [j.importSpecifier(j.identifier('Pressable'))],
        j.literal('react-native')
      );
      return newImportDeclaration;
    });

  //React
  root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          type: 'ImportSpecifier',
          imported: { name: 'styled' },
        },
      ],
      source: { value: '@gluestack-style/react' },
    })
    .replaceWith((path) => {
      // Replace with import { styled } from 'nativewind'
      const newImportDeclaration = j.importDeclaration(
        [j.importSpecifier(j.identifier('styled'))],
        j.literal('nativewind')
      );
      return newImportDeclaration;
    });

  root
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: 'styled',
      },
    })
    .forEach((path) => {
      // Keep only the first argument of the styled function call
      const args = path.value.arguments.slice(0, 1);
      path.value.arguments = args;
    });
  // Update calls to AnimatedView to use View
  root
    .find(j.Identifier, { name: 'AnimatedView' })
    .replaceWith(j.identifier('View'));

  // Update calls to AnimatedPressable to use Pressable
  root
    .find(j.Identifier, { name: 'AnimatedPressable' })
    .replaceWith(j.identifier('Pressable'));

  return root.toSource();
};
