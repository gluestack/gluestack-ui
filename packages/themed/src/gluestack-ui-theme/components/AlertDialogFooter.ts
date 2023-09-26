import { createStyle } from '@gluestack-style/react';

export const AlertDialogFooter = createStyle({
  p: '$4',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderColor: '$borderLight300',
  _dark: {
    borderColor: '$borderDark700',
  },
});
