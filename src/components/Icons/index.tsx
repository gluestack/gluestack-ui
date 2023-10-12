import { createIcon as createIconUI } from '@gluestack-ui/icon';
import React, { forwardRef } from 'react';
import { createIcon, Root } from './styled-components';
import { GenericComponentType } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleIcon = createIconUI({
  Root: Root,
});

const IconTemp = forwardRef(
  (
    {
      children,
      as,
      viewBox,
      ...props
    }: React.ComponentProps<typeof AccessibleIcon> & { viewBox?: string },
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    let IconForward;
    let sizeProp = {};
    if (typeof props.size === 'number') {
      sizeProp = { h: props.size, w: props.size };
    }
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
    return (
      <AccessibleIcon
        as={IconForward}
        {...resolvedProps}
        {...sizeProp}
        ref={ref}
      />
    );
  }
);

export * from './Icons';

export type IIconComponentType<Icon> = GenericComponentType<
  Icon,
  { viewBox?: string; as?: any }
>;

export const Icon = IconTemp as IIconComponentType<typeof Root>;

export { createIcon };
