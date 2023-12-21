type IWrapperType =
  | 'global'
  | 'boot'
  | 'inline'
  | 'boot-descendant'
  | 'inline-descendant';

export const WRAPPER_BLOCK_PREFIX = 'gs-injected';

export const hasCss = (_id: any, _text: any) => {};

export const toBeFlushedStyles: any = {
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

export const order: any[] = [
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

export const orderWithCssSelectors: any = {};

order.reduce((prev: any, ele: any) => {
  const cssSelector = prev + `.${ele}`;
  Object.assign(orderWithCssSelectors, { [ele]: cssSelector });
  return cssSelector;
}, '');

export const addCss = (_id: any, _text: any) => {};

export const injectCss = (
  _css: any,
  _wrapperType: IWrapperType,
  _styleTagId: string,
  _inlineStyleMap?: any,
  _id?: any
) => {};
export const injectGlobalCss = (
  _css: any,
  _styleTagID: string = 'css-injected-global'
) => {};

export const flush = () => {
  return [];
};
