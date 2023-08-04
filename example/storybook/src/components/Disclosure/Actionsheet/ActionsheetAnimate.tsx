import React from 'react';
import { Actionsheet, Button } from '../../../ui-components';
import { Pressable, Text as RNText, View } from 'react-native';
import { Motion } from '@legendapp/motion';

// variables
const data = Array(1000)
  .fill(0)
  .map((_, index) => `Item ${index}`);

const ActionsheetExample = ({}) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  return (
    <>
      <Pressable
        onPress={() => {
          setShowActionsheet(true);
        }}
      >
        state true
      </Pressable>

      <StateChangeComponent
        showActionsheet={showActionsheet}
        setShowActionsheet={setShowActionsheet}
      />
    </>
  );
};

const StateChangeComponent = ({ showActionsheet, setShowActionsheet }: any) => {
  return (
    <>
      <Pressable
        onPress={() => {
          setShowActionsheet(false);
        }}
      >
        state false
      </Pressable>
      <View style={{ opacity: showActionsheet ? 1 : 0 }}>
        <Motion.View
          style={{
            height: 100,
            width: 100,
          }}
          initial={{
            // opacity: 0,
            backgroundColor: 'red',
          }}
          animate={{
            // opacity: showActionsheet ? 1 : 0,
            scale: showActionsheet ? 1 : 0.7,
            backgroundColor: showActionsheet ? 'yellow' : 'pink',
          }}
        />
      </View>
    </>
  );
};

export default ActionsheetExample;
export { Actionsheet };
