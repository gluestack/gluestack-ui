import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '$trueGray300',
        flex: 1,
        w: '100%',
        h: '100%',
        py: 8,
        px: 12,
      },
      state: {
        hover: {
          style: {
            borderColor: '$primary600',
          },
        },
        focusvisible: {
          style: {
            borderColor: '$red600',
          },
        },
        disabled: {
          style: { bg: '$muted100' },
          // placeholderTextColor: '$muted700', color token is not getting resolved
        },
        invalid: {
          style: {
            borderColor: '$error600',
          },
        },
        active: {
          style: {
            // borderColor: '$primary600',
            boxShadow: '0 0 0 1px #9333ea',
            // outline: 2,
            // shadowColor: '$green500',
            // shadowOffset: { width: 0, height: 10 },
          },
        },
      },
    },
    sizes: {
      '2xl': {
        style: { fontSize: 22 },
        descendants: {
          _itemList: { style: { fontSize: 22 } },
        },
      },
      'xl': {
        style: { fontSize: 20 },
        descendants: {
          _itemList: { style: { fontSize: 20 } },
        },
      },
      'lg': {
        style: { fontSize: 18 },
        descendants: {
          _itemList: { style: { fontSize: 18 } },
        },
      },
      'md': {
        descendants: {
          _itemList: { style: { fontSize: 16 } },
        },
      },
      'sm': {
        descendants: {
          _itemList: { style: { fontSize: 14 } },
        },
      },
      'xs': {
        descendants: {
          _itemList: { style: { fontSize: 12 } },
        },
      },
    },
  },
  {
    descendentStyle: ['_itemList'],
  }
);
