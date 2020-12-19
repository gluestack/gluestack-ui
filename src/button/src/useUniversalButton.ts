import { Platform } from 'react-native';
import { useButton } from '../../button/index';
import type { RNAriaButtonProps } from './native/useButton';
import type { AriaButtonProps } from '@react-types/button';
import { useButton as useButtonWeb } from '@react-aria/button';

// Accept Browser and RN accessibility and behaviour props
type Props = AriaButtonProps & RNAriaButtonProps;

export function useUniversalButton(props: Props, ref: any) {
  if (Platform.OS === 'web') {
    return useButtonWeb(props, ref);
  }

  return useButton(props, ref);
}
