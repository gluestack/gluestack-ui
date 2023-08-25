import React from 'react';
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
import { Button, ButtonText } from '../../../ui-components';
import { AccordionProvider } from '../../../../../../packages/accordion/src/Context';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: any) => {
  return (
    <AccordionProvider>
      <Accordion type={'multiple'} isCollapsible={false} isDisabled={false}>
        <AccordionItem accordionValue={'item-1'}>
          <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
            <AccordionTrigger justifyContent="space-between" px="$0">
              <Text fontWeight="semibold">
                I’m tall when I’m young and I’m short when I’m old. What am I?
              </Text>
              <AccordionIcon>
                <ChevronDownIcon />
              </AccordionIcon>
            </AccordionTrigger>
            <AccordionContent>
              <Text>A candle</Text>
            </AccordionContent>
          </AccordionHeader>
        </AccordionItem>

        <AccordionItem accordionValue={'item-2'}>
          <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
            <AccordionTrigger justifyContent="space-between" px="$0">
              <Text fontWeight="semibold">
                Which weighs more, a pound of feathers or a pound of bricks?
              </Text>
              <AccordionIcon>
                <ChevronDownIcon />
              </AccordionIcon>
            </AccordionTrigger>
            <AccordionContent>
              <Text>Neither, they both weigh one pound.</Text>
            </AccordionContent>
          </AccordionHeader>
        </AccordionItem>

        <AccordionItem accordionValue={'item-3'}>
          <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
            <AccordionTrigger justifyContent="space-between" px="$0">
              <Text fontWeight="semibold">
                The more you take, the more you leave behind. What are they?
              </Text>
              <AccordionIcon>
                <ChevronDownIcon />
              </AccordionIcon>
            </AccordionTrigger>
            <AccordionContent>
              <Text>Footprints.</Text>
            </AccordionContent>
          </AccordionHeader>
        </AccordionItem>

        <AccordionItem accordionValue={'item-4'}>
          <AccordionHeader borderBottomWidth="$1" borderColor="$gray300">
            <AccordionTrigger justifyContent="space-between" px="$0">
              <Text fontWeight="semibold">Press me</Text>
              <AccordionIcon>
                <ChevronDownIcon />
              </AccordionIcon>
            </AccordionTrigger>
            <AccordionContent>
              <Text>"I'm content 4"</Text>
            </AccordionContent>
          </AccordionHeader>
        </AccordionItem>
      </Accordion>
    </AccordionProvider>
  );
};

export default AccordionStory;

export { Button, ButtonText };
