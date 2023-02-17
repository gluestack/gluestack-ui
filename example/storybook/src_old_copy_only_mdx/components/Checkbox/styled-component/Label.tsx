import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    'color': 'black',
    'ml': '$2',
    ':disabled': {
      opacity: 0.6,
    },
    '_web': {
      //@ts-ignore
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
    },
    '_dark': {
      color: 'lightText',
    },
  },
  {
    ancestorStyle: ['_text'],
    DEBUG: 'CHECKBOX_LABEL',
  }
);
