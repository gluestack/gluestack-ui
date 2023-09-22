import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  color: '$textLight500',
  props: { size: 'xs' },
  textTransform: 'uppercase',
  p: '$3',
  _dark: {
    color: '$textDark400',
  },
});
