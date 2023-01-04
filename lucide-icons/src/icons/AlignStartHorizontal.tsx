import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="6" width="6" height="16" rx="2" />
      <Rect x="14" y="6" width="6" height="9" rx="2" />
      <Path d="M22 2H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignStartHorizontal'
export const AlignStartHorizontal = React.memo(Icon)
