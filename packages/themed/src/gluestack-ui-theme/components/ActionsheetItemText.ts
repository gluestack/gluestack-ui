import { createStyle } from '@gluestack-ui/themed';

export default createStyle(
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
