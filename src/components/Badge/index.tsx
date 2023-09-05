import { Root, Icon, Text } from './styled-components';
// import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

const AccessibleBadge: any = Root;
AccessibleBadge.Icon = Icon;
AccessibleBadge.Text = Text;

type RootProps = React.ComponentProps<typeof Root>;
type IconProps = React.ComponentProps<typeof Icon>;

export const Badge = forwardRef(
  (
    {
      children,
      leftIcon,
      rightIcon,
      startIcon,
      endIcon,
      ...props
    }: RootProps & {
      leftIcon?: IconProps;
      startIcon?: IconProps;
      rightIcon?: IconProps;
      endIcon?: IconProps;
    },
    ref?: any
  ) => {
    // const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleBadge {...props} ref={ref}>
        {leftIcon ? (
          <AccessibleBadge.Icon as={leftIcon} />
        ) : (
          startIcon && <AccessibleBadge.Icon as={startIcon} />
        )}
        {typeof children === 'string' && (
          <AccessibleBadge.Text>{children}</AccessibleBadge.Text>
        )}
        {rightIcon ? (
          <AccessibleBadge.Icon as={rightIcon} />
        ) : (
          endIcon && <AccessibleBadge.Icon as={endIcon} />
        )}
      </AccessibleBadge>
    );
  }
);
