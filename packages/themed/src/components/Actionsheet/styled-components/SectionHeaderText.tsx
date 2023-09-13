import { Heading } from '../../Heading';
import { styled } from '@gluestack-style/react';

export default styled(
  Heading,
  {
    color: '$textLight500',
    props: { size: 'xs' },
    textTransform: 'uppercase',
    p: '$3',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    componentName: 'ActionsheetSectionHeaderText',
    ancestorStyle: ['_sectionHeaderBackground'],
  } as const
);
