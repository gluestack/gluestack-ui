import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    alignSelf: 'flex-start',
    width: '$full',
    variants: {
      type: {
        pill: {
          _tab: {
            props: {
              type: 'pill',
            },
          },
          _tabList: {
            bg: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%) , rgba(255, 255, 255, 0.04);',
            rounded: '$full',
          },
        },
        section: {
          _tab: {
            props: {
              type: 'section',
            },
          },
          _tabList: {
            borderBottomWidth: 1,
            borderColor: '$borderLight200',
            _dark: {
              borderColor: '$borderDark800',
            },
          },
        },
      },
    },
    defaultProps: {
      type: 'pill',
    },
  },
  {
    descendantStyle: ['_tabList', '_tab'],
  }
);
