import React from 'react';
import { View } from 'react-native';
import { Wrapper } from '../../components/Wrapper';
import { Camera } from 'lucide-react-native';
import { StyledHeading, StyledIcon } from '../../ui-components/AsForwarder';
import { H2 } from '@expo/html-elements';
import { styled } from '@dank-style/react';

const Box = styled(View, {});

export function AsForwarderExample() {
  const [state, setState] = React.useState(false);
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box as={H2}>I am a heading</Box>
        {/* @ts-ignore */}
        <StyledIcon as={Camera} color="blue" size1="xs">
          I am a heading
        </StyledIcon>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
