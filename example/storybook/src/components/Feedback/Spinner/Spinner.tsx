import React from 'react';
import Wrapper from '../../Wrapper';
import { Spinner, HStack, Text, VStack } from '../../../ui-components';

export const SpinnerStory = ({ ...props }) => (
  <Wrapper>
    <Spinner {...props} />
  </Wrapper>
);

export { Spinner, HStack, Text, VStack };
