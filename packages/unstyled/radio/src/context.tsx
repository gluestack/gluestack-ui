import React from 'react';
import { ariaAttr } from '@gluestack-ui/utils';

export type IFormControlContext = Omit<
  ReturnType<typeof useRadioContextProvider>,
  'htmlProps'
>;

export const FormControlContext = React.createContext({});

export function useRadioContextProvider(props: any) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;

  var idCounter = 0;
  function uniqueId(prefix = '') {
    var id = ++idCounter;
    return prefix + id;
  }

  const idTemp = uniqueId();
  // Generate all the required ids
  const id = idProp || `field-${idTemp}`;

  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = React.useState(false);

  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
  };

  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useRadioContext(props: any) {
  const field = useRadioContextContext();
  const describedBy: any[] = [];

  // Error message must be described first in all scenarios.
  if (field?.hasFeedbackText) describedBy.push(field?.feedbackId);
  if (field?.hasHelpText) describedBy.push(field?.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');

  const { isInvalid, isDisabled, isReadOnly, isRequired, ...cleanProps } =
    props;
  let id = props?.id;

  if (!id && field?.id) {
    id = `${field?.id}-input`;
  }

  return {
    ...cleanProps,
    'id': id,
    'disabled': isDisabled || field?.isDisabled,
    'readOnly': isReadOnly || field?.isReadOnly,
    'required': isRequired || field?.isRequired,
    'aria-invalid': ariaAttr(isInvalid || field?.isInvalid),
    'aria-required': ariaAttr(isRequired || field?.isRequired),
    'aria-readonly': ariaAttr(isReadOnly || field?.isReadOnly),
    'aria-describedby': ariaDescribedBy || undefined,
  };
}

export const useRadioContextContext = () => {
  return React.useContext(FormControlContext) as unknown as IFormControlContext;
};
