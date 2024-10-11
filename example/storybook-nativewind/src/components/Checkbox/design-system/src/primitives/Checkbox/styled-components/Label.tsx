import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    'color': '$black',
    'ml': '$2',

    ':disabled': {
      opacity: 0.6,
    },

    '_web': {
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
    },

    '_dark': {
      color: '$lightText',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
