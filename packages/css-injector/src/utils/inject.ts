import React from 'react';
const rules = {} as any;
let styleSheet = {} as any;
let toBeFlushedStyles = {
  head: {},
  body: {},
} as any;

if (typeof window !== 'undefined') {
  styleSheet = (() => {
    let style = document.getElementById('cssInjectedStyle');
    if (!style) {
      style = document.createElement('style');
      style.id = 'cssInjectedStyle';
      style.appendChild(document.createTextNode(''));
      document.head.appendChild(style);
    }
    // @ts-ignore
    return style.sheet;
  })();
}

export const hasCss = (id: any, text: any) =>
  !!rules[id] && !!rules[id].text?.includes?.(text);

export const addCss = (id: any, text: any) => {
  if (!hasCss(id, text)) {
    rules[id] = rules?.[id] || {};
    rules[id].text = (rules[id]?.text || '') + text;

    if (styleSheet) {
      styleSheet.insertRule(text, Object.keys(rules).length - 1);
    }
  }
};
export const injectCss = (
  css: any,
  wrapperElementId: string,
  styleTagId: string
) => {
  // let modifiedStylesheet = {} as any;

  if (!toBeFlushedStyles[wrapperElementId]) {
    toBeFlushedStyles[wrapperElementId] = {};
  }
  if (toBeFlushedStyles[wrapperElementId][styleTagId]) {
    toBeFlushedStyles[wrapperElementId][styleTagId].push(css);
  } else {
    toBeFlushedStyles[wrapperElementId][styleTagId] = [css];
  }

  if (typeof window !== 'undefined') {
    // modifiedStylesheet = (() => {
    let style = document.getElementById(styleTagId);
    let wrapperElement = document.getElementById(wrapperElementId);

    if (!style) {
      style = document.createElement('style');
      style.id = styleTagId;
      style.appendChild(document.createTextNode(''));
      style.innerHTML = css;
      // console.log(css, style, 'KKKKKK');
    }

    if (!wrapperElement) {
      wrapperElement = document.createElement('div');
      wrapperElement.id = wrapperElementId;
      document.head.appendChild(wrapperElement);
    }

    wrapperElement.appendChild(style);
    // @ts-ignore
    // return style.sheet;
    // })();
  }

  // if (modifiedStylesheet && modifiedStylesheet.insertRule) {
  //   modifiedStylesheet.insertRule(css);
  // }
};

export const flush = () => {
  let toBeFlushedStylesGlobal = [] as any;

  Object.keys(toBeFlushedStyles.head).map((styleTagId) => {
    let rules = toBeFlushedStyles.head[styleTagId];
    toBeFlushedStylesGlobal.push(
      React.createElement('style', {
        id: styleTagId,
        key: styleTagId,
        dangerouslySetInnerHTML: {
          __html: rules.join('\n'),
        },
      })
    );
  });
  Object.keys(toBeFlushedStyles.body).map((styleTagId) => {
    let rules = toBeFlushedStyles.body[styleTagId];
    toBeFlushedStylesGlobal.push(
      React.createElement('style', {
        id: styleTagId,
        key: styleTagId,
        dangerouslySetInnerHTML: {
          __html: rules.join('\n'),
        },
      })
    );
  });
  return toBeFlushedStylesGlobal;
};
