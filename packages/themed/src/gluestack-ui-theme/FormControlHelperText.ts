import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  props: {
    size: 'xs',
  },
  color: '$textLight500',
  _dark: {
    color: '$textDark400',
  },
});
