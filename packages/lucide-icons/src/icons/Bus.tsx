import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2" />
      <Path d="M14 17H9" />
      <_Circle cx="6.5" cy="17.5" r="2.5" />
      <_Circle cx="16.5" cy="17.5" r="2.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Bus'
export const Bus = React.memo(Icon)
