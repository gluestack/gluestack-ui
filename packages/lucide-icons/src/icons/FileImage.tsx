import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <_Circle cx="10" cy="13" r="2" />
      <Path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileImage'
export const FileImage = React.memo(Icon)
