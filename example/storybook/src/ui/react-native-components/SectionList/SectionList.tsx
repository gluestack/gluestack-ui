import React from 'react';
import { SectionList, Text, Heading, Center } from '@gluestack-ui/themed';
const data: {
  title: string;
  data: string[];
}[] = [
  {
    title: 'Cyan',
    data: ['$cyan100', '$cyan200', '$cyan300', '$cyan400', '$cyan500'],
  },
  {
    title: 'Yellow',
    data: [
      '$yellow100',
      '$yellow200',
      '$yellow300',
      '$yellow400',
      '$yellow500',
    ],
  },
  {
    title: 'Violet',
    data: [
      '$violet100',
      '$violet200',
      '$violet300',
      '$violet400',
      '$violet500',
    ],
  },
];
const SectionListStory = () => {
  return (
    <Center h="$80" w="100%">
      <SectionList
        maxWidth={300}
        w="$full"
        mb="$4"
        sections={data}
        keyExtractor={(item: any, index) => item + index}
        renderItem={({ item }: any) => (
          <Center py="$4" bg={item}>
            <Text color="$black">
              {typeof item === 'string' ? item.slice(-3) : ''}
            </Text>
          </Center>
        )}
        renderSectionHeader={({ section: { title } }: any) => (
          <Center>
            <Heading fontSize="$xl" mt="$8" pb="$4">
              {title}
            </Heading>
          </Center>
        )}
      />
    </Center>
  );
};

export { data, Center, Heading, Text, SectionList };
export default SectionListStory;
