import React, { useContext } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Switch } from '@/components/ui/switch';
import { CodePreviewContext } from '../CodePreviewProvider';

export const SwitchControl = ({ defaultValue, componentProp }: any) => {
  const [value, setValue] = React.useState(defaultValue ?? false);

  const { propsString, updatePropsString } = useContext(CodePreviewContext);

  const toggleSwitch = (val: any) => {
    setValue((previousState: boolean) => !previousState);

    const componentPropsValueRegex = new RegExp(
      componentProp + '={(.*?)}',
      'g'
    );

    if (propsString.match(componentPropsValueRegex)) {
      updatePropsString(
        propsString.replace(
          componentPropsValueRegex,
          `${componentProp}={${val}}`
        )
      );
    }
  };

  return (
    <FormControl>
      <FormControlLabel className="mb-3">
        <FormControlLabelText className="text-sm leading-3 text-typography-400 dark:text-background-400 font-normal">
          {componentProp}
        </FormControlLabelText>
      </FormControlLabel>
      <Switch
        trackColor={{ true: '#005DB4', false: '#d4d4d4' }}
        thumbColor="#fafafa"
        //@ts-ignore
        activeThumbColor="#fafafa"
        value={value}
        onValueChange={toggleSwitch}
      />
    </FormControl>
  );
};
