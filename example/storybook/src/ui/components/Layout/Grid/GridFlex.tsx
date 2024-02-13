import React, { useState } from 'react';
import { View, Text } from '@gluestack-ui/themed';

const GAP = 5;
const GRID_TEMPLATE_COLS = 12;

const GridFlex = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const containerStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft: -GAP,
    marginTop: -GAP,
  };

  const getItemStyle = (colSpan = 1) => {
    return {
      minHeight: 100,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      flexBasis: (containerWidth / GRID_TEMPLATE_COLS) * colSpan - GAP,
      marginLeft: GAP,
      marginTop: GAP,
    };
  };

  return (
    <View
      style={containerStyle}
      id="container"
      onLayout={(event) => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
    >
      <View style={getItemStyle(4)}>
        <Text>1</Text>
      </View>
      <View style={getItemStyle(4)}>
        <Text>2</Text>
      </View>
      <View style={getItemStyle(4)}>
        <Text>3</Text>
      </View>
      <View style={getItemStyle(6)}>
        <Text>5</Text>
      </View>
      <View style={getItemStyle(6)}>
        <Text>6</Text>
      </View>
      <View style={getItemStyle(2)}>
        <Text>4</Text>
      </View>
      <View style={getItemStyle(3)}>
        <Text>5</Text>
      </View>
      <View style={getItemStyle(4)}>
        <Text>6</Text>
      </View>
    </View>
  );
};

export default GridFlex;
