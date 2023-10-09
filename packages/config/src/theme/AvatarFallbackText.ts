import { createStyle } from '@gluestack-style/react';

export const AvatarFallbackText = createStyle({
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
