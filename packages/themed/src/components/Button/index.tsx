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

const AccessbileButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

type IAccessbileButton = typeof AccessbileButton;

interface ButtonType extends IAccessbileButton {
  /**
   * @deprecated Use ButtonText instead.
   */
  Text: IAccessbileButton['Text'];
  /**
   * @deprecated Use ButtonGroup instead.
   */
  Group: IAccessbileButton['Group'];
  /**
   * @deprecated Use ButtonSpinner instead.
   */
  Spinner: IAccessbileButton['Spinner'];
  /**
   * @deprecated Use ButtonIcon instead.
   */
  Icon: IAccessbileButton['Icon'];
}

export const Button = AccessbileButton as ButtonType;

export const ButtonText = AccessbileButton.Text;
export const ButtonGroup = AccessbileButton.Group;
export const ButtonSpinner = AccessbileButton.Spinner;
export const ButtonIcon = AccessbileButton.Icon;
