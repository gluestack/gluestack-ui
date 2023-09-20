import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  p: '$2',
  color: '$textLight900',
  textAlignVertical: 'top',
  flex: 1,
  props: {
    // @ts-ignore
    multiline: true,
    placeholderTextColor: '$textLight500',
  },
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    'cursor': 'text',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
