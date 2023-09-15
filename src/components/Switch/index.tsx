import { createSwitch } from '@gluestack-ui/switch';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

const AccessibleSwitch = createSwitch({
  Root,
});

type ISwitchProps = React.ComponentProps<typeof AccessibleSwitch>;
//  & {
//   offTrackColor: string;
//   onTrackColor: string;
//   onThumbColor: string;
//   offThumbColor: string;
// };

export const Switch = forwardRef(
  (
    {
      // offTrackColor,
      // onTrackColor,
      // onThumbColor,
      // offThumbColor,
      ...props
    }: ISwitchProps,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // const sx = {
    //   _web: {
    //     props: {
    //       trackColor: { false: offTrackColor, true: onTrackColor },
    //       thumbColor: offThumbColor,
    //       activeThumbColor: onThumbColor,
    //     },
    //   },
    // };
    return <AccessibleSwitch {...resolvedProps} ref={ref} />;
  }
);
