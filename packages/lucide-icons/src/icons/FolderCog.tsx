import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" />
      <_Circle cx="18" cy="18" r="3" />
      <Path d="M18 14v1" />
      <Path d="M18 21v1" />
      <Path d="M22 18h-1" />
      <Path d="M15 18h-1" />
      <Path d="m21 15-.88.88" />
      <Path d="M15.88 20.12 15 21" />
      <Path d="m21 21-.88-.88" />
      <Path d="M15.88 15.88 15 15" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderCog'
export const FolderCog = React.memo(Icon)
