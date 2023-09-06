// import React, { useEffect, useState } from 'react';
import React, { forwardRef } from 'react';
import { createButton } from '@gluestack-ui/button';
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
} from './styled-components';
// import { useStyled } from '@gluestack-style/react';
import { usePropResolution } from '../../hooks/usePropResolution';

export const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

let But = AccessibleButton;

const ButtonNew = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);

  // if (props.colorScheme) {
  //   const colorSchemeSx = getColorSchemeSX();
  // }

  return (
    <AccessibleButton {...resolvedPropForGluestack} ref={ref}>
      {typeof children === 'string' ? (
        <AccessibleButton.Text>{children}</AccessibleButton.Text>
      ) : (
        { children }
      )}
    </AccessibleButton>
  );
});

// export const ButtonText = forwardRef(
//   ({ children, ...props }: any, ref?: any) => {
//     return (
//       <AccessibleButton.Text {...props} ref={ref}>
//         {children}
//       </AccessibleButton.Text>
//     );
//   }
// );

//@ts-ignore
But = { ...AccessibleButton, ...ButtonNew, Group: AccessibleButton.Group };

export const Button = But;

// export const ButtonGroup = Button.Group;
// export const ButtonSpinner = Button.Spinner;
// export const ButtonIcon = Button.Icon;

// const ButtonTemp = ({ children, ...props }) => {
//   return <AccessibleButton>{children}</AccessibleButton>;
// };

// const Button = ButtonTemp;
// Button.Text = AccessibleButton.Text;
// export const Button = ButtonTemp;
