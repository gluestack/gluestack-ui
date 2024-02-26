const fs = require('fs');
const path = require('path');
const babel = require('@babel/parser');
const generate = require('@babel/generator').default;
const babelPresetTypeScript = require('@babel/preset-typescript');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');

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
  CSSPropertiesMap,
  reservedKeys,
} = require('@gluestack-style/react/lib/commonjs/core/styled-system');
const {
  StyleInjector,
} = require('@gluestack-style/react/lib/commonjs/style-sheet/index');
const {
  updateOrderUnResolvedMap,
} = require('@gluestack-style/react/lib/commonjs/updateOrderUnResolvedMap');
const { deepMerge } = require('@gluestack-style/react/lib/commonjs/utils');
const {
  setObjectKeyValue,
} = require('@gluestack-style/react/lib/commonjs/core/utils');
const {
  checkAndReturnUtilityProp,
} = require('@gluestack-style/react/lib/commonjs/core/convert-utility-to-sx');
const {
  generateMergedThemeTokens,
} = require('@gluestack-style/react/lib/commonjs/utils');

const BUILD_TIME_GLUESTACK_STYLESHEET = new StyleInjector();
let configThemePath = [];
let ConfigDefault = {};

const convertExpressionContainerToStaticObject = (
  properties,
  result = {},
  keyPath = [],
  propsToBePersist = {}
) => {
  try {
    properties?.forEach((property, index) => {
      const nodeName = property.key.name ?? property.key.value;
      if (property.value.type === 'ObjectExpression') {
        keyPath.push(nodeName);
        convertExpressionContainerToStaticObject(
          property.value.properties,
          result,
          keyPath,
          propsToBePersist
        );
        keyPath.pop();
      } else if (property.value.type === 'Identifier') {
        if (property.key.value) {
          setObjectKeyValue(
            propsToBePersist,
            [...keyPath, nodeName],
            property.value.name
          );
        }
        if (property.key.name) {
          setObjectKeyValue(
            propsToBePersist,
            [...keyPath, nodeName],
            property.value.name
          );
        }
      } else {
        if (property.key.value) {
          setObjectKeyValue(
            result,
            [...keyPath, property.key.value],
            property.value.value
          );
        }

        if (property.key.name) {
          setObjectKeyValue(
            result,
            [...keyPath, property.key.name],
            property.value.value
          );
        }
      }
    });
    return {
      result,
      propsToBePersist,
    };
  } catch (err) {
    throw new Error(
      `Error while converting expression container to static object. Error: ${err.message} Stack: ${err.stack}`
    );
  }
};

function findThemeAndComponentConfig(node) {
  let themeNode = null;
  let componentConfigNode = null;
  node.forEach((prop) => {
    const propKey = prop.key.name ? prop.key.name : prop.key.value;
    if (propKey === 'theme') {
      themeNode = prop;
    } else if (propKey === 'componentConfig') {
      componentConfigNode = prop;
    }
  });

  return {
    themeNode,
    componentConfigNode,
  };
}

function addQuotesToObjectKeys(code) {
  const ast = babel.parse(`var a = ${code}`, {
    presets: [babelPresetTypeScript],
    plugins: ['typescript'],
    sourceType: 'module',
  });

  traverse(ast, {
    ObjectProperty: (objectPropertyPath) => {
      if (types.isTemplateLiteral(objectPropertyPath.node.value)) {
        objectPropertyPath.node.value = types.stringLiteral(
          objectPropertyPath.node.value.quasis[0].value.raw
        );
      }
      if (types.isIdentifier(objectPropertyPath.node.key)) {
        objectPropertyPath.node.key = types.stringLiteral(
          objectPropertyPath.node.key.name
        );
      }
      if (types.isNumericLiteral(objectPropertyPath.node.key)) {
        objectPropertyPath.node.key = types.stringLiteral(
          objectPropertyPath.node.key.extra.raw
        );
      }
      if (types.isStringLiteral(objectPropertyPath.node.value)) {
        objectPropertyPath.node.value = types.stringLiteral(
          objectPropertyPath.node.value.value
        );
      }
    },
  });

  let initAst;

  traverse(ast, {
    ObjectProperty: (objectPropertyPath) => {
      if (types.isArrayExpression(objectPropertyPath?.node?.value)) {
        let arrayElements = objectPropertyPath.node.value.elements;
        const dynamicElementsIndex = [];
        arrayElements.forEach((element, index) => {
          if (
            types.isNewExpression(element) ||
            types.isIdentifier(element) ||
            types.isTemplateLiteral(element)
          ) {
            dynamicElementsIndex.push(index);
          }
        });

        arrayElements = arrayElements.filter(
          (element, index) => !dynamicElementsIndex.includes(index)
        );
        objectPropertyPath.node.value.elements = arrayElements;
      } else if (
        types.isIdentifier(objectPropertyPath?.node?.value) ||
        types.isTemplateLiteral(objectPropertyPath?.node?.value) ||
        types.isConditionalExpression(objectPropertyPath?.node?.value)
      ) {
        objectPropertyPath.remove();
      }
    },
  });

  traverse(ast, {
    VariableDeclarator: (variableDeclaratorPath) => {
      initAst = variableDeclaratorPath.node.init;
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

function getBuildTimeParams(
  theme,
  componentConfig,
  extendedConfig,
  outputLibrary,
  platform,
  type
) {
  const mergedPropertyConfig = {
    ...ConfigDefault?.propertyTokenMap,
    ...propertyTokenMap,
  };
  const componentExtendedConfig = merge(
    {},
    {
      ...ConfigDefault,
      propertyTokenMap: { ...mergedPropertyConfig },
    }
  );

  if (theme && Object.keys(theme).length > 0) {
    const verbosedTheme = convertStyledToStyledVerbosed(theme);

    let componentHash = stableHash({
      ...theme,
      ...componentConfig,
    });

    if (outputLibrary) {
      componentHash = outputLibrary + '-' + componentHash;
    }

    const { styledIds, verbosedStyleIds } = updateOrderUnResolvedMap(
      verbosedTheme,
      componentHash,
      type,
      componentConfig,
      BUILD_TIME_GLUESTACK_STYLESHEET,
      platform
    );

    const toBeInjected = BUILD_TIME_GLUESTACK_STYLESHEET.resolve(
      styledIds,
      componentExtendedConfig,
      {}
    );

    const current_global_map = BUILD_TIME_GLUESTACK_STYLESHEET.getStyleMap();

    const orderedResolvedTheme = [];

    current_global_map?.forEach((styledResolved) => {
      if (styledIds.includes(styledResolved?.meta?.cssId)) {
        orderedResolvedTheme.push(styledResolved);
      }
    });

    const styleIdsAst = generateObjectAst(verbosedStyleIds);

    const toBeInjectedAst = generateObjectAst(toBeInjected);

    const orderedResolvedAst = generateArrayAst(orderedResolvedTheme);

    const orderedStyleIdsArrayAst = types.arrayExpression(
      styledIds?.map((cssId) => types.stringLiteral(cssId))
    );

    const resultParamsNode = types.objectExpression([
      types.objectProperty(
        types.stringLiteral('orderedResolved'),
        orderedResolvedAst
      ),
      types.objectProperty(
        types.stringLiteral('toBeInjected'),
        toBeInjectedAst
      ),
      types.objectProperty(
        types.stringLiteral('styledIds'),
        orderedStyleIdsArrayAst
      ),
      types.objectProperty(
        types.stringLiteral('verbosedStyleIds'),
        styleIdsAst
      ),
    ]);
    return { node: resultParamsNode, styles: toBeInjected };
  }
  return { node: null, styles: {} };
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

  objectCode = objectCode?.replace(/as const/g, '');

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

function removeLiteralPropertiesFromObjectProperties(code) {
  const ast = babel.parse(`var a = ${code}`, {
    presets: [babelPresetTypeScript],
    plugins: ['typescript'],
    sourceType: 'module',
  });

  traverse(ast, {
    ObjectExpression: (objectExpressionPath) => {
      objectExpressionPath.traverse({
        ObjectProperty(objectPropertyPath) {
          const { value } = objectPropertyPath.node;

          objectPropertyPath.traverse({
            StringLiteral: (stringPath) => {
              stringPath;
            },
          });

          if (
            value.type === 'StringLiteral' ||
            value.type === 'NumericLiteral'
          ) {
            objectPropertyPath.remove();
          }
        },
      });
    },
  });

  let initAst;

  traverse(ast, {
    VariableDeclarator: (variableDeclaratorPath) => {
      initAst = variableDeclaratorPath.node.init;
    },
  });

  return initAst;
}

function getIdentifiersObjectFromAstNode(node) {
  const objectCode = generate(node).code;

  return removeLiteralPropertiesFromObjectProperties(
    objectCode.replace(
      /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      (m, g) => (g ? '' : m)
    )
  );
}

function generateObjectAst(obj) {
  const properties = Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'undefined') {
      return;
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      return types.objectProperty(
        types.stringLiteral(key),
        generateObjectAst(value)
      );
    } else if (typeof value === 'object' && Array.isArray(value)) {
      const elements = value.map((val) => {
        if (typeof val === 'string') {
          return types.stringLiteral(val);
        } else {
          return generateObjectAst(val);
        }
      });
      return types.objectProperty(
        types.stringLiteral(key),
        types.arrayExpression(elements)
      );
    } else if (typeof value === 'boolean') {
      return types.objectProperty(
        types.stringLiteral(key),
        types.booleanLiteral(value)
      );
    } else {
      return types.objectProperty(
        types.stringLiteral(key),
        typeof value === 'number'
          ? types.numericLiteral(value)
          : types.stringLiteral(value)
      );
    }
  });

  return types.objectExpression(properties.filter((property) => property));
}
function generateArrayAst(arr) {
  return types.arrayExpression(arr.map((obj) => generateObjectAst(obj)));
}

function isImportedFromLibrary(libraries, importName) {
  if (libraries.includes(importName)) {
    return true;
  }
  return false;
}

function isImportFromAbsolutePath(
  absolutePaths,
  filePath,
  importedAbsolutePath
) {
  filePath.pop();

  const finalAbsolutePath = path.resolve(
    filePath.join('/'),
    importedAbsolutePath
  );
  if (absolutePaths.includes(finalAbsolutePath)) {
    return true;
  }
  return false;
}

export function parseAndExtractConfig(code, opts) {
  try {
    const ast = parseAst(code);

    return extractStyles(ast, opts);
    return {
      code,
      styles: {},
    };
  } catch (err) {
    throw new Error(
      `Error while parsing and extracting styles. Error: ${err.message} Stack: ${err.stack}`
    );
  }
}

function parseAst(code) {
  try {
    let ast = code;
    if (typeof code === 'string') {
      ast = babel.parse(code, {
        sourceType: 'module',

        plugins: [
          // enable jsx and flow syntax
          'jsx',
          'flow',
        ],
      });
    }
    return ast;
  } catch (err) {
    throw new Error(
      `Error while parsing the code. Error: ${err.message} Stack: ${err.stack}`
    );
  }
}

function extractStyles(ast, opts) {
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
  let platform = 'all';
  let currentFileName = 'file not found!';
  let outputLibrary;
  let componentSXProp;
  const guessingStyledComponents = [];
  const styled = ['@gluestack-style/react', '@gluestack-ui/themed'];
  const components = ['@gluestack-ui/themed'];
  let configPath;
  let isStyledPathConfigured = false;
  let isComponentsPathConfigured = false;
  const targetPlatform = process.env.GLUESTACK_STYLE_TARGET;
  let createStyleImportedName = '';
  let createComponentsImportedName = '';
  const CREATE_STYLE = 'createStyle';
  const CREATE_COMPONENTS = 'createComponents';

  let cssStyles = {};

  ConfigDefault = generateMergedThemeTokens(opts?.config);

  traverse(ast, {
    // pre: (state) => {
    //   let plugin;

    //   state?.opts?.plugins?.forEach((currentPlugin) => {
    //     if (currentPlugin.key === 'gluestack-babel-styled-resolver') {
    //       plugin = currentPlugin;
    //     }
    //   });

    //   if (plugin?.options?.configPath) {
    //     configPath = plugin?.options?.configPath;
    //   }

    //   if (plugin?.options?.configThemePath) {
    //     configThemePath = plugin?.options?.configThemePath;
    //   }

    //   const outputDir = `.gluestack/config-${process.ppid + 1}.js`;
    //   const mockLibraryPath = `./mock-${process.ppid + 1}.js`;

    //   if (configPath) {
    //     configFile = opts?.config;

    //     if (configThemePath.length > 0) {
    //       configThemePath.forEach((path) => {
    //         configFile = configFile?.[path];
    //       });
    //       configThemePath = [];
    //       ConfigDefault = configFile;
    //     } else {
    //       ConfigDefault = configFile?.config;
    //     }
    //   } else {
    //     configFile = opts?.config;
    //     if (configThemePath.length > 0) {
    //       configThemePath.forEach((path) => {
    //         configFile = configFile?.[path];
    //       });
    //       configThemePath = [];
    //       ConfigDefault = configFile;
    //     } else {
    //       ConfigDefault = configFile?.config;
    //     }
    //   }
    // },
    ImportDeclaration: (importPath) => {
      currentFileName = opts?.filename;
      styledAlias = opts?.styledAlias;
      outputLibrary = opts?.outputLibrary || outputLibrary;

      if (opts?.platform) {
        platform = opts?.platform;
      } else {
        platform = 'all';
      }

      if (!currentFileName.includes('node_modules')) {
        if (currentFileName.includes('.web.')) {
          platform = 'web';
        } else if (checkWebFileExists(currentFileName)) {
          platform = 'native';
        }
      }

      if (
        opts?.styled &&
        Array.isArray(opts?.styled) &&
        !isStyledPathConfigured
      ) {
        styled.push(...opts?.styled);
        isStyledPathConfigured = true;
      }

      if (
        opts?.components &&
        Array.isArray(opts?.components) &&
        !isComponentsPathConfigured
      ) {
        components.push(...opts?.components);
        isComponentsPathConfigured = true;
      }

      const importName = importPath.node.source.value;

      const filePath = opts?.filename.split('/');

      if (
        isImportFromAbsolutePath(components, filePath, importName) ||
        isImportedFromLibrary(components, importName)
      ) {
        importPath.traverse({
          ImportSpecifier(importSpecifierPath) {
            guessingStyledComponents.push(importSpecifierPath.node.local.name);
          },
        });
      }

      if (
        isImportFromAbsolutePath(styled, filePath, importName) ||
        isImportedFromLibrary(styled, importName)
      ) {
        importPath.traverse({
          ImportSpecifier(importSpecifierPath) {
            if (importSpecifierPath.node.imported.name === 'styled') {
              styledImportName = importSpecifierPath.node.local.name;
            }
            if (importSpecifierPath.node.imported.name === CREATE_STYLE) {
              createStyleImportedName = importSpecifierPath.node.local.name;
            }
            if (importSpecifierPath.node.imported.name === CREATE_COMPONENTS) {
              createComponentsImportedName =
                importSpecifierPath.node.local.name;
            }
            if (importSpecifierPath.node.imported.name === styledAlias) {
              styledAliasImportedName = importSpecifierPath.node.local.name;
            }
          },
        });
      }
    },
    AssignmentExpression: (expressionPath) => {
      if (
        expressionPath?.node?.right?.callee?.name === styledAliasImportedName ||
        expressionPath?.node?.right?.callee?.name === styledImportName
      ) {
        const componentName = expressionPath?.parent?.id?.name;

        if (componentName) {
          guessingStyledComponents.push(componentName);
        }
      }
    },
    CallExpression: (callExpressionPath) => {
      if (!opts.filename?.includes('node_modules')) {
        const calleeName = callExpressionPath.node.callee.name;
        if (
          calleeName === styledAliasImportedName ||
          calleeName === styledImportName ||
          calleeName === createComponentsImportedName ||
          calleeName === createStyleImportedName
        ) {
          callExpressionPath.traverse({
            ObjectProperty(ObjectPath) {
              if (types.isIdentifier(ObjectPath.node.value)) {
                if (ObjectPath.node.value.name === 'undefined') {
                  ObjectPath.remove();
                }
              }
            },
          });
        }
        if (
          calleeName === styledAliasImportedName ||
          calleeName === styledImportName
        ) {
          const componentName = callExpressionPath?.parent?.id?.name;

          if (componentName) {
            guessingStyledComponents.push(componentName);
          }

          const args = callExpressionPath.node.arguments;

          const componentThemeNode = args[1];
          // optional case
          const componentConfigNode = args[2] ?? types.objectExpression([]);
          const extendedThemeNode = args[3] ?? types.objectExpression([]);

          if (
            !(
              types.isIdentifier(componentThemeNode) ||
              types.isIdentifier(componentConfigNode) ||
              types.isIdentifier(extendedThemeNode)
            )
          ) {
            // args[1] = t.objectExpression([]);

            const extendedThemeNodeProps = [];
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

            const theme = getObjectFromAstNode(componentThemeNode);
            const ExtendedConfig = getObjectFromAstNode(extendedThemeNode);
            const componentConfig = getObjectFromAstNode(componentConfigNode);

            if (extendedThemeNode && tempPropertyResolverNode) {
              extendedThemeNode.properties.push(tempPropertyResolverNode);
            }

            const { node, styles } = getBuildTimeParams(
              theme,
              componentConfig,
              ExtendedConfig,
              outputLibrary,
              platform,
              'boot'
            );

            cssStyles = { ...cssStyles, ...styles };

            if (node) {
              while (args.length < 4) {
                args.push(types.objectExpression([]));
              }
              if (!args[4]) {
                args.push(node);
              } else {
                args[4] = node;
              }
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
        if (calleeName === createStyleImportedName) {
          const args = callExpressionPath.node.arguments;

          const componentThemeNode = args[0];
          const componentConfigNode = args[1] ?? types.objectExpression([]);

          if (
            !(
              types.isIdentifier(componentThemeNode) ||
              types.isIdentifier(componentConfigNode)
            )
          ) {
            const theme = getObjectFromAstNode(componentThemeNode);
            const componentConfig = getObjectFromAstNode(componentConfigNode);

            const { node, styles } = getBuildTimeParams(
              theme,
              componentConfig,
              {},
              outputLibrary,
              platform,
              'extended'
            );

            cssStyles = { ...cssStyles, ...styles };

            if (node) {
              while (args.length < 3) {
                args.push(types.objectExpression([]));
              }
              if (!args[2]) {
                args.push(node);
              } else {
                args[2] = node;
              }
            }
          }
        }
        if (calleeName === createComponentsImportedName) {
          /*
          extended theme components AST
          {
            box: {
              theme: {},
            },
            button: {
              theme: {},
            },
          }
          */
          const extendedThemeComponents =
            callExpressionPath.node.arguments[0].properties;

          if (Array.isArray(extendedThemeComponents)) {
            extendedThemeComponents.forEach((property) => {
              if (
                !types.isIdentifier(property.value) &&
                !types.isTemplateLiteral(property.value) &&
                !types.isConditionalExpression(property.value)
              ) {
                const { themeNode, componentConfigNode } =
                  findThemeAndComponentConfig(property.value.properties);

                const theme = themeNode
                  ? getObjectFromAstNode(themeNode?.value)
                  : {};
                const componentConfig = componentConfigNode
                  ? getObjectFromAstNode(componentConfigNode?.value)
                  : {};

                const { node, styles } = getBuildTimeParams(
                  theme,
                  componentConfig,
                  {},
                  outputLibrary,
                  platform,
                  'extended'
                );

                cssStyles = { ...cssStyles, ...styles };

                if (node) {
                  property.value.properties.push(
                    types.objectProperty(
                      types.stringLiteral('BUILD_TIME_PARAMS'),
                      node
                    )
                  );
                }
              }
            });
          }
        }
      }
    },
    JSXOpeningElement: (jsxOpeningElementPath) => {
      if (
        jsxOpeningElementPath.node.name &&
        jsxOpeningElementPath.node.name.name &&
        guessingStyledComponents.includes(jsxOpeningElementPath.node.name.name)
      ) {
        const propsToBePersist = [];
        let sxPropsWithIdentifier = {};

        const mergedPropertyConfig = {
          ...ConfigDefault?.propertyTokenMap,
          ...propertyTokenMap,
        };

        const styledSystemProps = {
          ...CSSPropertiesMap,
          ...ConfigDefault?.aliases,
        };

        const componentExtendedConfig = merge(
          {},
          {
            ...ConfigDefault,
            propertyTokenMap: { ...mergedPropertyConfig },
          }
        );

        const sxPropsConvertedUtilityProps = {};

        const prefixedMediaQueries = {};

        if (componentExtendedConfig?.tokens?.mediaQueries) {
          Object.keys(componentExtendedConfig?.tokens?.mediaQueries).forEach(
            (key) => {
              prefixedMediaQueries[key] = {
                key: `@${key}`,
                isMediaQuery: true,
              };
            }
          );

          Object.assign(reservedKeys, { ...prefixedMediaQueries });
        }

        const attr = jsxOpeningElementPath?.node?.attributes;
        attr.forEach((attribute, index) => {
          if (types.isJSXAttribute(attribute)) {
            const propName = attribute?.name?.name;
            const propValue = attribute?.value;

            if (types.isJSXExpressionContainer(propValue)) {
              if (
                types.isIdentifier(propValue.expression) ||
                types.isConditionalExpression(propValue.expression)
              ) {
                propsToBePersist.push(attribute);
              } else if (
                types.isObjectExpression(propValue.expression) &&
                propName !== 'sx'
              ) {
                const utilityPropsWithIdentifier =
                  getIdentifiersObjectFromAstNode(propValue.expression);

                const objectProperties = propValue.expression.properties;
                const { result: objectValue } =
                  convertExpressionContainerToStaticObject(objectProperties);

                const {
                  prop: propString,
                  propPath,
                  value: utilityPropValue,
                } = checkAndReturnUtilityProp(
                  propName,
                  objectValue,
                  styledSystemProps,
                  [],
                  reservedKeys
                );

                if (propString) {
                  propsToBePersist.push(attribute);
                } else {
                  if (propPath && propPath.length > 0) {
                    setObjectKeyValue(
                      sxPropsConvertedUtilityProps,
                      propPath,
                      utilityPropValue
                    );

                    if (
                      utilityPropsWithIdentifier &&
                      utilityPropsWithIdentifier.properties &&
                      utilityPropsWithIdentifier.properties.length > 0
                    ) {
                      propsToBePersist.push(
                        types.jsxAttribute(
                          types.jsxIdentifier(propName),
                          types.jsxExpressionContainer(
                            utilityPropsWithIdentifier
                          )
                        )
                      );
                    }
                  }
                }
              } else {
                if (propName === 'sx') {
                  const objectProperties = propValue.expression.properties;

                  sxPropsWithIdentifier = getIdentifiersObjectFromAstNode(
                    propValue.expression
                  );

                  const { result: sxPropsObject } =
                    convertExpressionContainerToStaticObject(objectProperties);
                  componentSXProp = sxPropsObject;
                } else if (
                  types.isStringLiteral(propValue.expression) ||
                  types.isNumericLiteral(propValue.expression)
                ) {
                  const {
                    prop: propString,
                    propPath,
                    value: utilityPropValue,
                  } = checkAndReturnUtilityProp(
                    propName,
                    propValue.expression.value,
                    styledSystemProps,
                    [],
                    reservedKeys
                  );

                  if (propString) {
                    propsToBePersist.push(attribute);
                  } else {
                    if (propPath && propPath.length > 0) {
                      setObjectKeyValue(
                        sxPropsConvertedUtilityProps,
                        propPath,
                        utilityPropValue
                      );
                    }
                  }
                } else {
                  propsToBePersist.push(attribute);
                }
              }
            } else {
              const {
                prop: propString,
                propPath,
                value: utilityPropValue,
              } = checkAndReturnUtilityProp(
                propName,
                propValue?.value,
                styledSystemProps,
                [],
                reservedKeys
              );
              if (propString) {
                propsToBePersist.push(attribute);
              } else {
                if (propPath && propPath.length > 0) {
                  setObjectKeyValue(
                    sxPropsConvertedUtilityProps,
                    propPath,
                    utilityPropValue
                  );
                }
              }
            }
          }
        });

        jsxOpeningElementPath.node.attributes.splice(
          0,
          jsxOpeningElementPath.node.attributes.length
        );

        jsxOpeningElementPath.node.attributes = propsToBePersist;

        const sx = deepMerge(
          { ...sxPropsConvertedUtilityProps },
          { ...componentSXProp }
        );
        if (Object.keys(sx).length > 0) {
          const verbosedSx = convertSxToSxVerbosed(sx);

          const inlineSxTheme = {
            baseStyle: verbosedSx,
          };

          let sxHash = stableHash(sx);

          if (outputLibrary) {
            sxHash = outputLibrary + '-' + sxHash;
          }

          const { styledIds, verbosedStyleIds } = updateOrderUnResolvedMap(
            inlineSxTheme,
            sxHash,
            'inline',
            {},
            BUILD_TIME_GLUESTACK_STYLESHEET,
            platform
          );

          const toBeInjected = BUILD_TIME_GLUESTACK_STYLESHEET.resolve(
            styledIds,
            componentExtendedConfig,
            {},
            true,
            'inline'
          );

          cssStyles = {
            ...cssStyles,
            ...toBeInjected,
          };

          const current_global_map =
            BUILD_TIME_GLUESTACK_STYLESHEET.getStyleMap();

          const orderedResolvedTheme = [];

          current_global_map?.forEach((styledResolved) => {
            if (styledIds.includes(styledResolved?.meta?.cssId)) {
              orderedResolvedTheme.push(styledResolved);
            }
          });

          const styleIdsAst = generateObjectAst(verbosedStyleIds);

          const orderResolvedArrayExpression = [];

          orderedResolvedTheme.forEach((styledResolved) => {
            delete styledResolved.toBeInjected;
            if (targetPlatform === 'native') {
              delete styledResolved.original;
              delete styledResolved.value;
              delete styledResolved.meta.cssRulesSet;
              delete styledResolved.meta.weight;
              delete styledResolved.meta.weight;
              delete styledResolved.type;
              delete styledResolved.componentHash;
              delete styledResolved.extendedConfig;
              delete styledResolved.value;
            }
            const orderedResolvedAst = generateObjectAst(styledResolved);
            orderResolvedArrayExpression.push(orderedResolvedAst);
          });

          jsxOpeningElementPath.node.attributes.push(
            types.jsxAttribute(
              types.jsxIdentifier('verbosedStyleIds'),
              types.jsxExpressionContainer(styleIdsAst)
            )
          );
          jsxOpeningElementPath.node.attributes.push(
            types.jsxAttribute(
              types.jsxIdentifier('orderedResolved'),
              types.jsxExpressionContainer(
                types.arrayExpression(orderResolvedArrayExpression)
              )
            )
          );
        }

        if (
          sxPropsWithIdentifier &&
          sxPropsWithIdentifier.properties &&
          sxPropsWithIdentifier.properties.length > 0
        ) {
          jsxOpeningElementPath.node.attributes.push(
            types.jsxAttribute(
              types.jsxIdentifier('sx'),
              types.jsxExpressionContainer(sxPropsWithIdentifier)
            )
          );
        }

        componentSXProp = undefined;
      }
    },
  });

  return {
    ast,
    code: generate(ast).code,
    styles: cssStyles,
  };
}
