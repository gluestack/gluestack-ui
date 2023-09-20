import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
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
