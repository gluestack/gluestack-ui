import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <Path d="m13 13 6 6" />
    </StyledSvg>
  )
}
Icon.displayName = 'MousePointer'
export const MousePointer = React.memo(Icon)
