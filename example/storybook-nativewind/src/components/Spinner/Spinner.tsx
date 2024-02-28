import React from 'react';
import { Spinner } from '@/components/ui/Spinner';
import { HStack } from '@/components/ui/HStack';
import { Text } from '@/components/ui/Text';
import { VStack } from '@/components/ui/VStack';
import colors from 'tailwindcss/colors';

const SpinnerBasic = ({ ...props }) => (
  <Spinner {...props} color={colors.gray[500]} />
);

SpinnerBasic.description =
  'This is a basic Spinner component example. Spinners are used to show a loading state of a component or page.';

export default SpinnerBasic;

export { Spinner, HStack, Text, VStack };
