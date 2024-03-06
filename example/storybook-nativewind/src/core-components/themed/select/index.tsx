import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import {
  AnimatePresence,
  AnimatedPressable,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { styled, AsForwarder } from '@gluestack-style/react';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import { createSelect } from '@gluestack-ui/select';
import { TextInput } from 'react-native';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
} from 'react-native';

const StyledRoot = styled(View, {
  width: '$full',
  height: '$full',
  _web: {
    pointerEvents: 'none',
  },
});

const StyledContent = styled(
  AnimatedView,
  {
    alignItems: 'center',
    borderTopLeftRadius: '$3xl',
    borderTopRightRadius: '$3xl',
    h: '$full',
    p: '$2',
    bg: '$background0',

    _sectionHeaderBackground: {
      bg: '$background0',
    },

    defaultProps: {
      hardShadow: '5',
    },

    _web: {
      userSelect: 'none',
      pointerEvents: 'auto',
    },
  },
  {
    descendantStyle: ['_sectionHeaderBackground'],
  }
);

const StyledItem = styled(
  Pressable,
  {
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    'rounded': '$sm',
    'w': '$full',

    ':disabled': {
      opacity: 0.4,
      _web: {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },

    ':hover': {
      bg: '$background50',
    },

    ':active': {
      bg: '$background100',
    },

    ':focus': {
      bg: '$background100',
    },

    '_web': {
      ':focusVisible': {
        bg: '$background100',
      },
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  }
);
const StyledText = styled(
  Text,
  {
    color: '$text700',
    flex: 1,
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);

const StyledItemText = styled(
  StyledText,
  {
    mx: '$2',
    props: {
      size: 'md',
    },
    color: '$text800',
  },
  {
    ancestorStyle: ['_text'],
  }
);

const StyledDragIndicator = styled(View, {
  w: '$16',
  h: '$1',
  bg: '$background400',
  rounded: '$full',
});

const StyledDragIndicatorWrapper = styled(View, {
  py: '$1',
  w: '$full',
  alignItems: 'center',
});

const StyledBackdrop = styled(AnimatedPressable, {
  ':initial': {
    opacity: 0,
  },

  ':animate': {
    opacity: 0.5,
  },

  ':exit': {
    opacity: 0,
  },

  'position': 'absolute',
  'left': 0,
  'top': 0,
  'right': 0,
  'bottom': 0,
  'bg': '$background950',

  '_web': {
    cursor: 'default',
    pointerEvents: 'auto',
  },
});

const StyledScrollView = styled(ScrollView, {
  w: '$full',
  h: 'auto',
});

const StyledVirtualizedList = styled(VirtualizedList, {
  w: '$full',
  h: 'auto',
});

const StyledFlatList = styled(FlatList, {
  w: '$full',
  h: 'auto',
});

const StyledSectionList = styled(SectionList, {
  w: '$full',
  h: 'auto',
});

const StyledSectionHeaderText = styled(H4, {
  letterSpacing: '$sm',
  fontWeight: '$bold',
  fontFamily: '$heading',

  // Overrides expo-html default styling
  marginVertical: 0,

  variants: {
    isTruncated: {
      true: {
        props: {
          // @ts-ignore
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    size: {
      '5xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$6xl',
      },
      '4xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$5xl',
      },

      '3xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$4xl',
      },

      '2xl': {
        //@ts-ignore
        props: { as: H2 },
        fontSize: '$3xl',
      },

      'xl': {
        //@ts-ignore
        props: { as: H3 },
        fontSize: '$2xl',
      },

      'lg': {
        //@ts-ignore
        props: { as: H4 },
        fontSize: '$xl',
      },

      'md': {
        //@ts-ignore
        props: { as: H5 },
        fontSize: '$lg',
      },

      'sm': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$md',
      },

      'xs': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$sm',
      },
    },
    sub: {
      true: {
        fontSize: '$xs',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    highlight: {
      true: {
        bg: '$yellow500',
      },
    },
  },
  color: '$text500',
  props: { size: 'xs' },
  textTransform: 'uppercase',
  p: '$3',
});

const StyledIcon = styled(
  AsForwarder,
  {
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    props: {
      size: 'sm',
      // @ts-ignore
      fill: 'none',
    },

    color: '$background500',
  },
  {
    componentName: 'BaseIcon',
    resolveProps: ['stroke', 'fill'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const StyledSelectRoot = styled(View, {});

const StyledSelectTrigger = styled(
  Pressable,
  {
    'borderWidth': 1,
    'borderColor': '$background300',
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'overflow': 'hidden',
    'alignItems': 'center',

    ':hover': {
      borderColor: '$border400',
    },

    ':focus': {
      borderColor: '$primary700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$background300',
      },
    },

    '_input': {
      py: 'auto',
      px: '$3',
    },

    '_icon': {
      color: '$background500',
    },

    'variants': {
      size: {
        xl: {
          h: '$12',
          _input: {
            fontSize: '$xl',
          },
          _icon: {
            h: '$6',
            w: '$6',
          },
        },
        lg: {
          h: '$11',
          _input: {
            fontSize: '$lg',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        md: {
          h: '$10',
          _input: {
            fontSize: '$md',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        sm: {
          h: '$9',
          _input: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$3.5',
            w: '$3.5',
          },
        },
      },
      variant: {
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            px: '$0',
          },

          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',

          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $primary700',
            },
            ':hover': {
              borderColor: '$primary700',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary600',
              },
            },
          },

          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error700',
            },
            ':hover': {
              borderBottomColor: '$error700',
            },
            ':focus': {
              'borderBottomColor': '$error700',
              ':hover': {
                borderBottomColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error700',
                },
              },
            },
          },
        },
        outline: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },

          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
            ':hover': {
              borderColor: '$primary700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
          },

          ':invalid': {
            'borderColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error700',
            },
            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              'borderColor': '$error700',
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
          },
        },
        rounded: {
          'borderRadius': 999,

          '_input': {
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },

          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
            ':hover': {
              borderColor: '$primary700',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
          },

          ':invalid': {
            'borderColor': '$error700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error700',
            },
            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              'borderColor': '$error700',
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error700',
                },
              },
            },
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },

  {
    descendantStyle: ['_input', '_icon'],
  }
);

const StyledSelectInput = styled(
  TextInput,
  {
    _web: {
      w: '$full',
    },

    pointerEvents: 'none',
    flex: 1,
    h: '$full',
    color: '$text900',

    props: {
      placeholderTextColor: '$text500',
    },
  },
  {
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);

const Actionsheet = createActionsheet({
  Root: StyledRoot,
  Content: StyledContent,
  Item: StyledItem,
  ItemText: StyledItemText,
  DragIndicator: StyledDragIndicator,
  IndicatorWrapper: StyledDragIndicatorWrapper,
  Backdrop: StyledBackdrop,
  ScrollView: StyledScrollView,
  VirtualizedList: StyledVirtualizedList,
  FlatList: StyledFlatList,
  SectionList: StyledSectionList,
  SectionHeaderText: StyledSectionHeaderText,
  Icon: StyledIcon,
  AnimatePresence: AnimatePresence,
});

export const Select = createSelect(
  {
    Root: StyledSelectRoot,
    Trigger: StyledSelectTrigger,
    Input: StyledSelectInput,
    Icon: StyledIcon,
  },
  {
    Portal: Actionsheet,
    Backdrop: Actionsheet.Backdrop,
    Content: Actionsheet.Content,
    DragIndicator: Actionsheet.DragIndicator,
    DragIndicatorWrapper: Actionsheet.DragIndicatorWrapper,
    Item: Actionsheet.Item,
    ItemText: Actionsheet.ItemText,
    ScrollView: Actionsheet.ScrollView,
    VirtualizedList: Actionsheet.VirtualizedList,
    FlatList: Actionsheet.FlatList,
    SectionList: Actionsheet.SectionList,
    SectionHeaderText: Actionsheet.SectionHeaderText,
  }
);
export const SelectTrigger = Select.Trigger;
export const SelectInput = Select.Input;
export const SelectIcon = Select.Icon;
export const SelectPortal = Select.Portal;
export const SelectBackdrop = Select.Backdrop;
export const SelectContent = Select.Content;
export const SelectDragIndicator = Select.DragIndicator;
export const SelectDragIndicatorWrapper = Select.DragIndicatorWrapper;
export const SelectItem = Select.Item;
export const SelectItemText = Select.ItemText;
export const SelectScrollView = Select.ScrollView;
export const SelectVirtualizedList = Select.VirtualizedList;
export const SelectFlatList = Select.FlatList;
export const SelectSectionList = Select.SectionList;
export const SelectSectionHeaderText = Select.SectionHeaderText;
