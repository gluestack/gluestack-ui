import React from 'react';

const rules = {} as any;
let styleSheet = {} as any;

if (typeof window !== 'undefined') {
  styleSheet = (() => {
    const style = document.createElement('style');
    style.id = 'cssInjectedStyle';
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
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

export const flush = () =>
  React.createElement('style', {
    id: 'cssInjected',
    key: 'cssInjected',
    dangerouslySetInnerHTML: {
      __html: Object.keys(rules)
        .map((key) => rules[key].text)
        .join('\n'),
    },
  });
