import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="18" r="3" />
      <_Circle cx="6" cy="6" r="3" />
      <_Circle cx="18" cy="6" r="3" />
      <Path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <Path d="M12 12v3" />
    </StyledSvg>
  )
}
Icon.displayName = 'GitFork'
export const GitFork = React.memo(Icon)
