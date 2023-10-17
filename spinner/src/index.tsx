export function createSpinner<SpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<SpinnerProps>;
}) {
  Root.displayName = 'Spinner';
  Root.defaultProps = {
    // @ts-ignore
    tabIndex: 0,
    accessibilityLabel: 'loading',
  };
  return Root;
}
