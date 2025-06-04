import { I18nManager } from 'react-native';

export const attachEventHandlersOnRef = (props: any, ref: any) => {
  if (ref && ref.current) {
    for (let key in props) {
      if (key.startsWith('on')) {
        ref.current[key.toLowerCase()] = props[key];
      }
    }
  }
};

export const getLabel = (props: any) => {
  let label = props['aria-label'];

  if (!label) {
    label = typeof props.label === 'string' ? props.label : undefined;
  }

  return label;
};

export * from './ariaToAccessibilityMap';
export {
  useId,
  useLayoutEffect,
  mergeIds,
  mergeProps,
} from '@react-aria/utils';
export { SSRProvider, useIsSSR } from '@react-aria/ssr';

export const isRTL = (): any => {
  // To support previous RN versions. Newer versions use below getConstants()
  if (I18nManager.isRTL !== undefined) {
    return I18nManager.isRTL;
  }

  // @ts-ignore - RN web only
  if (I18nManager.getConstants) {
    // @ts-ignore - RN web only
    return I18nManager.getConstants().isRTL;
  }
};
