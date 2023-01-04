import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <Path d="M9 12v-1h6v1" />
      <Path d="M11 17h2" />
      <Path d="M12 11v6" />
    </StyledSvg>
  )
}
Icon.displayName = 'ClipboardType'
export const ClipboardType = React.memo(Icon)
