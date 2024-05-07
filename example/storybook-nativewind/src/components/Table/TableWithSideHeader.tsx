import React from 'react';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { View } from 'react-native';

const TableWithSideHeaderExample = () => {
  return (
    <View className="border border-outline-200 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Player</TableHead>
            <TableHead>Pts</TableHead>
            <TableHead>Reb</TableHead>
            <TableHead>Ast</TableHead>
            <TableHead>Stl</TableHead>
            <TableHead>Blk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead>LeBron James</TableHead>
            <TableData>30</TableData>
            <TableData>10</TableData>
            <TableData>5</TableData>
            <TableData>5</TableData>
            <TableData>2</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Anthony Davis</TableHead>
            <TableData>21</TableData>
            <TableData>15</TableData>
            <TableData>10</TableData>
            <TableData>3</TableData>
            <TableData>6</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Austin Reaves</TableHead>
            <TableData>18</TableData>
            <TableData>8</TableData>
            <TableData>15</TableData>
            <TableData>3</TableData>
            <TableData>3</TableData>
          </TableRow>
          <TableRow className="border-b-0">
            <TableHead>Kobe Bryant</TableHead>
            <TableData>32</TableData>
            <TableData>12</TableData>
            <TableData>13</TableData>
            <TableData>4</TableData>
            <TableData>5</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </View>
  );
};

export default TableWithSideHeaderExample;
