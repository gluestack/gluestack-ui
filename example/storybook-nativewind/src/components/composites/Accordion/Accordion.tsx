import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@custom-ui/themed';
import { Divider } from '@custom-ui/themed';
import { ChevronDownIcon } from 'lucide-react-native';
import { ChevronUpIcon } from 'lucide-react-native';
import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

const AccordionBasic = ({ ...props }: any) => {
  return (
    <Accordion mt="$5" {...props}>
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {(states: any) => (
              <>
                <AccordionTitleText>
                  How do I place an order?
                </AccordionTitleText>
                {states.isExpanded ? (
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            )}
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

      {/* <Divider /> */}

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

      {/* <Divider /> */}

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

      {/* <Divider /> */}

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

AccordionBasic.description =
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default AccordionBasic;

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
  Divider,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
};
