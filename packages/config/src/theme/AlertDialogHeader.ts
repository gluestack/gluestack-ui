import { createStyle } from '@gluestack-style/react';

export const AlertDialogHeader = createStyle({
  p: '$4',
  borderColor: '$borderLight300',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  _dark: {
    borderColor: '$borderDark700',
  },
});
