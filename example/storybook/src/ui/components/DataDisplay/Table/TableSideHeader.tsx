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
  ScrollView,
  View,
} from '@gluestack-ui/themed';

const TableSideHeader = ({ ...props }) => {
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
      <TableContainer
        {...props}
        sx={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '$borderLight300',
          _dark: {
            borderColor: '$borderDark800',
          },
        }}
      >
        <ScrollView horizontal>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  borderBottomColor: '$borderLight300',
                  _dark: {
                    borderBottomColor: '$borderDark800',
                  },
                }}
              >
                {/* borders on only one side are not natively supported by iOS, so wrapping with a view (hack for now)*/}
                <View
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  <TableHeader alignItems="center" display="flex">
                    Player
                  </TableHeader>
                </View>

                <TableHeader
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  Pts
                </TableHeader>

                <TableHeader
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  Reb
                </TableHeader>
                <TableHeader
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  Ast
                </TableHeader>
                <TableHeader
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  Stl
                </TableHeader>
                <TableHeader>Blk</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  borderBottomColor: '$borderLight300',
                  _dark: {
                    borderBottomColor: '$borderDark800',
                  },
                }}
              >
                <View
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    bg: '$backgroundLight50',

                    _dark: {
                      borderRightColor: '$borderDark800',
                      bg: '$backgroundDark950',
                    },
                  }}
                >
                  <TableHeader display="flex" alignItems="center">
                    LeBron James
                  </TableHeader>
                </View>

                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  30
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  10
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  5
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  5
                </TableData>
                <TableData>2</TableData>
              </TableRow>
              <TableRow
                sx={{
                  borderBottomColor: '$borderLight300',
                  _dark: {
                    borderBottomColor: '$borderDark800',
                  },
                }}
              >
                <View
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    bg: '$backgroundLight50',

                    _dark: {
                      borderRightColor: '$borderDark800',
                      bg: '$backgroundDark950',
                    },
                  }}
                >
                  <TableHeader display="flex" alignItems="center">
                    Anthony Davis
                  </TableHeader>
                </View>

                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  21
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  15
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  10
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  3
                </TableData>
                <TableData>6</TableData>
              </TableRow>
              <TableRow
                sx={{
                  borderBottomColor: '$borderLight300',
                  _dark: {
                    borderBottomColor: '$borderDark800',
                  },
                }}
              >
                <View
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    bg: '$backgroundLight50',

                    _dark: {
                      borderRightColor: '$borderDark800',
                      bg: '$backgroundDark950',
                    },
                  }}
                >
                  <TableHeader display="flex" alignItems="center">
                    Austin Reaves
                  </TableHeader>
                </View>

                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  18
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  8
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  15
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  3
                </TableData>
                <TableData>3</TableData>
              </TableRow>
              <TableRow
                sx={{
                  borderBottomColor: '$borderLight300',
                  _dark: {
                    borderBottomColor: '$borderDark800',
                  },
                }}
                borderBottomWidth="$0"
              >
                <View
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    bg: '$backgroundLight50',

                    _dark: {
                      borderRightColor: '$borderDark800',
                      bg: '$backgroundDark950',
                    },
                  }}
                >
                  <TableHeader display="flex" alignItems="center">
                    Kobe Bryant
                  </TableHeader>
                </View>

                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  32
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  12
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  13
                </TableData>
                <TableData
                  sx={{
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderRightColor: '$borderLight300',
                    _dark: {
                      borderRightColor: '$borderDark800',
                    },
                  }}
                >
                  4
                </TableData>
                <TableData>5</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollView>
      </TableContainer>
    </Box>
  );
};

TableSideHeader.description =
  'This is a basic Divider component example.  A divider is a thin line that groups content in lists and layouts.';

export default TableSideHeader;

export {};
