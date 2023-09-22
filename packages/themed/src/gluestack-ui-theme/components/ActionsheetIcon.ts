import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  props: {
    size: 'sm',
  },
  color: '$backgroundLight500',
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
});
