import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 3v18h18" />
      <Path d="m19 9-5 5-4-4-3 3" />
    </StyledSvg>
  )
}
Icon.displayName = 'LineChart'
export const LineChart = React.memo(Icon)
