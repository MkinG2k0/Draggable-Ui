import { WrapTitleProps } from '../../WrapTitle/IWrapTitle'
import { IInputProps } from '../InputField/IInputField'

export interface InputMaskProps extends WrapTitleProps, IInputProps {
  mask?: string
  maskChar?: string
}
