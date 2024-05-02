import React from 'react';
import colors from 'tailwindcss/colors';
import { HStack, Switch, Text } from '../../../core-components/nativewind';

const SwitchDemo = () => {
  return (
    <HStack space="md">
      <Switch
        defaultValue={true}
        trackColor={{ false: colors.gray[300], true: colors.gray[500] }}
        thumbColor={colors.gray[50]}
        activeThumbColor={colors.gray[50]}
        ios_backgroundColor={colors.gray[300]}
      />
      <Text size="sm">Allow notifications</Text>
    </HStack>
  );
};

export default SwitchDemo;
