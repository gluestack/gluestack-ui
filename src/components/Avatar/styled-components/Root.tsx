import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    // @ts-ignore
    borderRadius: '$full',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '$gray.400',
    variants: {
      withBadge: {},
      size: {
        'xs': {
          width: '$6',
          height: '$6',

          _badge: {
            width: '$2',
            height: '$2',
          },

          _text: {
            // @ts-ignore
            fontSize: '$2xs',
          },
        },

        'sm': {
          width: '$8',
          height: '$8',

          _badge: {
            width: '$2',
            height: '$2',
          },

          _text: {
            // @ts-ignore
            fontSize: '$xs',
          },
        },

        'md': {
          width: '$12',
          height: '$12',

          _badge: {
            width: '$3',
            height: '$3',
          },

          _text: {
            // @ts-ignore
            fontSize: '$md',
          },
        },

        'lg': {
          width: '$16',
          height: '$16',

          _badge: {
            width: '$4',
            height: '$4',
          },

          _text: {
            // @ts-ignore
            fontSize: '$xl',
          },
        },

        'xl': {
          width: '$24',
          height: '$24',

          _badge: {
            width: '$6',
            height: '$6',
          },

          _text: {
            // @ts-ignore
            fontSize: '$3xl',
          },
        },

        '2xl': {
          width: '$32',
          height: '$32',

          _badge: {
            width: '$8',
            height: '$8',
          },

          _text: {
            // @ts-ignore
            fontSize: '$5xl',
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'Avatar',
    descendantStyle: ['_badge', '_text'],
    ancestorStyle: ['_avatar'],
  } as const
);
