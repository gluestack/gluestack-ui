import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
      <Path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
      <Path d="M16 2v4" />
      <Path d="M3 10h7" />
      <Path d="M21 10h-5.5" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  )
}
Icon.displayName = 'CalendarOff'
export const CalendarOff = React.memo(Icon)
