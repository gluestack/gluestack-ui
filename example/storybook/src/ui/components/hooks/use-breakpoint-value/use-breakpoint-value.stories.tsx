import type { ComponentMeta } from '@storybook/react-native';
import useBreakpointValue from './useBreakpointValue';
const useBreakpointValueMeta: ComponentMeta<typeof useBreakpointValue> = {
  title: 'stories/hooks/useBreakpointValue',
  component: useBreakpointValue,
};

export default useBreakpointValueMeta;
export { useBreakpointValue };
