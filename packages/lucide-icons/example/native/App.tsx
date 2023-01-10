import { View } from 'react-native';
import { StyledProvider } from 'dank-style';
import * as Icons from '../../src';
import { config } from './nb.config';

export default function App() {
  return (
    <StyledProvider config={config}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
          // backgroundColor: 'red',
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
    </StyledProvider>
  );
}
