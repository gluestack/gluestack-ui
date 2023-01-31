import { Spinner } from './Spinner';

export function createSpinner<SpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<SpinnerProps>;
}) {
  const SpinnerTemp = Spinner(Root);
  SpinnerTemp.displayName = 'Spinner';
  return SpinnerTemp;
}
