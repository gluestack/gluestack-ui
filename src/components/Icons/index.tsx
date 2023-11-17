import { createIcon as createIconUI } from '@gluestack-ui/icon';
import React, { cloneElement, forwardRef, isValidElement } from 'react';
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
    let IconForward: any;
    let ClonedIcon: any;
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
    const isJSX = isValidElement(IconForward) ?? false;
    if (isJSX) {
      ClonedIcon = (propsResolved: any) => {
        return cloneElement(IconForward, {
          ...propsResolved,
        });
      };
    }
    return (
      <AccessibleIcon
        as={ClonedIcon ?? IconForward}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

export * from './Icons';

export type IIconComponentType<Icon> = GenericComponentType<
  Icon,
  {},
  { viewBox?: string; as?: any }
>;

export const Icon = IconTemp as IIconComponentType<typeof Root>;

export { createIcon };
