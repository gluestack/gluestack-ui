import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m2 8 2 2-2 2 2 2-2 2" />
      <Path d="m22 8-2 2 2 2-2 2 2 2" />
      <Rect x="8" y="5" width="8" height="14" rx="1" />
    </StyledSvg>
  )
}
Icon.displayName = 'Vibrate'
export const Vibrate = React.memo(Icon)
