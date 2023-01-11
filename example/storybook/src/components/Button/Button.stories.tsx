import type { ComponentMeta } from '@storybook/react-native';

import { Button } from './Button';
const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export { Button } from './Button';
export default MyButtonMeta;
