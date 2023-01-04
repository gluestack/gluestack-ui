import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 3H3v7h18V3z" />
      <Path d="M21 14h-5v7h5v-7z" />
      <Path d="M12 14H3v7h9v-7z" />
    </StyledSvg>
  )
}
Icon.displayName = 'LayoutTemplate'
export const LayoutTemplate = React.memo(Icon)
