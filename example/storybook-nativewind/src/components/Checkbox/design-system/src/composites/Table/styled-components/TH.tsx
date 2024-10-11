import { styled } from '@gluestack-style/react';
import { TH } from '@expo/html-elements';

export default styled(
  TH,
  {
    p: '$3',
    _text: {
      fontSize: '$sm',
      lineHeight: '$sm',
      fontWeight: '$medium',
      color: '$textLight800',
      _dark: {
        color: '$textDark200',
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
