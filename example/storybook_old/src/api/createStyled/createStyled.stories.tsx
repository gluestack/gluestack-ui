import type { ComponentMeta } from '@storybook/react-native';
import { CreateStyled } from './createStyled';
const MycreateStyledMeta: ComponentMeta<typeof CreateStyled> = {
  title: 'api/stories/Createstyled',
  component: CreateStyled,
};

export { CreateStyled } from './createStyled';
export default MycreateStyledMeta;
