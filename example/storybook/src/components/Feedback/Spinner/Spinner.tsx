import React from 'react';

import { Spinner, HStack, Text, VStack, Center } from '../../../ui-components';

export const SpinnerStory = ({ ...props }) => (
  <Center>
    <Spinner {...props} />
  </Center>
);

export { Spinner, HStack, Text, VStack };
