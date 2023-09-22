import { createStyle } from '@gluestack-ui/themed';

export default createStyle(
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
