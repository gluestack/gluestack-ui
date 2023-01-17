import type { MutableRefObject } from 'react';

export type IFabComponentType<StyledFab, StyledFabLabel> = ((
  props: StyledFab & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: StyledFabLabel & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
