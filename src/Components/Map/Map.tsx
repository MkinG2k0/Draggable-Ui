import { MapProps } from './IMap'
import { FC } from 'react'

export const Map: FC<MapProps> = ({
  keyName = '',
  data,
  Comp,
  props,
  onClick,
}) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <Comp
            {...item}
            {...props}
            index={index}
            key={`map-${index}-${
              item ? (keyName in item ? item[keyName] : 'none') : ''
            }`}
            onClick={onClick}
          />
        ))}
    </>
  )
}

// TODO : придумать реализацию id + key && item[key]

Map.defaultProps = { keyName: 'id' }
