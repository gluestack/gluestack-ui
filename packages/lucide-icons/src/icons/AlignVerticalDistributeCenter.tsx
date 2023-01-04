import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="5" y="14" width="14" height="6" rx="2" />
      <Rect x="7" y="4" width="10" height="6" rx="2" />
      <Path d="M22 7h-5" />
      <Path d="M7 7H1" />
      <Path d="M22 17h-3" />
      <Path d="M5 17H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignVerticalDistributeCenter'
export const AlignVerticalDistributeCenter = React.memo(Icon)
