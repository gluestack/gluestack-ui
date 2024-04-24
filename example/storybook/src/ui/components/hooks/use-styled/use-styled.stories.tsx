import type { ComponentMeta } from '@storybook/react-native';
import useStyled from './useStyled';
const useStyledMeta: ComponentMeta<typeof useStyled> = {
  title: 'stories/hooks/useStyled',
  component: useStyled,
};

export default useStyledMeta;
export { useStyled };
