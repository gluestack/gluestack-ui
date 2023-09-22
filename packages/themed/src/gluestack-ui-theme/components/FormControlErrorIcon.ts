import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  color: '$error700',
  _dark: {
    //@ts-ignore
    color: '$error400',
  },
  props: {
    size: 'sm',
  },
});
