import React, { forwardRef } from 'react';

import { Root as AccessibleKeyboardAvoidingView } from './styled-components';

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const KeyboardAvoidingViewTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleKeyboardAvoidingView {...resolvedPropForGluestack} ref={ref}>
        {children}
      </AccessibleKeyboardAvoidingView>
    );
  }
);

const KeyboardAvoidingViewNew = KeyboardAvoidingViewTemp as any;

export type IKeyboardAvoidingViewComponentType<KeyboardAvoidingView> =
  GenericComponentType<KeyboardAvoidingView>;

export const KeyboardAvoidingView =
  KeyboardAvoidingViewNew as IKeyboardAvoidingViewComponentType<
    typeof AccessibleKeyboardAvoidingView
  >;
