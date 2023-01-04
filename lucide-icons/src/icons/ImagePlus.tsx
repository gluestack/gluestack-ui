import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <Line x1="16" y1="5" x2="22" y2="5" />
      <Line x1="19" y1="2" x2="19" y2="8" />
      <_Circle cx="9" cy="9" r="2" />
      <Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </StyledSvg>
  )
}
Icon.displayName = 'ImagePlus'
export const ImagePlus = React.memo(Icon)
