import React, { memo } from 'react';
import { Slider as GlueStackSlider } from '@gluestack/ui';

export const Slider = memo(({ ...props }) => {
  return <GlueStackSlider {...props} />;
});
