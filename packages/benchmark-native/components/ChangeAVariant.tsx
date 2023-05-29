import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <StyledProvider config={config}> */}
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
      {/* </StyledProvider> */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyWrap: 'wrap',
    flexDirection: 'column',
  },
  container1: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    backgroundColor: 'red',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
