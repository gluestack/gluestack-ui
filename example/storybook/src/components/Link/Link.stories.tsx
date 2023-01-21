import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Link } from './Link';

export const LinkStory = () => {
  return (
    <Wrapper>
      <Link />
    </Wrapper>
  );
};
const MyLinkVariantMeta: ComponentMeta<typeof LinkStory> = {
  title: 'recipes/Link',
  component: LinkStory,
};

export default MyLinkVariantMeta;
