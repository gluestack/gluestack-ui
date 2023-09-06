import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
    props: {
      size: 'sm',
    },
  },
  {
    componentName: 'ToastDescription',
    ancestorStyle: ['_text'],
  } as const
);
