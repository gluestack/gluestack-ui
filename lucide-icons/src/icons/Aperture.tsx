import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <Line x1="9.69" y1="8" x2="21.17" y2="8" />
      <Line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <Line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <Line x1="14.31" y1="16" x2="2.83" y2="16" />
      <Line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </StyledSvg>
  )
}
Icon.displayName = 'Aperture'
export const Aperture = React.memo(Icon)
