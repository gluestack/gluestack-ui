import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
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
