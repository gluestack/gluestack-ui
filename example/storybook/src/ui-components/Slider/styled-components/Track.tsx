import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    bg: '$backgroundLight300',
    _dark: {
      bg: '$backgroundDark700',
    },
    borderRadius: '$lg',
    overflow: 'hidden',
    variants: {
      variant: {
        horizontal: {
          width: '100%',
        },
        vertical: {
          height: '100%',
        },
      },

      sliderSize: {
        sm: {},
        md: {},
        lg: {},
      },
    },

    compoundVariants: [
      {
        sliderSize: 'sm',
        variant: 'horizontal',
        value: {
          height: '$2',
        },
      },
      {
        sliderSize: 'md',
        variant: 'horizontal',
        value: {
          height: '$3',
        },
      },
      {
        sliderSize: 'lg',
        variant: 'horizontal',
        value: {
          height: '$4',
        },
      },
      {
        sliderSize: 'sm',
        variant: 'vertical',
        value: {
          width: '$2',
        },
      },
      {
        sliderSize: 'md',
        variant: 'vertical',
        value: {
          width: '$3',
        },
      },
      {
        sliderSize: 'lg',
        variant: 'vertical',
        value: {
          width: '$4',
        },
      },
    ],
  },
  {}
);
