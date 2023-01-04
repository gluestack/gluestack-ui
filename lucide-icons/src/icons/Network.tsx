import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="9" y="2" width="6" height="6" />
      <Rect x="16" y="16" width="6" height="6" />
      <Rect x="2" y="16" width="6" height="6" />
      <Path d="M5 16v-4h14v4" />
      <Path d="M12 12V8" />
    </StyledSvg>
  )
}
Icon.displayName = 'Network'
export const Network = React.memo(Icon)
