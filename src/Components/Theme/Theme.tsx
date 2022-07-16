import style from './Theme.module.scss'
import { FC } from 'react'
import 'Style/mix.scss'
import 'Style/font.scss'

export interface ThemeProps {
  colorBase?: string
  colorSecond?: string
  colorTriple?: string
}

export const Theme: FC<ThemeProps> = ({
  children,
  colorTriple,
  colorSecond,
  colorBase,
}) => {
  const colors = {
    '--color-base': colorBase,
    '--color-second': colorSecond,
    '--color-triple': colorTriple,
  } as React.CSSProperties

  return (
    <div className={style.wrap} style={colors}>
      {children}
    </div>
  )
}

Theme.defaultProps = {
  colorBase: '#475284',
  colorSecond: '#2d3251',
  colorTriple: '#161625',
}
