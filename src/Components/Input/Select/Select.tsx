import style from './Select.module.scss'
import { cn, mergeRefs } from 'Helper/helper'
import { FC, useEffect, useState } from 'react'
import { WrapTitle } from 'Components/WrapTitle/WrapTitle'
import { useFocus } from 'Hook/Ref.hook'
import { Button, Map } from '@comp'
import { SelectProps } from './ISelect'
import { useToggle } from 'Hook/Other.hook'
import { Down, Close } from 'Icons/IconArrow'

export const Select: FC<SelectProps> = ({
  name = '',
  data = [],
  nameKey = '',
  title,
  onChange,
  onOpen,
  chooseValue,
  size,
  fontSizeTitle,
  onClear,
  required,
  onChooseClear,
}) => {
  const [value, setItem] = useState(chooseValue)
  const { toggle, setToggle } = useToggle()
  const { ref, onFocus, isFocus } = useFocus()
  const refs = mergeRefs(ref)

  useEffect(() => {
    setItem(chooseValue)
  }, [chooseValue])

  const classChoose = cn({}, 'f-' + size, style.choose)

  function onClick(item: { name: string }, name: string) {
    if (onChange) onChange(item, name)
    onFocus(false)
    if (!onChooseClear) setItem(item.name)
  }

  function Item(item: { id: number; name: string }) {
    const cnItem = cn({ [style.manyItem]: data.length > 6 }, style.item)

    return (
      <li className={cnItem} key={item.id} onClick={() => onClick(item, name)}>
        {item[nameKey]}
      </li>
    )
  }

  function List() {
    const classDrop = cn({ [style.open]: isFocus }, style.drop)

    if (!isFocus || toggle) return null

    return (
      <ul className={classDrop}>
        <Map Comp={Item} data={data} />
      </ul>
    )
  }

  const Toggle = () => setToggle()
  const onBlur = () => setToggle(false)

  const onFocusSelect = () => {
    onOpen?.(name)
    setToggle(true)
  }

  function ClearValue() {
    setItem('')
    onClear?.(name)
  }

  return (
    <WrapTitle title={title} fontSizeTitle={fontSizeTitle}>
      <div
        className={classChoose}
        onFocus={onFocusSelect}
        onClick={Toggle}
        onBlur={onBlur}
        tabIndex={0}
        ref={refs}
      >
        <div className={style.text}>
          <span>{value}</span>
          <input
            type="text"
            value={value}
            required={required}
            readOnly
            className={style.input}
          />

          <div className={style.leftBar}>
            {value && (
              <Button
                Before={<Close />}
                type={'square'}
                status={'hover'}
                fontSize={2}
                onClick={ClearValue}
                classButton={style.btn}
              />
            )}
            <Down />
          </div>
        </div>
        <List />
      </div>
    </WrapTitle>
  )
}

Select.defaultProps = {
  nameKey: 'name',
  chooseValue: '',
  name: 'name',
  size: 4,
  onOpen: () => {},
  onClear: () => {},
}
