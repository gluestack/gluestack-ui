import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid/index.web';
import { Text } from '@/components/ui/text';

const GridExampleOne = () => {
  return (
    <Grid numColumns={8} spacing={5}>
      <GridItem
        colSpan={3}
        className="bg-background-100 p-4 rounded-md text-center"
      >
        <Text>colSpan = 3</Text>
      </GridItem>
      <GridItem
        colSpan={5}
        className="bg-background-100 p-4 rounded-md text-center"
      >
        <Text>colSpan = 5</Text>
      </GridItem>
      <GridItem
        colSpan={6}
        className="bg-background-100 p-4 rounded-md text-center"
      >
        <Text>colSpan = 6</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        className="bg-background-100 p-4 rounded-md text-center"
      >
        <Text>colSpan = 4</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        className="bg-background-100 p-4 rounded-md text-center"
      >
        <Text>colSpan = 4</Text>
      </GridItem>
    </Grid>
  );
};

export default GridExampleOne;
