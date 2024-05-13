import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { GluestackUIProvider } from './src/core-components/nativewind/gluestack-ui-provider';

import './global.css';
function App() {
  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <View className="bg-primary-500">
          <Text>Open up App.tsx to start working on your app! 22</Text>
        </View>
      </View>
    </GluestackUIProvider>
  );
}

let AppEntryPoint = App;

// if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
AppEntryPoint = require('./.ondevice').default;

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
