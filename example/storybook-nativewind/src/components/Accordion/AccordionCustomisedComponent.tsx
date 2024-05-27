import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
} from '@/components/ui/accordion';
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

      <AccordionItem className="border border-outline-300" value="b">
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

      <AccordionItem value="c" className="border-b border-outline-300">
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

export default AccordionCustomisedComponent;
