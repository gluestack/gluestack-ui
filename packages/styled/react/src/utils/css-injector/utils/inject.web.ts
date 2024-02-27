import React from 'react';
import { Platform } from 'react-native';
import type { IWrapperType } from '../../../types';

// type IToBeFlushedStyles = { [key in IWrapperType]?: any };

const toBeFlushedStyles: any = {};

const order: IWrapperType[] = [
  'global',
  'forwarded-base',
  'forwarded-descendant-base',
  'forwarded-variant',
  'forwarded-descendant-variant',
  // base
  'boot-base',
  'extended-base',
  'composed-base',
  // descendant-base
  'boot-descendant-base',
  'extended-descendant-base',
  'composed-descendant-base',
  // variant
  'boot-variant',
  'extended-variant',
  'composed-variant',
  'boot-base-state',
  'extended-base-state',
  'composed-base-state',
  'boot-variant-state',
  'extended-variant-state',
  'composed-variant-state',
  // descendant-variant
  'boot-descendant-variant',
  'extended-descendant-variant',
  'composed-descendant-variant',
  'boot-descendant-base-state',
  'boot-descendant-variant-state',
  'extended-descendant-variant-state',
  'composed-descendant-base-state',
  'composed-descendant-variant-state',
  // inline
  'inline-descendant-base',
  'passing-base',
  'inline-variant',
  'inline-base',
  'inline-base-state',
];

export const orderWithCssSelectors: any = {};

order.reduce((prev: any, ele: any) => {
  const cssSelector = prev + `.gs`;
  Object.assign(orderWithCssSelectors, { [ele]: cssSelector });
  return cssSelector;
}, '');

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
  _wrapperType: IWrapperType,
  styleTagId: string,
  inlineStyleMap?: any
) => {
  if (!toBeFlushedStyles[styleTagId]) {
    toBeFlushedStyles[styleTagId] = css;
  }

  if (typeof window !== 'undefined') {
    const wrapperElement = document.querySelector(
      '#' + `${WRAPPER_BLOCK_PREFIX}`
    );
    if (wrapperElement) {
      let style = wrapperElement.querySelector(`[id='${styleTagId}']`);

      if (!style) {
        style = createStyle(styleTagId, css);
        if (inlineStyleMap && !inlineStyleMap?.initialStyleInjected) {
          inlineStyleMap.injectedCssTags.push(style);
        } else {
          // console.log('hello here >>>>');
          wrapperElement.appendChild(style);
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
  const toBeFlushedStylesGlobal: any = [];

  Object.keys(toBeFlushedStyles).forEach((styleTagId: any) => {
    //@ts-ignore
    const css = toBeFlushedStyles[styleTagId];

    toBeFlushedStylesGlobal.push(
      React.createElement('style', {
        id: styleTagId,
        key: styleTagId,
        dangerouslySetInnerHTML: {
          __html: css,
        },
      })
    );
  });

  const toBeFlushedStylesWrrapperDiv = React.createElement('div', {
    id: WRAPPER_BLOCK_PREFIX,
    children: toBeFlushedStylesGlobal,
  });

  // return an array of elements

  return [toBeFlushedStylesWrrapperDiv];
};
