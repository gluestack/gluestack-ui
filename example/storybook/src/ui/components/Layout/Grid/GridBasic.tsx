import { View } from '@gluestack-ui/themed';
import React from 'react';

const GridBasic = () => {
  return (
    <View flexWrap="wrap" flexDirection="row" width="100%">
      <View flexGrow={0} flexShrink={0} flexBasis="30%" bg="$pink">
        Col 1
      </View>
      <View flexGrow={0} flexShrink={0} flexBasis="20%" bg="$yellow">
        Col 2
      </View>
      <View flexGrow={0} flexShrink={0} flexBasis="50%" bg="$blue">
        Col 3
      </View>
      <View flexGrow={0} flexShrink={0} flexBasis="30%" bg="$blue">
        Col 4
      </View>
    </View>
  );
};

export default GridBasic;
