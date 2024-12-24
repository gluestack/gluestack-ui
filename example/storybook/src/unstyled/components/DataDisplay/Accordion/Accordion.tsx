import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AccordionContentText, Divider } from '../../../ui-components';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTrigger,
  AccordionIcon,
  AccordionTitleText,
} from '../../../ui-components';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: any) => {
  return (
    <Accordion alignSelf="center" type="multiple" isCollapsible={true} mt="$5">
      <AccordionItem value="a" isDisabled={true}>
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, sed
            laudantium eligendi maxime rerum, saepe vitae unde voluptas hic,
            culpa ex dolorem omnis incidunt quisquam? Ex fuga debitis recusandae
            incidunt.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider />

      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maxime modi quaerat temporibus quos, omnis, vel ullam debitis labore
            error fugit, blanditiis dolore illum consequuntur laboriosam.
            Voluptates est obcaecati nemo!
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider />

      <AccordionItem value="c">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider />

      <AccordionItem value="d">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    Can I cancel my subscription at any time?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem
            eos ex officia ratione omnis similique delectus aliquam culpa. Minus
            quis numquam laboriosam non natus, distinctio facilis aspernatur
            beatae earum.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionStory;
