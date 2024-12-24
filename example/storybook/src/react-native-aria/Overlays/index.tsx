/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  OverlayContainer,
  useOverlayPosition,
} from '@react-native-aria/overlays';
import { Wrapper } from '../Wrapper';
function CloseButton(props: any) {
  return (
    <TouchableWithoutFeedback
      onPress={props.onClose}
      accessible={false}
      importantForAccessibility={'no-hide-descendants'}
    >
      <View style={StyleSheet.absoluteFill} />
    </TouchableWithoutFeedback>
  );
}

const OverlayContent = ({ targetRef }: any) => {
  const overlayRef = React.useRef(null);
  const { overlayProps } = useOverlayPosition({
    placement: 'bottom',
    targetRef,
    overlayRef,
  });

  return (
    <View
      ref={overlayRef}
      style={{
        position: 'absolute',
        ...overlayProps.style,
      }}
    >
      <Text>This content will be mounted in OverlayProvider</Text>
    </View>
  );
};

export const MenuExample = () => {
  return (
    <Wrapper>
      <OverlayContainerExample />
    </Wrapper>
  );
};
export function OverlayContainerExample(props: any) {
  const [visible, setVisible] = React.useState(false);

  const ref = React.useRef(null);

  return (
    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Pressable
        ref={ref}
        role="button"
        onPress={() => setVisible(!visible)}
        style={{
          backgroundColor: '#F3F4F6',
          maxWidth: 100,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Press me</Text>
      </Pressable>
      {visible && (
        <OverlayContainer {...props}>
          <CloseButton onClose={() => setVisible(!visible)} />
          <OverlayContent targetRef={ref} />
        </OverlayContainer>
      )}
    </View>
  );
}
