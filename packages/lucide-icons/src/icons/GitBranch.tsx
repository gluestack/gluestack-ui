import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="6" y1="3" x2="6" y2="15" />
      <_Circle cx="18" cy="6" r="3" />
      <_Circle cx="6" cy="18" r="3" />
      <Path d="M18 9a9 9 0 0 1-9 9" />
    </StyledSvg>
  )
}
Icon.displayName = 'GitBranch'
export const GitBranch = React.memo(Icon)
