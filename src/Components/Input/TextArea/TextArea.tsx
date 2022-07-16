import style from './TextArea.module.scss'
import { ITextArea } from './ItextArea'
import { WrapTitle } from 'Components/WrapTitle/WrapTitle'
import { useInput } from 'Hook/Ref.hook'
import { FC } from 'react'

export const TextArea: FC<ITextArea> = ({
  onChange = () => {},
  value = '',
  name = '',
  title,
  spread,
  required,
  onClickWrap,
}) => {
  const input = useInput(null, value, name, onChange)

  return (
    <WrapTitle title={title} onClickWrap={onClickWrap}>
      <textarea
        className={style.wrap}
        {...input.spread}
        {...spread}
        required={required}
      >
        {value}
      </textarea>
    </WrapTitle>
  )
}

TextArea.defaultProps = {
  onChange: () => {},
}
