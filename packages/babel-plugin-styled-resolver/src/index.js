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
  getStyleIds,
} = require('@gluestack-style/react/lib/commonjs/resolver');

const {
  convertStyledToStyledVerbosed,
  convertSxToSxVerbosed,
} = require('@gluestack-style/react/lib/commonjs/convertSxToSxVerbosed');
const {
  propertyTokenMap,
} = require('@gluestack-style/react/lib/commonjs/propertyTokenMap');
const {
  stableHash,
} = require('@gluestack-style/react/lib/commonjs/stableHash');
const {
  INTERNAL_updateCSSStyleInOrderedResolved,
} = require('@gluestack-style/react/lib/commonjs/updateCSSStyleInOrderedResolved');
const {
  INTERNAL_updateCSSStyleInOrderedResolved:
    INTERNAL_updateCSSStyleInOrderedResolvedWeb,
} = require('@gluestack-style/react/lib/commonjs/updateCSSStyleInOrderedResolved.web');

const IMPORT_NAME = '@gluestack-style/react';
let configThemePath = [];

function addQuotesToObjectKeys(code) {
  const ast = babel.parse(`var a = ${code}`, {
    presets: [babelPresetTypeScript],
    plugins: ['typescript'],
    sourceType: 'module',
  });

  traverse(ast, {
    ObjectProperty: (path) => {
      if (types.isTemplateLiteral(path.node.value)) {
        path.node.value = types.stringLiteral(
          path.node.value.quasis[0].value.raw
        );
      }
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
    plugins: ['typescript'],
  });

  return output;
}
const merge = require('lodash.merge');
const { exit } = require('process');
const checkIfPathIsAbsolute = (path) => {
  return path.startsWith('/');
};
function getConfig(configPath) {
  if (configPath) {
    return fs.readFileSync(
      path.join(
        !checkIfPathIsAbsolute(configPath) ? process.cwd() : '',
        configPath
      ),
      'utf8'
    );
  }
  const isConfigJSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-style.config.js')
  );
  const isGlueStackUIConfigJSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-ui.config.js')
  );
  const isConfigTSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-style.config.ts')
  );
  const isGlueStackUIConfigTSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-ui.config.ts')
  );

  if (isConfigTSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), './gluestack-style.config.ts'),
      'utf8'
    );
  }

  if (isConfigJSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), './gluestack-style.config.js'),
      'utf8'
    );
  }
  if (isGlueStackUIConfigJSExist) {
    configThemePath = ['theme'];
    return fs.readFileSync(
      path.join(process.cwd(), './gluestack-ui.config.js'),
      'utf8'
    );
  }
  if (isGlueStackUIConfigTSExist) {
    configThemePath = ['theme'];
    return fs.readFileSync(
      path.join(process.cwd(), './gluestack-ui.config.ts'),
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
    plugins: ['typescript'],
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
function replaceSingleQuotes(str) {
  let inDoubleQuotes = false;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '"') {
      inDoubleQuotes = !inDoubleQuotes;
    }
    if (str[i] === "'" && !inDoubleQuotes) {
      newStr += '"';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function getObjectFromAstNode(node) {
  let objectCode = generate(node).code;

  objectCode = addQuotesToObjectKeys(
    objectCode.replace(
      /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      (m, g) => (g ? '' : m)
    )
  );
  // Checking for single quotes and replacing it with " while keeping in mind to not replace single quotes inside double quotes
  objectCode = replaceSingleQuotes(objectCode);
  // console.log(objectCode, ' <==================|++++>> object code');

  return JSON.parse(objectCode);
}

const CONFIG = getExportedConfigFromFileString(getConfig());

let ConfigDefault = CONFIG;

module.exports = function (b) {
  const { types: t } = b;

  function generateObjectAst(obj) {
    let properties = Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'undefined') {
        return;
      } else if (typeof value === 'object' && !Array.isArray(value)) {
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
      } else if (typeof value === 'boolean') {
        return t.objectProperty(t.stringLiteral(key), t.booleanLiteral(value));
      } else {
        return t.objectProperty(
          t.stringLiteral(key),
          typeof value === 'number'
            ? t.numericLiteral(value)
            : t.stringLiteral(value)
        );
      }
    });

    return t.objectExpression(properties.filter((property) => property));
  }
  function generateArrayAst(arr) {
    return t.arrayExpression(arr.map((obj) => generateObjectAst(obj)));
  }
  function checkWebFileExists(filePath) {
    if (filePath.includes('node_modules')) {
      return false;
    }
    const ext = path.extname(filePath);
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath, ext);
    const webFilePath = path.join(dirname, `${basename}.web${ext}`);
    return fs.existsSync(webFilePath);
  }

  let styledImportName = '';
  let styledAlias = '';
  let styledAliasImportedName = '';
  let tempPropertyResolverNode;
  let isValidConfig = true;
  let platform = 'all';
  let sourceFileName = IMPORT_NAME;
  let currentFileName = 'file not found!';
  let configPath;
  let libraryName = '@gluestack-style/react';

  return {
    name: 'ast-transform', // not required
    visitor: {
      ImportDeclaration(importPath, state) {
        sourceFileName = state?.opts?.filename || IMPORT_NAME;
        currentFileName = state.file.opts.filename;
        styledAlias = state?.opts?.styledAlias;
        libraryName = state?.opts?.libraryName || libraryName;

        if (state?.opts?.configPath) {
          configPath = state?.opts?.configPath;
        }
        if (state?.opts?.configThemePath) {
          configThemePath = state?.opts?.configThemePath;
        }
        if (state?.opts?.platform) {
          platform = state?.opts?.platform;
        } else {
          platform = 'all';
        }

        if (configPath) {
          ConfigDefault = getExportedConfigFromFileString(
            getConfig(configPath)
          );
        }

        configThemePath.forEach((path) => {
          ConfigDefault = ConfigDefault?.[path];
        });
        configThemePath = [];

        if (!currentFileName.includes('node_modules')) {
          if (currentFileName.includes('.web.')) {
            platform = 'web';
          } else if (checkWebFileExists(currentFileName)) {
            platform = 'native';
          }
        }

        let filePath = state.file.opts.filename.split('/');
        filePath.pop();

        const absoluteStyledImportPath = path.resolve(
          filePath.join('/'),
          importPath.node.source.value
        );

        if (
          importPath.node.source.value === libraryName ||
          absoluteStyledImportPath === sourceFileName
        ) {
          importPath.traverse({
            ImportSpecifier(importSpecifierPath) {
              if (importSpecifierPath.node.imported.name === 'styled') {
                styledImportName = importSpecifierPath.node.local.name;
              }
              if (importSpecifierPath.node.imported.name === styledAlias) {
                styledAliasImportedName = importSpecifierPath.node.local.name;
              }
            },
          });
        }
      },
      CallExpression(path) {
        if (
          path.node.callee.name === styledAliasImportedName ||
          path.node.callee.name === styledImportName
        ) {
          path.traverse({
            ObjectProperty(ObjectPath) {
              if (t.isIdentifier(ObjectPath.node.value)) {
                if (ObjectPath.node.value.name === 'undefined') {
                  ObjectPath.remove();
                }
              }
            },
          });

          if (isValidConfig) {
            let args = path.node.arguments;

            let componentThemeNode = args[1];
            // optional case
            let componentConfigNode = args[2] ?? t.objectExpression([]);
            let extendedThemeNode = args[3] ?? t.objectExpression([]);

            // args[1] = t.objectExpression([]);

            let extendedThemeNodeProps = [];
            if (extendedThemeNode && extendedThemeNode?.properties) {
              extendedThemeNode?.properties.forEach((prop) => {
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
            let componentConfig = getObjectFromAstNode(componentConfigNode);
            if (extendedThemeNode && tempPropertyResolverNode) {
              extendedThemeNode.properties.push(tempPropertyResolverNode);
            }

            // getExportedConfigFromFileString(ConfigDefault);
            let mergedPropertyConfig = {
              ...ConfigDefault?.propertyTokenMap,
              ...propertyTokenMap,
            };
            let componentExtendedConfig = merge(
              {},
              {
                ...ConfigDefault,
                propertyTokenMap: { ...mergedPropertyConfig },
              },
              ExtendedConfig
            );

            const verbosedTheme = convertStyledToStyledVerbosed(theme);

            let resolvedStyles = styledToStyledResolved(
              verbosedTheme,
              [],
              componentExtendedConfig
            );

            let orderedResolved =
              styledResolvedToOrderedSXResolved(resolvedStyles);
            // console.log('\n\n >>>>>>>>>>>>>>>>>>>>>\n');
            // console.log(JSON.stringify(verbosedTheme));
            // console.log('\n >>>>>>>>>>>>>>>>>>>>>\n\n');

            const themeHash = stableHash(verbosedTheme);

            if (platform === 'all') {
              INTERNAL_updateCSSStyleInOrderedResolvedWeb(
                orderedResolved,
                themeHash,
                true
              );
            } else if (platform === 'web') {
              INTERNAL_updateCSSStyleInOrderedResolvedWeb(
                orderedResolved,
                themeHash,
                false
              );
            } else {
              INTERNAL_updateCSSStyleInOrderedResolved(
                orderedResolved,
                themeHash,
                true
              );
            }

            let styleIds = getStyleIds(orderedResolved, componentConfig);

            let styleIdsAst = generateObjectAst(styleIds);

            let themeHashAst = t.stringLiteral(themeHash);

            let orderedResolvedAst = generateArrayAst(orderedResolved);

            let resultParamsNode = t.objectExpression([
              t.objectProperty(
                t.stringLiteral('orderedResolved'),
                orderedResolvedAst
              ),
              t.objectProperty(t.stringLiteral('styleIds'), styleIdsAst),
              t.objectProperty(t.stringLiteral('themeHash'), themeHashAst),
            ]);

            while (args.length < 4) {
              args.push(t.objectExpression([]));
            }
            if (!args[4]) {
              args.push(resultParamsNode);
            } else {
              args[4] = resultParamsNode;
            }
          }

          // console.log(
          //   '<==================|++++>> final ',
          //   generate(path.node).code
          // );
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
          // console.log('\n\n >>>>>>>>>>>>>>>>>>>>>\n');

          // console.log('final', generate(path.node).code);
          // console.log('\n >>>>>>>>>>>>>>>>>>>>>\n\n');
        }
      },
    },
  };
};
