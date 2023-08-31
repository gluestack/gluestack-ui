import { createIcon as createIconUI } from '@gluestack-ui/icon';
import React, { forwardRef } from 'react';
import { StyledIcon } from './Root';
import { createIcon } from './styled-components';

export const AccessibleIcon = createIconUI({
  Root: StyledIcon,
});

export const Icon = forwardRef(
  ({ children, as, viewBox, ...props }: any, ref?: any) => {
    let IconForward;
    if (as) {
      IconForward = as;
    } else if (typeof viewBox === 'string') {
      const NewIcon = createIcon({
        viewBox: viewBox,
        path: children,
      });
      IconForward = NewIcon;
    } else if (children) {
      IconForward = children;
    }
    return <AccessibleIcon as={IconForward} {...props} ref={ref} />;
  }
) as typeof AccessibleIcon;

export * from './Icons';
export * from './styled-components';
