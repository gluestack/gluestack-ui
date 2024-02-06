import React from 'react';
import { Text, Grid, View } from '@gluestack-ui/themed';

const GridBasic: any = () => {
  const data = [
    { key: 'A' },
    { key: 'B' },
    { key: 'C' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
  ];
  const renderItem = ({ item }: any) => {
    return (
      <View
        flex={1}
        maxWidth="25%"
        alignItems="center"
        padding={10}
        backgroundColor="#944E63"
        borderWidth={1.5}
        borderColor="#fff"
      >
        <Text color="#fff">{item.key}</Text>
      </View>
    );
  };
  return <Grid data={data} renderItem={renderItem} numColumns={4} />;
};

GridBasic.description = 'This is a basic Grid component example.';

export default GridBasic;

export { Text, Grid };
