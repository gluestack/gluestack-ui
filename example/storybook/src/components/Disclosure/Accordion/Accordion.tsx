import type { ComponentStory } from '@storybook/react-native';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionIcon,
  ChevronDownIcon,
  Text,
} from '../../../ui-components';
import React from 'react';

import { Button, ButtonText } from '../../../ui-components';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: // text = 'Accordion',
// ...props
any) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
          <AccordionTrigger justifyContent="space-between" px="$0">
            <Text color="$black" fontWeight="semibold">
              Press me
            </Text>
            <AccordionIcon>
              <ChevronDownIcon color="$black" />
            </AccordionIcon>
          </AccordionTrigger>
          <AccordionContent>
            <Text color="$black">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi".
            </Text>
          </AccordionContent>
        </AccordionHeader>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
          <AccordionTrigger justifyContent="space-between" px="$0">
            <Text color="$black" fontWeight="semibold">
              Press me
            </Text>
            <AccordionIcon>
              <ChevronDownIcon color="$black" />
            </AccordionIcon>
          </AccordionTrigger>
          <AccordionContent>
            <Text color="$black">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi".
            </Text>
          </AccordionContent>
        </AccordionHeader>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
          <AccordionTrigger justifyContent="space-between" px="$0">
            <Text color="$black" fontWeight="semibold">
              Press me
            </Text>
            <AccordionIcon>
              <ChevronDownIcon color="$black" />
            </AccordionIcon>
          </AccordionTrigger>
          <AccordionContent>
            <Text color="$black">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi".
            </Text>
          </AccordionContent>
        </AccordionHeader>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
          <AccordionTrigger justifyContent="space-between" px="$0">
            <Text color="$black" fontWeight="semibold">
              Press me
            </Text>
            <AccordionIcon>
              <ChevronDownIcon color="$black" />
            </AccordionIcon>
          </AccordionTrigger>
          <AccordionContent>
            <Text color="$black">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi".
            </Text>
          </AccordionContent>
        </AccordionHeader>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionStory;

export { Button, ButtonText };
