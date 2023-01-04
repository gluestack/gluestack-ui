import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="4" width="16" height="6" rx="2" />
      <Rect x="9" y="14" width="9" height="6" rx="2" />
      <Path d="M22 22V2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignEndVertical'
export const AlignEndVertical = React.memo(Icon)
