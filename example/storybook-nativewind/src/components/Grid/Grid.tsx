import { Grid, GridItem } from '@/components/ui/grid';
import React from 'react';

const GridBasic = () => {
  return (
    <Grid numColumns={8} className="gap-5">
      <GridItem colSpan={3} className="bg-background-200 p-6 rounded-md" />
      <GridItem colSpan={5} className="bg-background-200 p-6 rounded-md" />
      <GridItem colSpan={6} className="bg-background-200 p-6 rounded-md" />
      <GridItem colSpan={4} className="bg-background-200 p-6 rounded-md" />
      <GridItem colSpan={4} className="bg-background-200 p-6 rounded-md" />
    </Grid>
  );
};

export default GridBasic;
