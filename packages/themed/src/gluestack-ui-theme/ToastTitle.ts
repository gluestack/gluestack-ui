import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  fontWeight: '$medium',
  props: {
    size: 'md',
  },
  color: '$textLight900',
  _dark: {
    color: '$textDark50',
  },
});
