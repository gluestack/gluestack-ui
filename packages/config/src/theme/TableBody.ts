import { createStyle } from '@gluestack-style/react';

export const TableBody = createStyle({
  _row: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '$borderLight300',
    _dark: {
      borderBottomColor: '$borderDark700',
    },
  },
});
