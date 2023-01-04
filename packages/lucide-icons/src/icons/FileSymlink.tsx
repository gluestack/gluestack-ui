import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="m10 18 3-3-3-3" />
      <Path d="M4 18v-1a2 2 0 0 1 2-2h6" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileSymlink'
export const FileSymlink = React.memo(Icon)
