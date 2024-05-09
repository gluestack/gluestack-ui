import { StyleSheet, Text, View } from 'react-native';
// import Constants from "expo-constants";
import './global.css';

function App() {
  return (
    <View
      style={styles.container}
      // style={{
      //   backgroundColor: "red",
      // }}
      // style={{ $$css: true, container: "bg-red-500" }}
    >
      <View className="bg-red-500">
        <Text>Open up App.tsx to start working on your app! hello</Text>
      </View>
    </View>
  );
}

let AppEntryPoint = App;

// if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
//   AppEntryPoint = require("./.ondevice").default;
// }
AppEntryPoint = require('./.ondevice').default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
