import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="18" cy="18" r="3" />
      <_Circle cx="6" cy="6" r="3" />
      <Path d="M18 11.5V15" />
      <Path d="m21 3-6 6" />
      <Path d="m21 9-6-6" />
      <Line x1="6" y1="9" x2="6" y2="21" />
    </StyledSvg>
  )
}
Icon.displayName = 'GitPullRequestClosed'
export const GitPullRequestClosed = React.memo(Icon)
