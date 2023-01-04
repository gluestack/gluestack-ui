import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <Path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Link2'
export const Link2 = React.memo(Icon)
