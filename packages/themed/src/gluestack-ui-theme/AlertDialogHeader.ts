import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  p: '$4',
  borderColor: '$borderLight300',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  _dark: {
    borderColor: '$borderDark700',
  },
});
