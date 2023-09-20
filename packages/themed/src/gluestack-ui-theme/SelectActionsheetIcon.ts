import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  w: '$4',
  h: '$4',
  mr: '$2',
  color: '$backgroundLight500',
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
  props: {
    size: 'md',
  },
});
