import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle(
  {
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    componentName: 'InputSlot',
    descendantStyle: ['_icon'],
  } as const
);
