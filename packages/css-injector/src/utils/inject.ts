type IWrapperType =
  | 'global'
  | 'boot'
  | 'inline'
  | 'boot-descendant'
  | 'inline-descendant';

export const hasCss = (_id: any, _text: any) => {};

export const addCss = (_id: any, _text: any) => {};
export const injectCss = (
  _css: any,
  _wrapperType: IWrapperType,
  _styleTagId: string
) => {};
export const injectGlobalCss = (
  _css: any,
  _styleTagID: string = 'css-injected-global'
) => {};

export const flush = () => {
  return [];
};
