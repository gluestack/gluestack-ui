import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <_Circle cx="12" cy="12" r="4" />
      <Line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <Line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <Line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <Line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
      <Line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </StyledSvg>
  )
}
Icon.displayName = 'LifeBuoy'
export const LifeBuoy = React.memo(Icon)
