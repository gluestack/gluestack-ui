import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m22 8-6 4 6 4V8Z" />
      <Rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Video'
export const Video = React.memo(Icon)
