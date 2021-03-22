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
  let label = props.accessibilityLabel ?? props['aria-label'];

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
