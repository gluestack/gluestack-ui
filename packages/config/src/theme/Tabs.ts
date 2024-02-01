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
    // { variant: 'pilled', orientation: 'vertical', value: {} },
    {
      variant: 'underlined',
      orientation: 'vertical',
      value: {
        _tabsTrigger: {
          borderLeftWidth: 1,
        },
      },
    },
    // { variant: 'pilled', orientation: 'horizontal', value: {} },
    {
      variant: 'underlined',
      orientation: 'horizontal',
      value: {
        _tabsTrigger: {
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
