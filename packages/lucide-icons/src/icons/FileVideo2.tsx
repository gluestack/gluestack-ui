import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="m10 15.5 4 2.5v-6l-4 2.5" />
      <Rect x="2" y="12" width="8" height="6" rx="1" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileVideo2'
export const FileVideo2 = React.memo(Icon)
