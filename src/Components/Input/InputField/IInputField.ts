import { WrapTitleProps } from 'Components/WrapTitle/IWrapTitle'
import { Size } from '../../../Interface/Comp'

export interface IInputProps extends WrapTitleProps {
  fontSize?: Size
  ref?: React.RefObject<HTMLBaseElement>
  onChange?: (
    value: string,
    name: string,
    ref: React.RefObject<HTMLBaseElement>
  ) => void
  spread?: any
  value?: string
  inputType?: inputType
  name?: string
  placeholder?: string
  speedUpdate?: number
  required?: boolean
  disabled?: boolean
}

type inputType = 'text' | 'date' | 'range' | 'number' | 'color'
