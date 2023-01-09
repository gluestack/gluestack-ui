import React from 'react';
import {
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { Text, Heading, Box } from '@gluestack/design-system';
import { ApiReference } from '../ApiReference';
import { DynamicTyping } from '../DynamicTyping';
import { FeaturesSection } from '../FeaturesSection';
import { AnatomySection } from '../AnatomySection';
import { Wrapper } from '../../src/components/Wrapper';

const Page = ({
  title,
  description,
  componentName,
  apiReference,
  features,
}: any) => {
  return (
    <Wrapper>
      <Box>
        <Heading
          fontSize="35px"
          fontWeight="500"
          lineHeight="40px"
          color="$trueGray900"
          mb={10}
        >
          {title}
        </Heading>
        <Text
          fontSize="21px"
          fontWeight="400"
          lineHeight="30px"
          color="$trueGray700"
          mb="45px"
          mt="10px"
        >
          {description}
        </Text>
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <FeaturesSection features={features} />
        <AnatomySection />
        <ApiReference apiList={apiReference} />
        <Stories title="Examples" />
        <DynamicTyping component={componentName} />
      </Box>
    </Wrapper>
  );
};

export { Page };
