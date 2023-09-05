// @ts-nocheck
import { styled } from '../../styled';
import { Icon } from '../../Icons';

export default styled(
  Icon,
  {
    props: {
      size: 'sm',
    },
    color: '$backgroundLight500',
    _dark: {
      color: '$backgroundDark400',
    },
  },
  {
    componentName: 'ActionsheetIcon',
    ancestorStyle: ['_icon'],
  } as const
);
