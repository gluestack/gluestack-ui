import React, { RefObject } from 'react';

export const ariaToAccessibilityMap: any = {
  'aria-activedescendant': 'accessibilityActiveDescendant',
  'aria-atomic': 'accessibilityAtomic',
  'aria-autocomplete': 'accessibilityAutoComplete',
  'aria-busy': 'accessibilityBusy',
  'aria-checked': 'accessibilityChecked',
  'aria-colcount': 'accessibilityColumnCount',
  'aria-colindex': 'accessibilityColumnIndex',
  'aria-colspan': 'accessibilityColumnSpan',
  'aria-controls': 'accessibilityControls',
  'aria-describedby': 'accessibilityDescribedBy',
  'aria-details': 'accessibilityDetails',
  'aria-disabled': 'accessibilityDisabled',
  'aria-errormessage': 'accessibilityErrorMessage',
  'aria-expanded': 'accessibilityExpanded',
  'aria-flowto': 'accessibilityFlowTo',
  'aria-haspopup': 'accessibilityHasPopup',
  'aria-hidden': 'accessibilityHidden',
  'aria-invalid': 'accessibilityInvalid',
  'aria-keyshortcuts': 'accessibilityKeyShortcuts',
  'aria-label': 'accessibilityLabel',
  'aria-labelledby': 'accessibilityLabelledBy',
  'aria-live': 'accessibilityLiveRegion',
  'aria-modal': 'accessibilityModal',
  'aria-multiline': 'accessibilityMultiline',
  'aria-multiselectable': 'accessibilityMultiSelectable',
  'aria-orientation': 'accessibilityOrientation',
  'aria-owns': 'accessibilityOwns',
  'aria-placeholder': 'accessibilityPlaceholder',
  'aria-posinset': 'accessibilityPosInSet',
  'aria-pressed': 'accessibilityPressed',
  'aria-readonly': 'accessibilityReadOnly',
  'aria-required': 'accessibilityRequired',
  'aria-roledescription': 'accessibilityRoleDescription',
  'aria-rowcount': 'accessibilityRowCount',
  'aria-rowindex': 'accessibilityRowIndex',
  'aria-rowspan': 'accessibilityRowSpan',
  'aria-selected': 'accessibilitySelected',
  'aria-setsize': 'accessibilitySetSize',
  'aria-sort': 'accessibilitySort',
  'aria-valuemax': 'accessibilityValueMax',
  'aria-valuemin': 'accessibilityValueMin',
  'aria-valuenow': 'accessibilityValueNow',
  'aria-valuetext': 'accessibilityValueText',
};

// Refer - https://necolas.github.io/react-native-web/docs/accessibility/
export const mapDomPropsToRN = (props: any) => {
  let newProps: any = { ...props };

  // use the below hook for tabIndex
  // useMapDomPropsToRN
  // if (props.tabIndex === '-1' || props.tabIndex === -1) {
  //   newProps.focusable = false;
  // }

  if (props.id) {
    newProps.nativeID = props.id;
  }

  for (let key in props) {
    if (key.indexOf('data-') > -1) {
      if (!newProps.dataSet) {
        newProps.dataSet = {};
      }

      newProps.dataSet[key.split('data-')[1]] = props[key];
    }
  }

  return newProps;
};

// RN web currently doesn't allow setting tabIndex via props, so need to be set using setNativeProps or ref
// https://github.com/necolas/react-native-web/issues/1916
// https://github.com/necolas/react-native-web/issues/1099
export const useMapDomPropsToRN = (props: any, ref: RefObject<any>) => {
  React.useEffect(() => {
    if (ref.current) {
      ref.current.tabIndex = props.tabIndex;
    }
  }, [props.tabIndex]);

  return mapDomPropsToRN(props);
};
