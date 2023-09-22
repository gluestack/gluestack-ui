import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  _web: {
    w: '$full',
  },
  flex: 1,
  h: '$full',
  color: '$textLight900',
  props: {
    placeholderTextColor: '$textLight500',
  },
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
});
