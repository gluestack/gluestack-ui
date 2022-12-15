import { Text } from './Text';

export const createText = ({ StyledText }: any) => {
  const TextTemp = Text(StyledText) as any;

  return TextTemp;
};

// export {Button ,ButtonText}
