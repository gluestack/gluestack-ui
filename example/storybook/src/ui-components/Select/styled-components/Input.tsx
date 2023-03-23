import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    'px': '$3',
    'py': '$3',
    'flex': 1,
    ':focus': {
      borderWidth: '$2',
      borderColor: '$primary700',
    },
    'color': '$textLight900',
    'props': {
      placeholderTextColor: '$textLight400',
    },
    '_dark': {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark400',
      },
    },
  },
  { resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
