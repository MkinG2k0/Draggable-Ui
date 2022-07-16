import style from './BreadCrumbs.module.scss'
import { FC } from 'react'
import { Button, Map } from '@comp'

export interface BreadCrumbs {
  paths: CramArr[]
  size?: Size
  checkedId?: number
  onClick?: (path: string, name: string) => void
}

interface CramArr {
  path?: string
  name: string
}

export const BreadCrams: FC<BreadCrumbs> = ({
  paths,
  onClick,
  size,
  checkedId,
}) => {
  return (
    <ul className={style.wrap}>
      <Map
        Comp={Cram}
        data={paths}
        props={{ len: paths.length, size, checkedId: checkedId }}
        onClick={onClick}
      />
    </ul>
  )
}

interface CramProps {
  onClick?: (path: string, name: string) => void
  name: string
  path: string
  index: number
  len: number
  size: Size
  checkedId: number
}

const Cram: FC<CramProps> = ({
  onClick,
  name,
  path,
  index,
  size,
  checkedId,
}) => {
  const onChoose = () => onClick?.(path, name)

  const isChoose = index === checkedId ? 'hover' : 'primary'

  return (
    <Button
      onClick={onChoose}
      fontSize={size}
      text={name}
      type={'circle'}
      status={isChoose}
    />
  )
}

BreadCrams.defaultProps = {
  size: 4,
  checkedId: 1,
  onClick: () => {},
}
