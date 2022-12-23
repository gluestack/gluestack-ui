import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        width: '100%',
        justifyContent: 'flex-start',
        p: '$4',
        flexDirection: 'row',
        alignItems: 'center',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
            userSelect: 'none',
          },
        },
      },
      state: {
        disabled: {
          descendants: {
            _text: {
              style: {
                opacity: 0.4,
              },
            },
          },
        },
        hover: {
          style: {
            bg: '$muted100',
          },
        },
        active: {
          style: {
            bg: '$muted200',
          },
        },
        focusVisible: {
          style: {
            bg: '$muted300',
          },
          platform: {
            web: {
              style: {
                //@ts-ignore
                outline: 'none',
              },
            },
          },
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  },
  config
);
