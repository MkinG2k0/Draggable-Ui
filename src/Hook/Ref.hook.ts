import React, { useEffect, useRef, useState } from 'react'
import { useIsMount } from './Other.hook'

export const useFocus = (initialRef: HTMLBaseElement | null = null) => {
  const ref = useRef<HTMLBaseElement>(initialRef)
  const [isFocus, setFocus] = useState(false)

  useEffect(() => {
    const current = ref.current

    if (current) {
      current.addEventListener('blur', () => setFocus(false))
      current.addEventListener('focus', () => setFocus(true))
    }

    return () => {
      if (current) {
        current.removeEventListener('blur', () => {})
        current.removeEventListener('focus', () => {})
      }
    }
  }, [])

  const onFocus = (type?: boolean) => {
    if (!ref.current) return

    if (type) ref.current.focus()
    else ref.current.blur()
  }

  return { ref, onFocus, isFocus }
}

export interface useInputProps {
  (
    initialRef,
    text: string,
    name: string,
    eventChange: (value: string, name: string, ref: any) => void,

    speedUpdate?: number
  ): { ref: React.Ref<InputEvent>; spread: { onChange: any; value: any } }
}

export const useInput: useInputProps = (
  initialRef,
  text = '',
  name = 'name',
  eventChange,
  speedUpdate = 500
) => {
  const ref = useRef(initialRef)
  const [value, setValue] = useState<string>(text)
  const isMount = useIsMount()

  useEffect(() => {
    if (isMount) {
      const timeOut = setTimeout(
        eventChange,
        speedUpdate,
        value,
        name,
        ref.current
      )
      return () => clearTimeout(timeOut)
    }
  }, [value])

  useEffect(() => {
    setValue(text)
  }, [text])

  function onChange(e) {
    const value = e.target.value
    setValue(value)
  }

  return {
    ref,
    spread: {
      onChange,
      value,
    },
  }
}

export const useHover = (refInit = null) => {
  const ref = useRef<HTMLBaseElement>(refInit)
  const [isHovering, setHovering] = useState(false)

  const on = () => setHovering(true)
  const off = () => setHovering(false)

  useEffect(() => {
    const current = ref.current

    if (!current) return undefined

    current.addEventListener('mouseenter', on)
    current.addEventListener('mouseleave', off)

    return () => {
      current.removeEventListener('mouseenter', on)
      current.removeEventListener('mouseleave', off)
    }
  }, [])

  return { isHovering, ref }
}
