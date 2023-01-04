import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <_Circle cx="10" cy="16" r="2" />
      <Path d="m16 10-4.5 4.5" />
      <Path d="m15 11 1 1" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileKey'
export const FileKey = React.memo(Icon)
