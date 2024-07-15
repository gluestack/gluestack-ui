import React from 'react';
import colors from 'tailwindcss/colors';
import { Switch } from '../../../core-components/nativewind';

const SwitchDemo = () => {
  return (
    <Switch
      size="lg"
      trackColor={{ false: colors.neutral[300], true: colors.neutral[600] }}
      thumbColor={colors.neutral[50]}
      activeThumbColor={colors.neutral[50]}
      ios_backgroundColor={colors.neutral[300]}
    />
  );
};

export default SwitchDemo;
