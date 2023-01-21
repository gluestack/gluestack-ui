import { Spinner } from './Spinner';

export function createSpinner<StyledSpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<StyledSpinnerProps>;
}) {
  const SpinnerTemp = Spinner(Root);
  console.log(Root, SpinnerTemp);
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
}
