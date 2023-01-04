import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="4" y1="12" x2="20" y2="12" />
      <Line x1="4" y1="6" x2="20" y2="6" />
      <Line x1="4" y1="18" x2="20" y2="18" />
    </StyledSvg>
  )
}
Icon.displayName = 'Menu'
export const Menu = React.memo(Icon)
