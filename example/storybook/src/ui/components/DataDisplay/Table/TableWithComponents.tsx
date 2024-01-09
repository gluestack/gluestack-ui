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
  View,
} from '@gluestack-ui/themed';
import { Platform } from 'react-native';

const TableWithComponents = ({ ...props }) => {
  return (
    <TableContainer {...props} borderRadius="$none">
      <ScrollView horizontal>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Order id</TableHeader>
              <TableHeader>Items</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>Order price</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData>5771</TableData>
              <TableData>3</TableData>
              <TableData>Rajesh Kumar</TableData>
              <TableData>New jersey</TableData>
              <TableData>$200</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="info"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>5231</TableData>
              <TableData>2</TableData>
              <TableData>Priya Sharma</TableData>
              <TableData>Austin</TableData>
              <TableData>$139</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="success"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>5248</TableData>
              <TableData>2</TableData>
              <TableData>Ravi Patel</TableData>
              <TableData>Seattle</TableData>
              <TableData>$215</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="warning"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Shipped</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>5380</TableData>
              <TableData>4</TableData>
              <TableData>Ananya Gupta</TableData>
              <TableData>California</TableData>
              <TableData>$88</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="info"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>5271</TableData>
              <TableData>3</TableData>
              <TableData>Arjun Singh</TableData>
              <TableData>Seattle</TableData>
              <TableData>$115</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="info"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Processing</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
            <TableRow
              sx={{
                borderBottomWidth: 0,
              }}
            >
              <TableData>5651</TableData>
              <TableData>1</TableData>
              <TableData>Nisha Verma</TableData>
              <TableData>Austin</TableData>
              <TableData>$280</TableData>

              <TableData>
                <View
                  justifyContent="center"
                  flex={1}
                  width="100%"
                  pl={Platform.OS === 'ios' ? 24 : 0}
                >
                  <Badge
                    mt={Platform.OS === 'web' ? 0 : 8}
                    size="lg"
                    variant="solid"
                    borderRadius="$none"
                    action="success"
                    width={Platform.OS === 'web' ? 'fit-content' : '100%'}
                  >
                    <BadgeText>Completed</BadgeText>
                  </Badge>
                </View>
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollView>
    </TableContainer>
  );
};

TableWithComponents.description =
  'This is an example of table component with other components.';

export default TableWithComponents;

export {};
