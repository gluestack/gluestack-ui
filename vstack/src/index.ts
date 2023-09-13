export function createVStack<VStackProps>({
  Root,
}: {
  Root: React.ComponentType<VStackProps>;
}) {
  Root.displayName = 'VStack';
  return Root;
}
