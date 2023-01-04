import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m13 2-2 2.5h3L12 7" />
      <Path d="M12 22v-3" />
      <Path d="M10 13v-2.5" />
      <Path d="M10 12.5v-2" />
      <Path d="M14 12.5v-2" />
      <Path d="M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z" />
    </StyledSvg>
  )
}
Icon.displayName = 'PlugZap'
export const PlugZap = React.memo(Icon)
