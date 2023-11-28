import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'py': '$5',
    'px': '$5',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    '_web': {
      outlineWidth: 0,
    },
    ':disabled': {
      opacity: 0.4,
      _web: {
        // @ts-ignore
        cursor: 'not-allowed',
      },
    },
    ':focusVisible': {
      _light: {
        bg: '$backgroundLight50',
      },
      _dark: {
        bg: '$backgroundDark900',
      },
    },
  },

  {
    descendantStyle: ['_icon', '_titleText', '_contentText'],
    ancestorStyle: ['_button'],
  }
);
