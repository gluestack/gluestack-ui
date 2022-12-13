import { Text, View, Pressable } from 'react-native';
import { StyleSheet } from '../../src';

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: -0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  containershort: {
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

const { styles, ids } = st;

export default function App() {
  return (
    <View
      dataSet={{ media: ids.container }}
      // style={styles.container}
    >
      <Text
        dataSet={{ media: ids.containershort }}
        // style={styles.containershort}
      >
        Hello Box
      </Text>
    </View>
  );
}
