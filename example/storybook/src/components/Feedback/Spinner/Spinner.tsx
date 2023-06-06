import React from 'react';
import Wrapper from '../../Wrapper';
import { Spinner, HStack, Text, Heading, VStack } from '../../../ui-components';

export const SpinnerStory = ({ ...props }) => (
  <Wrapper>
    <Spinner color="$primary500" {...props} size="small" />
  </Wrapper>
);

export { Spinner, HStack, Text, Heading, VStack };
