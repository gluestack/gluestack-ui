export function createHStack<StyledHStackProps>({
  Root,
}: {
  Root: React.ComponentType<StyledHStackProps>;
}) {
  Root.displayName = 'HStack';

  return Root;
}
