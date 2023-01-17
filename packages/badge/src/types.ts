import type { MutableRefObject } from 'react';

export type IBadgeComponentType<
  StyledBadgeProps,
  StyledBadgeTextProps,
  StyledBadgeIconProps
> = ((
  props: StyledBadgeProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  // Group: React.MemoExoticComponent<
  //   (
  //     props: B & IButtonGroupProps & { ref?: MutableRefObject<any> }
  //   ) => JSX.Element
  // >;
  Text: React.MemoExoticComponent<
    (
      props: StyledBadgeTextProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (
      props: StyledBadgeIconProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
