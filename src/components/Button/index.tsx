import React from 'react';
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

export const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

//@ts-ignore
export const Button = ({ children, ...props }) => {
  // console.log(children, typeof children === 'string', 'Chlired button');
  return (
    <AccessibleButton {...props}>
      {typeof children === 'string' ? (
        <AccessibleButton.Text>{children}</AccessibleButton.Text>
      ) : (
        <>{children}</>
      )}
    </AccessibleButton>
  );
};

//@ts-ignore
export const ButtonText = ({ children, ...props }) => {
  return <AccessibleButton.Text {...props}>{children}</AccessibleButton.Text>;
};
// export const ButtonGroup = Button.Group;
// export const ButtonSpinner = Button.Spinner;
// export const ButtonIcon = Button.Icon;

// const ButtonTemp = ({ children, ...props }) => {
//   return <AccessibleButton>{children}</AccessibleButton>;
// };

// const Button = ButtonTemp;
// Button.Text = AccessibleButton.Text;
// export const Button = ButtonTemp;
