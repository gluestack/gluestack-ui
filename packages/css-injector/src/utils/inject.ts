import React from 'react';
const rules = {} as any;
let styleSheet = {} as any;

type IWrapperType = 'boot' | 'inline' | 'boot-descendant' | 'inline-descendant';

type IToBeFlushedStyles = { [key in IWrapperType]?: any };

const toBeFlushedStyles: IToBeFlushedStyles = {
  'boot': {},
  'boot-descendant': {},
  'inline': {},
  'inline-descendant': {},
};

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
  wrapperType: IWrapperType,
  styleTagId: string
) => {
  // let modifiedStylesheet = {} as any;

  if (!toBeFlushedStyles[wrapperType]) {
    toBeFlushedStyles[wrapperType] = {};
  }
  if (toBeFlushedStyles[wrapperType][styleTagId]) {
    // toBeFlushedStyles[wrapperType][styleTagId].push(css);
  } else {
    toBeFlushedStyles[wrapperType][styleTagId] = [css];
  }

  if (typeof window !== 'undefined') {
    const styleTag = document.getElementById(styleTagId);

    if (!styleTag) {
      // inject(`@media screen {${toBeInjectedCssRules}}`, type, styleTagId);
      // modifiedStylesheet = (() => {
      let style = document.getElementById(styleTagId);
      let wrapperElement = document.getElementById(wrapperType);

      if (!style) {
        style = document.createElement('style');
        style.id = styleTagId;
        style.appendChild(document.createTextNode(''));
        style.innerHTML = css;
        // console.log(css, style, 'KKKKKK');
      }

      if (!wrapperElement) {
        wrapperElement = document.createElement('div');
        wrapperElement.id = wrapperType;
        document.head.appendChild(wrapperElement);
      }

      wrapperElement.appendChild(style);
    }
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

  const order: IWrapperType[] = [
    'boot',
    'boot-descendant',
    'inline',
    'inline-descendant',
  ];

  order.forEach((orderKey) => {
    const styleChildren: any = [];
    Object.keys(toBeFlushedStyles[orderKey]).forEach((styleTagId) => {
      let rules = toBeFlushedStyles[orderKey][styleTagId];
      styleChildren.push(
        React.createElement('style', {
          id: styleTagId,
          key: styleTagId,
          dangerouslySetInnerHTML: {
            __html: rules.join('\n'),
          },
        })
      );
    });

    toBeFlushedStylesGlobal.push(
      React.createElement(
        'div',
        {
          id: orderKey,
          key: orderKey,
        },
        styleChildren
      )
    );
  });
  // Object.keys(toBeFlushedStyles).map(() => {

  // })

  // Object.keys(toBeFlushedStyles['boot']).map((styleTagId) => {
  //   let rules = toBeFlushedStyles['boot'][styleTagId];
  //   toBeFlushedStylesGlobal.push(
  //     React.createElement('style', {
  //       id: styleTagId,
  //       key: styleTagId,
  //       dangerouslySetInnerHTML: {
  //         __html: rules.join('\n'),
  //       },
  //     })
  //   );
  // });
  // Object.keys(toBeFlushedStyles['inline']).map((styleTagId) => {
  //   let rules = toBeFlushedStyles['inline'[styleTagId];
  //   toBeFlushedStylesGlobal.push(
  //     React.createElement('style', {
  //       id: styleTagId,
  //       key: styleTagId,
  //       dangerouslySetInnerHTML: {
  //         __html: rules.join('\n'),
  //       },
  //     })
  //   );
  // });
  return toBeFlushedStylesGlobal;
};
