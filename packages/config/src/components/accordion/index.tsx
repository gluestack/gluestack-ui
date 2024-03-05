import { createAccordion } from '@gluestack-ui/accordion';
import { AsForwarder, styled } from '@gluestack-style/react';
import { View, Pressable, Text, Platform } from 'react-native';

import { H3 } from '@expo/html-elements';

const StyleRoot = styled(
  View,
  {
    width: '$full',
    _icon: {
      color: '$text900',
    },
    _titleText: {
      color: '$text900',
    },
    _contentText: {
      color: '$text700',
    },

    variants: {
      size: {
        sm: {
          _titleText: {
            fontSize: '$sm',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$sm',
          },
          _contentText: {
            fontSize: '$sm',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$sm',
          },
        },
        md: {
          _titleText: {
            fontSize: '$md',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$md',
          },
          _contentText: {
            fontSize: '$md',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$md',
          },
        },
        lg: {
          _titleText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$lg',
          },
          _contentText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$lg',
          },
        },
      },
      variant: {
        filled: {
          backgroundColor: '$white',

          _item: {
            backgroundColor: '$background0',
          },

          shadowColor: '$background900',

          shadowOffset: {
            width: 0,
            height: 3,
          },

          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
        unfilled: {
          shadowColor: 'transparent',

          shadowOffset: {
            width: 0,
            height: 0,
          },

          _item: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    defaultProps: {
      theme: 'light',
      size: 'md',
      variant: 'filled',
    },
  },
  {
    descendantStyle: [
      '_item',
      '_titleText',
      '_button',
      '_icon',
      '_contentText',
    ],
  }
);
const StyledItem = styled(View, {}, { ancestorStyle: ['_item'] });
// @ts-ignore
const StyledHeader = styled(Platform.OS === 'web' ? H3 : View, {
  mx: '$0',
  my: '$0',
});
const StyledTrigger = styled(
  Pressable,
  {
    'width': '$full',
    'py': '$5',
    'px': '$5',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    '_web': {
      outlineWidth: 0,
    },
    ':disabled': {
      opacity: 0.4,
      _web: {
        cursor: 'not-allowed',
      },
    },
    ':focusVisible': {
      bg: '$background50',
    },
  },
  {
    descendantStyle: ['_icon', '_titleText', '_contentText'],
    ancestorStyle: ['_button'],
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

const StyledTitleText = styled(
  StyledText,
  { flex: 1, textAlign: 'left' },
  { ancestorStyle: ['_titleText'] }
);
const StyledContentText = styled(Text, {}, { ancestorStyle: ['_contentText'] });
const StyledIcon = styled(
  AsForwarder,
  {
    color: '$background800',

    // defaultProps: {
    //   size: 'md',
    // },
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
      size: 'md',
    },
  },
  {
    resolveProps: ['stroke', 'fill'],
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);
const StyledContent = styled(View, { px: '$5', mt: '$2', pb: '$5' });

export const Accordion = createAccordion({
  Root: StyleRoot,
  Item: StyledItem,
  Header: StyledHeader,
  Trigger: StyledTrigger,
  Icon: StyledIcon,
  TitleText: StyledTitleText,
  ContentText: StyledContentText,
  Content: StyledContent,
});

export const AccordionItem = Accordion.Item;
export const AccordionHeader = Accordion.Header;
export const AccordionTrigger = Accordion.Trigger;
export const AccordionTitleText = Accordion.TitleText;
export const AccordionContentText = Accordion.ContentText;
export const AccordionIcon = Accordion.Icon;
export const AccordionContent = Accordion.Content;
