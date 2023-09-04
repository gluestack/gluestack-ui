import React from 'react';
// @ts-nocheck
import // StyleSheet,
// Text, View
'react-native';
// import { config } from './nb.config';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChangeAVariant from './components/ChangeAVariant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="change-a-variant">
        <Stack.Screen name="change-a-variant" component={ChangeAVariant} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     justifyWrap: 'wrap',
//     flexDirection: 'column',
//   },
//   container1: {
//     width: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     height: 50,
//     backgroundColor: 'red',

//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0,
//     shadowRadius: 0,
//     elevation: 0,
//   },
// });
