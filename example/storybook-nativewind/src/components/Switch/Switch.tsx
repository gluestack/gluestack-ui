import React from 'react';
import { Switch } from '@/components/ui/switch';
import colors from 'tailwindcss/colors';

const SwitchBasic = ({ ...props }: any) => {
  return (
    <Switch
      // value={props.isEnabled}
      trackColor={{ false: colors.neutral[300], true: colors.neutral[950] }}
      thumbColor={colors.neutral[50]}
      activeThumbColor={colors.neutral[50]}
      ios_backgroundColor={colors.neutral[300]}
      {...props}
    />
  );
};

SwitchBasic.description =
  'This is a basic Switch component example. Switches are used to toggle between two states.';

export default SwitchBasic;

export { Switch };
