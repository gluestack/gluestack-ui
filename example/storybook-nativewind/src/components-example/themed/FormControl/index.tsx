import { Text, View } from 'react-native';

import { styled } from '@gluestack-style/react';

import { createFormControl } from '@gluestack-ui/form-control';
import { AsForwarder } from '@gluestack-style/react';

const StyledRoot = styled(
  View,
  {
    flexDirection: 'column',
    variants: {
      size: {
        sm: {
          _labelText: {
            props: { size: 'sm' },
          },
          _labelAstrick: {
            props: { size: 'sm' },
          },
          _helperText: {
            props: { size: 'xs' },
          },
          _errorText: {
            props: { size: 'xs' },
          },
        },
        md: {
          _labelText: {
            props: { size: 'md' },
          },
          _labelAstrick: {
            props: { size: 'md' },
          },
          _helperText: {
            props: { size: 'sm' },
          },
          _errorText: {
            props: { size: 'sm' },
          },
        },
        lg: {
          _labelText: {
            props: { size: 'lg' },
          },
          _labelAstrick: {
            props: { size: 'lg' },
          },
          _helperText: {
            props: { size: 'md' },
          },
          _errorText: {
            props: { size: 'md' },
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: [
      '_labelText',
      '_helperText',
      '_errorText',
      '_labelAstrick',
    ],
  }
);

const StyledErrorIcon = styled(
  AsForwarder,
  {
    color: '$error700',
    // @ts-ignore
    fill: 'none',
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
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const StyledFormControlError = styled(View, {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  mt: '$1',
  gap: '$1',
});

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

const StyledFormControlErrorText = styled(
  StyledText,
  {
    color: '$error700',
  },
  { ancestorStyle: ['_errorText'] }
);

const StyledFormControlHelper = styled(View, {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  mt: '$1',
});

const StyledFormControlHelperText = styled(
  StyledText,
  {
    props: {
      size: 'xs',
    },

    color: '$text500',
  },
  { ancestorStyle: ['_helperText'] }
);

const StyledFormControlLabel = styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mb: '$1',
  },
  { descendantStyle: ['_labelText'] }
);

const StyledFormControlLabelText = styled(StyledText, {
  fontWeight: '$medium',
  color: '$text900',
});

const StyledLabelAstrick = styled(StyledText, {}, {
  componentName: 'FormControlErrorText',
  ancestorStyle: ['_labelAstrick'],
} as const);

export const FormControl = createFormControl({
  Root: StyledRoot,
  Error: StyledFormControlError,
  ErrorText: StyledFormControlErrorText,
  ErrorIcon: StyledErrorIcon,
  Label: StyledFormControlLabel,
  LabelText: StyledFormControlLabelText,
  LabelAstrick: StyledLabelAstrick,
  Helper: StyledFormControlHelper,
  HelperText: StyledFormControlHelperText,
});
export const FormControlError = FormControl.Error;
export const FormControlErrorText = FormControl.Error.Text;
export const FormControlErrorIcon = FormControl.Error.Icon;
export const FormControlLabel = FormControl.Label;
export const FormControlLabelText = FormControl.Label.Text;
export const FormControlLabelAstrick = FormControl.Label.Astrick;
export const FormControlHelper = FormControl.Helper;
export const FormControlHelperText = FormControl.Helper.Text;
