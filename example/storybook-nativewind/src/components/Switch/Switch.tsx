import React from 'react';
import { Switch } from '@/components/ui/switch';
import colors from 'tailwindcss/colors';

const SwitchBasic = ({ ...props }: any) => {
  return (
    <Switch
      trackColor={{ false: colors.gray[300], true: colors.gray[500] }}
      thumbColor={colors.gray[50]}
      activeThumbColor={colors.gray[50]}
      ios_backgroundColor={colors.gray[300]}
      {...props}
    />
  );
};

SwitchBasic.description =
  'This is a basic Switch component example. Switches are used to toggle between two states.';

export default SwitchBasic;

export { Switch };
