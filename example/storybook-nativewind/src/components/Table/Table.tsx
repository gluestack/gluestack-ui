import React from 'react';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table/index.web';

const TableBasic = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableData>John</TableData>
          <TableData>maldives</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableBasic;
