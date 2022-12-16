import Heading from './Heading';

export const createHeading = ({ StyledHeading }: any) => {
  const HeadingTemp = Heading(StyledHeading) as any;
  return HeadingTemp;
};
