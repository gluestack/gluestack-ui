import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2" />
      <Path d="M2 13h10" />
      <Path d="m5 10-3 3 3 3" />
    </StyledSvg>
  )
}
Icon.displayName = 'FolderOutput'
export const FolderOutput = React.memo(Icon)
