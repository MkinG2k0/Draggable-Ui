import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ExampleModal } from './ExampleModal'

export default {
  title: 'Example/Modal',
  component: ExampleModal,
} as ComponentMeta<typeof ExampleModal>

const Template: ComponentStory<typeof ExampleModal> = (args) => (
  <ExampleModal {...args} />
)

export const PreviewModal = Template.bind({})

PreviewModal.args = {}
