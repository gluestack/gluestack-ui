import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="7" y="9" width="10" height="6" rx="2" />
      <Path d="M22 20H2" />
      <Path d="M22 4H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignVerticalSpaceAround'
export const AlignVerticalSpaceAround = React.memo(Icon)
