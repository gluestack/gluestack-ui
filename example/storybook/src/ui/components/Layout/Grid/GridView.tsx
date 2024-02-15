import React from 'react';
import { View, Grid, GridItem, Text } from '@gluestack-ui/themed';

const GridView = () => {
  return (
    <Grid spacing={10}>
      <GridItem colSpan={12}>
        <View bg="$backgroundDark400" p="$3" alignItems="center">
          <Text color="$white">Header</Text>
        </View>
      </GridItem>
      <GridItem colSpan={4}>
        <View
          bg="$backgroundDark600"
          p="$3"
          alignItems="center"
          justifyContent="center"
          minHeight={400}
        >
          <Text color="$white">Sidebar</Text>
        </View>
      </GridItem>
      <GridItem colSpan={8}>
        <View
          bg="$backgroundDark600"
          p="$3"
          alignItems="center"
          justifyContent="center"
          minHeight={400}
        >
          <Text color="$white">Content</Text>
        </View>
      </GridItem>
      <GridItem colSpan={12}>
        <View bg="$backgroundDark400" p="$3" alignItems="center">
          <Text color="$white">Footer</Text>
        </View>
      </GridItem>
    </Grid>
  );
};

export default GridView;
