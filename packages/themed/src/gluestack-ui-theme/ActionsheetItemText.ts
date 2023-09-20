import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle(
  Text,
  {
    mx: '$2',
    props: {
      size: 'md',
    },
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  {
    componentName: 'ActionsheetItemText',
    ancestorStyle: ['_text'],
  } as const
);
