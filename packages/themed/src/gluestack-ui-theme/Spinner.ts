import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  props: {
    color: '$primary500',
  },
  _dark: {
    props: {
      color: '$primary400',
    },
  },
});
