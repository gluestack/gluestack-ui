import { ToggleState } from '@react-stately/toggle';
import { useId, mergeProps } from '@react-aria/utils';
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { PressableProps } from 'react-native';
import { disclosureIds } from './utils';

export function useDisclosureButton(props: PressableProps, state: ToggleState) {
  const id = useId();

  disclosureIds.set(state, id);

  const onPress = state.toggle;

  const ariaProps = mapDomPropsToRN({
    'aria-expanded': state.isSelected,
    'aria-controls': state.isSelected ? id : undefined,
  });

  return {
    buttonProps: mergeProps(props, {
      onPress,
      ...ariaProps,
      role: 'button',
    }),
  };
}
