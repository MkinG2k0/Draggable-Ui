import style from './Button.module.scss'
import { IButton } from './IButton'
import { FC } from 'react'
import { cn } from 'Helper/helper'

export const Button: FC<IButton> = ({
  classText = '',
  classButton = '',
  type = '',
  status = '',
  name = '',
  fontSize,
  onClick,
  text,
  Before,
  After,
  liquid,
  typeBtn,
  isDisable,
  children,
}) => {
  const ClassButton = cn(
    {
      [classButton]: classButton,
      [style[type]]: type,
      [style[status]]: status,
      [style.liquid]: liquid,
    },
    style.btn,
    style[`${type}_${status}`]
  )

  const ClassText = cn(
    {
      [classText]: classText,
      [`f-${fontSize}`]: fontSize,
    },
    style.bTitle
  )

  const onClickBtn = () => onClick?.(name)

  return (
    <button
      onClick={onClickBtn}
      className={ClassButton}
      type={typeBtn}
      disabled={isDisable}
    >
      {Before}
      {children}
      {text?.toString() && <span className={ClassText}>{text}</span>}
      {After}
    </button>
  )
}

Button.defaultProps = {
  classButton: '',
  type: 'square',
  status: 'primary',
  fontSize: 4,
  liquid: false,
  name: 'nameBtn',
  onClick: () => {},
}
