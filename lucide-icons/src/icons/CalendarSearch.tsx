import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5" />
      <Path d="M16 2v4" />
      <Path d="M8 2v4" />
      <Path d="M3 10h18" />
      <Path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
      <Path d="m22 22-1.5-1.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'CalendarSearch'
export const CalendarSearch = React.memo(Icon)
