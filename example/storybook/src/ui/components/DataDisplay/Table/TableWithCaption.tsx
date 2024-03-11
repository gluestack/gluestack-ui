import React from 'react';
import {
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
  TableHead,
  ScrollView,
  TableCaption,
} from '@gluestack-ui/themed';

const TableWithCaption = ({ ...props }) => {
  return (
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
              <TableData fontWeight="$normal">rajesh@example.com</TableData>
              <TableData fontWeight="$normal">+91 98765 43210</TableData>
            </TableRow>
            <TableRow>
              <TableData>Priya Sharma</TableData>
              <TableData fontWeight="$normal">priya@example.com</TableData>
              <TableData fontWeight="$normal">+91 87654 32109</TableData>
            </TableRow>
            <TableRow>
              <TableData>Ravi Patel</TableData>
              <TableData fontWeight="$normal">ravi@example.com</TableData>
              <TableData fontWeight="$normal">+91 76543 21098</TableData>
            </TableRow>
            <TableRow>
              <TableData>Ananya Gupta</TableData>
              <TableData fontWeight="$normal">ananya@example.com</TableData>
              <TableData fontWeight="$normal">+91 65432 10987</TableData>
            </TableRow>
            <TableRow>
              <TableData>Arjun Singh</TableData>
              <TableData fontWeight="$normal">arjun@example.com</TableData>
              <TableData fontWeight="$normal">+91 54321 09876</TableData>
            </TableRow>
            <TableRow>
              <TableData>Nisha Verma</TableData>
              <TableData fontWeight="$normal">nisha@example.com</TableData>
              <TableData fontWeight="$normal">+91 43210 98765</TableData>
            </TableRow>
          </TableBody>
          <TableCaption fontWeight="$normal">
            Showing recent membership details
          </TableCaption>
        </Table>
      </ScrollView>
    </TableContainer>
  );
};

TableWithCaption.description =
  'This is a Table component with caption example.';

export default TableWithCaption;

export {};
