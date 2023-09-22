import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
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
