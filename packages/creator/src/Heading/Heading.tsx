import React, { forwardRef } from 'react';

const Heading = (StyledHeading: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledHeading ref={ref} {...props}>
        {children}
      </StyledHeading>
    );
  });

export default Heading;
