import type { ComponentStory } from '@storybook/react-native';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../ui-components';
import React from 'react';

import { Button, ButtonText } from '../../../ui-components';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: // text = 'Accordion',
// ...props
any) => {
  return (
    // <Button {...props}>
    //   <ButtonText>{text}</ButtonText>
    // </Button>
    <Accordion>
      <AccordionItem>
        <AccordionTrigger h={60} w={60}>
          Press me
        </AccordionTrigger>
        <AccordionContent bg="$amber500" h={60} w={60}>
          Hey
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionStory;

export { Button, ButtonText };
