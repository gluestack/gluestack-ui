import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 2h8" />
      <Path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" />
      <Path d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  )
}
Icon.displayName = 'MilkOff'
export const MilkOff = React.memo(Icon)
