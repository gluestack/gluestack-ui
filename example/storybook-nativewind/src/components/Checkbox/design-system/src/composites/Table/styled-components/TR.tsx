import { styled } from '@gluestack-style/react';
import { TR } from '@expo/html-elements';

export default styled(
  TR,
  {
    // borderWidth: 1,
    // borderColor: '$borderLight200',
    // _dark: {
    //   borderColor: '$borderDark800',
    // },
    _web: {
      border: '$space$px solid $borderLight200',
      textAlign: 'left',
    },

    _dark: {
      _web: {
        border: '$space$px solid $borderDark800',
      },
    },
    // borderRadius: '$2xl',
    // borderWidth: 2,
  },
  {}
);
