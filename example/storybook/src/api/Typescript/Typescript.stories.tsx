import type { ComponentMeta } from '@storybook/react-native';
import { Typescript } from './Typescript';
const MyTypescriptMeta: ComponentMeta<typeof Typescript> = {
  title: 'api/stories/Typescript',
  component: Typescript,
};

export { Typescript } from './Typescript';
export default MyTypescriptMeta;
