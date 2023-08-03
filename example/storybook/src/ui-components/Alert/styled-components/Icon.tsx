import { styled } from '../../styled';

import { Icon } from '../../Icons';

export default styled(
  Icon,
  {
    alignSelf: 'center',
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
