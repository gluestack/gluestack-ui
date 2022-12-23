import { Spinner } from './Spinner';

export const createSpinner = ({ StyledSpinner }: any) => {
  const SpinnerTemp = Spinner(StyledSpinner) as any;
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
};
