import type { AriaCheckboxProps, AriaToggleProps } from '@react-types/checkbox';
import type { CheckboxAria, CheckboxGroupAria } from '@react-aria/checkbox';
import type { InputHTMLAttributes } from 'react';
import type { AriaCheckboxGroupProps } from '@react-types/checkbox';

import type {
  AccessibilityRole,
  AccessibilityState,
  TouchableOpacityProps,
} from 'react-native';

export type RNAccessibilityLabelProps = {
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

export type RNAriaCheckboxGroupProps = AriaCheckboxGroupProps &
  RNAccessibilityLabelProps & { children?: React.ReactNode };

export type RNCheckboxGroupAria = CheckboxGroupAria & {
  groupProps: {
    accessibilityState: AccessibilityState;
  } & RNAccessibilityLabelProps;
};

export type RNAriaCheckboxProps = AriaCheckboxProps & RNAccessibilityLabelProps;

export type RNCheckboxAria = CheckboxAria & {
  inputProps: {
    accessibilityRole: AccessibilityRole;
    accessibilityState: AccessibilityState;
  };
};

export type RNAriaToggleProps = AriaToggleProps & RNAccessibilityLabelProps;

type RNToggleAriaProps = InputHTMLAttributes<HTMLInputElement> &
  TouchableOpacityProps;

export interface ToggleAria {
  /**
   * Props to be spread on the input element.
   */
  inputProps: RNToggleAriaProps;
}

export interface AccessibilityLabels {
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export interface AccessibilityRoleState {
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
}
