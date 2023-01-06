import React from 'react';
import {
  Primary,
  ArgsTable,
  PRIMARY_STORY,
  Story,
  Canvas,
} from '@storybook/addon-docs';
import { Text, Heading, Box } from '@gluestack/ui';
import { ApiReference } from '../ApiReference';
import { DynamicTyping } from '../DynamicTyping';
import { FeaturesSection } from '../FeaturesSection';
import { AnatomySection } from '../AnatomySection';
import { CodeBlock } from '../CodeBlock';
import Wrapper from '../../components/Wrapper';
const Page = ({
  title,
  description,
  componentName,
  apiReference,
  features,
  stories,
  anatomyCode,
  creatorCode,
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
        <AnatomySection code={anatomyCode} />
        <ApiReference apiList={apiReference} />
        {stories.map((story: any) => {
          return (
            <>
              <Text fontSize={24} fontWeight={500}>
                {story.name}
              </Text>
              <Canvas>
                <Story
                  parameters={{
                    docs: {
                      source: {
                        type: 'dynamic',
                      },
                    },
                  }}
                  inline={false}
                  name={story.name}
                  id={story.id}
                />
              </Canvas>
            </>
          );
        })}
        <DynamicTyping component={componentName} />
        <CodeBlock
          code={creatorCode}
          heading="Creator"
          description="createButton with StyledButton"
        />
      </Box>
    </Wrapper>
  );
};

export { Page };
