import { LinearGradient as LinearGradientMain } from './LinearGradient';

export const createLinearGradient = ({ StyledLinearGradient }: any) => {
  const LinearGradient = LinearGradientMain(StyledLinearGradient) as any;

  LinearGradient.displayName = 'LinearGradient';
  return LinearGradient;
};
