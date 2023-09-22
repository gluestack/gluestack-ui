import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  props: {
    size: 'xs',
  },
  color: '$textLight500',
  _dark: {
    color: '$textDark400',
  },
});
