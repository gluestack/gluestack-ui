import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
      <Path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'FilePieChart'
export const FilePieChart = React.memo(Icon)
