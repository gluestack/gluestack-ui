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

export interface IButtonProps extends IAccessbileButton {
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

export const Button = AccessbileButton as IButtonProps;

export const ButtonText = AccessbileButton.Text;
export const ButtonGroup = AccessbileButton.Group;
export const ButtonSpinner = AccessbileButton.Spinner;
export const ButtonIcon = AccessbileButton.Icon;
