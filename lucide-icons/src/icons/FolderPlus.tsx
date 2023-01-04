import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <Line x1="12" y1="10" x2="12" y2="16" />
      <Line x1="9" y1="13" x2="15" y2="13" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderPlus'
export const FolderPlus = React.memo(Icon)
