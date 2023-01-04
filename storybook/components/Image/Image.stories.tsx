import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Image, HStack } from '@gluestack/ui';
import Wrapper from '../Wrapper';
import { Page } from '../../storybookDocsComponents/Page';

const MyImageMeta: ComponentMeta<typeof Image> = {
  title: 'MEDIA AND ICONS/Image',
  component: Image,
  argTypes: {},
  args: {
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackSource: 'https://www.w3schools.com/css/img_lights.jpg',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="Image"
            description="The **Image** component allows one to display images."
            componentName="Image"
          />
        </>
      ),
    },
  },
};

export default MyImageMeta;

type MyCustomImageStory = ComponentStory<typeof Image>;

export { Basic } from './Basic';
export { Sizes } from './Sizes';
export { WithRef } from './WithRef';
