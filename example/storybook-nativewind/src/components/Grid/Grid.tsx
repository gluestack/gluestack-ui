import { Grid, GridItem } from '@/components/ui/grid';
import React from 'react';

const GridBasic = () => {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'grid-cols-8',
      }}
    >
      <GridItem
        className="bg-background-200 p-6 rounded-md"
        _extra={{
          className: 'col-span-3',
        }}
      />
      <GridItem
        className="bg-background-200 p-6 rounded-md"
        _extra={{
          className: 'col-span-5',
        }}
      />
      <GridItem
        className="bg-background-200 p-6 rounded-md"
        _extra={{
          className: 'col-span-6',
        }}
      />
      <GridItem
        className="bg-background-200 p-6 rounded-md"
        _extra={{
          className: 'col-span-4',
        }}
      />
      <GridItem
        className="bg-background-200 p-6 rounded-md"
        _extra={{
          className: 'col-span-4',
        }}
      />
    </Grid>
  );
};

export default GridBasic;
