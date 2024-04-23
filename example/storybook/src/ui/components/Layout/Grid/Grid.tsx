import React from 'react';
import {
  Grid,
  GridContainer,
  GridItem,
  Text,
  View,
} from '@gluestack-ui/themed';

const GridBasic = () => {
  return (
    <>
      <GridContainer spacing={10} bg="$blue300" padding="$20">
        <Grid bg="$pink">
          <GridItem colSpan={15} flexDirection="column">
            <View bg="$pink300" alignItems="center">
              <Text color="$white">A</Text>
            </View>
            <View bg="$pink300" alignItems="center">
              <Text color="$white">B</Text>
            </View>
            <View bg="$pink300" alignItems="center">
              <Text color="$white">C</Text>
            </View>
          </GridItem>

          <GridItem colSpan={12}>
            <View bg="$blue300" p="$2" alignItems="center">
              <Text color="$white">B</Text>
            </View>
          </GridItem>
          <GridItem colSpan={4}>
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
      </GridContainer>
    </>
  );
};

export default GridBasic;
export { Grid, GridItem, Text, View, GridContainer };
