import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <Polyline points="9 22 9 12 15 12 15 22" />
    </StyledSvg>
  )
}
Icon.displayName = 'Home'
export const Home = React.memo(Icon)
