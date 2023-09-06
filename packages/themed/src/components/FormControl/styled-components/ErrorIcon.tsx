import { styled } from '../../styled';
import { Icon } from '../../Icons';

export default styled(
  Icon,
  {
    color: '$error700',
    _dark: {
      color: '$error400',
    },
    props: {
      size: 'sm',
    },
  },
  {
    componentName: 'FormControlErrorIcon',
    ancestorStyle: ['_icon'],
  } as const
);
