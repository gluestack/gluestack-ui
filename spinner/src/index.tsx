export function createSpinner<SpinnerProps>({
  Root,
}: {
  Root: React.ComponentType<SpinnerProps>;
}) {
  Root.displayName = 'Spinner';
  Root.defaultProps = {
    // @ts-ignore
    focusable: true,
    accessibilityLabel: 'loading',
  };
  return Root;
}
