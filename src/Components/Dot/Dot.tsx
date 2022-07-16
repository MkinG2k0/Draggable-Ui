import style from './Dot.module.scss'
import { FC } from 'react'
import { cn } from '@helper'

interface DotProps {
  size?: number | string
  color?: string
  classD?: string
}

export const Dot: FC<DotProps> = ({ color, size, classD = '' }) => {
  const classDot = cn({}, style.wrap, classD)

  const styleDot = !classD
    ? { width: size, height: size, background: color }
    : {}

  return <div className={classDot} style={styleDot} />
}

Dot.defaultProps = {
  color: '#161625',
  size: 10,
}
