import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export function createSpinner<SpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<SpinnerProps>;
}) {
  Root.displayName = 'Spinner';
  Root.defaultProps = {
    // @ts-ignore
    'tabIndex': 0,
    'aria-label': 'loading',
  };
  return Root as ForwardRefExoticComponent<
    PropsWithoutRef<SpinnerProps> & RefAttributes<SpinnerProps>
  >;
}
