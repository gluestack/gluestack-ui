import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  props: {
    color: '$primary500',
  },
  _dark: {
    props: {
      color: '$primary400',
    },
  },
});
