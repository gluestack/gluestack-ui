import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="6 9 6 2 18 2 18 9" />
      <Path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <Rect x="6" y="14" width="12" height="8" />
    </StyledSvg>
  )
}
Icon.displayName = 'Printer'
export const Printer = React.memo(Icon)
