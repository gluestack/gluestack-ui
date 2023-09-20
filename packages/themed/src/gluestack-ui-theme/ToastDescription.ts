import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
  props: {
    size: 'sm',
  },
});
