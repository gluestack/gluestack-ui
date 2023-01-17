import IconButtonMain from './IconButon';
import IconButtonText from './IconButonText';
import IconButtonSpinner from './IconButtonSpinner';
import type { IIconButtonComponentType } from './types';
// import type { IIconButtonComponentType } from './types';

export function createIconButton<
  StyledIconButton,
  StyledIconButtonText,
  StyledIconButtonSpinner
>({
  StyledIconButton,
  StyledIconButtonText,
  StyledIconButtonSpinner,
}: {
  StyledIconButton: React.ComponentType<StyledIconButton>;
  StyledIconButtonText: React.ComponentType<StyledIconButtonText>;
  StyledIconButtonSpinner: React.ComponentType<StyledIconButtonSpinner>;
}) {
  const IconButton = IconButtonMain(StyledIconButton) as any;
  IconButton.Text = IconButtonText(StyledIconButtonText);
  IconButton.Spinner = IconButtonSpinner(StyledIconButtonSpinner);

  IconButton.displayName = 'IconButton';
  IconButton.Text.displayName = 'IconButton.Text';
  IconButton.Spinner.displayName = 'IconButton.Spinner';

  return IconButton as IIconButtonComponentType<
    StyledIconButton,
    StyledIconButtonText,
    StyledIconButtonSpinner
  >;
}
