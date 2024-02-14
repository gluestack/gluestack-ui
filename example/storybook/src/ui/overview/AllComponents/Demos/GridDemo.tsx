import React from 'react';
import { View, Grid, GridItem, Text } from '@gluestack-ui/themed';

const GridDemo = () => {
  return (
    // <View w={150} $sm-w={200} $md-w={450} $lg-w={600}>
    <Grid numColumns={6} spacing={5}>
      <GridItem colSpan={3}>
        <View bg="$info600" p="$2" alignItems="center">
          <Text color="$white">colSpan={3}</Text>
        </View>
      </GridItem>
      <GridItem colSpan={3}>
        <View bg="$info700" p="$2" alignItems="center">
          <Text color="$white">colSpan={3}</Text>
        </View>
      </GridItem>
      <GridItem colSpan={3}>
        <View bg="$info800" p="$2" alignItems="center">
          <Text color="$white">colSpan={3}</Text>
        </View>
      </GridItem>
      <GridItem colSpan={3}>
        <View bg="$info900" p="$2" alignItems="center">
          <Text color="$white">colSpan={3}</Text>
        </View>
      </GridItem>
    </Grid>
    // </View>
  );
};

export default GridDemo;
