import { Pressable, Text, View } from 'react-native';
import { Popper } from '@gluestack/popper';
import React, { useRef } from 'react';

export default function App() {
  const targetRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Pressable
        ref={targetRef}
        onHoverIn={() => {
          setIsOpen(true);
        }}
        onHoverOut={() => {
          setIsOpen(false);
        }}
        style={{
          backgroundColor: 'skyblue',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Hello</Text>
      </Pressable>
      {isOpen && (
        <Popper
          triggerRef={targetRef}
          onClose={() => setIsOpen(false)}
          placement={'bottom'}
          offset={3}
        >
          <Popper.Content
            style={{
              padding: 10,
              backgroundColor: 'lightgray',
            }}
          >
            <Popper.Arrow
              style={{
                backgroundColor: 'lightgray',
                borderColor: 'transparent',
              }}
            />
            <Text>Hello here</Text>
          </Popper.Content>
        </Popper>
      )}
    </View>
  );
}
