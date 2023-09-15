import {
  Progress,
  ProgressFilledTrack,
  Text,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

export function Graph({ data }: { data: any }) {
  let colorMap: any = {
    'Nativebase': '$orange500',
    'Tamang-ui': '$green500',
    'gluestack-ui': '$pink500',
    'react-native': '$purple500',
  };

  return (
    <VStack>
      {Object.keys(data).map((key) => {
        return (
          <HStack space="md">
            <VStack w={80}>
              <Text fontSize={'$sm'}>{key}</Text>
            </VStack>
            <VStack>
              <Progress
                value={100}
                h={20}
                borderRadius={'$sm'}
                w={data[key] * 2}
                size="md"
              >
                <ProgressFilledTrack
                  h={20}
                  borderRadius={'$sm'}
                  bgColor={colorMap[key] ?? '$primary500'}
                />
              </Progress>
            </VStack>
            <Text fontSize={'$xs'}>{data[key]} ms</Text>
          </HStack>
        );
      })}
    </VStack>
  );
}
