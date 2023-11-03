import {
  Root as AccessibleBadge,
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
      colorScheme = 'muted',
      variant = 'subtle',
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
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {leftIcon ? leftIcon : startIcon && startIcon}
        {typeof children === 'string' && (
          <AccessibleBadgeText>{children}</AccessibleBadgeText>
        )}
        {rightIcon ? rightIcon : endIcon && endIcon}
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
