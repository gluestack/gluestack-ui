import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m16 6 4 14" />
      <Path d="M12 6v14" />
      <Path d="M8 8v12" />
      <Path d="M4 4v16" />
    </StyledSvg>
  )
}
Icon.displayName = 'Library'
export const Library = React.memo(Icon)
