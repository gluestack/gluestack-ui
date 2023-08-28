import React from 'react';
import {
  Text,
  VStack,
  HStack,
  Box,
  config,
  GluestackUIProvider,
  createConfig,
  Heading,
  Divider,
} from '@gluestack-ui/themed';

const colors: any = config.theme?.tokens.colors;

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

const extendedTheme = createConfig({
  ...config.theme,
  components: {},
});
const ColorPaletteComponent = () => {
  return (
    <GluestackUIProvider config={extendedTheme}>
      <>
        <VStack flex={1}>
          {Object.keys(sortedColorPalette).map((category: string) => {
            return (
              <>
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
                        <HStack flexBasis="30%">
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
              </>
            );
          })}
        </VStack>
      </>
    </GluestackUIProvider>
  );
};

const spaces: any = config.theme?.tokens.space;

const SpaceComponent = () => {
  return (
    <GluestackUIProvider>
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
        {Object.keys(spaces).map((space: string) => {
          return (
            <>
              <Divider my="$2" />
              <HStack key={space} h="$8" alignItems="center">
                <Text w={100} mr="$4">
                  {space}
                </Text>
                <Text w={100} mr="$4">
                  {spaces[space]}
                </Text>
                <Box justifyContent="center" flex={1}>
                  <Box bg="$primary500" w={spaces[space]} h="$4" />
                </Box>
              </HStack>
            </>
          );
        })}
      </VStack>
    </GluestackUIProvider>
  );
};

const opacity: any = config.theme?.tokens.opacity;

const OpacityComponent = () => {
  return (
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
              }}
            >
              {op}
            </Text>
          </Box>
        );
      })}
    </HStack>
  );
};

const ShadowsComponent = () => {
  return (
    <VStack>
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
  );
};
export {
  ColorPaletteComponent,
  SpaceComponent,
  OpacityComponent,
  ShadowsComponent,
};

export { Text, VStack, HStack, Box };
