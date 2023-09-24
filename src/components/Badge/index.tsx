import {
  Root as AccessibleBadge,
  Icon as AccessibleBadgeIcon,
  Text as AccessibleBadgeText,
} from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType, IColorSchemes } from '../../types';

type IBadgeProps = {
  colorScheme?: IColorSchemes;
  leftIcon?: any;
  startIcon?: any;
  rightIcon?: any;
  endIcon?: any;
};

const BadgeTemp = forwardRef(
  (
    {
      colorScheme = 'success',
      children,
      leftIcon,
      rightIcon,
      startIcon,
      endIcon,
      ...props
    }: any,
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

export type IBadgeComponentType<Badge> = GenericComponentType<
  Badge,
  IBadgeProps
>;

export const Badge = BadgeNew as IBadgeComponentType<typeof AccessibleBadge>;
