export interface IInterfaceSwitchProps {
  /**
   * Function called when the state of the Switch changes.
   */
  onToggle?: (...args: any) => void;
  /**
   * If true, set the Switch to the checked state.
   */
  isChecked?: boolean;
  isDisabled?: boolean;
  /**
   * If true, the checkbox will be initially checked.
   */
  defaultIsChecked?: boolean;
  /**
   * If true, set the switch to the invalid state.
   */
  isInvalid?: boolean;
}

export type ISwitchComponentType<SwitchProps> = (
  props: SwitchProps & IInterfaceSwitchProps
) => JSX.Element;

export type ISwitchProps = IInterfaceSwitchProps;
