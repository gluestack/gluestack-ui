import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    props: {
      size: 'xs',
    },
    color: '$textLight500',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    componentName: 'FormControlHelperText',
    ancestorStyle: ['_helperText'],
  } as const
);
