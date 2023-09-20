import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  color: '$error700',
  _dark: {
    //@ts-ignore
    color: '$error400',
  },
  props: {
    size: 'sm',
  },
});
