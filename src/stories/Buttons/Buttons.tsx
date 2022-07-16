import { FC } from 'react'
import { Button } from 'lib'
import { Wrap } from '../Wrap/Wrap'

export const Buttons: FC = () => {
  return (
    <>
      <Wrap title={'square'}>
        <Button text={'Button'} fontSize={1} />
        <Button text={'Button'} fontSize={2} />
        <Button text={'Button'} fontSize={3} />
        <Button text={'Button'} fontSize={4} />
        <Button text={'Button'} fontSize={5} />
        <Button text={'Button'} fontSize={6} />
        <Button text={'Button'} fontSize={7} />
        <Button text={''} fontSize={7} />
      </Wrap>
      <Wrap title={'smooth'}>
        <Button text={'Button'} fontSize={1} type={'smooth'} />
        <Button text={'Button'} fontSize={2} type={'smooth'} />
        <Button text={'Button'} fontSize={3} type={'smooth'} />
        <Button text={'Button'} fontSize={4} type={'smooth'} />
        <Button text={'Button'} fontSize={5} type={'smooth'} />
        <Button text={'Button'} fontSize={6} type={'smooth'} />
        <Button text={'Button'} fontSize={7} type={'smooth'} />
        <Button text={''} fontSize={7} type={'smooth'} />
      </Wrap>
      <Wrap title={'circle'}>
        <Button text={'Button'} fontSize={1} type={'circle'} />
        <Button text={'Button'} fontSize={2} type={'circle'} />
        <Button text={'Button'} fontSize={3} type={'circle'} />
        <Button text={'Button'} fontSize={4} type={'circle'} />
        <Button text={'Button'} fontSize={5} type={'circle'} />
        <Button text={'Button'} fontSize={6} type={'circle'} />
        <Button text={'Button'} fontSize={7} type={'circle'} />
        <Button text={''} fontSize={7} type={'circle'} />
      </Wrap>
      <Wrap title={'link'}>
        <Button text={'Button'} fontSize={1} type={'link'} />
        <Button text={'Button'} fontSize={2} type={'link'} />
        <Button text={'Button'} fontSize={3} type={'link'} />
        <Button text={'Button'} fontSize={4} type={'link'} />
        <Button text={'Button'} fontSize={5} type={'link'} />
        <Button text={'Button'} fontSize={6} type={'link'} />
        <Button text={'Button'} fontSize={7} type={'link'} />
        <Button text={''} fontSize={7} type={'link'} />
      </Wrap>
      <Wrap title={'Status'}>
        <Button text={'Button'} fontSize={1} />
        <Button text={'Button'} fontSize={1} status={'hover'} />
        <Button text={'Button'} fontSize={1} isDisable />
        <Button text={'Button'} fontSize={1} status={'success'} />
        <Button text={'Button'} fontSize={1} status={'warning'} />
        <Button text={'Button'} fontSize={1} status={'danger'} />
      </Wrap>
      <Wrap title={'liquid'}>
        <Button text={'Button'} fontSize={1} liquid />
      </Wrap>
    </>
  )
}
