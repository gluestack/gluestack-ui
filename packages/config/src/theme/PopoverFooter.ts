import { createStyle } from '@gluestack-style/react';

export const PopoverFooter = createStyle({
  p: '$4',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderTopWidth: 1,
  borderColor: '$borderLight300',

  _dark: {
    borderColor: '$borderDark700',
  },
});
