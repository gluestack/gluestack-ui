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
  styleTagId: string,
  location: 'head' | 'body' = 'head'
) => {
  let modifiedStylesheet = {} as any;

  if (toBeFlushedStyles[location][styleTagId]) {
    toBeFlushedStyles[location][styleTagId].push(css);
  } else {
    toBeFlushedStyles[location][styleTagId] = [css];
  }

  if (typeof window !== 'undefined') {
    modifiedStylesheet = (() => {
      let style = document.getElementById(styleTagId);
      if (!style) {
        style = document.createElement('style');
        style.id = styleTagId;
        style.appendChild(document.createTextNode(''));

        if (location === 'body') {
          document.body.appendChild(style);
        } else {
          document.head.appendChild(style);
        }
      }
      // @ts-ignore
      return style.sheet;
    })();
  }
  if (modifiedStylesheet && modifiedStylesheet.insertRule) {
    modifiedStylesheet.insertRule(css);
  }
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
