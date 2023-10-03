import React from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root as AccessibleText } from './styled-components';
import { GenericComponentType } from '../../types';

const TextTemp = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleText {...resolvedPropForGluestack}>{children}</AccessibleText>
  );
};

export type ITextComponentType<Text> = GenericComponentType<Text>;

export const Text = TextTemp as ITextComponentType<typeof AccessibleText>;

export { AccessibleText };
