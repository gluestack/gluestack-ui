import { styled } from '../../styled';
import { Icon } from '../../Icons';

export default styled(Icon, {}, {
  componentName: 'ButtonIcon',
  ancestorStyle: ['_icon'],
} as const);
