import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M10 12h2v6" />
      <Rect x="2" y="12" width="4" height="6" />
      <Path d="M10 18h4" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileDigit'
export const FileDigit = React.memo(Icon)
