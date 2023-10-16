function removeVariant(originalObject) {
  const newObject = {};
  for (const key in originalObject) {
    if (key === 'variants') {
      if (!newObject.variants) {
        newObject.variants = {
          variant: originalObject.variants,
        };
      } else {
        newObject.variants.variant = originalObject.variants;
      }

      // newObject.variant = removeVariant(originalObject[key]);
    } else if (key === 'sizes') {
      if (!newObject.variants) {
        newObject.variants = {
          sizes: originalObject.sizes,
        };
      } else {
        newObject.variants.size = originalObject.sizes;
      }
      // newObject.variant = removeVariant(originalObject[key]);
    } else {
      newObject[key] = originalObject[key];
    }
  }
  return newObject;
}

function removeBaseStyle(originalObject) {
  const newObject = {};
  for (const key in originalObject) {
    if (key === 'baseStyle') {
      const style = { ...originalObject[key].style };
      delete originalObject[key].style;
      Object.assign(newObject, { ...style, ...originalObject[key] });
    } else {
      newObject[key] = originalObject[key];
    }
  }
  return newObject;
}

function removeStyle(originalObject) {
  const newObject = {};
  for (const key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      if (
        key === 'style' ||
        key === 'state' ||
        key === 'descendants' ||
        key === 'platform' ||
        key === 'colorMode'
      ) {
        Object.assign(newObject, originalObject[key]);
        Object.assign(newObject, removeStyle(newObject));
        // newObject = removeStyle(newObject);
      } else if (typeof originalObject[key] === 'object') {
        newObject[key] = removeStyle(originalObject[key]);
      } else {
        newObject[key] = originalObject[key];
      }
    }
  }
  return newObject;
}

function renamePseudoClasses(obj) {
  const renameMap = {
    indeterminate: ':indeterminate',
    checked: ':checked',
    readOnly: ':readOnly',
    required: ':required',
    invalid: ':invalid',
    focus: ':focus',
    focusVisible: ':focusVisible',
    hover: ':hover',
    pressed: ':pressed',
    active: ':active',
    loading: ':loading',
    disabled: ':disabled',
    web: '_web',
    android: '_android',
    ios: '_ios',
    light: '_light',
    dark: '_dark',
  };
  for (const key in obj) {
    if (renameMap[key]) {
      obj[renameMap[key]] = obj[key];
      delete obj[key];
      Object.assign(obj, renamePseudoClasses(obj));
    } else if (typeof obj[key] === 'object') {
      renamePseudoClasses(obj[key]);
    }
  }
  return obj;
}

var newObj = {
  baseStyle: {
    style: {
      // @ts-ignore
      fontSize: 'vvvv',
      color: `$text50`,
      borderColor: '$blue500',
      bg: '$amber500',
      w: 100,
      h: 100,
    },
    state: {
      hover: {
        style: {
          fontSize: 'sm',
        },
        state: {
          active: {
            style: {
              fontSize: 'sm',
            },
            platform: {
              web: {
                style: {
                  color: 'red',
                },
              },
            },
          },
        },
      },
      active: {
        style: {
          fontSize: 'sm',
        },
      },
    },
  },
  variants: {
    solid: {
      style: {
        color: `$text50`,
      },
      descendants: {
        _text: {
          style: {
            color: 'red',
          },
        },
      },
    },
  },
  sizes: {
    solid: {
      style: {
        color: `$text50`,
      },
    },
  },
};

// const output1 = renamePseudoClasses(newObj);
const inputObj = newObj;

const outputcc = removeVariant(inputObj);
const output2 = removeBaseStyle(outputcc);
const output3 = removeStyle(output2);
const output1 = renamePseudoClasses(output3);

// console.log(process.argv[2]);
// console.log(JSON.stringify(output1, null, 2));

// jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser
export const parser = 'tsx';

const babel = require('@babel/parser');
const generate = require('@babel/generator').default;
const babelPresetTypeScript = require('@babel/preset-typescript');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
function addQuotesToObjectKeys(code) {
  const ast = babel.parse(`var a = ${code}`, {
    presets: [babelPresetTypeScript],
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
  });
  return output;
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
function generateObjectAst(obj) {
  let properties = Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return types.objectProperty(
        types.stringLiteral(key),
        generateObjectAst(value)
      );
    } else if (typeof value === 'object' && Array.isArray(value)) {
      let elements = value.map((obj) => {
        if (typeof obj === 'string') {
          return types.stringLiteral(obj);
        } else {
          return generateObjectAst(obj);
        }
      });
      return types.objectProperty(
        types.stringLiteral(key),
        types.arrayExpression(elements)
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
  return types.objectExpression(properties);
}
// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
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
    // console.log(objectCode);
    return JSON.parse(objectCode);
  }
  return j(file.source)
    .find(j.CallExpression)
    .forEach((path) => {
      if (path.node.callee.name === 'styled') {
        let argument = path.node.arguments;
        let arg1 = argument[1];
        let inputObj = getObjectFromAstNode(arg1);
        const outputcc = removeVariant(inputObj);
        const output2 = removeBaseStyle(outputcc);
        const output3 = removeStyle(output2);
        const output1 = renamePseudoClasses(output3);
        let outputAst = generateObjectAst(output1);
        // console.log(outputAst);
        path.node.arguments[1] = outputAst;
      }
    })
    .toSource();
}

// jscodeshift -t ./transformer.js ./testcodeshift.js
