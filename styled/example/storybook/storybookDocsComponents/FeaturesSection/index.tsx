import React from 'react';
import { Text, Box, VStack, HStack, CheckIcon } from '@gluestack/design-system';
const FeaturesSection = ({ features }: any) => {
  return (
    <Box mb="45px" mt="10px">
      <Text
        fontSize="19px"
        fontWeight="500"
        lineHeight="23px"
        color="$trueGray900"
        mb={20}
      >
        Features
      </Text>
      <VStack space="md">
        {features.map((feature) => {
          return (
            <HStack alignItems="center">
              <Box
                w={25}
                h={25}
                borderRadius="$full"
                bg="$primary50"
                justifyContent="center"
                alignItems="center"
                mr="15px"
              >
                <CheckIcon color="$primary700" width={12} height={12} />
              </Box>
              <Text
                fontSize="15px"
                fontWeight="400"
                lineHeight="25px"
                color="$trueGray700"
              >
                {feature}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};

export { FeaturesSection };
