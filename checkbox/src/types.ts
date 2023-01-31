import type { MutableRefObject } from 'react';
import type { ViewProps } from 'react-native';
interface InterfaceCheckbox extends ViewProps {
  value: string;
  onChange?: (isSelected: boolean) => void;
  children?: React.ReactNode;
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isHovered?: boolean;
  isIndeterminate?: boolean;
}

interface CheckboxGroup {
  value: Array<string>;
  onChange?: (isSelected: any) => void;
}

export type ICheckboxComponentType<Root, Indicator, Icon, Label, Group> = ((
  props: Root & InterfaceCheckbox & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Indicator: React.MemoExoticComponent<
    (props: Indicator & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: Icon & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Label: React.MemoExoticComponent<
    (props: Label & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Group: React.MemoExoticComponent<
    (
      props: Group & CheckboxGroup & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};

export type ICheckboxProps = InterfaceCheckbox;
