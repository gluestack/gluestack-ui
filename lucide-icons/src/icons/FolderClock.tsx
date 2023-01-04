import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2" />
      <_Circle cx="16" cy="16" r="6" />
      <Path d="M16 14v2l1 1" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderClock'
export const FolderClock = React.memo(Icon)
