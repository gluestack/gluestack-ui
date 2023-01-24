import IconButtonMain from './IconButon';
import IconButtonText from './IconButonText';
import IconButtonSpinner from './IconButtonSpinner';
import type { IIconButtonComponentType } from './types';
// import type { IIconButtonComponentType } from './types';

export function createIconButton<Root, Text, Spinner>({
  Root,
  Text,
  Spinner,
}: {
  Root: React.ComponentType<Root>;
  Text: React.ComponentType<Text>;
  Spinner: React.ComponentType<Spinner>;
}) {
  const IconButton = IconButtonMain(Root) as any;
  IconButton.Text = IconButtonText(Text);
  IconButton.Spinner = IconButtonSpinner(Spinner);

  IconButton.displayName = 'IconButton';
  IconButton.Text.displayName = 'IconButton.Text';
  IconButton.Spinner.displayName = 'IconButton.Spinner';

  return IconButton as IIconButtonComponentType<Root, Text, Spinner>;
}
