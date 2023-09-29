import { createStyle } from '@gluestack-style/react';

export const FormControl = createStyle({
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
});
