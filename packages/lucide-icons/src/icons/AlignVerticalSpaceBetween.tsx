import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="5" y="15" width="14" height="6" rx="2" />
      <Rect x="7" y="3" width="10" height="6" rx="2" />
      <Path d="M2 21h20" />
      <Path d="M2 3h20" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignVerticalSpaceBetween'
export const AlignVerticalSpaceBetween = React.memo(Icon)
