import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary300',
      },
    },
  },
});
