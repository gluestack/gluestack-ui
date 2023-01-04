import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="5" width="6" height="14" rx="2" />
      <Rect x="14" y="7" width="6" height="10" rx="2" />
      <Path d="M10 2v20" />
      <Path d="M20 2v20" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlignHorizontalDistributeEnd'
export const AlignHorizontalDistributeEnd = React.memo(Icon)
