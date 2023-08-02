// @ts-nocheck
import { styled } from '../../styled';
import { Icon } from '../../Icons';

export default styled(
  Icon,
  {
    w: '$4',
    h: '$4',
    mr: '$2',

    color: '$backgroundLight500',
    _dark: {
      color: '$backgroundDark400',
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
