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

const DividerBasic = ({ ...props }) => {
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
      }}
    >
      <TableContainer {...props}>
        <ScrollView horizontal>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email Address</TableHeader>
                <TableHeader>Phone Number</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData>Rajesh Kumar</TableData>
                <TableData>rajesh@example.com</TableData>
                <TableData>+91 98765 43210</TableData>
              </TableRow>
              <TableRow>
                <TableData>Priya Sharma</TableData>
                <TableData>priya@example.com</TableData>
                <TableData>+91 87654 32109</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ravi Patel</TableData>
                <TableData>ravi@example.com</TableData>
                <TableData>+91 76543 21098</TableData>
              </TableRow>
              <TableRow>
                <TableData>Ananya Gupta</TableData>
                <TableData>ananya@example.com</TableData>
                <TableData>+91 65432 10987</TableData>
              </TableRow>
              <TableRow>
                <TableData>Arjun Singh</TableData>
                <TableData>arjun@example.com</TableData>
                <TableData>+91 54321 09876</TableData>
              </TableRow>
              <TableRow>
                <TableData>Nisha Verma</TableData>
                <TableData>nisha@example.com</TableData>
                <TableData>+91 43210 98765</TableData>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableData>
                  <TableHeader>Table Footer</TableHeader>
                </TableData>
                <TableData>
                  <TableHeader>Table Footer</TableHeader>
                </TableData>
                <TableData>
                  <TableHeader>Table Footer</TableHeader>
                </TableData>
              </TableRow>
            </TableFooter>
          </Table>
        </ScrollView>
      </TableContainer>
    </Box>
  );
};

DividerBasic.description =
  'This is a basic Divider component example.  A divider is a thin line that groups content in lists and layouts.';

export default DividerBasic;

export {};
