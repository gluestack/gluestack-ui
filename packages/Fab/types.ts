import type { MutableRefObject } from 'react';

export type IFabComponentType = ((
  props: any & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
