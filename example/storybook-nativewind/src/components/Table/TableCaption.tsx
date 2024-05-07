import React from 'react';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import { View } from 'react-native';

const TableCaptionExample = () => {
  return (
    <View className="rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Phone Number</TableHead>
          </TableRow>
        </TableHeader>
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
    </View>
  );
};

export default TableCaptionExample;
