import style from '../InputField/Input.module.scss'
import Input from 'react-input-mask'
import { FC, useRef } from 'react'
import { WrapTitle } from '@comp'
import { cn } from '@helper'
import { InputMaskProps } from './IInputMask'

export const InputMask: FC<InputMaskProps> = ({
  name = '',
  value,
  fontSize,
  mask,
  required,
  onChange,
  maskChar,
  ...Wrap
}) => {
  const ref = useRef(null)
  const classInput = cn({}, style.input, `f-${fontSize}`)

  const onChangeInput = (e) => onChange?.(e.target.value, name, ref)

  return (
    <WrapTitle {...Wrap}>
      <Input
        value={value}
        mask={mask}
        maskChar={maskChar}
        className={classInput}
        onChange={onChangeInput}
        required={required}
        ref={ref}
      />
    </WrapTitle>
  )
}

InputMask.defaultProps = {
  mask: '8(999)999-99-99',
  maskChar: '_',
  fontSize: 4,
  name: 'name',
  onChange: () => {},
}
