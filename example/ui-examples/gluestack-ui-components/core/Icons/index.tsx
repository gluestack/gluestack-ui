import { createIcon } from '@gluestack-ui/icon';
import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../styled';

const StyledIcon: any = styled(
  AsForwarder,
  {
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        xs: {
          h: 12,
          w: 12,
        },
        sm: {
          h: 16,
          w: 16,
        },
        md: {
          h: 18,
          w: 18,
        },
        lg: {
          h: 20,
          w: 20,
        },
        xl: {
          h: 24,
          w: 24,
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export const Icon = createIcon({
  Root: StyledIcon,
});

export * from './Icons';
