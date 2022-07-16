import style from './WrapTitle.module.scss'
import { WrapTitleProps } from './IWrapTitle'
import { cn } from 'Helper/helper'
import { FC } from 'react'

export const WrapTitle: FC<WrapTitleProps> = ({
  classWrap = '',
  children,
  title,
  onClickWrap,
  fontSizeTitle,
  SubTitle,
}) => {
  const styleWrapS = cn({ [classWrap]: classWrap }, style.wrap)
  const styleTitle = cn({}, 'f-' + fontSizeTitle, style.title)

  return (
    <div className={styleWrapS} onClick={onClickWrap}>
      <div className={style.header}>
        {title && (
          <div className={style.row}>
            <label className={styleTitle}>{title}</label>
            {SubTitle && SubTitle}
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

WrapTitle.defaultProps = { fontSizeTitle: 6 }
