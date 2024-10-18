import React from 'react';
import colors from 'tailwindcss/colors';
import { Spinner } from '../../../core-components/nativewind';

const SpinnerDemo = () => {
  return <Spinner size="large" color={colors.gray[500]} />;
};

export default SpinnerDemo;
