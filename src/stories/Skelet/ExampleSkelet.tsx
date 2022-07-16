import { FC } from 'react'
import { Grid } from 'lib'
import { Skelet, SkeletImg, SkeletText, SkeletTextArr } from '@comp'
import { GridWrap } from '../Wrap/Wrap'
import { useToggleTime } from '../../Hook/Helper.hook'

export const ExampleSkelet: FC = () => {
  const skeletT = useToggleTime(false, 1500)

  return (
    <Grid container spacing={'lg'}>
      <GridWrap>
        <Skelet status={false} width={'100%'} height={100}>
          This Skelet
        </Skelet>
      </GridWrap>
      <GridWrap>
        <Skelet status={skeletT} width={'100%'} height={100}>
          This Skelet
        </Skelet>
      </GridWrap>
      <GridWrap>
        <SkeletText />
      </GridWrap>
      <GridWrap>
        <SkeletText text={'Text skelet'} status={skeletT} />
      </GridWrap>
      <GridWrap>
        <SkeletTextArr status={false} row={4} />
      </GridWrap>
      <GridWrap>SkeletTextArr</GridWrap>
      <GridWrap>
        <SkeletImg src={''} status={false} height={120} width={'100%'} />
      </GridWrap>
      <GridWrap>
        <SkeletImg
          src={
            'https://avatars.mds.yandex.net/i?id=659bac82228794c671eacbd1f8f2d2be-5310530-images-thumbs&n=13'
          }
        />
      </GridWrap>
    </Grid>
  )
}
