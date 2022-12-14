import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MenuComponent } from './Menu';

const MenuMeta: ComponentMeta<typeof MenuComponent> = {
  title: 'Menu',
  component: MenuComponent,
  argTypes: {
    // onPress: { action: 'pressed the button' },
  },
  args: {
    // text: 'Hello world',
  },
};

export default MenuMeta;

type MenuStory = ComponentStory<typeof MenuComponent>;

export const Basic: MenuStory = (args) => <MenuComponent {...args} />;
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
