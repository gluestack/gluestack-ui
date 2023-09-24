import { createIcon as createIconUI } from '@gluestack-ui/icon';
import React, { forwardRef } from 'react';
import { StyledIcon } from './Root';
import { createIcon } from './styled-components';
// import { GenericComponentType } from '../../types';

const AccessibleIcon = createIconUI({
  Root: StyledIcon,
});

export const Icon = forwardRef(
  (
    {
      children,
      as,
      viewBox,
      ...props
    }: React.ComponentProps<typeof AccessibleIcon> & { viewBox?: string },
    ref?: any
  ) => {
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
);

export * from './Icons';
export * from './styled-components';

// export type IIconComponentType<Icon> = GenericComponentType<
//   Icon,
//   { viewBox?: string; as?: any }
// >;

// export const Icon = IconTemp as IIconComponentType<typeof AccessibleIcon>;

//type issue with icon
