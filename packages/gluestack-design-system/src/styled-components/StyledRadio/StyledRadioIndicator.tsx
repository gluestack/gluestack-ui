import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'transparent',
        borderColor: '$muted400',
        ml: '$2',
        borderWidth: 2,
        borderRadius: 999,
      },
      platform: {
        web: {
          state: {
            focusVisible: {
              style: {
                //@ts-ignore
                outlineWidth: '2px',
                outlineColor: '$primary400',
                outlineStyle: 'solid',
              },
            },
          },
        },
      },
      state: {
        hover: {
          style: {
            borderColor: '$muted500',
          },
          state: {
            disabled: {
              style: { borderColor: '$muted400' },
            },
            checked: {
              style: { borderColor: '$primary600' },
            },
          },
        },
        disabled: {
          style: {
            opacity: 0.6,
          },
        },
        invalid: {
          style: {
            borderColor: '$error600',
          },
        },
        checked: {
          style: {
            borderColor: '$primary600',
          },
          state: {
            hover: {
              style: {
                borderColor: '$primary700',
              },
              state: {
                disabled: {
                  style: {
                    borderColor: '$primary600',
                  },
                },
              },
            },
            disabled: {
              style: {
                borderColor: '$primary600',
              },
            },
          },
        },
      },
      colorMode: {
        dark: {
          style: {
            borderColor: '$muted500',
            bg: '$muted.900',
          },
          state: {
            hover: {
              style: {
                borderColor: '$muted400',
              },
              state: {
                disabled: {
                  style: { borderColor: '$muted500' },
                },
                checked: {
                  style: { borderColor: '$primary600' },
                },
              },
            },
            disabled: {
              style: {
                opacity: 0.6,
              },
            },
            invalid: {
              style: {
                borderColor: '$error500',
              },
            },
            checked: {
              style: {
                borderColor: '$primary600',
              },
              state: {
                hover: {
                  style: {
                    borderColor: '$primary700',
                  },
                  state: {
                    disabled: {
                      style: {
                        borderColor: '$primary600',
                      },
                    },
                  },
                },
                disabled: {
                  style: {
                    borderColor: '$primary600',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_indicator'],
  }
);
