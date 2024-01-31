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
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';
import { Platform } from 'react-native';

const TableStripped = ({ ...props }) => {
  return (
    <TableContainer
      {...props}
      padding="$3"
      sx={{
        bg: '$backgroundLight0',
        _dark: {
          bg: '$backgroundDark900',
        },
      }}
    >
      <ScrollView horizontal>
        <Table
          sx={{
            width: 1000,
          }}
        >
          <TableHead
            bg="$backgroundLight0"
            sx={{
              _dark: {
                bg: '$backgroundDark900',
              },
            }}
          >
            <TableRow borderBottomWidth="$0">
              <TableHeader>Order id</TableHeader>
              <TableHeader>Items</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>Order price</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              borderBottomWidth="$0"
              bg="$backgroundLight50"
              sx={{
                _dark: {
                  bg: '$backgroundDark950',
                },
              }}
            >
              <TableData>5771</TableData>
              <TableData>3</TableData>
              <TableData>Rajesh Kumar</TableData>
              <TableData>New Jersey</TableData>
              <TableData>$ 200</TableData>
              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="success"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Completed</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow borderBottomWidth="$0">
              <TableData>5231</TableData>
              <TableData>2</TableData>
              <TableData>Priya Sharma</TableData>
              <TableData>Austin</TableData>
              <TableData>$ 150</TableData>
              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="info"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Processing</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow
              borderBottomWidth="$0"
              bg="$backgroundLight50"
              sx={{
                _dark: {
                  bg: '$backgroundDark950',
                },
              }}
            >
              <TableData>5771</TableData>
              <TableData>3</TableData>
              <TableData>Ravi Patel</TableData>
              <TableData>Seattle</TableData>
              <TableData>$ 215</TableData>
              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="warning"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Shipped</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow borderBottomWidth="$0">
              <TableData>5231</TableData>
              <TableData>4</TableData>
              <TableData>Ananya Gupta</TableData>
              <TableData>California</TableData>
              <TableData>$ 88</TableData>

              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="info"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Processing</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow
              borderBottomWidth="$0"
              bg="$backgroundLight50"
              sx={{
                _dark: {
                  bg: '$backgroundDark950',
                },
              }}
            >
              <TableData>5771</TableData>
              <TableData>3</TableData>
              <TableData>Arjun Singh</TableData>
              <TableData>Seattle</TableData>
              <TableData>$ 115</TableData>
              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="success"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Completed</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow borderBottomWidth="$0">
              <TableData>5771</TableData>
              <TableData>3</TableData>
              <TableData>Arjun Singh</TableData>
              <TableData>Seattle</TableData>
              <TableData>$ 115</TableData>
              <TableData>
                <Badge
                  size="lg"
                  variant="solid"
                  rborderRadius="$none"
                  action="success"
                  width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                >
                  <BadgeText>Completed</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollView>
    </TableContainer>
  );
};

TableStripped.description = 'This is a stripped table example.';

export default TableStripped;

export {};
