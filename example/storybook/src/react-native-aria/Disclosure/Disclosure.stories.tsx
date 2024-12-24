import React from 'react';

import { View } from 'react-native';
import { Disclosure } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const DisclosureExample = () => {
  return <Disclosure />;
};

const Example = () => {
  return (
    <Wrapper>
      <View style={{ marginTop: 100 }}>
        <DisclosureExample />
      </View>
    </Wrapper>
  );
};

const DisclosureMeta: ComponentMeta<any> = {
  title: 'react-native-aria/disclosure',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default DisclosureMeta;
