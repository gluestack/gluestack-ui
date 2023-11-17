/* eslint-disable no-console */
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
      ab,
      ...props
    }: React.ComponentProps<typeof AccessibleIcon> & { viewBox?: string },
    ref?: any
  ) => {
    console.log(ab);
    const resolvedProps = usePropResolution(props);
    let IconForward: any;
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
    const isJSX = React.isValidElement(IconForward);
    if (isJSX) {
      const NewComp = () => {
        return React.cloneElement(as, {
          color: 'blue',
          // ...resolvedProps,
          // //@ts-ignore
          // ...as.props,
        });
      };
      // return <NewComp />;
      return <AccessibleIcon as={NewComp} color="red" ref={ref} />;
    }
    return <AccessibleIcon as={IconForward} {...resolvedProps} ref={ref} />;
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
