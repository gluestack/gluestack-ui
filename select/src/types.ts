import type { MutableRefObject } from 'react';
import type { TextInputProps } from 'react-native';
export interface ISelectProps extends TextInputProps {
  isDisable?: boolean;
  ref?: any;
  children?: any;
}

export interface ISelectContext {
  setSelectedValue?: any;
  onValueChange?: React.Dispatch<any>;
  selectedValue?: any;
}

export interface ISelectItemProps {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export type ISelectComponentType = ((
  props: ISelectProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: ISelectItemProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
