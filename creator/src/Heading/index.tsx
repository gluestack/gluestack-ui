import HeadingMain from './Heading';

export const createHeading = ({ StyledHeading }: any) => {
  const Heading = HeadingMain(StyledHeading) as any;

  Heading.displayName = 'Heading';
  return Heading;
};
