import React from 'react';
import colors from 'tailwindcss/colors';
import { HStack, Switch, Text } from '../../../core-components/nativewind';

const SwitchDemo = () => {
  return (
    <HStack space="md">
      <Switch
        defaultValue={true}
        trackColor={{ false: colors.neutral[200], true: colors.neutral[900] }}
        thumbColor={colors.neutral[50]}
        activeThumbColor={colors.neutral[50]}
        ios_backgroundColor={colors.neutral[300]}
      />
      <Text size="sm">Allow notifications</Text>
    </HStack>
  );
};

export default SwitchDemo;
