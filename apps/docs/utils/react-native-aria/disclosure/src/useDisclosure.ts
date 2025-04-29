import { ToggleState } from '@react-stately/toggle';
import { ViewProps } from 'react-native';

// Polyfill
export function useDisclosure(_props: ViewProps, _state: ToggleState) {
  return {
    disclosureProps: _props,
  };
}
