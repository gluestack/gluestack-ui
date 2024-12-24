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
