import React from 'react';
import { View } from 'react-native';
import { Wrapper } from '../../components/Wrapper';
import { Camera } from 'lucide-react-native';
import { StyledHeading, StyledIcon } from '../../ui-components/AsForwarder';
import { H2 } from '@expo/html-elements';

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
        <StyledHeading as={H2}>I am a heading</StyledHeading>
        {/* @ts-ignore */}
        <StyledIcon as={Camera} color="blue" size="xs">
          I am a heading
        </StyledIcon>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
