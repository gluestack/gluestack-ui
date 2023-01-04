import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M22 11v1a10 10 0 1 1-9-10" />
      <Path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <Line x1="9" y1="9" x2="9.01" y2="9" />
      <Line x1="15" y1="9" x2="15.01" y2="9" />
      <Path d="M16 5h6" />
      <Path d="M19 2v6" />
    </StyledSvg>
  )
}
Icon.displayName = 'SmilePlus'
export const SmilePlus = React.memo(Icon)
