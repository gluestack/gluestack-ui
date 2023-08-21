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

export const Button = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});
export const ButtonText = Button.Text;
export const ButtonGroup = Button.Group;
export const ButtonSpinner = Button.Spinner;
export const ButtonIcon = Button.Icon;

// const ButtonTemp = ({ children, ...props }) => {
//   return <AccessibleButton>{children}</AccessibleButton>;
// };

// const Button = ButtonTemp;
// Button.Text = AccessibleButton.Text;
// export const Button = ButtonTemp;
