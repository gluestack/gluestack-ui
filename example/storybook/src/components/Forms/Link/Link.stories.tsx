import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Link } from './Link';

export const LinkStory = () => {
  return <Link />;
};
const MyLinkVariantMeta: ComponentMeta<typeof LinkStory> = {
  title: 'stories/FORMS/Link',
  component: LinkStory,
};

export default MyLinkVariantMeta;
