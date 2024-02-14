import React from 'react';
import { Grid, GridItem, Text, View } from '@gluestack-ui/themed';

const GridBasic = () => {
  return (
    <Grid>
      <GridItem colSpan={6}>
        <View bg="$pink300" p="$2" alignItems="center">
          <Text color="$white">
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </Text>
        </View>
      </GridItem>
      <GridItem colSpan={6}>
        <View bg="$blue300" p="$2" alignItems="center">
          <Text color="$white">B</Text>
        </View>
      </GridItem>
      <GridItem colSpan={6}>
        <View bg="$orange300" p="$2" alignItems="center">
          <Text color="$white">C</Text>
        </View>
      </GridItem>
      <GridItem colSpan={6}>
        <View bg="$emerald300" p="$2" alignItems="center">
          <Text color="$white">D</Text>
        </View>
      </GridItem>
    </Grid>
  );
};

export default GridBasic;
export { Grid, GridItem, Text, View };
