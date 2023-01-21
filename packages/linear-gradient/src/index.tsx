import { LinearGradient as LinearGradientMain } from './LinearGradient';

export const createLinearGradient = ({ Root }: any) => {
  const LinearGradient = LinearGradientMain(Root) as any;

  LinearGradient.displayName = 'LinearGradient';
  return LinearGradient;
};
