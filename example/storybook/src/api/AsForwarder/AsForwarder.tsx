import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled, AsForwarder } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { H2 } from '@expo/html-elements';
import { StyledHeading } from '../../ui-components/AsForwarder';

const AsForwarderHeading = ({ ...props }: any) => {
  return <StyledHeading {...props} />;
};

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
        <AsForwarderHeading as={H2} size="xs">
          I am a heading
        </AsForwarderHeading>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
