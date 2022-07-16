import style from './Effect.module.scss'
import { useToggleTime } from 'Hook/Helper.hook'
import { IEffectProps } from './IEffect'
import { FC, memo } from 'react'
import { cn } from '@helper'

export const EffectMemo: FC<IEffectProps> = ({
  children,
  type,
  duration,
  open = false,
  wh,
  height,
  width,
  onStartAnim,
  onEndAnim,
}) => {
  const toggle = useToggleTime(open, duration)

  const classStyle = cn({
    [style[type + '-open']]: open && !toggle,
    [style[type + '-' + duration]]: type,
    [style.wh]: wh,
  })

  return (
    <div
      className={classStyle}
      style={{ width, height }}
      onAnimationStart={onStartAnim}
      onAnimationEnd={onEndAnim}
    >
      {children}
    </div>
  )
}

export const Effect: FC<IEffectProps> = memo(EffectMemo)

Effect.defaultProps = {
  type: 'fade',
  width: '100%',
  height: '100%',
  duration: 200,
  open: false,
}
