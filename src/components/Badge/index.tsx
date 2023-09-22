import {
  Root,
  Icon as AccessibleBadgeIcon,
  Text as AccessibleBadgeText,
} from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';

const AccessibleBadge = Root;

type RootProps = React.ComponentProps<typeof AccessibleBadge>;

const BadgeTemp = forwardRef(
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
      leftIcon?: any;
      startIcon?: any;
      rightIcon?: any;
      endIcon?: any;
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

const BadgeNew = BadgeTemp as any;

export type IBadgeComponentType<Badge> = GenericComponentType<Badge>;

export const Badge = BadgeNew as IBadgeComponentType<typeof BadgeTemp>;
