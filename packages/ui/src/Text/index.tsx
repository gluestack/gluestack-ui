import { Text } from './Text';

export const createButton = ({ StyledText }: any) => {
  const TextTemp = Text(StyledText) as any;

  return TextTemp;
};

// export {Button ,ButtonText}
