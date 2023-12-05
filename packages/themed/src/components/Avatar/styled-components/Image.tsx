import { Image } from '../../Image';
import { styled } from '@gluestack-style/react';

export default styled(Image, {}, {
  componentName: 'AvatarImage',
  ancestorStyle: ['_image'],
} as const);
