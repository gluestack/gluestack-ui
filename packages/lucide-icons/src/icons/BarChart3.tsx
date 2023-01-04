import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 3v18h18" />
      <Path d="M18 17V9" />
      <Path d="M13 17V5" />
      <Path d="M8 17v-3" />
    </StyledSvg>
  )
}
Icon.displayName = 'BarChart3'
export const BarChart3 = React.memo(Icon)
