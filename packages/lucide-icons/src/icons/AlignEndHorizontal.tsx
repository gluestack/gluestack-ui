import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="2" width="6" height="16" rx="2" />
      <Rect x="14" y="9" width="6" height="9" rx="2" />
      <Path d="M22 22H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignEndHorizontal'
export const AlignEndHorizontal = React.memo(Icon)
