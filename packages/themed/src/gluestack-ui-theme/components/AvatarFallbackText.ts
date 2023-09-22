import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  color: '$textLight0',
  fontWeight: '$semibold',
  props: {
    size: 'xl',
  },
  overflow: 'hidden',
  textTransform: 'uppercase',
  _web: {
    cursor: 'default',
  },
});
