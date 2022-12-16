import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // pointerEvents: 'none',
        // contentSize: {
        //   width: '75%',
        //   maxWidth: '380',
        // },
        // _backdropFade: { exitDuration: 150, entryDuration: 200 },
        // _slide: { overlay: false, duration: 200 },
        // _fade: { exitDuration: 100, entryDuration: 200 },
      },
    },
    defaultProps: {},
  },
  {}
);
