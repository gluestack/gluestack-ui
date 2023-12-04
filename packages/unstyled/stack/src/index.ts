import { Stack as StackMain } from './Stack';

export function createStack<
  StyledStackProps,
  StyledStackHSpacerProps,
  StyledStackVSpacerProps
>({
  Root,
  HSpacer,
  VSpacer,
}: {
  Root: React.ComponentType<StyledStackProps>;
  HSpacer: React.ComponentType<StyledStackHSpacerProps>;
  VSpacer: React.ComponentType<StyledStackVSpacerProps>;
}) {
  const Stack = StackMain(Root, HSpacer, VSpacer);

  Stack.displayName = 'Stack';

  return Stack;
}
