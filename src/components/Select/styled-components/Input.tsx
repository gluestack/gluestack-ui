import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    _web: {
      width: '$full',
    },
    flex: 1,
    height: '100%',
    color: '$textLight.900',
    props: {
      placeholderTextColor: '$textLight.500',
    },
    _dark: {
      color: '$textDark.50',
      props: {
        placeholderTextColor: '$textDark.400',
      },
    },
    variants: {
      variant: {
        // @ts-ignore
        rounded: {
          // @ts-ignore
          'borderRadius': '$full',
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
        },
        // @ts-ignore
        outline: {
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
        },
        filled: {
          // @ts-ignore
          'borderWidth': '$1',
          ':focus': {
            backgroundColor: '$primary.600.alpha0.1',
          },
          // @ts-ignore
          ':hover': {
            // @ts-ignore
            borderWidth: '$1',
            _disabled: {
              // @ts-ignore
              borderWidth: '$0',
            },
          },
          // @ts-ignore
          'bg': '$muted.100',
          'borderColor': '$muted.100',

          '_dark': {
            backgroundColor: '$muted.800',
            borderColor: '$muted.800',
          },
        },
        // @ts-ignore
        unstyled: {
          // @ts-ignore
          'borderWidth': '$0',
          ':focus': {
            backgroundColor: 'transparent',
          },
          ':invalid': {
            _web: {
              outlineWidth: '$0',
            },
          },
          '_web': {
            ':focus': {
              outlineWidth: '$0',
              boxShadow: 'none',
            },
          },
        },
        // @ts-ignore
        underlined: {
          // @ts-ignore
          'borderWidth': '$0',
          'pl': '$0',
          'borderBottomWidth': '$1',
          ':focus': {
            _web: {
              outlineWidth: '0',
              boxShadow: `0 1px 0 0 $primary.600`,
            },
          },
          ':invalid': {
            _web: {
              outlineWidth: 0,
              boxShadow: `0 1px 0 0 $error.600`,
            },
          },

          '_dark': {
            ':focus': {
              _web: {
                outlineWidth: '0',
                boxShadow: `0 1px 0 0 $primary.500`,
              },
            },
            ':invalid': {
              _web: {
                outlineWidth: 0,
                boxShadow: `0 1px 0 0 $error.500`,
              },
            },
          },
          // @ts-ignore
          'borderRadius': 0,
        },
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
