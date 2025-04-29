/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import type { AriaDialogProps } from '@react-types/dialog';
import type { DOMAttributes, FocusableElement } from '@react-types/shared';
import type { RefObject } from 'react';

export interface DialogAria {
  /** Props for the dialog container element. */
  dialogProps: DOMAttributes;

  /** Props for the dialog title element. */
  titleProps: DOMAttributes;
}

export interface DialogProps extends AriaDialogProps {}

/**
 * Provides the behavior and accessibility implementation for a dialog component.
 * A dialog is an overlay shown above other content in an application.
 */

import { useDialog as useDialogAria } from '@react-aria/dialog';
import { mapDomPropsToRN } from '@react-native-aria/utils';

export function useDialog(
  props: DialogProps,
  ref: RefObject<FocusableElement>
): DialogAria {
  const params = useDialogAria(props, ref);
  params.dialogProps = params.dialogProps;
  params.dialogProps = mapDomPropsToRN(params.dialogProps);

  return params;
}
