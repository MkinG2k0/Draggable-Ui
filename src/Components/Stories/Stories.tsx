import style from './Stories.module.scss'
import { FC, useEffect } from 'react'
import { Map, SkeletImg } from '@comp'
import { useArrow } from 'Hook/Other.hook'
import { cn, getArrNumber } from 'Helper/helper'

interface StoriesProps {
  images: string[]
  duration?: number
}

export const Stories: FC<StoriesProps> = ({ images, duration }) => {
  const [len, onLeft, onRight] = useArrow(images.length)

  const timeLine = getArrNumber(images.length).map((item) => ({ id: item }))

  useEffect(() => {
    const timer = setTimeout(() => {
      onRight()
    }, duration)
    return () => clearTimeout(timer)
  }, [len])

  return (
    <div className={style.wrap}>
      <SkeletImg src={images[len]} height={'100%'} />
      <div className={style.left} onClick={onLeft} />
      <div className={style.right} onClick={onRight} />
      <div className={style.timeLine}>
        <Map Comp={Line} data={timeLine} props={{ len }} />
      </div>
    </div>
  )
}

function Line({ id, len }) {
  const classLine = cn({
    [style.active]: id === len,
  })

  return (
    <div className={style.line}>
      <div className={classLine} />
    </div>
  )
}

Stories.defaultProps = {
  duration: 5000,
}
