import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="5" width="6" height="14" rx="2" />
      <Rect x="14" y="7" width="6" height="10" rx="2" />
      <Path d="M17 22v-5" />
      <Path d="M17 7V2" />
      <Path d="M7 22v-3" />
      <Path d="M7 5V2" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignHorizontalDistributeCenter'
export const AlignHorizontalDistributeCenter = React.memo(Icon)
