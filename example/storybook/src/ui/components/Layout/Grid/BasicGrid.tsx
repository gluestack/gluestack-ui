import React from 'react';
import {
  // Grid,
  // GridItem,
  View,
  // Text,
  ScrollView,
  // Box,
  // Image,
} from '@gluestack-ui/themed';

const BasicGrid = () => {
  return (
    <ScrollView width="100%">
      {/* <Grid
        numColumns={4}
        columnSpacing={10}
        rowSpacing={10}
        flexDirection="row"
      >
        <GridItem colSpan={4}>
          <View
            bg="$violet600"
            minHeight={100}
            justifyContent="center"
            alignItems="center"
            p="$2"
          >
            <Text color="$white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
              voluptatem earum modi illum. Aliquam atque molestiae optio, ut,
              similique assumenda modi ipsam fugit obcaecati suscipit animi
            </Text>
          </View>
        </GridItem>
        <GridItem colSpan={2}>
          <View
            bg="$pink500"
            minHeight={100}
            justifyContent="center"
            alignItems="center"
            p="$2"
          >
            <Text color="$white">2</Text>
          </View>
        </GridItem>
        <GridItem colSpan={2}>
          <View
            bg="$yellow500"
            minHeight={100}
            justifyContent="center"
            alignItems="center"
            p="$2"
          >
            <Text color="$white">3</Text>
          </View>
        </GridItem>
        <GridItem colSpan={2}>
          <View
            bg="$red600"
            minHeight={100}
            justifyContent="center"
            alignItems="center"
            p="$2"
          >
            <Text color="$white">4</Text>
          </View>
        </GridItem>
      </Grid> */}
      <View
        style={{
          backgroundColor: 'yellow',
          flexDirection: 'row',
          gap: 3,
        }}
      >
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BasicGrid;
