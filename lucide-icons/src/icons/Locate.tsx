import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="2" x2="5" y1="12" y2="12" />
      <Line x1="19" x2="22" y1="12" y2="12" />
      <Line x1="12" x2="12" y1="2" y2="5" />
      <Line x1="12" x2="12" y1="19" y2="22" />
      <_Circle cx="12" cy="12" r="7" />
    </StyledSvg>
  )
}
Icon.displayName = 'Locate'
export const Locate = React.memo(Icon)
