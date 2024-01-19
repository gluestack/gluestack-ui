/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from 'react';
import {
  Text,
  VStack,
  HStack,
  Box,
  GluestackUIProvider,
  Heading,
  Divider,
} from '@custom-ui/themed';
import { config } from '@custom-ui/config';
import { Table, TR, TBody, TD, THead, TH } from '@expo/html-elements';
const colors: any = config.tokens.colors;

const colorPalette: any = {
  primary: {},
  secondary: {},
  tertiary: {},
  others: {},
};

for (const colorKey in colors) {
  const category = colorKey.replace(/\d+/g, '');
  const shade = colorKey.replace(/\D+/g, '');

  if (shade === '') {
    colorPalette.others[category] = colors[colorKey];
    continue;
  }

  if (!colorPalette[category]) {
    colorPalette[category] = {};
  }

  colorPalette[category][shade] = colors[colorKey];
}

const sortedColorPalette: any = {};

for (const category in colorPalette) {
  if (category !== 'others') {
    sortedColorPalette[category] = Object.fromEntries(
      Object.entries(colorPalette[category]).sort()
    );
  }
}

sortedColorPalette.others = { ...colorPalette.others };

const ColorPaletteComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <VStack flex={1}>
        {Object.keys(sortedColorPalette).map((category: string) => {
          return (
            <Fragment key={category}>
              {/* @ts-ignore */}
              <Heading mb="$4" size="md">
                {category}
              </Heading>
              <HStack
                key={category}
                w="$full"
                mb="$4"
                flexWrap="wrap"
                sx={{
                  _web: {
                    gap: 16,
                  },
                }}
              >
                {Object.keys(sortedColorPalette[category]).map(
                  (shade: string) => {
                    return (
                      <HStack flexBasis="30%" key={shade}>
                        <Box
                          key={shade}
                          bg={sortedColorPalette[category][shade]}
                          w="$12"
                          h="$12"
                          rounded="$lg"
                          mr="$4"
                        />
                        <VStack>
                          <Text>
                            {category === 'others'
                              ? `${shade}`
                              : `${category}${shade}`}
                          </Text>
                          <Text>{sortedColorPalette[category][shade]}</Text>
                        </VStack>
                      </HStack>
                    );
                  }
                )}
              </HStack>
            </Fragment>
          );
        })}
      </VStack>
    </GluestackUIProvider>
  );
};

const spaces: any = config.tokens.space;

const sortedSpaceObject: any = spaces;

// Convert the map to an array of key-value pairs for sorting
const mapEntries = Object.entries(sortedSpaceObject);

// Sort the map entries based on the keys
mapEntries.sort(([keyA, valueA]: any, [keyB, valueB]: any) => {
  // Treat 'px' as the smallest and 'full' as the largest
  // Place '0' at the top
  if (keyA === '0') return -1;
  if (keyB === '0') return 1;

  // Treat 'px' as the second smallest
  if (keyA === 'px') return -1;
  if (keyB === 'px') return 1;

  // Treat 'full' as the largest
  if (keyA === 'full') return 1;
  if (keyB === 'full') return -1;

  // Values with '%' should be grouped and sorted at the end
  const isValueAPercentage = valueA.toString().includes('%');
  const isValueBPercentage = valueB.toString().includes('%');
  if (isValueAPercentage && !isValueBPercentage) return 1;
  if (isValueBPercentage && !isValueAPercentage) return -1;

  // Group values with the same denominator and sort them
  const [numA, denomA] = keyA.split('/').map(parseFloat);
  const [numB, denomB] = keyB.split('/').map(parseFloat);

  if (!isNaN(numA) && !isNaN(denomA) && !isNaN(numB) && !isNaN(denomB)) {
    if (denomA === denomB) {
      return numA - numB;
    } else {
      return denomA - denomB; // Sort by denominator if they are different
    }
  }

  // For numeric keys, compare them as numbers
  if (!isNaN(numA) && !isNaN(numB)) {
    return numA - numB;
  }

  // For other keys, compare them as strings
  return keyA.localeCompare(keyB);
});
// const spaceElementsArray =
// Create a new Map from the sorted map entries

const SpaceComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <VStack>
        <HStack h="$8" alignItems="center">
          <Text w={100} mr="$4">
            Tokens
          </Text>
          <Text w={100} mr="$4">
            Value (Pixels)
          </Text>
          <Text>Representation</Text>
        </HStack>
        {mapEntries.map(([key, value]: any) => {
          return (
            <Fragment key={`${key}${value}`}>
              <Divider my="$2" />
              <HStack key={key} h="$8" alignItems="center">
                <Text w={100} mr="$4">
                  {key}
                </Text>
                <Text w={100} mr="$4">
                  {value}
                </Text>
                <Box justifyContent="center" flex={1}>
                  <Box bg="$primary500" w={value} h="$4" />
                </Box>
              </HStack>
            </Fragment>
          );
        })}
      </VStack>
    </GluestackUIProvider>
  );
};

const opacity: any = config.tokens.opacity;

const OpacityComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <HStack
        flexWrap="wrap"
        sx={{
          _web: {
            gap: 16,
          },
        }}
      >
        {Object.keys(opacity).map((op: string) => {
          return (
            <Box
              key={opacity}
              sx={{
                _web: {
                  position: 'relative',
                },
              }}
            >
              <Box
                rounded="$lg"
                key={op}
                bg="$cyan400"
                w="$16"
                h="$16"
                opacity={opacity[op]}
                justifyContent="center"
                alignItems="center"
              />
              <Text
                opacity={1}
                color="$textDark800"
                position="absolute"
                sx={{
                  _web: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  },
                  _dark: {
                    color: 'white',
                  },
                }}
              >
                {op}
              </Text>
            </Box>
          );
        })}
      </HStack>
    </GluestackUIProvider>
  );
};

const ShadowsComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <VStack>
        {/* @ts-ignore */}
        <Heading size="sm" mb="$4">
          Hard Shadows
        </Heading>
        <HStack
          sx={{
            _web: {
              gap: 16,
            },
          }}
        >
          {['1', '2', '3', '4', '5'].map((shadow: string) => {
            return (
              <Box
                key={shadow}
                h="$20"
                w="$20"
                rounded="$lg"
                mb="$4"
                bg="$primary500"
                // @ts-ignore
                hardShadow={shadow}
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$white">{shadow}</Text>
              </Box>
            );
          })}
        </HStack>
        {/* @ts-ignore */}
        <Heading size="sm" mb="$4">
          Soft Shadows
        </Heading>
        <HStack
          sx={{
            _web: {
              gap: 16,
            },
          }}
        >
          {['1', '2', '3', '4', '5'].map((shadow: string) => {
            return (
              <Box
                key={shadow}
                h="$20"
                w="$20"
                rounded="$lg"
                mb="$4"
                bg="$primary500"
                // @ts-ignore
                softShadow={shadow}
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$white">{shadow}</Text>
              </Box>
            );
          })}
        </HStack>
      </VStack>
    </GluestackUIProvider>
  );
};

const borderWidths = config.tokens.borderWidths;
const BorderWidthComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <HStack
        sx={{
          _web: {
            gap: 16,
          },
        }}
      >
        {Object.keys(borderWidths).map((borderWidth: any) => {
          return (
            <Box
              key={borderWidth}
              h="$20"
              w="$20"
              mb="$4"
              borderRadius="$lg"
              borderColor="$purple600"
              // @ts-ignore
              borderWidth={`$${borderWidth}`}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="$black">{borderWidth}</Text>
            </Box>
          );
        })}
      </HStack>
    </GluestackUIProvider>
  );
};

const radii = config.tokens.radii;
const RadiiComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <HStack
        sx={{
          _web: {
            gap: 16,
          },
        }}
        flexWrap="wrap"
      >
        {Object.keys(radii).map((borderRadiusValue: any) => {
          return (
            <Box
              key={borderRadiusValue}
              h="$20"
              w="$20"
              mb="$4"
              bg="$primary500"
              // @ts-ignore
              borderRadius={`$${borderRadiusValue}`}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="$white">{borderRadiusValue}</Text>
            </Box>
          );
        })}
      </HStack>
    </GluestackUIProvider>
  );
};

const DefaultBreakPointsComponent = () => {
  const breakpoints = config.tokens.breakpoints;
  return (
    <Table
      style={{
        borderRadius: config.tokens.radii.lg,
        backgroundColor: config.tokens.colors.backgroundLight50,
        //@ts-ignore
        borderCollapse: 'collapse',
      }}
    >
      <THead>
        <TR>
          <TH
            style={{
              minWidth: 219,
              fontFamily: 'sans-serif',
              paddingHorizontal: 24,
              paddingVertical: 'auto',
              height: 64,
              color: '$textLight900',
              fontSize: config.tokens.fontSizes.md,
              textAlign: 'left',
            }}
          >
            Prefix
          </TH>
          <TH
            style={{
              minWidth: 219,
              fontFamily: 'sans-serif',
              paddingHorizontal: 24,
              paddingVertical: 'auto',
              height: 64,
              color: '$textLight900',
              fontSize: config.tokens.fontSizes.md,
              textAlign: 'left',
            }}
          >
            BreakPoint
          </TH>
          <TH
            style={{
              minWidth: 219,
              fontFamily: 'sans-serif',
              paddingHorizontal: 24,
              paddingVertical: 'auto',
              height: 64,
              color: '$textLight900',
              fontSize: config.tokens.fontSizes.md,
              textAlign: 'left',
            }}
          >
            Description
          </TH>
        </TR>
      </THead>
      <TBody
        style={{
          backgroundColor: config.tokens.colors.backgroundLight0,
        }}
      >
        {Object.keys(breakpoints).map((breakpoint: any) => {
          return (
            <TR key={breakpoint}>
              <TD
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 'auto',
                  height: 64,
                  borderWidth: 0,
                  borderTopWidth: 1,
                  borderStyle: 'solid',
                  borderTopColor: config.tokens.colors.borderLight300,
                  fontFamily: 'sans-serif',
                  color: config.tokens.colors.textLight900,
                  fontSize: config.tokens.fontSizes.sm,
                }}
              >
                <Text>{breakpoint}</Text>
              </TD>
              <TD
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 'auto',
                  height: 64,
                  borderWidth: 0,
                  borderTopWidth: 1,
                  borderStyle: 'solid',
                  borderTopColor: config.tokens.colors.borderLight300,
                  fontFamily: 'sans-serif',
                  color: config.tokens.colors.textLight900,
                  fontSize: config.tokens.fontSizes.sm,
                }}
              >
                {/* @ts-ignore */}
                <Text>{breakpoints[breakpoint]}</Text>
              </TD>

              <TD
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 'auto',
                  height: 64,
                  borderWidth: 0,
                  borderTopWidth: 1,
                  borderStyle: 'solid',
                  borderTopColor: config.tokens.colors.borderLight300,
                  fontFamily: 'sans-serif',
                  color: config.tokens.colors.textLight900,
                  fontSize: config.tokens.fontSizes.sm,
                }}
              >
                {/* @ts-ignore */}
                <Text>{`Viewports ${breakpoints[breakpoint]} and wider`}</Text>
              </TD>
            </TR>
          );
        })}
      </TBody>
    </Table>
  );
};

const StringBreakPointsComponent = () => {
  let finalBreakpointsString = '';
  const breakpoints = config.tokens.breakpoints;
  for (const breakpoint in breakpoints) {
    finalBreakpointsString += `${breakpoint}, `;
  }
  return (
    <Text
      style={{
        fontFamily: 'sans-serif',
        color: config.tokens.colors.textLight900,
        fontSize: config.tokens.fontSizes.sm,
      }}
    >
      {finalBreakpointsString}
    </Text>
  );
};

const fontSizes = config.tokens.fontSizes;
const FontSizeComponent = () => {
  return (
    <GluestackUIProvider config={config}>
      <VStack>
        <HStack h="$8" alignItems="center">
          <Text w={100} mr="$4" fontWeight="bold">
            Tokens
          </Text>
          <Text w={100} mr="$4" fontWeight="bold">
            Value
          </Text>
          <Text fontWeight="bold">Representation</Text>
        </HStack>
        {Object.keys(fontSizes).map((size: any) => {
          return (
            <Fragment key={`${size}`}>
              <Divider my="$2" />
              <HStack key={size} alignItems="center" minHeight="$6">
                <Text w={100} mr="$4">
                  {size}
                </Text>
                <Text w={100} mr="$4">
                  {
                    // @ts-ignore
                    fontSizes[size]
                  }
                </Text>
                {/* @ts-ignore */}
                <Box justifyContent="center" height={fontSizes[size]}>
                  {/* @ts-ignore */}
                  <Text fontSize={fontSizes[size]}>Hello World!</Text>
                </Box>
              </HStack>
            </Fragment>
          );
        })}
      </VStack>
    </GluestackUIProvider>
  );
};

const FontComponent = ({ fontObject, property }: any) => {
  return (
    <GluestackUIProvider config={config}>
      <VStack>
        <HStack h="$8" alignItems="center">
          <Text w={100} mr="$4" fontWeight="bold">
            Tokens
          </Text>
          <Text w={100} mr="$4" fontWeight="bold">
            Value
          </Text>
          <Text fontWeight="bold">Representation</Text>
        </HStack>
        {Object.keys(fontObject).map((key: any) => {
          const props = {
            [`${property}`]: fontObject[key],
          };
          return (
            <Fragment key={`${key}`}>
              <Divider my="$2" />
              <HStack key={key} alignItems="center" minHeight="$6">
                <Text w={100} mr="$4">
                  {key}
                </Text>
                <Text w={100} mr="$4">
                  {fontObject[key]}
                </Text>
                <Box justifyContent="center">
                  <Text {...props}>Hello World!</Text>
                </Box>
              </HStack>
            </Fragment>
          );
        })}
      </VStack>
    </GluestackUIProvider>
  );
};
const FontWeightComponent = () => {
  return (
    <FontComponent
      fontObject={config.tokens.fontWeights}
      property="fontWeight"
    />
  );
};
const LineHeightComponent = () => {
  return (
    <FontComponent
      fontObject={config.tokens.lineHeights}
      property="lineHeight"
    />
  );
};
const LetterSpacingComponent = () => {
  return (
    <FontComponent
      fontObject={config.tokens.letterSpacings}
      property="letterSpacing"
    />
  );
};

const FontFamilyComponent = () => {
  return (
    <FontComponent fontObject={config.tokens.fonts} property="fontFamily" />
  );
};
export {
  ColorPaletteComponent,
  SpaceComponent,
  OpacityComponent,
  ShadowsComponent,
  BorderWidthComponent,
  RadiiComponent,
  DefaultBreakPointsComponent,
  StringBreakPointsComponent,
  FontSizeComponent,
  FontWeightComponent,
  LineHeightComponent,
  LetterSpacingComponent,
  FontFamilyComponent,
};

export { Text, VStack, HStack, Box };
