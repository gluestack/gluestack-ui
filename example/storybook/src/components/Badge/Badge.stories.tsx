import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Badge } from './Badge';
export const BadgeStory = () => {
  return (
    <Wrapper>
      <Badge />
    </Wrapper>
  );
};
const MyBadgeVariantMeta: ComponentMeta<typeof BadgeStory> = {
  title: 'recipes/Badge',
  component: BadgeStory,
};

export default MyBadgeVariantMeta;
