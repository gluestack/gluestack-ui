import { ToggleState } from '@react-stately/toggle';
import { mergeProps } from '@react-aria/utils';
import { ViewProps } from 'react-native';
import { disclosureIds } from './utils';

export function useDisclosure(props: ViewProps, state: ToggleState) {
  const id = disclosureIds.get(state);

  return {
    disclosureProps: mergeProps(props, {
      id,
    }),
  };
}
