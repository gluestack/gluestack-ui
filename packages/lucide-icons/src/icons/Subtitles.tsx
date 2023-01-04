import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 13h4" />
      <Path d="M15 13h2" />
      <Path d="M7 9h2" />
      <Path d="M13 9h4" />
      <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Subtitles'
export const Subtitles = React.memo(Icon)
