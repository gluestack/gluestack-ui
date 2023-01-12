import { Text as TextMain } from './Text';

export const createText = ({ StyledText }: any) => {
  const Text = TextMain(StyledText) as any;
  Text.displayName = 'Text';
  return Text;
};
