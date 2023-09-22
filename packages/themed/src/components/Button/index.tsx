import { createButton } from '@gluestack-ui/button';
import { Root, Text, Group, Spinner, Icon } from './styled-components';

const AccessbileButton = createButton({
  Root,
  Text,
  Group,
  Spinner,
  Icon,
});

type IAccessbileButton = typeof AccessbileButton;

interface Button extends IAccessbileButton {
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

export const Button = AccessbileButton as Button;

export const ButtonText = AccessbileButton.Text;
export const ButtonGroup = AccessbileButton.Group;
export const ButtonSpinner = AccessbileButton.Spinner;
export const ButtonIcon = AccessbileButton.Icon;
