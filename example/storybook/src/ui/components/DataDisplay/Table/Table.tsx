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
  ScrollView,
} from '@gluestack-ui/themed';

const TableBasic = ({ ...props }) => {
  return (
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
        <ScrollView horizontal>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Customer Name</TableHeader>
                <TableHeader>Units</TableHeader>
                <TableHeader>Cost</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData>Rajesh Kumar</TableData>
                <TableData>10</TableData>
                <TableData>$130</TableData>
              </TableRow>
              <TableRow>
                <TableData>Priya Sharma</TableData>
                <TableData>12</TableData>
                <TableData>$220</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ravi Patel</TableData>
                <TableData>6</TableData>
                <TableData>$55</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ananya Gupta</TableData>
                <TableData>18</TableData>
                <TableData>$340</TableData>
              </TableRow>
              <TableRow>
                <TableData>Arjun Singh</TableData>
                <TableData>2</TableData>
                <TableData>$35</TableData>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableHeader>Total</TableHeader>
                <TableHeader>48</TableHeader>
                <TableHeader>$770</TableHeader>
              </TableRow>
            </TableFooter>
          </Table>
        </ScrollView>
      </TableContainer>
    </Box>
  );
};

TableBasic.description = 'This is a basic Table component example.';

export default TableBasic;

export {};
