import { useButton as useButtonWeb } from '@react-aria/button';

// Accept Browser and RN accessibility and behaviour props
// No need for types here as it's available in native/useUniversalButton
export function useUniversalButton(props: any, ref: any) {
  return useButtonWeb(props, ref);
}
