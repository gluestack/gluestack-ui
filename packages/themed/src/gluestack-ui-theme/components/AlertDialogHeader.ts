import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  p: '$4',
  borderColor: '$borderLight300',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  _dark: {
    borderColor: '$borderDark700',
  },
});
