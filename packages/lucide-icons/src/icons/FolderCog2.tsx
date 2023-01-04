import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <_Circle cx="12" cy="13" r="2" />
      <Path d="M12 10v1" />
      <Path d="M12 15v1" />
      <Path d="m14.6 11.5-.87.5" />
      <Path d="m10.27 14-.87.5" />
      <Path d="m14.6 14.5-.87-.5" />
      <Path d="m10.27 12-.87-.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderCog2'
export const FolderCog2 = React.memo(Icon)
