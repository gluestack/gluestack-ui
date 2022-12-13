import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { BadgeProvider } from './BadgeContext';

const Badge = ({ children, ...props }: any, ref: any) => {
  const { StyledBadge } = React.useContext(UIContext);

  return (
    <StyledBadge ref={ref} {...props}>
      {({ resolveContextChildrenStyle }: any) => {
        return (
          <BadgeProvider
            value={{
              resolveContextChildrenStyle: resolveContextChildrenStyle,
            }}
          >
            {children}
          </BadgeProvider>
        );
      }}
    </StyledBadge>
  );
};

export default forwardRef(Badge);
