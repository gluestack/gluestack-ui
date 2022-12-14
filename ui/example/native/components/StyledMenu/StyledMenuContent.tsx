// import { Popper } from '@gluestack/styled';
import { Popper } from '@gluestack/popper';
import { styled } from '@gluestack/styled';

export default styled(
  Popper.Content,
  {
    baseStyle: {
      style: {
        bg: '$red.300',
        padding: 8,
        borderRadius: 4,
        shadow: 6,
        w: 190,
      },
    },
  },
  {}
);
