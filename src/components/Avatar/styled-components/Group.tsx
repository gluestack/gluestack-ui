import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    flexDirection: 'row-reverse',
    position: 'relative',
    _avatar: {
      ml: -10,
      borderWidth: 2,
      borderColor: 'white',
      _dark: {
        borderColor: '$trueGray.900',
      },
    },
  },
  {
    componentName: 'AvatarGroup',
    descendantStyle: ['_avatar'],
  } as const
);
