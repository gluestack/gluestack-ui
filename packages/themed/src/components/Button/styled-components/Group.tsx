// @ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            px: '$3.5',
            h: '$8',
            _icon: {
              props: {
                size: '2xs',
              },
            },
            _text: {
              props: {
                size: 'xs',
              },
            },
          },
          _groupHSpacer: {
            size: '$xs',
          },
          _groupVSpacer: {
            size: '$xs',
          },
        },
        sm: {
          _button: {
            px: '$4',
            h: '$9',
            _icon: {
              props: {
                size: 'sm',
              },
            },
            _text: {
              props: {
                size: 'sm',
              },
            },
          },
          _groupHSpacer: {
            size: '$sm',
          },
          _groupVSpacer: {
            size: '$sm',
          },
        },
        md: {
          _button: {
            px: '$5',
            h: '$10',
            _icon: {
              props: {
                size: 'md',
              },
            },
            _text: {
              props: {
                size: 'md',
              },
            },
          },
          _groupHSpacer: {
            size: '$md',
          },
          _groupVSpacer: {
            size: '$md',
          },
        },
        lg: {
          _button: {
            px: '$6',
            h: '$11',
            _icon: {
              props: {
                size: 'md',
              },
            },
            _text: {
              props: {
                size: 'lg',
              },
            },
          },
          _groupHSpacer: {
            size: '$lg',
          },
          _groupVSpacer: {
            size: '$lg',
          },
        },
        xl: {
          _button: {
            px: '$7',
            h: '$12',
            _icon: {
              props: {
                size: 'lg',
              },
            },
            _text: {
              props: {
                size: 'xl',
              },
            },
          },
          _groupHSpacer: {
            size: '$xl',
          },
          _groupVSpacer: {
            size: '$xl',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'ButtonGroup',
    descendantStyle: ['_button', '_groupHSpacer', '_groupVSpacer'],
  } as const
);
