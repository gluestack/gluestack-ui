import React, { useContext } from 'react';
import {
  Switch,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui';
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
      <FormControlLabel mb="$3">
        <FormControlLabelText
          fontSize="$xs"
          lineHeight="$xs"
          color="$textDark400"
          fontWeight="$normal"
        >
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
