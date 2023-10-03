import type { ComponentMeta } from '@storybook/react-native';
import useColorMode from './useColorMode';
const useColorModeMeta: ComponentMeta<typeof useColorMode> = {
  title: 'stories/hooks/useColorMode',
  component: useColorMode,
};

export default useColorModeMeta;
export { useColorMode };
