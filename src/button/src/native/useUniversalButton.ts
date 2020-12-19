import { useButton } from './useButton';
import type { RNAriaButtonProps } from './useButton';
import type { AriaButtonProps } from '@react-types/button';

// Accept Browser and RN accessibility and behaviour props
type Props = AriaButtonProps & RNAriaButtonProps;

export function useUniversalButton(props: Props, ref: any) {
  return useButton(props, ref);
}
