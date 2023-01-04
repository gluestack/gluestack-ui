import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <_Circle cx="11.5" cy="12.5" r="2.5" />
      <Path d="M13.27 14.27 15 16" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderSearch2'
export const FolderSearch2 = React.memo(Icon)
