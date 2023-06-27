import React from 'react';
import { Platform } from 'react-native';

type IWrapperType =
  | 'global'
  | 'boot-base'
  | 'boot-descendant-base'
  | 'boot-variant'
  | 'boot-descendant-variant'
  | 'inline-base'
  | 'inline-variant'
  | 'boot-descendant'
  | 'inline-descendant';

type IToBeFlushedStyles = { [key in IWrapperType]?: any };

const toBeFlushedStyles: IToBeFlushedStyles = {
  'global': {},
  'boot-base': {},
  'boot-descendant-base': {},
  'boot-variant': {},
  'boot-descendant-variant': {},
  'inline-base': {},
  'inline-variant': {},
  'inline-descendant': {},
};

const order: IWrapperType[] = [
  'global',
  'boot-base',
  'boot-descendant-base',
  'boot-variant',
  'boot-descendant-variant',
  'inline-descendant',
  'inline-variant',
  'inline-base',
];

if (typeof window !== 'undefined') {
  //TODO: remvoe platform dependency
  // Test on all the platforms
  if (Platform.OS === 'web') {
    order.forEach((orderKey) => {
      let wrapperElement = document.getElementById(orderKey);
      if (!wrapperElement) {
        wrapperElement = document.createElement('div');
        wrapperElement.id = orderKey;
        document.head.appendChild(wrapperElement);
      }
    });
  }
}

const createStyle = (styleTagId: any, css: any) => {
  //
  let style = document.createElement('style');
  style.id = styleTagId;
  style.appendChild(document.createTextNode(''));
  style.innerHTML = css;
  return style;
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
    let wrapperElement = document.querySelector('#' + wrapperType);

    if (wrapperElement) {
      let style = wrapperElement.querySelector(`[id='${styleTagId}']`);

      if (!style) {
        style = createStyle(styleTagId, css);
        wrapperElement.appendChild(style);
      }
    }
  }

  // if (modifiedStylesheet && modifiedStylesheet.insertRule) {
  //   modifiedStylesheet.insertRule(css);
  // }
};
export const injectGlobalCss = (
  css: any,
  styleTagID: string = 'css-injected-global'
) => {
  injectCss(css, 'global', styleTagID);
};

export const flush = () => {
  let toBeFlushedStylesGlobal = [] as any;

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
