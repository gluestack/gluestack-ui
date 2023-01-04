import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5" />
      <Rect x="14" y="17" width="8" height="5" rx="1" />
      <Path d="M20 17v-2a2 2 0 1 0-4 0v2" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderLock'
export const FolderLock = React.memo(Icon)
