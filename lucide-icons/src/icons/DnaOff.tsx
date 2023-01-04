import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5" />
      <Path d="M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5" />
      <Path d="m17 6-2.5-2.5" />
      <Path d="m14 8-1.5-1.5" />
      <Path d="m7 18 2.5 2.5" />
      <Path d="m3.5 14.5.5.5" />
      <Path d="m20 9 .5.5" />
      <Path d="m6.5 12.5 1 1" />
      <Path d="m16.5 10.5 1 1" />
      <Path d="m10 16 1.5 1.5" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  )
}
Icon.displayName = 'DnaOff'
export const DnaOff = React.memo(Icon)
