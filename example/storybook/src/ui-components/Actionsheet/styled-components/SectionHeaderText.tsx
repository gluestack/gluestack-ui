import { Heading } from '../../Heading';
import { styled } from '../../styled';

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
    ancestorStyle: ['_sectionHeaderBackground'],
  }
);
