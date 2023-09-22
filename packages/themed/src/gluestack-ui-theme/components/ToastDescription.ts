import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
  props: {
    size: 'sm',
  },
});
