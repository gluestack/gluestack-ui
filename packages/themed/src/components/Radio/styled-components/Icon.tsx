import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    'borderRadius': '$full',
    ':checked': {
      'color': '$primary600',
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
        },
      },
    },
    '_dark': {
      ':checked': {
        'color': '$primary500',
        ':disabled': {
          color: '$primary500',
        },
        ':hover': {
          ':disabled': {
            color: '$primary500',
          },
          'color': '$primary400',
        },
      },
    },
  },
  {
    componentName: 'RadioIcon',
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  } as const
);
