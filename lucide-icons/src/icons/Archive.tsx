import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="4" width="20" height="5" rx="2" />
      <Path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <Path d="M10 13h4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Archive'
export const Archive = React.memo(Icon)
