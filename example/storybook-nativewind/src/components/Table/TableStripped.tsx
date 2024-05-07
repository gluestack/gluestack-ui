import React from 'react';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge, BadgeText } from '@/components/ui/badge';
import { View } from 'react-native';

const TableStripped = () => {
  return (
    <View className="p-3 bg-background-0 rounded-lg overflow-hidden">
      <Table className="w-[1000px]">
        <TableHeader>
          <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
            <TableHead className="font-bold">Order id</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Order price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Rajesh Kumar</TableData>
            <TableData>New Jersey</TableData>
            <TableData>$ 200</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge
                size="lg"
                action="success"
                className="w-fit justify-center"
              >
                <BadgeText>Completed</BadgeText>
              </Badge>
            </View>
          </TableRow>
          <TableRow className="border-b-0 hover:bg-background-0">
            <TableData>5231</TableData>
            <TableData>2</TableData>
            <TableData>Priya Sharma</TableData>
            <TableData>Austin</TableData>
            <TableData>$ 150</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge size="lg" action="info" className="w-fit justify-center">
                <BadgeText>Processing</BadgeText>
              </Badge>
            </View>
          </TableRow>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Ravi Patel</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 215</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge
                size="lg"
                action="warning"
                className="w-fit justify-center"
              >
                <BadgeText>Shipped</BadgeText>
              </Badge>
            </View>
          </TableRow>
          <TableRow className="border-b-0 hover:bg-background-0">
            <TableData>5231</TableData>
            <TableData>4</TableData>
            <TableData>Ananya Gupta</TableData>
            <TableData>California</TableData>
            <TableData>$ 88</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge size="lg" action="info" className="w-fit justify-center">
                <BadgeText>Processing</BadgeText>
              </Badge>
            </View>
          </TableRow>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Arjun Singh</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 115</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge
                size="lg"
                action="success"
                className="w-fit justify-center"
              >
                <BadgeText>Completed</BadgeText>
              </Badge>
            </View>
          </TableRow>
          <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Nisha Verma</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 115</TableData>
            <View className="flex-1 px-6 py-5">
              <Badge size="lg" action="info" className="w-fit justify-center">
                <BadgeText>Processing</BadgeText>
              </Badge>
            </View>
          </TableRow>
        </TableBody>
      </Table>
    </View>
  );
};

export default TableStripped;
