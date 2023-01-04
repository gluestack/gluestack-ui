import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <_Circle cx="12" cy="12" r="6" />
      <_Circle cx="12" cy="12" r="2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Target'
export const Target = React.memo(Icon)
