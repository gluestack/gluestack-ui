import React from 'react';
import {
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
  TableHead,
  Box,
  TableFooter,
  FlatList,
  ScrollView,
} from '@gluestack-ui/themed';

const data = [
  { id: 1, name: 'Rajesh Kumar', units: 10, cost: '$130' },
  { id: 2, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 3, name: 'Rajesh Kumar', units: 10, cost: '$130' },
  { id: 4, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 5, name: 'Rajesh Kumar', units: 10, cost: '$130' },
  { id: 6, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 7, name: 'Rajesh Kumar', units: 10, cost: '$130' },
  { id: 8, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 9, name: 'Rajesh Kumar', units: 10, cost: '$130' },
  { id: 10, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 11, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 12, name: 'Priya Sharma', units: 12, cost: '$220' },
  { id: 13, name: 'Priya Sharma', units: 12, cost: '$220' },
];

const TableFlatlist = ({ ...props }) => {
  const item = ({ item }) => {
    return (
      <TableRow>
        <TableData>{item.name}</TableData>
        <TableData>{item.units}</TableData>
        <TableData>{item.cost}</TableData>
      </TableRow>
    );
  };

  return (
    <>
      <Box
        bg="#EFEFEF"
        p={64}
        sx={{
          _android: {
            p: 0,
          },
          _ios: {
            p: 0,
          },
          _dark: {
            bg: '$black',
          },
        }}
      >
        <TableContainer {...props}>
          <Table>
            <ScrollView>
              <TableHead>
                <TableRow>
                  <TableHeader>Customer Name</TableHeader>
                  <TableHeader>Units</TableHeader>
                  <TableHeader>Cost</TableHeader>
                </TableRow>
              </TableHead>
              <ScrollView horizontal>
                <TableBody>
                  <TableRow>
                    <TableData>abc</TableData>
                    <TableData>abc</TableData>
                    <TableData>abc</TableData>
                  </TableRow>
                  <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    vertical
                    data={data}
                    renderItem={item}
                    keyExtractor={(it, index) => index.toString()}
                  />
                </TableBody>
              </ScrollView>
              <TableFooter>
                <TableRow>
                  <TableHeader>Total</TableHeader>
                  <TableHeader>48</TableHeader>
                  <TableHeader>$770</TableHeader>
                </TableRow>
              </TableFooter>
            </ScrollView>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

TableFlatlist.description = 'This is a basic Table component example.';

export default TableFlatlist;

export {};
