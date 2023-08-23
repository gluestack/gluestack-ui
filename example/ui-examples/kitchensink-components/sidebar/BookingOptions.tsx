import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Switch,
  Text,
  VStack,
} from '../../gluestack-ui-components';

const BookingOptions = React.memo(() => {
  const [selfCheckIn, setSelfCheckIn] = React.useState(false);
  const [mealsIncluded, setMealsIncluded] = React.useState(false);

  return (
    <VStack space="md">
      <Heading size="sm">Booking Options</Heading>
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text
              size="sm"
              color="$textLight900"
              sx={{ _dark: { color: '$textDark100' } }}
            >
              Self check-in
            </Text>
            <Text size="xs" color="$textLight500">
              Access a place without needing the Host
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={selfCheckIn}
            onValueChange={(val: any) => setSelfCheckIn(val)}
          />
        </HStack>
      </VStack>
      <VStack w="100%">
        <HStack space="lg" w="100%">
          <VStack flex={1}>
            <Text
              size="sm"
              color="$textLight900"
              sx={{ _dark: { color: '$textDark100' } }}
            >
              Meals included
            </Text>
            <Text size="xs" color="$textLight500">
              Have a prefered meal for your comfy stay
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={mealsIncluded}
            onValueChange={(val: any) => setMealsIncluded(val)}
          />
        </HStack>
      </VStack>
    </VStack>
  );
});
export default BookingOptions;
