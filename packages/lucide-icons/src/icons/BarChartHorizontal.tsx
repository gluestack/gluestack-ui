import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 3v18h18" />
      <Path d="M7 16h8" />
      <Path d="M7 11h12" />
      <Path d="M7 6h3" />
    </StyledSvg>
  )
}
Icon.displayName = 'BarChartHorizontal'
export const BarChartHorizontal = React.memo(Icon)
