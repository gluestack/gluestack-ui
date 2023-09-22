import {
  Root,
  Icon as AccessibleBadgeIcon,
  Text as AccessibleBadgeText,
} from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

const AccessibleBadge = Root;

type RootProps = React.ComponentProps<typeof AccessibleBadge>;
type IconProps = React.ComponentProps<typeof AccessibleBadgeIcon>;

export const Badge = forwardRef(
  (
    {
      // Todo: fix this typing
      // @ts-ignore
      colorScheme = 'success',
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
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleBadge
        colorScheme={colorScheme}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {leftIcon ? (
          <AccessibleBadgeIcon as={leftIcon} />
        ) : (
          startIcon && <AccessibleBadgeIcon as={startIcon} />
        )}
        {typeof children === 'string' && (
          <AccessibleBadgeText>{children}</AccessibleBadgeText>
        )}
        {rightIcon ? (
          <AccessibleBadgeIcon as={rightIcon} />
        ) : (
          endIcon && <AccessibleBadgeIcon as={endIcon} />
        )}
      </AccessibleBadge>
    );
  }
);
