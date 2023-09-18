import { Text, HStack, VStack, Box } from '@gluestack-ui/themed';
import React from 'react';

export function Graph({ data }: { data: any }) {
  const colorMap: any = {
    'gluestack-ui': '$primary500',
    'React Native': '#61dafb',
    'Tamagui': '#d6409f',
    'Styled Components': '$yellow500',
    'NativeBase': '$cyan600',
  };

  const maxValue = Math.max(...Object.values(data).map((stat: any) => stat));

  return (
    <VStack
      space="sm"
      pl="$12"
      pr="$4"
      py="$12"
      bg="#fbfbfb"
      rounded="$md"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
      mb="$8"
    >
      {Object.keys(data).map((key) => {
        const width = `${Math.round((data[key] / maxValue) * 100)}%`;

        return (
          <HStack space="md" alignItems="center">
            <VStack>
              <Text
                sx={{
                  _web: { whiteSpace: 'nowrap' },
                  w: 120,
                  fontSize: '$sm',
                  textAlign: 'right',
                  fontWeight: key === 'gluestack-ui' ? '$semibold' : '$normal',
                }}
              >
                {key}
              </Text>
            </VStack>
            <HStack space="md" alignItems="center" flex={0.7}>
              <Box
                h={'$5'}
                w={width}
                borderRadius={'$sm'}
                bgColor={colorMap[key] ?? '$primary500'}
              />
              <Text
                fontSize="$xs"
                flex={1}
                sx={{
                  _web: {
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                {data[key]} ms
              </Text>
            </HStack>
          </HStack>
        );
      })}
    </VStack>
  );
}
