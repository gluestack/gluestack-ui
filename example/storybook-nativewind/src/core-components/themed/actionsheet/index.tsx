import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import {
  AnimatePresence,
  AnimatedPressable,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { styled, AsForwarder } from '@gluestack-style/react';
import { createActionsheet } from '@gluestack-ui/actionsheet';
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

export const Actionsheet = createActionsheet({
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

export const ActionsheetContent = Actionsheet.Content;
export const ActionsheetItem = Actionsheet.Item;
export const ActionsheetItemText = Actionsheet.ItemText;
export const ActionsheetDragIndicator = Actionsheet.DragIndicator;
export const ActionsheetDragIndicatorWrapper = Actionsheet.DragIndicatorWrapper;
export const ActionsheetBackdrop = Actionsheet.Backdrop;
export const ActionsheetScrollView = Actionsheet.ScrollView;
export const ActionsheetVirtualizedList = Actionsheet.VirtualizedList;
export const ActionsheetFlatList = Actionsheet.FlatList;
export const ActionsheetSectionList = Actionsheet.SectionList;
export const ActionsheetSectionHeaderText = Actionsheet.SectionHeaderText;
export const ActionsheetIcon = Actionsheet.Icon;
