import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid';

const GridSpacing = () => {
  return (
    <Grid numColumns={9}>
      <GridItem colSpan={3} className="bg-background-100 p-4 rounded-md " />

      <GridItem colSpan={3} className="bg-background-100 p-4 rounded-md " />

      <GridItem colSpan={3} className="bg-background-100 p-4 rounded-md" />
    </Grid>
  );
};

export default GridSpacing;
