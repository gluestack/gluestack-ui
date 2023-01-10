import { Text } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  Text,
  {
    baseStyle: {
      style: { color: '$black', ml: '$2' },
      state: {
        disabled: {
          style: { opacity: 0.6 },
        },
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          },
        },
      },
      colorMode: {
        dark: {
          style: {
            color: '$lightText',
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_text'],
    DEBUG: 'CHECKBOX_LABEL',
  }
);
