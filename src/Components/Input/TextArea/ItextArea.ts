import { WrapTitleProps } from 'Components/WrapTitle/IWrapTitle'

export interface ITextArea extends WrapTitleProps {
  value?: string
  spread?: Record<string, unknown>
  name?: string
  onChange?: (value: string, name: string, ref: any) => void
  required?: boolean
}
