import type { MutableRefObject } from 'react';

export type IIconButtonComponentType = ((
  props: any & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Text: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Spinner: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
