import { Theme } from '@comp'
import { Inputs } from '../Inputs/Inputs'
import { Buttons } from '../Buttons/Buttons'
import { FC } from 'react'
import { ThemeProps } from '../../Components/Theme/Theme'

export const WrapTheme: FC<ThemeProps> = (props) => {
  return (
    <Theme {...props}>
      <Buttons />
      <Inputs />
    </Theme>
  )
}
