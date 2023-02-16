import { Wrapper } from '../Wrapper';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Fade } from '@universa11y/transitions';
import { StyleSheet } from 'react-native';

export const Transitions = () => {
  const [visibleFade, setVisibleFade] = React.useState(false);
  return (
    <Wrapper>
      <View>
        <Pressable
          onPress={() => {
            setVisibleFade(!visibleFade);
          }}
        >
          <Text>Press me fade</Text>
        </Pressable>
        <Fade
          in={visibleFade}
          style={StyleSheet.absoluteFill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 200 } }}
          exit={{ opacity: 0, transition: { duration: 100 } }}
        >
          <View
            style={{
              backgroundColor: 'pink',
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello I am fade</Text>
          </View>
        </Fade>
      </View>
    </Wrapper>
  );
};

export default Transitions;
