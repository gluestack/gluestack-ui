import React from 'react';
import { Grid, GridItem, Text, View } from '@gluestack-ui/themed';

const GridLayout = () => {
  return (
    <>
      <Grid
        spacing={20}
        numColumns={2}
        rowSpacing={30}
        columnSpacing={60}
        flexDirection="column"
      >
        <GridItem colSpan={4}>
          <View bg="$pink300" p="$2" alignItems="center">
            <Text color="$white">Navbar</Text>
          </View>
        </GridItem>
        <GridItem>
          <View bg="$blue300" p="$2" alignItems="center">
            <Text color="$white">Main</Text>
          </View>
        </GridItem>
        <GridItem
        // colSpan={2}
        >
          <View bg="$orange300" p="$2" alignItems="center">
            <Text color="$white">Sidebar</Text>
          </View>
        </GridItem>
        <GridItem
        // colSpan={6}
        >
          <View bg="$emerald300" p="$2" alignItems="center">
            <Text color="$white">Footer</Text>
          </View>
        </GridItem>
      </Grid>
    </>
  );
};

export default GridLayout;
