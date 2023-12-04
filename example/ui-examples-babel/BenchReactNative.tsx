import React from 'react';
import { StyleSheet, View } from 'react-native';

const Native = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      {new Array(1000).fill(0).map((_, i) => (
        <View key={i} style={styles.styledView} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  styledView: {
    backgroundColor: 'yellow',
    padding: 8,
    margin: 4,
  },
});

export default Native;
