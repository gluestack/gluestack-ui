import React from 'react';
import { ComponentMeta } from '@storybook/react-native';
import { Avatar } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';

// var st = document.createElement('style');
// st.innerHTML = `#story--avatar--group { height: 50px }`;
// document.body.append(st);

const AvatarMeta: ComponentMeta<typeof Avatar> = {
  title: 'MEDIA AND ICONS/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackText: 'AB',
    badge: true,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="Avatar"
            description="The **Avatar** component can display profile pictures, initials, or a fallback image to represent a user."
            componentName="Avatar"
          />
        </>
      ),
    },
  },
};

export default AvatarMeta;

export { Basic } from './Basic';
export { Sizes } from './Sizes';
export { Group } from './Group';
