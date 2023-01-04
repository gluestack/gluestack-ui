import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <Line x1="16" y1="8" x2="2" y2="22" />
      <Line x1="17.5" y1="15" x2="9" y2="15" />
    </StyledSvg>
  )
}
Icon.displayName = 'Feather'
export const Feather = React.memo(Icon)
