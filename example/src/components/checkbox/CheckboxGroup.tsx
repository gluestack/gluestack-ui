import React from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from 'react-native-aria';
import { Text, View } from 'react-native';
import type { RNAriaCheckboxGroupProps } from 'src/types';

export let CheckboxGroupContext = React.createContext<any>(null);

export function CheckboxGroup(props: RNAriaCheckboxGroupProps) {
  let { children, label } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    //@ts-ignore
    <View {...groupProps} nativeID={groupProps.id}>
      {label && (
        //@ts-ignore
        <Text {...labelProps} nativeID={labelProps.id}>
          {label}
        </Text>
      )}
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </View>
  );
}
