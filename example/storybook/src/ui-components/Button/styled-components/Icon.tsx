import { styled } from '../../styled';
import { Icon } from '../../Icons';

export default styled(
  Icon,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
