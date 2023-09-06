import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
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
  },
  {
    componentName: 'SelectActionsheetSectionHeaderText',
    ancestorStyle: ['_sectionHeaderBackground'],
  } as const
);
