import style from './Input.module.scss'
import { useFocus, useInput } from 'Hook/Ref.hook'
import { cn, mergeRefs } from 'Helper/helper'
import { IInputProps } from './IInputField'
import { WrapTitle } from 'Components/WrapTitle/WrapTitle'
import { FC } from 'react'

export const Input: FC<IInputProps> = ({
  value = '',
  name = '',
  onChange = () => {},
  ref,
  title,
  spread,
  inputType,
  classWrap,
  placeholder,
  speedUpdate,
  fontSizeTitle,
  fontSize,
  required,
  children,
  disabled,
}) => {
  const refInput = useInput(ref?.current, value, name, onChange, speedUpdate)
  const refFocus = useFocus(ref?.current)
  const combineRef = mergeRefs(ref, refFocus.ref, refInput.ref)

  const onClickWrap = () => refFocus.onFocus(true)

  const classInput = cn({}, style.input, `f-${fontSize}`)

  return (
    <WrapTitle
      title={title}
      onClickWrap={onClickWrap}
      classWrap={classWrap}
      fontSizeTitle={fontSizeTitle}
    >
      <input
        type={inputType}
        className={classInput}
        ref={combineRef}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...spread}
        {...refInput.spread}
      />
      {children}
    </WrapTitle>
  )
}

Input.defaultProps = {
  inputType: 'text',
  name: 'name',
  fontSizeTitle: 6,
  speedUpdate: 500,
  fontSize: 4,
  required: false,
  onChange: () => {},
  ref: { current: null },
}
