import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Gluestack from './BenchGlueStack';
import ReactNative from './BenchReactNative';
import TimedRender from './TimedRender';

export default function App() {
  const [styleType, setStyleType] = useState<any>(undefined);

  const onStyleTypePress = (curry) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case 'Gluestack':
        return <Gluestack />;
      case 'React Native':
        return <ReactNative />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress('React Native')} />
      <Button title="Gluestack" onPress={onStyleTypePress('Gluestack')} />
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    backgroundColor: '#fff',
    // flex: 1,
    // justifyContent: "center",
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
