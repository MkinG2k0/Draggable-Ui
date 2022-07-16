import { useEffect, useRef, useState } from 'react'

export const useToggle = (initState = false) => {
  const [toggle, setState] = useState(initState)

  function setToggle(state?: boolean) {
    if (state) setState(state)
    else setState((prevState) => !prevState)
  }

  return { toggle, setToggle }
}

type useEffectSkipMountProps = (cd: () => void, deps: any[]) => void

export const useEffectSkipMount: useEffectSkipMountProps = (func, deps) => {
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) func()
    mounted.current = true
  }, deps)
}

export const useIsMount = () => {
  const isMountRef = useRef(false)
  useEffect(() => {
    isMountRef.current = true
  }, [])
  return isMountRef.current
}

type useArrowProps = (
  end: number,
  start?: number,
  initValue?: number
) => [value: number, onLeft: () => void, onRight: () => void]

export const useArrow: useArrowProps = (end, start = 0, initValue = 0) => {
  const [value, setValue] = useState(initValue)

  const onLeft = () => {
    if (value !== start) setValue((prevState) => prevState - 1)
  }

  const onRight = () => {
    if (value + 1 < end) setValue((prevState) => prevState + 1)
  }

  return [value, onLeft, onRight]
}
