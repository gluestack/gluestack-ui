import { View } from 'react-native';
import * as Icons from '../../src';

export default function App() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: 'red',
      }}
    >
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key];
        return (
          <View style={{ padding: 10 }}>
            <Icon key={key} />
          </View>
        );
      })}
    </View>
  );
}
