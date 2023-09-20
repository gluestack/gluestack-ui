import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  color: '$textLight500',
  fontSize: '$sm',
  fontFamily: '$body',
  fontWeight: '$bold',
  lineHeight: '$xs',
  textTransform: 'uppercase',
  p: '$3',
  _dark: {
    color: '$textDark400',
  },
});
