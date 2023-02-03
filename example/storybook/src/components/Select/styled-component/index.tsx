import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Select = styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'borderRadius': 4,
    'borderWidth': 1,
    'borderColor': '$trueGray300',
    'w': '50%',
    'py': 8,
    'px': 12,

    'variants': {
      size: {
        '2xl': {
          fontSize: 22,

          _itemList: {
            fontSize: 22,
          },
        },

        'xl': {
          fontSize: 20,

          _itemList: {
            fontSize: 20,
          },
        },

        'lg': {
          fontSize: 18,

          _itemList: {
            fontSize: 18,
          },
        },

        'md': {
          _itemList: {
            fontSize: 16,
          },
        },

        'sm': {
          _itemList: {
            fontSize: 14,
          },
        },

        'xs': {
          _itemList: {
            fontSize: 12,
          },
        },
      },
    },

    ':hover': {
      borderColor: '$primary600',
    },

    ':disabled': {
      bg: '$muted100',
    },

    ':invalid': {
      borderColor: '$error600',
    },

    ':active': {
      'outlineWidth': 0,
      'outline': 'none',
      'boxShadow': '0 0 0 1px #9333ea',
      'borderColor': '$primary600',

      ':invalid': {
        boxShadow: '0 0 0 1px red',
      },
    },

    '_dark': {
      ':hover': {
        borderColor: '$primary500',
      },

      ':disabled': {
        bg: '$muted800',
        opacity: 0.8,
      },
      ':invalid': {
        borderColor: '$error500',
      },
      ':active': {
        'boxShadow': '0 0 0 1px #a855f7',
        ':invalid': {
          boxShadow: '0 0 0 1px red',
        },
      },
    },
  },
  {
    descendantStyle: ['_itemList'],
  }
);

export { Select as Root };
export { default as Item } from './Item';
export { default as ItemList } from './ItemList';
export { default as Icon } from './Icon';
export { default as IconStyled } from './IconStyled';
export default Select;
