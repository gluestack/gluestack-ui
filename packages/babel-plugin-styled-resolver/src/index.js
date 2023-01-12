const fs = require('fs');
const path = require('path');
const babel = require('@babel/parser');
const generate = require('@babel/generator').default;
const babelPresetTypeScript = require('@babel/preset-typescript');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const {
  styledResolvedToOrderedSXResolved,
  styledToStyledResolved,
} = require('@dank-style/react/lib/commonjs/resolver');
const {
  propertyTokenMap,
} = require('@dank-style/react/lib/commonjs/propertyTokenMap');

function addQuotesToObjectKeys(code) {
  const ast = babel.parse(`var a = ${code}`, {
    presets: [babelPresetTypeScript],
    sourceType: 'module',
  });

  traverse(ast, {
    ObjectProperty: (path) => {
      if (types.isIdentifier(path.node.key)) {
        path.node.key = types.stringLiteral(path.node.key.name);
      }
      if (types.isNumericLiteral(path.node.key)) {
        path.node.key = types.stringLiteral(path.node.key.extra.raw);
      }
      if (types.isStringLiteral(path.node.value)) {
        path.node.value = types.stringLiteral(path.node.value.value);
      }
    },
  });

  let initAst;

  traverse(ast, {
    VariableDeclarator: (path) => {
      initAst = path.node.init;
    },
  });

  const { code: output } = generate(initAst, {
    sourceType: 'module',
    presets: [babelPresetTypeScript],
  });
  return output;
}
const merge = require('lodash.merge');
function getNativeBaseConfig() {
  const isNativeBaseJSExist = fs.existsSync(
    path.join(process.cwd(), './dank.config.js')
  );
  const isNativeBaseTSExist = fs.existsSync(
    path.join(process.cwd(), './dank.config.ts')
  );

  if (isNativeBaseTSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), './dank.config.ts'),
      'utf8'
    );
  }

  if (isNativeBaseJSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), './dank.config.js'),
      'utf8'
    );
  }
}
function getSurroundingCharacters(string, index) {
  let start = Math.max(0, index - 5);
  let end = Math.min(string.length, index + 6);
  return string.slice(start, end);
}
function getExportedConfigFromFileString(fileData) {
  if (!fileData) {
    return {};
  }
  fileData = fileData?.replace(/as const/g, '');
  const ast = babel.parse(fileData, {
    presets: [babelPresetTypeScript],
    sourceType: 'module',
    comments: false,
  });
  let config = {};
  traverse(ast, {
    ExportNamedDeclaration: (path) => {
      path.traverse({
        VariableDeclarator: (variableDeclaratorPath) => {
          config = variableDeclaratorPath.node.init;
        },
      });
    },
    Identifier: (path) => {
      if (path.node.name === 'undefined') {
        //path.remove();
        path.node.name = 'null';
      }
    },
  });
  let objectCode = generate(config).code;
  objectCode = objectCode?.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
  objectCode = addQuotesToObjectKeys(objectCode)?.replace(/'/g, '"');
  return JSON.parse(objectCode);
}

const CONFIG = getExportedConfigFromFileString(getNativeBaseConfig());
const ConfigDefault = CONFIG;
function getObjectFromAstNode(node) {
  let objectCode = generate(node).code;
  objectCode = addQuotesToObjectKeys(
    objectCode.replace(
      /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      (m, g) => (g ? '' : m)
    )
  );
  return JSON.parse(objectCode);
}

module.exports = function (b) {
  const { types: t } = b;

  function generateObjectAst(obj) {
    let properties = Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return t.objectProperty(t.stringLiteral(key), generateObjectAst(value));
      } else if (typeof value === 'object' && Array.isArray(value)) {
        let elements = value.map((obj) => {
          if (typeof obj === 'string') {
            return t.stringLiteral(obj);
          } else {
            return generateObjectAst(obj);
          }
        });
        return t.objectProperty(
          t.stringLiteral(key),
          t.arrayExpression(elements)
        );
      } else {
        return t.objectProperty(
          t.stringLiteral(key),
          typeof value === 'number'
            ? t.numericLiteral(value)
            : t.stringLiteral(value)
        );
      }
    });
    return t.objectExpression(properties);
  }
  function generateArrayAst(arr) {
    return t.arrayExpression(arr.map((obj) => generateObjectAst(obj)));
  }

  let styledImportName = '';
  let tempPropertyResolverNode;
  return {
    name: 'ast-transform', // not required
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value === '@dank-style/react') {
          path.traverse({
            ImportSpecifier(importSpecifierPath) {
              if (importSpecifierPath.node.imported.name === 'styled') {
                styledImportName = importSpecifierPath.node.local.name;
              }
            },
          });
        }
      },
      CallExpression(path) {
        if (path.node.callee.name === styledImportName) {
          let args = path.node.arguments;
          let componentThemeNode = args[1];
          // optional case
          let extendedThemeNode = args[3] ?? t.objectExpression([]);
          let extendedThemeNodeProps = [];
          if (extendedThemeNode) {
            extendedThemeNode.properties.forEach((prop) => {
              if (prop.key.name === 'propertyResolver') {
                tempPropertyResolverNode = prop;
              } else {
                extendedThemeNodeProps.push(prop);
              }
            });
            extendedThemeNode.properties = extendedThemeNodeProps;
          }

          let theme = getObjectFromAstNode(componentThemeNode);
          let ExtendedConfig = getObjectFromAstNode(extendedThemeNode);
          if (extendedThemeNode && tempPropertyResolverNode) {
            extendedThemeNode.properties.push(tempPropertyResolverNode);
          }

          // getExportedConfigFromFileString(ConfigDefault);
          let mergedPropertyConfig = {
            ...ConfigDefault.propertyTokenMap,
            ...propertyTokenMap,
          };
          let componentExtendedConfig = merge(
            {},
            { ...ConfigDefault, propertyTokenMap: { ...mergedPropertyConfig } },
            ExtendedConfig
          );

          let resolvedStyles = styledToStyledResolved(
            theme,
            [],
            componentExtendedConfig
          );

          let orderedResolved =
            styledResolvedToOrderedSXResolved(resolvedStyles);
          let orderedResolvedAst = generateArrayAst(orderedResolved);

          let resultParamsNode = t.objectExpression([
            t.objectProperty(
              t.stringLiteral('orderedResolved'),
              orderedResolvedAst
            ),
          ]);
          while (args.length < 4) {
            args.push(t.objectExpression([]));
          }
          args.push(resultParamsNode);
          // console.log(
          //   args,
          //   // resolvedStyles,
          //   // orderedResolved,
          //   // ...path.node.arguments,
          //   // generate(resultParamsNode).code,
          //   // resultParamsNode,
          //   // generate(path.node).code,
          //   'code'
          // );
          // console.log('final', generate(path.node).code, orderedResolved);
        }
      },
    },
  };
};
