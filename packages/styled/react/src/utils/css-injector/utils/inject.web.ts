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
  'inline-base-state': {},
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
  'inline-base-state',
];

const WRAPPER_BLOCK_PREFIX = 'gs-injected';

if (typeof window !== 'undefined') {
  //TODO: remvoe platform dependency
  // Test on all the platforms
  if (Platform.OS === 'web') {
    // create a wrapper div for all injected styles

    // append this wrapper div in
    let wrapperBlockDiv = document.getElementById(WRAPPER_BLOCK_PREFIX);

    if (!wrapperBlockDiv) {
      const createdWrapperBlockDiv = document.createElement('div');
      createdWrapperBlockDiv.id = WRAPPER_BLOCK_PREFIX;
      wrapperBlockDiv = document.head.appendChild(createdWrapperBlockDiv);
    }

    // document.head

    order.forEach((orderKey) => {
      let wrapperElement = document.getElementById(
        `${WRAPPER_BLOCK_PREFIX}-${orderKey}`
      );
      if (!wrapperElement) {
        wrapperElement = document.createElement('div');
        wrapperElement.id = `${WRAPPER_BLOCK_PREFIX}-${orderKey}`;

        wrapperBlockDiv?.appendChild(wrapperElement);
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
  styleTagId: string,
  inlineStyleMap?: any,
  id?: any
) => {
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
      '#' + `${WRAPPER_BLOCK_PREFIX}-${wrapperType}`
    );
    if (wrapperElement) {
      let style = wrapperElement.querySelector(`[id='${styleTagId}']`);

      if (!style) {
        style = createStyle(styleTagId, css);
        // console.log(inlineStyleMap, 'append child here >>>>>');
        if (inlineStyleMap) {
          if (!inlineStyleMap?.initialStyleInjected) {
            const styleMapId = `${WRAPPER_BLOCK_PREFIX}-${wrapperType}`;
            const inlineMapStyles = inlineStyleMap[styleMapId];

            if (inlineMapStyles) {
              inlineMapStyles[id] = style;
            } else {
              inlineStyleMap[styleMapId] = [];
              inlineStyleMap[styleMapId][id] = style;
            }
            // console.log('hello here >>>> there');
          } else {
            // console.log('hello here >>>>');
            wrapperElement.appendChild(style);
          }
        }
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

export const flush = (): Array<any> => {
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
          id: `${WRAPPER_BLOCK_PREFIX}-${orderKey}`,
          key: `${WRAPPER_BLOCK_PREFIX}-${orderKey}`,
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

  // create a wrapper div that contains all injected style

  // return wrapper div

  const toBeFlushedStylesWrrapperDiv = React.createElement('div', {
    id: WRAPPER_BLOCK_PREFIX,
    children: toBeFlushedStylesGlobal,
  });

  // return an array of elements

  return [toBeFlushedStylesWrrapperDiv];
};
