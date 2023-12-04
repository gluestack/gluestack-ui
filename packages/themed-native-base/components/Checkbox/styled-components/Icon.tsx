import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    // @ts-ignore
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    ':checked': {
      color: `$muted.50`,
    },
    ':disabled': {
      opacity: 0.4,
    },
    '_dark': {
      ':checked': {
        color: `muted.900`,
      },
      ':disabled': {
        opacity: 0.4,
      },
    },
    'variants': {
      size: {
        xs: {
          height: 12,
          width: 12,
        },
        sm: {
          height: 16,
          width: 16,
        },
        md: {
          height: 18,
          width: 18,
        },
        lg: {
          height: 20,
          width: 20,
        },
        xl: {
          height: 24,
          width: 24,
        },
      },
    },
  },
  {
    componentName: 'CheckboxIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
