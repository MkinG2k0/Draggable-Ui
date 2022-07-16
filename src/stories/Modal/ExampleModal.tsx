import { FC, useState } from 'react'
import { Button, Modal } from 'lib'

export const ExampleModal: FC = () => {
  const [state, setState] = useState(false)
  console.log(state)
  return (
    <>
      <Button text={'Open Modal'} onClick={() => setState(true)} />
      <Modal open={state} onClose={() => setState(false)}>
        This Modal
      </Modal>
    </>
  )
}
