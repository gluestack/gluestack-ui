import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  color: '$textLight500',
  props: { size: 'xs' },
  textTransform: 'uppercase',
  p: '$3',
  _dark: {
    color: '$textDark400',
  },
});
