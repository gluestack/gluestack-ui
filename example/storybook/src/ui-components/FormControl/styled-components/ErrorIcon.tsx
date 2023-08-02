import { styled } from '../../styled';

import { Icon } from '../../Icons';

export default styled(
  Icon,
  {
    color: '$error700',
    _dark: {
      color: '$error400',
    },
    h: '$4',
    w: '$4',
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
