import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
    </StyledSvg>
  )
}
Icon.displayName = 'MousePointer2'
export const MousePointer2 = React.memo(Icon)
