import { Grid, GridItem } from '@/components/ui/grid/index.web';
import React from 'react';
import { Text } from 'react-native';

const GridBasic = () => {
  return (
    <Grid numColumns={8} className="gap-x-5 gap-y-5 p-4 flex-col">
      <GridItem colSpan={2} className="bg-pink-500 p-10">
        <Text>2</Text>
      </GridItem>
      <GridItem colSpan={4} className="bg-pink-500">
        <Text>4</Text>
      </GridItem>
      <GridItem colSpan={2} className="bg-pink-500">
        <Text>2</Text>
      </GridItem>

      <GridItem colSpan={8} className="bg-pink-500">
        <Text>8</Text>
      </GridItem>

      <GridItem colSpan={8} className="bg-pink-500">
        <Text>12</Text>
      </GridItem>

      <GridItem colSpan={2} className="bg-pink-500">
        <Text>2</Text>
      </GridItem>
      <GridItem colSpan={6} className="bg-pink-500">
        <Text>6</Text>
      </GridItem>
    </Grid>
  );
};

export default GridBasic;
