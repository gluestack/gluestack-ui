// @ts-nocheck
import { styled } from '../../styled';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    ':checked': {
      color: '$backgroundLight0',
    },
    ':disabled': {
      opacity: 0.4,
    },
    '_dark': {
      ':checked': {
        color: '$backgroundDark0',
      },
      ':disabled': {
        opacity: 0.4,
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
