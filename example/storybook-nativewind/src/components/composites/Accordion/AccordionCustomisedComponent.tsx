import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
} from '@custom-ui/themed';
import { ChevronDownIcon } from 'lucide-react-native';
import { ChevronUpIcon } from 'lucide-react-native';
import React from 'react';

const AccordionCustomisedComponent = ({ ...props }: any) => {
  return (
    <Accordion
      alignSelf="center"
      type={'multiple'}
      variant={'filled'}
      size={'md'}
      mt="$5"
      shadowColor="transparent"
      {...props}
    >
      <AccordionItem value="a">
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, sed
            laudantium eligendi maxime rerum, saepe vitae unde voluptas hic,
            culpa ex dolorem omnis incidunt quisquam? Ex fuga debitis recusandae
            incidunt.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="b"
        borderWidth={1}
        sx={{
          _light: {
            borderColor: '$borderLight300',
          },
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
      >
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

      <AccordionItem
        value="c"
        borderBottomWidth={1}
        sx={{
          _light: {
            borderColor: '$borderLight300',
          },
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
      >
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
    </Accordion>
  );
};

AccordionCustomisedComponent.description =
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default AccordionCustomisedComponent;
