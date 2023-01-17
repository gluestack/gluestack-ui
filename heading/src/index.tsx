import HeadingMain from './Heading';

export function createHeading<StyledHeadingProps>({
  StyledHeading,
}: {
  StyledHeading: React.ComponentType<StyledHeadingProps>;
}) {
  const Heading = HeadingMain(StyledHeading);

  Heading.displayName = 'Heading';
  return Heading;
}
