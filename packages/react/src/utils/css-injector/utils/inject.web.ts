import React from 'react';
import { Platform } from 'react-native';
import type { IWrapperType } from '../../../types';

type IToBeFlushedStyles = { [key in IWrapperType]?: any };

const toBeFlushedStyles: IToBeFlushedStyles = {
  'global': {},
  'forwarded-base': {},
  'forwarded-descendant-base': {},
  'forwarded-variant': {},
  'forwarded-descendant-variant': {},
  //base
  'boot-base': {},
  'extended-base': {},
  'boot-base-state': {},
  'extended-base-state': {},
  // descendant-base
  'boot-descendant-base': {},
  'extended-descendant-base': {},
  'boot-descendant-base-state': {},
  'extended-descendant-base-state': {},
  // variant
  'boot-variant': {},
  'extended-variant': {},
  'boot-variant-state': {},
  'extended-variant-state': {},
  // descendant-variant
  'boot-descendant-variant': {},
  'extended-descendant-variant': {},
  'boot-descendant-variant-state': {},
  'extended-descendant-variant-state': {},
  // inline
  'passing-base': {},
  'inline-base': {},
  'inline-variant': {},
  'inline-descendant-base': {},
};

const order: IWrapperType[] = [
  'global',
  'forwarded-base',
  'forwarded-descendant-base',
  'forwarded-variant',
  'forwarded-descendant-variant',
  // base
  'boot-base',
  'extended-base',
  'boot-base-state',
  'extended-base-state',
  // descendant-base
  'boot-descendant-base',
  'extended-descendant-base',
  'boot-descendant-base-state',
  'extended-descendant-base-state',
  // variant
  'boot-variant',
  'extended-variant',
  'boot-variant-state',
  'extended-variant-state',
  // descendant-variant
  'boot-descendant-variant',
  'extended-descendant-variant',
  'boot-descendant-variant-state',
  'extended-descendant-variant-state',
  // inline
  'inline-descendant-base',
  'passing-base',
  'inline-variant',
  'inline-base',
];

if (typeof window !== 'undefined') {
  //TODO: remvoe platform dependency
  // Test on all the platforms
  if (Platform.OS === 'web') {
    order.forEach((orderKey) => {
      let wrapperElement = document.getElementById(
        `gluestack-style-injected-styles-${orderKey}`
      );
      if (!wrapperElement) {
        wrapperElement = document.createElement('div');
        wrapperElement.id = `gluestack-style-injected-styles-${orderKey}`;
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
    let wrapperElement = document.querySelector(
      '#' + `gluestack-style-injected-styles-${wrapperType}`
    );
    if (wrapperElement) {
      let style = wrapperElement.querySelector(`[id='${styleTagId}']`);

      if (!style) {
        style = createStyle(styleTagId, css);
        // wrapperElement.insertBefore(style, wrapperElement.firstChild);
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
          id: `gluestack-style-injected-styles-${orderKey}`,
          key: `gluestack-style-injected-styles-${orderKey}`,
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
