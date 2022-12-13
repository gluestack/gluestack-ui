import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { useBadge } from './BadgeContext';

const BadgeText = ({ children, ...props }: any, ref: any) => {
  const { resolveContextChildrenStyle } = useBadge('Badge');
  const { StyledBadgeText } = React.useContext(UIContext);

  let { ancestorStyle } = StyledBadgeText.config;
  let styledObject = {};

  ancestorStyle?.forEach((consumer: any) => {
    if (resolveContextChildrenStyle[consumer]) {
      styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
    }
  });

  return (
    <StyledBadgeText ref={ref} {...props} ancestorStyle={styledObject}>
      {children}
    </StyledBadgeText>
  );
};

export default forwardRef(BadgeText);
