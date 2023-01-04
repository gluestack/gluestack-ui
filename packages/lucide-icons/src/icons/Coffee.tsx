import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <Path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <Line x1="6" y1="2" x2="6" y2="4" />
      <Line x1="10" y1="2" x2="10" y2="4" />
      <Line x1="14" y1="2" x2="14" y2="4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Coffee'
export const Coffee = React.memo(Icon)
