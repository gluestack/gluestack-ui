import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <_Circle cx="12" cy="15" r="2" />
      <Path d="M12 12v1" />
      <Path d="M12 17v1" />
      <Path d="m14.6 13.5-.87.5" />
      <Path d="m10.27 16-.87.5" />
      <Path d="m14.6 16.5-.87-.5" />
      <Path d="m10.27 14-.87-.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileCog2'
export const FileCog2 = React.memo(Icon)
