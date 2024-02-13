import React from 'react';
import { Text, Grid, View, FlatList } from '@gluestack-ui/themed';

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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={4}
      contentContainerStyle={{ gap: 5 }} //row gap
      columnWrapperStyle={{ gap: 5 }} //column gap
      width="100%"
    />
  );
};

GridBasic.description = 'This is a basic Grid component example.';

export default GridBasic;

export { Text, Grid };

{
  /* <Grid gridTemplateCols={12}>
  {' '}
  // value stored in context
  <GridItem colSpan={4}></GridItem> // stored value used in this component
  <GridItem colSpan={4}></GridItem>
  <GridItem colSpan={4}></GridItem>
</Grid>; */
}
