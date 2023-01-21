import HeadingMain from './Heading';

export function createHeading<StyledHeadingProps>({
  Root,
}: {
  Root: React.ComponentType<StyledHeadingProps>;
}) {
  const Heading = HeadingMain(Root);

  Heading.displayName = 'Heading';
  return Heading;
}
