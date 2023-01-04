import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <Line x1="12" y1="2" x2="12" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Power'
export const Power = React.memo(Icon)
