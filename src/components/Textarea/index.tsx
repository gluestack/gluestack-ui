import { createTextarea } from '@gluestack-ui/textarea';
import { Root, Input } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleTextarea = createTextarea({
  Root,
  Input,
});

const TextareaTemp = forwardRef(({ placeholder, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return (
    <AccessibleTextarea {...resolvedProps} ref={ref}>
      <AccessibleTextarea.Input placeholder={placeholder} />
    </AccessibleTextarea>
  );
});

export type ITextareaComponentType<Textarea> = GenericComponentType<
  Textarea,
  {
    placeholder?: string;
  }
>;

export const Textarea = TextareaTemp as ITextareaComponentType<
  typeof AccessibleTextarea
>;
