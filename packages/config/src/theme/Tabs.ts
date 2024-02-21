import { createStyle } from '@gluestack-style/react';

export const Tabs = createStyle({
  variants: {
    variant: {
      pilled: {
        _tabsTrigger: {
          props: {
            variant: 'pilled',
          },
        },
        _tabsList: {
          gap: '$3',
        },
      },
      underlined: {
        _tabsTrigger: {
          props: {
            variant: 'underlined',
          },
        },
      },
    },
    orientation: {
      horizontal: {
        _tabsList: {
          flexDirection: 'row',
        },
      },
      vertical: {
        _tabsList: {
          flexDirection: 'column',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'underlined',
      orientation: 'vertical',
      value: {
        _tabsTrigger: {
          borderLeftStyle: 'solid',
          borderLeftWidth: 1,
        },
      },
    },
    {
      variant: 'underlined',
      orientation: 'horizontal',
      value: {
        _tabsTrigger: {
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        },
      },
    },
  ],

  defaultProps: {
    variant: 'pilled',
    orientation: 'horizontal',
  },
});
