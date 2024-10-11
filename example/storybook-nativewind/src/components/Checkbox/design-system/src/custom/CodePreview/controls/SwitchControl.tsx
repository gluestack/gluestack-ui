import React, { useContext } from 'react';
import { Switch, FormControl } from '../../../index';
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
      <FormControl.Label mb="$3">
        <FormControl.Label.Text
          fontSize="$xs"
          lineHeight="$xs"
          color="$textDark400"
          fontWeight="$normal"
        >
          {componentProp}
        </FormControl.Label.Text>
      </FormControl.Label>
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
