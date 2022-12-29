import { Spinner } from './Spinner';

export function createSpinner<StyledSpinnerProps>({
  StyledSpinner,
}: {
  StyledSpinner: React.ComponentType<StyledSpinnerProps>;
}) {
  const SpinnerTemp = Spinner(StyledSpinner);
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
}
