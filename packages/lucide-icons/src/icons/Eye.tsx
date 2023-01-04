import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <_Circle cx="12" cy="12" r="3" />
    </StyledSvg>
  )
}
Icon.displayName = 'Eye'
export const Eye = React.memo(Icon)
