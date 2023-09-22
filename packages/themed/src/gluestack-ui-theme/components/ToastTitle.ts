import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  fontWeight: '$medium',
  props: {
    size: 'md',
  },
  color: '$textLight900',
  _dark: {
    color: '$textDark50',
  },
});
