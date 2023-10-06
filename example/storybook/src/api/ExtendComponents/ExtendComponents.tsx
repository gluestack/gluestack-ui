import React from 'react';
import { View, Text } from 'react-native';
import { Wrapper } from '../../components/Wrapper';
import { Camera } from 'lucide-react-native';
import { StyledHeading } from '../../ui-components/AsForwarder';
import { H2 } from '@expo/html-elements';
import {
  StyledProvider,
  createComponents,
  styled,
} from '@gluestack-style/react';
import { config } from '../../components/nb.config';

config.components = {
  Box: {
    theme: {
      bg: '$red500',
      p: '$10',
      // props: {
      // ':initial': {
      //   scale: 0.5,
      // },
      // ':animate': {
      //   scale: 1,
      // },
      // props: {
      //   p: '$5',
      // },
      // },
    },
  },
};

const Box = styled(
  AnimatedView,
  {},
  {
    componentName: 'Box',
  }
);
import Svg from 'react-native-svg';
import { AnimatedView } from '@gluestack-style/animation-resolver';

export function ExtendComponentsExample() {
  const [state, setState] = React.useState(false);
  return (
    <StyledProvider config={config} colorMode={'dark'}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box />
      </View>
    </StyledProvider>
  );
}

export default ExtendComponentsExample;
// variant reserved keys
// not utility props as utility props get resolved first
