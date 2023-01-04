import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="5" width="6" height="14" rx="2" />
      <Rect x="15" y="7" width="6" height="10" rx="2" />
      <Path d="M3 2v20" />
      <Path d="M21 2v20" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignHorizontalSpaceBetween'
export const AlignHorizontalSpaceBetween = React.memo(Icon)
