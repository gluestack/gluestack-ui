import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        flex: 1,
        w: '100%',
        h: '100%',
        py: 8,
        px: 12,
        borderRadius: 16,
        borderWidth: 1,
        fontSize: 12,
        borderColor: '$trueGray.300',
      },
    },
  },
  {}
);
