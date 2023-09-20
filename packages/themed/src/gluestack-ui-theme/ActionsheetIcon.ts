import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  props: {
    size: 'sm',
  },
  color: '$backgroundLight500',
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
});
