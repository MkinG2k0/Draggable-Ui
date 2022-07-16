import { FC } from 'react'
import { Grid } from '@comp'
import { Cols } from '../../Components/Grid/IGrid'

export const Wrap: FC<{
  title?: string
  alignItems?: 'center' | 'flex-end'
}> = ({ title, children, alignItems }) => {
  return (
    <div>
      <div style={{ paddingBottom: 10 }}>{title}</div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: alignItems,
          flexWrap: 'wrap',
          paddingBottom: 20,
        }}
      >
        {children}
      </div>
    </div>
  )
}

Wrap.defaultProps = {
  alignItems: 'center',
}

export const GridWrap: FC = ({ children }) => {
  return (
    <Grid lg={3} md={3} sm={6} xs={6}>
      {children}
    </Grid>
  )
}

interface AbsProp {
  title: string
  lg: Cols
  xs: Cols
}

const Abs: FC<AbsProp> = (props) => {
  return (
    <div>
      {props.title}
      <Grid />
    </div>
  )
}
