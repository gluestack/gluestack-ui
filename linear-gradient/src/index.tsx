export function createLinearGradient<StyledLinearGradientProps>({
  Root,
}: {
  Root: React.ComponentType<StyledLinearGradientProps>;
}) {
  Root.displayName = 'LinearGradient';

  return Root;
}
