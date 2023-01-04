import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5" />
      <Path d="M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3" />
      <Path d="M8 15h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileVolume2'
export const FileVolume2 = React.memo(Icon)
