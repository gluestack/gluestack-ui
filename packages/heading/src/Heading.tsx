import React, { forwardRef } from 'react';
import type { TextProps } from 'react-native';

function Heading<StyledHeadingProps>(
  StyledHeading: React.ComponentType<StyledHeadingProps>
) {
  return forwardRef(
    ({ children, ...props }: StyledHeadingProps & TextProps, ref: any) => {
      return (
        <StyledHeading ref={ref} {...(props as StyledHeadingProps)}>
          {children}
        </StyledHeading>
      );
    }
  );
}
export default Heading;
