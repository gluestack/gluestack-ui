import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="18" y1="20" x2="18" y2="10" />
      <Line x1="12" y1="20" x2="12" y2="4" />
      <Line x1="6" y1="20" x2="6" y2="14" />
    </StyledSvg>
  )
}
Icon.displayName = 'BarChart2'
export const BarChart2 = React.memo(Icon)
