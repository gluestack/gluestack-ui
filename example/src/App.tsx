import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, ToggleButton } from './components';

export default function App() {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        paddingTop: 100,
      }}
    >
      <Text>Button with hover and focus visible example</Text>
      <View style={{ marginVertical: 10, marginBottom: 40 }}>
        <Button>
          <Text style={{ color: 'white' }}>Test</Text>
        </Button>
      </View>

      <Text>
        Toggle button which sets aria-pressed in browser and AccessibilityState
        in RN
      </Text>
      <View style={{ marginVertical: 10 }}>
        <ToggleButton>
          <Text style={{ color: 'white' }}>Test</Text>
        </ToggleButton>
      </View>
    </SafeAreaView>
  );
}
