import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BadgeExample } from './Basic';
import { Example as WithoutBadgeExample } from './WithoutBadge';

const MyAvatarMeta: ComponentMeta<typeof BadgeExample> = {
  title: 'Avatar',
  component: BadgeExample,
  argTypes: {},
  args: {},
};

export default MyAvatarMeta;

type MyCustomAvatarBadgeStory = ComponentStory<typeof BadgeExample>;
type MyCustomAvatarStory = ComponentStory<typeof WithoutBadgeExample>;

export const WithBadge: MyCustomAvatarBadgeStory = (args) => (
  <BadgeExample {...args} />
);
export const WithoutBadge: MyCustomAvatarStory = (args) => (
  <WithoutBadgeExample {...args} />
);
