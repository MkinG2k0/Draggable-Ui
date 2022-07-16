import { FC } from 'react'
import { Button, Grid, Input, Select, TextArea, WrapTitle } from 'lib'
import './ReplaceColor.scss'
import { GridWrap } from '../Wrap/Wrap'
import { InputMask, Pagination, RadioButton } from '@comp'
import { BreadCrams } from '../../Components/BreadCrums/BreadCrumbs'

export const Inputs: FC = () => {
  return (
    <Grid container spacing={'lg'}>
      <GridWrap>
        <Input title={'Name'} placeholder={'name'} />
      </GridWrap>
      <GridWrap>
        <Input title={'Sure name'} placeholder={'Sure name'} />
      </GridWrap>
      <Grid xs={12} md={6}>
        <Input
          title={'Lorem'}
          value={
            'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. '
          }
        />
      </Grid>
      <GridWrap>
        <Input
          fontSizeTitle={1}
          fontSize={1}
          value={`fontSize ${1}`}
          title={`fontSize ${1}`}
        />
      </GridWrap>
      <GridWrap>
        <Input
          fontSizeTitle={7}
          fontSize={7}
          value={`fontSize ${7}`}
          title={`fontSize ${7}`}
        />
      </GridWrap>
      {/*<Map Comp={InputItem} data={getArr(6)} />*/}
      <GridWrap>
        <InputMask title={'Input mask'} />
      </GridWrap>
      <GridWrap>
        <InputMask title={'Input mask'} value={'9966512'} />
      </GridWrap>
      <GridWrap>
        <Input inputType={'date'} title={'Date'} />
      </GridWrap>
      <GridWrap>
        <Input inputType={'number'} title={'Number'} value={'123'} />
      </GridWrap>
      <Grid lg={6}>
        <TextArea title={'TextArea'} />
      </Grid>
      <GridWrap>
        <Input inputType={'range'} title={'Range'} />
      </GridWrap>
      <GridWrap>
        <Input inputType={'range'} title={'Range'} disabled />
      </GridWrap>
      <Grid lg={3} md={3} sm={6} xs={6}>
        <WrapTitle title={'Button'}>
          <Button text={'Button'} liquid />
        </WrapTitle>
      </Grid>
      <GridWrap>
        <Select
          title={'Select'}
          data={[
            { name: 'name1', id: 1 },
            { name: 'name2', id: 2 },
            { name: 'name2', id: 3 },
            { name: 'name2', id: 4 },
            { name: 'name2', id: 5 },
            { name: 'name2', id: 6 },
          ]}
        />
      </GridWrap>
      <GridWrap>
        <Select
          title={'Long Select'}
          chooseValue={'Select'}
          data={[
            { name: 'name1', id: 1 },
            { name: 'name2', id: 2 },
            { name: 'name2', id: 3 },
            { name: 'name2', id: 4 },
            { name: 'name2', id: 5 },
            { name: 'name2', id: 6 },
            { name: 'name2', id: 7 },
            { name: 'name2', id: 8 },
            { name: 'name2', id: 9 },
          ]}
        />
      </GridWrap>
      <GridWrap>
        <WrapTitle title={'Pagination'}>
          <Pagination all={10} current={3} preview={2} />
        </WrapTitle>
      </GridWrap>
      <Grid lg={3} md={6}>
        <WrapTitle title={'Bread crams'}>
          <BreadCrams
            paths={[
              { path: '/Main', name: 'Main' },
              { path: '/Main', name: 'Current' },
              { path: '/Main', name: 'Next' },
              { path: '/Main', name: 'Any' },
            ]}
          />
        </WrapTitle>
      </Grid>
      <Grid>
        <WrapTitle title={'Radio Buttons'}>
          <RadioButton
            data={[
              { name: 'name1', id: 1 },
              { name: 'name2', id: 2 },
              { name: 'name2', id: 3 },
              { name: 'name2', id: 4 },
              { name: 'name2', id: 5 },
              { name: 'name2', id: 6 },
            ]}
          />
        </WrapTitle>
      </Grid>
    </Grid>
  )
}
