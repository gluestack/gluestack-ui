import { styled } from '@gluestack/styled';

const Option = ({ ...props }) => {
  return <option {...props} />;
};

export default styled(
  Option,
  {
    baseStyle: {
      style: {
        bg: '$amber.900',
        p: 4,
      },
    },
  },
  {}
);
